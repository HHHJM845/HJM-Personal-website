"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 120;

function framePath(frame: number) {
  return `/frames/arrival-frame-${String(frame).padStart(3, "0")}.jpg`;
}

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

export function ArrivalExperience() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(1);
  const rafRef = useRef<number | null>(null);
  const [loaded, setLoaded] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const openingOpacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.3],
    [1, 1, 0],
  );
  const roomOpacity = useTransform(
    scrollYProgress,
    [0.22, 0.34, 0.62],
    [0, 1, 1],
  );

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      wheelMultiplier: 0.8,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };

    rafRef.current = requestAnimationFrame(raf);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    imagesRef.current = [];

    for (let index = 1; index <= FRAME_COUNT; index += 1) {
      const image = new Image();
      image.src = framePath(index);
      image.onload = () => {
        if (cancelled) return;
        setLoaded((value) => value + 1);
      };
      imagesRef.current[index] = image;
    }

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const drawFrame = (frameNumber: number) => {
      const image = imagesRef.current[frameNumber];
      if (!image?.complete || !image.naturalWidth) return;

      const width = window.innerWidth;
      const height = window.innerHeight;
      const ratio = window.devicePixelRatio || 1;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      context.clearRect(0, 0, width, height);

      const isMobile = width < 768;
      const scale = isMobile
        ? Math.min(width / image.naturalWidth, height / image.naturalHeight)
        : Math.max(width / image.naturalWidth, height / image.naturalHeight);
      const drawWidth = image.naturalWidth * scale;
      const drawHeight = image.naturalHeight * scale;
      const x = (width - drawWidth) / 2;
      const y = isMobile
        ? Math.max((height - drawHeight) * 0.18, 18)
        : (height - drawHeight) / 2;
      context.drawImage(image, x, y, drawWidth, drawHeight);
    };

    const update = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const distance = section.offsetHeight - window.innerHeight;
      const nextProgress = clamp(-rect.top / Math.max(distance, 1));
      const nextFrame = Math.round(nextProgress * (FRAME_COUNT - 1)) + 1;

      if (nextFrame !== currentFrameRef.current) {
        currentFrameRef.current = nextFrame;
        drawFrame(nextFrame);
      }
    };

    const drawInitial = () => drawFrame(currentFrameRef.current);
    drawInitial();
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", drawInitial);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", drawInitial);
    };
  }, [loaded]);

  const loadingPercent = Math.round((loaded / FRAME_COUNT) * 100);

  return (
    <section
      ref={sectionRef}
      className="relative h-[290vh] bg-black md:h-[410vh]"
      id="arrival"
    >
      <div className="sticky top-0 h-dvh overflow-hidden bg-black">
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.18)_48%,rgba(0,0,0,0.74)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.62),transparent_30%,transparent_70%,rgba(0,0,0,0.58))]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-black via-black/70 to-transparent md:hidden" />

        {loaded < FRAME_COUNT && (
          <div className="absolute inset-0 z-30 grid place-items-center bg-black">
            <div className="crt-loader" aria-live="polite">
              <p className="crt-loader__text" data-text="Loading.... Please Wait">
                Loading.... Please Wait
              </p>
              <div
                className="crt-loader__bar"
                role="progressbar"
                aria-label="Loading identity sequence"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={loadingPercent}
              >
                <div
                  className="crt-loader__fill"
                  style={{ width: `${loadingPercent}%` }}
                />
              </div>
            </div>
          </div>
        )}

        <nav className="absolute left-4 right-4 top-3 z-20 flex items-center justify-between gap-4 md:left-8 md:right-8 md:top-4">
          <a className="noir-glass px-3 py-2 font-mono text-xs uppercase text-white/72" href="#arrival">
            HJM. // Archive
          </a>
          <div className="hidden items-center gap-2 md:flex">
            {[
              ["关于我", "identity"],
              ["项目", "projects"],
              ["方法论", "methodology"],
              ["能力", "capabilities"],
              ["经历", "experience"],
              ["联系我", "contact"],
            ].map(([item, href]) => (
              <a
                key={item}
                href={`#${href}`}
                className="noir-glass px-3 py-2 font-mono text-xs uppercase text-white/56 transition hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>

        <motion.div
          style={{ opacity: openingOpacity }}
          className="pointer-events-none absolute bottom-8 left-5 right-5 z-10 max-w-[24rem] md:bottom-28 md:left-10 md:right-auto md:max-w-[34rem]"
        >
          <p className="font-mono text-xs uppercase text-white/56">
            AI Product Manager // Subject Detected
          </p>
          <h1 className="mt-4 text-5xl font-semibold leading-none text-white sm:text-8xl">
            黄佳沐
            <br />
            HUANG JIAMU
          </h1>
          <p className="mt-6 max-w-md text-sm leading-6 text-white/72 sm:text-base">
            AI 工作流 · RAG · 机器视觉质检
            <span className="mt-2 block text-white/52">
              From model capability to measurable product workflow.
            </span>
          </p>
          <a
            className="btn btn-dark resume-download-btn arrival-resume-btn"
            download="黄佳沐_AI产品经理.pdf.pdf"
            href="/resume/黄佳沐_AI产品经理.pdf.pdf"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 19h14" />
            </svg>
            下载简历
          </a>
        </motion.div>

        <motion.div
          style={{ opacity: roomOpacity }}
          className="pointer-events-none absolute bottom-28 right-5 z-10 hidden max-w-[26rem] text-right md:block"
        >
          <p className="font-mono text-xs uppercase text-white/48">
            Phase 02 // Product Signal
          </p>
          <h2 className="mt-4 text-5xl font-semibold leading-none text-white">
            AI INTO
            <br />
            WORKFLOW
          </h2>
          <p className="mt-5 text-sm leading-6 text-white/64">
            从场景洞察、模型评测、快速原型到商业化落地。
          </p>
        </motion.div>

      </div>
    </section>
  );
}
