# 简历下载按钮实现计划

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 在个人网站首屏和联系区增加风格一致的简历下载按钮。

**Architecture:** 将简历 PDF 作为 Next.js `public` 目录中的静态资源提供。两个下载入口复用现有按钮样式，首屏入口仅增加必要的局部交互与布局样式。

**Tech Stack:** Next.js、React、TypeScript、CSS

---

### Task 1: 添加简历静态资源

**Files:**
- Create: `public/resume/黄佳沐-AI产品经理.pdf`

**Step 1:** 创建 `public/resume/` 并复制用户提供的 PDF。

**Step 2:** 检查目标文件存在且文件大小与源文件一致。

### Task 2: 添加两个下载入口

**Files:**
- Modify: `src/components/ArrivalExperience.tsx`
- Modify: `src/app/page.tsx`
- Modify: `src/app/globals.css`

**Step 1:** 在首屏介绍下方增加带 `download` 属性的“下载简历”按钮。

**Step 2:** 为首屏按钮增加局部样式，使其可点击并保持玻璃质感。

**Step 3:** 在联系区 CTA 中增加同一下载链接，复用现有按钮样式。

### Task 3: 验证

**Files:**
- Verify: `public/resume/黄佳沐-AI产品经理.pdf`
- Verify: `src/components/ArrivalExperience.tsx`
- Verify: `src/app/page.tsx`
- Verify: `src/app/globals.css`

**Step 1:** 运行 `npm run lint`。

**Step 2:** 运行 `npm run build`。

**Step 3:** 启动本地站点，在浏览器中检查桌面端与移动端布局，并确认两个下载入口属性正确。
