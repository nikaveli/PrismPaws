import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Shared scroll-reveal + grid stagger animations for every page.
 * Each page additionally calls its own hero/intro animations.
 * Returns nothing — uses gsap.context tied to a scoped root.
 */
export function useGsapPage(scopeRef, intro) {
  useLayoutEffect(() => {
    const root = scopeRef?.current || document.body;
    const ctx = gsap.context(() => {
      const setIfPresent = (sel, vars) => {
        const els = root.querySelectorAll(sel);
        if (els.length) gsap.set(els, vars);
      };
      setIfPresent('.gsap-up', { opacity: 0, y: 40 });
      setIfPresent('.gsap-down', { opacity: 0, y: -40 });
      setIfPresent('.gsap-left', { opacity: 0, x: -40 });
      setIfPresent('.gsap-right', { opacity: 0, x: 40 });
      setIfPresent('.gsap-scale', { opacity: 0, scale: 0.85 });
      setIfPresent('.gsap-fade', { opacity: 0 });

      // Generic reveals
      gsap.utils.toArray('.gsap-up').forEach((el) => {
        gsap.to(el, {
          opacity: 1, y: 0, duration: 0.85, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
        });
      });
      gsap.utils.toArray('.gsap-left').forEach((el) => {
        gsap.to(el, {
          opacity: 1, x: 0, duration: 0.85, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
        });
      });
      gsap.utils.toArray('.gsap-right').forEach((el) => {
        gsap.to(el, {
          opacity: 1, x: 0, duration: 0.85, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
        });
      });
      gsap.utils.toArray('.gsap-scale').forEach((el) => {
        gsap.to(el, {
          opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.6)',
          scrollTrigger: { trigger: el, start: 'top 88%' },
        });
      });
      gsap.utils.toArray('.gsap-fade').forEach((el) => {
        gsap.to(el, {
          opacity: 1, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 90%' },
        });
      });

      // Stagger groups
      const groups = [
        '.services-grid', '.bundles-grid', '.addon-grid',
        '.values-grid', '.collection-grid', '.test-row',
        '.feature-grid', '.stats-grid', '.svc-includes',
      ];
      groups.forEach((sel) => {
        const grid = root.querySelector(sel);
        if (!grid) return;
        gsap.from(grid.children, {
          opacity: 0, y: 40, duration: 0.7, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: grid, start: 'top 85%' },
        });
      });

      // Process timeline steps
      gsap.utils.toArray('.process-step').forEach((step) => {
        gsap.from(step, {
          opacity: 0, y: 60, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: step, start: 'top 85%' },
        });
      });

      // Number counters
      gsap.utils.toArray('[data-count]').forEach((el) => {
        const end = parseFloat(el.dataset.count);
        const decimals = parseInt(el.dataset.decimals || '0', 10);
        const obj = { val: 0 };
        gsap.to(obj, {
          val: end, duration: 1.8, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 90%' },
          onUpdate: () => {
            el.textContent = decimals
              ? obj.val.toFixed(decimals)
              : Math.round(obj.val).toLocaleString();
          },
        });
      });

      // Floating loops
      gsap.utils.toArray('.floating-paw').forEach((el, i) => {
        gsap.to(el, {
          y: -16 + (i % 2 === 0 ? 0 : 8),
          rotate: i % 2 === 0 ? 8 : -8,
          repeat: -1, yoyo: true,
          duration: 3 + (i * 0.3),
          ease: 'sine.inOut',
          delay: i * 0.2,
        });
      });
      gsap.utils.toArray('.hero-orbit-bone').forEach((el) => {
        gsap.to(el, { y: -14, repeat: -1, yoyo: true, duration: 2.2, ease: 'sine.inOut' });
      });
      gsap.utils.toArray('.hero-orbit-badge').forEach((el) => {
        gsap.to(el, { rotate: 6, repeat: -1, yoyo: true, duration: 3.5, ease: 'sine.inOut' });
      });
      gsap.utils.toArray('.hero-mini-card').forEach((el) => {
        gsap.to(el, { y: -10, repeat: -1, yoyo: true, duration: 2.6, ease: 'sine.inOut' });
      });

      // Page-specific intro callback
      if (typeof intro === 'function') intro();

      // ensure positions calculate correctly once images load
      requestAnimationFrame(() => ScrollTrigger.refresh());
    }, scopeRef || undefined);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
