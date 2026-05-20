import { useEffect, useRef, useState } from 'react';

/**
 * HeroVideoLoop
 *
 * Crossfades between two <video> elements playing the same source so the loop
 * point is seamless. Exactly ONE crossfade per cycle.
 *
 * Anti-flash strategy:
 *  - We DO NOT use the native `loop` attribute (it restarts instantly = a visible jump).
 *  - On mount we PRE-WARM the second video by briefly playing+pausing it so the
 *    decoder is primed; without this the first crossfade can flash a black frame
 *    while the browser starts decoding.
 *  - When the active video enters the last `crossfadeSeconds` of its duration:
 *      1. Reset the hidden video to t=0 and call play()
 *      2. Wait for the FIRST actual rendered frame (via requestVideoFrameCallback,
 *         falling back to a small rAF delay) BEFORE flipping `active` — this is
 *         what kills the flash. The opacity transition then starts on a frame
 *         that's already painted.
 *      3. The previous active video continues playing through its tail and
 *         pauses on `ended`. CSS handles the visual crossfade.
 *  - `triggered` ref guards against firing more than once per loop cycle.
 */
export default function HeroVideoLoop({
  src,
  poster = '/assets/images/blue_eye_dog.png',
  crossfadeSeconds = 1.4,
  // How far before the loop point the crossfade should COMPLETE. The fade
  // ends `tailSeconds` before the active video reaches its end, then the
  // active video keeps playing invisibly through its tail. This is what
  // hides the content discontinuity at the loop boundary — neither the
  // active video's last frames nor the next video's first frames are seen
  // through anything other than full or zero opacity.
  tailSeconds = 0.8,
  // How far into the new video to wait before it becomes visible. Lets the
  // new video skip past its (possibly different-looking) first frames so the
  // fade-in lands on frames that match motion already in progress.
  startOffset = 0.6,
  className = '',
}) {
  const videoA = useRef(null);
  const videoB = useRef(null);
  const triggered = useRef(false);
  const activeRef = useRef('A');
  const [active, setActive] = useState('A');

  // Keep ref in sync; release trigger guard after the crossfade completes.
  useEffect(() => {
    activeRef.current = active;
    const t = setTimeout(() => {
      triggered.current = false;
    }, (crossfadeSeconds + 0.1) * 1000);
    return () => clearTimeout(t);
  }, [active, crossfadeSeconds]);

  // Mount-only: initial play + pre-warm B + bind listeners.
  useEffect(() => {
    const a = videoA.current;
    const b = videoB.current;
    if (!a || !b) return;

    let cancelled = false;

    // Start A
    a.play().catch(() => {});

    // Pre-warm B: briefly play it (muted) and pause once it has rendered a
    // frame. After this, B's decoder is hot and the first crossfade won't flash.
    const primeB = async () => {
      try {
        b.muted = true; // belt-and-braces; markup already sets it
        await b.play();
        // Wait for a frame, then pause and rewind.
        await new Promise((res) => {
          if ('requestVideoFrameCallback' in b) {
            b.requestVideoFrameCallback(() => res());
          } else {
            requestAnimationFrame(() => requestAnimationFrame(res));
          }
        });
        if (cancelled) return;
        b.pause();
        b.currentTime = startOffset;
      } catch {
        // play() can reject if user hasn't interacted yet; still set time.
        b.pause();
        b.currentTime = startOffset;
      }
    };
    primeB();

    const waitForFrame = (vid) =>
      new Promise((res) => {
        if ('requestVideoFrameCallback' in vid) {
          vid.requestVideoFrameCallback(() => res());
        } else {
          // Fallback: two rAFs ~= one painted frame
          requestAnimationFrame(() => requestAnimationFrame(res));
        }
      });

    const onTimeUpdate = async (e) => {
      const v = e.target;
      const dur = v.duration;
      if (!isFinite(dur) || dur <= 0) return;

      const isActive =
        (activeRef.current === 'A' && v === a) ||
        (activeRef.current === 'B' && v === b);
      if (!isActive) return;

      // Trigger so the fade COMPLETES `tailSeconds` before the active video
      // reaches its end. After fade completes, the active video keeps playing
      // invisibly through its tail and onEnded pauses it. The viewer never
      // sees the loop boundary because by then both videos are at 0/full
      // opacity respectively — no blend of "end scene" + "start scene".
      const triggerThreshold = crossfadeSeconds + tailSeconds;
      if (dur - v.currentTime <= triggerThreshold && !triggered.current) {
        triggered.current = true;
        const next = activeRef.current === 'A' ? b : a;
        next.currentTime = startOffset;
        try {
          await next.play();
        } catch {
          /* ignore — play may reject if browser is being strict */
        }
        // Wait for the new video to actually present a frame before fading.
        await waitForFrame(next);
        if (cancelled) return;
        setActive((cur) => (cur === 'A' ? 'B' : 'A'));
      }
    };

    const onEnded = (e) => {
      e.target.pause();
    };

    a.addEventListener('timeupdate', onTimeUpdate);
    b.addEventListener('timeupdate', onTimeUpdate);
    a.addEventListener('ended', onEnded);
    b.addEventListener('ended', onEnded);

    return () => {
      cancelled = true;
      a.removeEventListener('timeupdate', onTimeUpdate);
      b.removeEventListener('timeupdate', onTimeUpdate);
      a.removeEventListener('ended', onEnded);
      b.removeEventListener('ended', onEnded);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fadeStyle = {
    transition: `opacity ${crossfadeSeconds}s ease-in-out`,
  };

  return (
    <>
      <video
        ref={videoA}
        className={`hero-bg-video ${className}`}
        style={{ ...fadeStyle, opacity: active === 'A' ? 1 : 0 }}
        muted
        playsInline
        preload="auto"
        poster={poster}
        src={src}
      />
      <video
        ref={videoB}
        className={`hero-bg-video ${className}`}
        style={{ ...fadeStyle, opacity: active === 'B' ? 1 : 0 }}
        muted
        playsInline
        preload="auto"
        src={src}
      />
    </>
  );
}
