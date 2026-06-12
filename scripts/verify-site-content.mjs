import { access, readFile } from "node:fs/promises";

const checks = [];

async function fileContains(path, snippets) {
  const content = await readFile(path, "utf8");
  for (const snippet of snippets) {
    checks.push({
      ok: content.includes(snippet),
      message: `${path} contains "${snippet}"`,
    });
  }
}

async function fileExists(path) {
  try {
    await access(path);
    checks.push({ ok: true, message: `${path} exists` });
  } catch {
    checks.push({ ok: false, message: `${path} exists` });
  }
}

await fileContains("src/app/page.tsx", [
  "AI 工作流 · RAG · 机器视觉质检",
  "3 年 AI 产品与数字化产品实践经验",
  "AI 视觉质检系统",
  "漏检率 10%→2%",
  "5 类 14 项",
  "2025.09 - 2026.05",
  "/resume/黄佳沐_AI产品经理.pdf.pdf",
]);

await fileContains("src/app/layout.tsx", [
  "黄佳沐 // AI Product Manager",
  "AI 工作流、RAG、机器视觉质检",
]);

await fileContains("src/components/ArrivalExperience.tsx", [
  "AI 工作流 · RAG · 机器视觉质检",
  "/resume/黄佳沐_AI产品经理.pdf.pdf",
]);

await fileExists("public/resume/黄佳沐_AI产品经理.pdf.pdf");

const failed = checks.filter((check) => !check.ok);

for (const check of checks) {
  console.log(`${check.ok ? "PASS" : "FAIL"} ${check.message}`);
}

if (failed.length > 0) {
  process.exitCode = 1;
}
