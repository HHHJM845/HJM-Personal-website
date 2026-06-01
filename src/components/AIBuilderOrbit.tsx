"use client";

import type { CSSProperties } from "react";

type Tool = {
  name: string;
  href: string;
  icon: string;
  x: number;
  y: number;
  size: number;
  mx: number;
  my: number;
  msize: number;
  duration: number;
  delay: number;
  glow: string;
  invert?: boolean;
};

const TOOLS: Tool[] = [
  { name: "NotebookLM", href: "https://notebooklm.google/", icon: "notebooklm.svg", x: 20, y: 36, size: 62, mx: 15, my: 32, msize: 44, duration: 4.7, delay: 0.05, glow: "rgba(255,255,255,0.40)", invert: true },
  { name: "VS Code", href: "https://code.visualstudio.com/", icon: "vscode.svg", x: 39, y: 24, size: 58, mx: 33, my: 16, msize: 44, duration: 5.1, delay: 0.15, glow: "rgba(0,122,204,0.40)" },
  { name: "Cursor", href: "https://www.cursor.com/", icon: "cursor.svg", x: 58, y: 18, size: 62, mx: 52, my: 11, msize: 48, duration: 5.4, delay: 0.25, glow: "rgba(255,255,255,0.40)", invert: true },
  { name: "Antigravity", href: "https://www.antigravity.google/", icon: "antigravity.svg", x: 77, y: 30, size: 60, mx: 70, my: 32, msize: 40, duration: 4.9, delay: 0.35, glow: "rgba(139,124,255,0.40)" },
  { name: "MiniMax", href: "https://www.minimax.io/", icon: "minimax.svg", x: 88, y: 48, size: 58, mx: 91, my: 42, msize: 42, duration: 5.6, delay: 0.45, glow: "rgba(118,207,255,0.40)" },
  { name: "Claude", href: "https://claude.ai/", icon: "claude.svg", x: 82, y: 68, size: 66, mx: 88, my: 68, msize: 48, duration: 5.0, delay: 0.65, glow: "rgba(233,111,61,0.40)" },
  { name: "Codex", href: "https://openai.com/codex/", icon: "codex.svg", x: 69, y: 80, size: 64, mx: 69, my: 88, msize: 48, duration: 5.4, delay: 0.75, glow: "rgba(115,133,255,0.40)" },
  { name: "OpenClaw", href: "https://openclaw.ai/", icon: "openclaw.svg", x: 22, y: 68, size: 58, mx: 10, my: 58, msize: 42, duration: 5.5, delay: 0.85, glow: "rgba(240,68,68,0.40)" },
  { name: "DeepSeek", href: "https://www.deepseek.com/en", icon: "deepseek.svg", x: 39, y: 52, size: 56, mx: 29, my: 49, msize: 38, duration: 5.2, delay: 0.40, glow: "rgba(47,123,255,0.40)" },
  { name: "Kimi", href: "https://www.kimi.com/", icon: "kimi.svg", x: 30, y: 82, size: 52, mx: 28, my: 69, msize: 38, duration: 5.7, delay: 0.50, glow: "rgba(124,109,255,0.40)" },
  { name: "Hermes", href: "https://nousresearch.com/", icon: "hermes.svg", x: 49, y: 74, size: 52, mx: 51, my: 74, msize: 36, duration: 5.3, delay: 0.70, glow: "rgba(217,164,65,0.40)", invert: true },
  { name: "ChatGPT", href: "https://chatgpt.com/", icon: "chatgpt.svg", x: 45, y: 35, size: 48, mx: 42, my: 31, msize: 34, duration: 5.5, delay: 0.90, glow: "rgba(255,255,255,0.40)", invert: true },
  { name: "Gemini", href: "https://gemini.google.com/", icon: "gemini.svg", x: 34, y: 70, size: 44, mx: 39, my: 62, msize: 32, duration: 5.8, delay: 0.95, glow: "rgba(139,124,255,0.40)" },
  { name: "Midjourney", href: "https://www.midjourney.com/", icon: "midjourney.svg", x: 73, y: 56, size: 48, mx: 70, my: 58, msize: 36, duration: 5.6, delay: 1.10, glow: "rgba(255,255,255,0.40)", invert: true },
  { name: "Runway", href: "https://runwayml.com/", icon: "runway.svg", x: 57, y: 87, size: 46, mx: 44, my: 91, msize: 38, duration: 5.2, delay: 1.15, glow: "rgba(255,255,255,0.40)", invert: true },
  { name: "Perplexity", href: "https://www.perplexity.ai/", icon: "perplexity.svg", x: 88, y: 24, size: 42, mx: 79, my: 18, msize: 36, duration: 5.4, delay: 1.00, glow: "rgba(32,184,205,0.40)" },
  { name: "Copilot", href: "https://github.com/features/copilot", icon: "copilot.svg", x: 16, y: 82, size: 46, mx: 16, my: 81, msize: 38, duration: 5.1, delay: 1.05, glow: "rgba(216,228,255,0.40)", invert: true },
];

export function AIBuilderOrbit() {
  return (
    <div className="orbit-cloud" aria-label="AI tools in my workflow">
      <div className="orbit-ring orbit-ring--outer" aria-hidden="true" />
      <div className="orbit-ring orbit-ring--inner" aria-hidden="true" />

      <div className="orbit-core" aria-hidden="true">
        <span>HJM</span>
        <span>AI Stack</span>
      </div>

      {TOOLS.map((tool) => {
        const style = {
          "--x": `${tool.x}%`,
          "--y": `${tool.y}%`,
          "--s": `${tool.size}px`,
          "--mx": `${tool.mx}%`,
          "--my": `${tool.my}%`,
          "--ms": `${tool.msize}px`,
          "--d": `${tool.duration}s`,
          "--delay": `${tool.delay}s`,
          "--glow": tool.glow,
        } as CSSProperties;

        return (
          <a
            key={tool.name}
            href={tool.href}
            target="_blank"
            rel="noreferrer"
            data-label={tool.name}
            aria-label={`Open ${tool.name} homepage`}
            className={`tool-badge${tool.invert ? " tool-badge--invert" : ""}`}
            style={style}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/ai-icons/${tool.icon}`} alt={tool.name} />
          </a>
        );
      })}
    </div>
  );
}
