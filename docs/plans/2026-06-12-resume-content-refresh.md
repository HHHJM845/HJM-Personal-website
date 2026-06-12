# Resume Content Refresh Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 同步新版简历中的个人网站信息，并更新站内简历下载资源。

**Architecture:** 这是一个 Next.js 单页个人网站。实现上只修改首页内容、metadata、简历静态资源和一个轻量内容校验脚本，不重构组件与样式系统。

**Tech Stack:** Next.js 16、React 19、TypeScript、ESLint、Node.js。

---

### Task 1: 内容校验

**Files:**
- Create: `scripts/verify-site-content.mjs`
- Modify: `package.json`

**Step 1: Write the failing test**

新增 Node 脚本读取 `src/app/page.tsx`、`src/app/layout.tsx` 和 `public/resume/黄佳沐_AI产品经理.pdf.pdf`，校验新版定位、机器视觉质检项目、关键指标与新版简历链接。

**Step 2: Run test to verify it fails**

Run: `npm run verify:content`

Expected: FAIL，因为页面尚未同步新版内容。

### Task 2: 首页与简历同步

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/app/layout.tsx`
- Create: `public/resume/黄佳沐_AI产品经理.pdf.pdf`

**Step 1: Implement content update**

从新版简历同步 About、stats、projects、skills、experience、contact CTA 和 metadata。

**Step 2: Run verification**

Run: `npm run verify:content`

Expected: PASS。

### Task 3: 项目验证与发布

**Files:**
- No new files.

**Step 1: Run lint**

Run: `npm run lint`

Expected: exit 0。

**Step 2: Run production build**

Run: `npm run build`

Expected: exit 0。

**Step 3: Commit and push**

Run: `git add ... && git commit -m "feat: refresh personal website content" && git push origin <branch>`

Expected: commit and push succeed.
