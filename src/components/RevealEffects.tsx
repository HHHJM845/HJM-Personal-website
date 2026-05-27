"use client";

import { useEffect } from "react";

function easeOutCubic(value: number) {
  return 1 - Math.pow(1 - value, 3);
}

export function RevealEffects() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealItems = document.querySelectorAll<HTMLElement>(
      ".reveal, .reveal-left, .reveal-pop",
    );

    if (reducedMotion) {
      revealItems.forEach((item) => item.classList.add("in"));
      document.querySelectorAll<HTMLElement>("[data-count-target]").forEach((item) => {
        item.textContent = `${item.dataset.countTarget ?? ""}${item.dataset.countSuffix ?? ""}`;
      });
      return;
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -32px 0px" },
    );

    revealItems.forEach((item) => revealObserver.observe(item));

    const runCountUp = (item: HTMLElement) => {
      if (item.dataset.countDone === "true") return;
      item.dataset.countDone = "true";
      const target = Number(item.dataset.countTarget ?? 0);
      const suffix = item.dataset.countSuffix ?? "";
      const duration = 1100;
      const start = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        item.textContent = `${Math.round(easeOutCubic(progress) * target)}${suffix}`;
        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    };

    const numberObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target
            .querySelectorAll<HTMLElement>("[data-count-target]")
            .forEach(runCountUp);
          numberObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.45 },
    );

    document
      .querySelectorAll<HTMLElement>("[data-count-scope]")
      .forEach((item) => numberObserver.observe(item));

    const triggerBars = (container: Element) => {
      container
        .querySelectorAll<HTMLElement>(".js-bar, .pm-fill")
        .forEach((bar) => {
          if (bar.dataset.barDone === "true") return;
          bar.dataset.barDone = "true";
          bar.style.width = bar.dataset.w ?? "0%";
        });
    };

    const barObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          triggerBars(entry.target);
          barObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.3 },
    );

    document
      .querySelectorAll<HTMLElement>(".pcard")
      .forEach((item) => barObserver.observe(item));

    const triggerPassedElements = () => {
      document.querySelectorAll<HTMLElement>("[data-count-scope]").forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.95) {
          item.querySelectorAll<HTMLElement>("[data-count-target]").forEach(runCountUp);
        }
      });

      document.querySelectorAll<HTMLElement>(".pcard").forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.95) triggerBars(item);
      });
    };

    window.addEventListener("scroll", triggerPassedElements, { passive: true });
    window.setTimeout(triggerPassedElements, 500);

    const isTouch = window.matchMedia("(hover: none)").matches;
    const cleanups: Array<() => void> = [];

    if (!isTouch) {
      document.querySelectorAll<HTMLElement>(".pcard").forEach((card) => {
        const onMove = (event: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const x = event.clientX - rect.left;
          const y = event.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateY = ((x - centerX) / centerX) * 5;
          const rotateX = -((y - centerY) / centerY) * 3;

          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
          card.style.setProperty("--mx", `${x}px`);
          card.style.setProperty("--my", `${y}px`);
        };
        const onLeave = () => {
          card.style.transform = "";
        };

        card.addEventListener("mousemove", onMove);
        card.addEventListener("mouseleave", onLeave);
        cleanups.push(() => {
          card.removeEventListener("mousemove", onMove);
          card.removeEventListener("mouseleave", onLeave);
        });
      });

      document.querySelectorAll<HTMLElement>(".sg").forEach((cell) => {
        const onMove = (event: MouseEvent) => {
          const rect = cell.getBoundingClientRect();
          cell.style.setProperty("--mx", `${event.clientX - rect.left}px`);
          cell.style.setProperty("--my", `${event.clientY - rect.top}px`);
        };

        cell.addEventListener("mousemove", onMove);
        cleanups.push(() => cell.removeEventListener("mousemove", onMove));
      });
    }

    return () => {
      revealObserver.disconnect();
      numberObserver.disconnect();
      barObserver.disconnect();
      window.removeEventListener("scroll", triggerPassedElements);
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return null;
}
