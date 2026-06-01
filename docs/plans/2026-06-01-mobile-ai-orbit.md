# 手机端 AI 工具轨道卡片优化实现计划

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 为手机端提供专用 AI 工具轨道排布，保留全部 17 个图标并改善视觉均衡。

**Architecture:** 在工具配置中增加手机端坐标与尺寸 CSS 变量。桌面端继续使用现有变量，手机端通过媒体查询切换到专用变量，并调整卡片与中心标识尺寸。

**Tech Stack:** Next.js、React、TypeScript、CSS

---

### Task 1: 增加手机端工具排布数据

**Files:**
- Modify: `src/components/AIBuilderOrbit.tsx`

**Step 1:** 为每个工具增加手机端 `mx`、`my`、`msize` 配置。

**Step 2:** 将配置映射为 `--mx`、`--my`、`--ms` CSS 变量。

### Task 2: 增加手机端专用样式

**Files:**
- Modify: `src/app/globals.css`

**Step 1:** 在手机端媒体查询中调整轨道卡片尺寸、中心标识与圆环尺寸。

**Step 2:** 将工具图标位置和大小切换为手机端 CSS 变量。

### Task 3: 验证并发布

**Files:**
- Verify: `src/components/AIBuilderOrbit.tsx`
- Verify: `src/app/globals.css`

**Step 1:** 运行 `npm run lint`。

**Step 2:** 运行 `npm run build`。

**Step 3:** 使用桌面与手机视口截图检查排布。

**Step 4:** 合并并推送到 `origin/main`。
