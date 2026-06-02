# AI 内容创作平台 Showreel 实施计划

> **执行要求：** 使用 `superpowers:executing-plans` 按任务逐项实施。

**目标：** 在重点项目卡片中加入可直接播放的 AI 内容创作平台 Showreel。

**架构：** 将视频作为 Next.js `public/media/` 下的静态资源，在第一张重点项目卡片右侧信息列加入原生 `<video>` 播放器。通过现有 CSS 设计变量复用玻璃质感、边框和圆角，并使用单独的响应式规则适配移动端。

**技术栈：** Next.js、React、TypeScript、CSS、HTML5 Video

---

### Task 1: 添加静态视频素材

**Files:**
- Create: `public/media/ai-content-platform-showreel.mp4`

**Step 1:** 将 `C:/Users/Administrator/Desktop/hhhjm.mp4` 复制到站内媒体目录。

**Step 2:** 检查文件存在且大小一致。

### Task 2: 添加内嵌 Showreel

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/app/globals.css`

**Step 1:** 在重点项目卡片右侧信息列底部增加 `PRODUCT SHOWREEL // 00:43` 标签和原生视频播放器。

**Step 2:** 为视频容器增加 16:9 比例、圆角、边框、深色半透明背景和内阴影。

**Step 3:** 在移动端减少视频区域外层间距。

### Task 3: 验证

**Step 1:** 运行 `npm run lint`。

**Step 2:** 运行 `npm run build`。

**Step 3:** 使用浏览器检查桌面端和移动端布局，并确认播放器控件存在、未自动播放。
