import { AIBuilderOrbit } from "@/components/AIBuilderOrbit";
import { ArrivalExperience } from "@/components/ArrivalExperience";
import { RevealEffects } from "@/components/RevealEffects";

const stats = [
  ["3", "年", "AI 产品", "实践经验"],
  ["80", "%", "视觉质检", "漏检率下降"],
  ["92", "%", "RAG Prompt", "核心召回率"],
  ["78", "%", "AI 建议", "采纳率"],
  ["500", "+", "销售人员", "覆盖"],
  ["5", "类", "金条缺陷", "体系"],
];

const tags = [
  "RAG",
  "Agentic RAG",
  "Prompt Engineering",
  "Context Engineering",
  "LLM",
  "AI Evaluation",
  "Model Selection",
  "Machine Vision",
  "HITL",
  "Bad Case",
  "Claude Code",
  "Codex",
  "AI-assisted Prototyping",
  "PMF",
  "AIGC",
  "MVP",
];

const methodology = [
  ["01", "场景定义", "从真实用户工作流与产线现场拆解功能空白，把模糊反馈还原为可评估、可排期、可验证的具体场景成本。"],
  ["02", "策略 / 评测 / 迭代", "围绕检索质量、生成效果、合规边界和用户反馈定义评测口径，并用 Bad Case 归因持续推动产品迭代。"],
  ["03", "人机协同", "明确 AI 能力边界，通过 HITL、置信度分级、人工复核与一键采纳机制，让 AI 可控地进入业务流程。"],
];

const skills = [
  [
    "01",
    "AI 产品设计",
    [
      "AI 工作流",
      "RAG",
      "Agentic RAG",
      "Prompt Engineering",
      "Context Engineering",
      "机器视觉质检",
      "AI Evaluation",
    ],
  ],
  ["02", "用户场景与商业化", ["用户访谈", "产线驻场", "竞品分析", "真实流程识别痛点", "试用转化", "PMF 早期信号"]],
  ["03", "数据评测", ["准确率 / 召回率 / 采纳率", "评估集建设", "Bad Case 归因", "合规校验策略", "置信度分级"]],
  ["04", "工具原型", ["Claude Code", "Codex", "Figma", "Axure", "墨刀", "飞书", "Notion"]],
];

const experience = [
  ["2025.09 - 2026.05", "深圳跃然像素科技", "产品经理 · AI 内容工具研发初创公司"],
  ["2024.07 - 2025.09", "深圳华禧文化", "产品经理 · 黄金 ToB 批发数字化与 AI 赋能"],
  ["2023.02 - 2023.12", "网易有道", "产品助理实习生 · RAG 语料治理 / 评估集建设 / Prompt 调优"],
  ["2020.09 - 2024.06", "广州美术学院", "影视摄影与制作 · 本科"],
];

function ExternalIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="11"
      viewBox="0 0 12 12"
      width="11"
    >
      <path d="M2 10L10 2M4 2h6v6" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <RevealEffects />
      <ArrivalExperience />

      <div className="content-motion-bg">
        <video
          aria-hidden="true"
          autoPlay
          className="content-motion-bg__video"
          loop
          muted
          playsInline
          preload="metadata"
          src="/media/abstract-noir-background.mp4"
        />
        <div className="content-motion-bg__veil" />

        <section id="stats">
          <div className="stats-wrap">
            <div className="stats-grid">
              {stats.map(([target, suffix, lineA, lineB], index) => (
                <div
                  className={`stat-cell reveal-pop d${(index % 6) + 1}`}
                  data-count-scope
                  key={`${lineA}-${lineB}`}
                >
                  <div className="stat-num">
                    <span data-count-target={target} data-count-suffix={suffix}>
                      0{suffix}
                    </span>
                  </div>
                  <div className="stat-lbl">
                    {lineA}
                    <br />
                    {lineB}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sec" id="identity">
        <div className="wrap">
          <div className="about-grid about-grid--with-orbit">
            <div className="about-text">
              <div className="sec-tag reveal-left">About</div>
              <h2 className="about-quote reveal d1">
                我擅长把 AI
                <i>从「能力」</i>
                变成「产品」。
              </h2>
              <p className="about-body reveal d2">
                我是一名 <strong>AI 产品经理</strong>
                ，拥有 3 年 AI 产品与数字化产品实践经验，覆盖 AI 工作流 · RAG · 机器视觉质检等场景。
                我擅长从真实业务流程中定位高成本节点，把模型能力拆成可评估、可协作、可落地的产品链路，
                并通过 HITL、人机协同、评测体系、Bad Case 归因和快速原型推动方案进入真实业务。
              </p>
              <div className="tag-row reveal d3">
                {tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="about-visual reveal d2">
              <AIBuilderOrbit />
            </div>
          </div>
        </div>
        </section>

        <section className="sec sec-panel" id="projects">
        <div className="wrap">
          <div className="sec-tag reveal-left">Projects</div>
          <h2 className="sec-h reveal d1">精选项目</h2>

          <div className="proj-grid">
            <article className="pcard pcard-featured reveal">
              <div>
                <a
                  className="pcard-link-hint pcard-link-hint--featured"
                  href="http://122.152.224.125:3001/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <ExternalIcon />
                  点击查看 Demo
                </a>
                <div className="ptag">AI Workflow · HITL Review · Context Engineering</div>
                <h3 className="ptitle">AI 内容创作协作平台</h3>
                <p className="psub">
                  面向影视 / 内容创作团队，将产品定位从单点生成工具升级为可管理的 AI 创作协作平台。
                </p>
                <ul className="phigh">
                  <li>调研 9 个主流 AIGC 工具并访谈多家创作团队，识别脚本拆分镜、Prompt 复用、版本管理与甲方审片断裂等真实成本</li>
                  <li>将剧本解析、Prompt 生成、图 / 视频生成、批注审阅拆为可协作任务模块，设计「生成 - 审阅 - 优化 - 再生成」闭环</li>
                  <li>从生成质量、风格适配、Prompt 响应、速度、API 稳定性、并发能力评估 Kling、Seedance、Vidu、Nano Banana、即梦等模型</li>
                  <li>设计 RAG Prompt 经验库的入库规则、质量权重、排序机制与三层检索链路，核心测评集召回率达 92%</li>
                  <li>推动甲方免注册批注与 AI 优化建议一键应用；参与「订阅 + 积分」定价，完成 8 家付费客户签约，5 家进入第二周期续费</li>
                  <li>辅助增量作品入围海南岛国际电影节 AI 电影季、北京国际电影节 AIGC 电影单元，并获海螺 AI × WAIFF 最佳叙事奖</li>
                </ul>
              </div>
              <div>
                <div className="pmetrics">
                  {[
                    ["RAG Recall Accuracy", "92%", "92%"],
                    ["AI Suggestion Adoption", "78%", "78%"],
                    ["Renewal Customers", "5", "62%"],
                  ].map(([name, value, width]) => (
                    <div className="pm-row" key={name}>
                      <div className="pm-top">
                        <span className="pm-name">{name}</span>
                        <span className="pm-val">{value}</span>
                      </div>
                      <div className="pm-bar">
                        <div className="pm-fill js-bar" data-w={width} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="stages-box">
                  <div className="stages-label">Workflow Stages</div>
                  <div className="stages-pills">
                    {["Script Parse", "Prompt Gen", "HITL Review", "Model Eval", "AI Review", "3D Stage"].map((stage) => (
                      <span className="stage-pill" key={stage}>
                        {stage}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="showreel">
                  <div className="showreel-label">Product Showreel // 00:43</div>
                  <div className="showreel-frame">
                    <video
                      className="showreel-video"
                      controls
                      playsInline
                      preload="metadata"
                      src="/media/ai-content-platform-showreel.mp4"
                    />
                  </div>
                </div>
              </div>
            </article>

            <article className="pcard reveal d1">
              <div className="ptag">Machine Vision · HITL · 质量追溯 · 产线试点</div>
              <h3 className="ptitle">AI 视觉质检系统</h3>
              <p className="psub">
                面向标准矩形压制金条试点产线，设计「AI 初筛 + 人工复核 + 数据追溯」的人机协同质检系统。
              </p>
              <ul className="phigh">
                <li>驻线 3 周梳理包装前裸条检测、人工复核、包装后复核三段流程，确认 AI 初筛与人工终判边界</li>
                <li>将金条问题拆为外观缺陷、边角缺陷、标识 / OCR、包装匹配、追溯异常 5 类 14 项，建立缺陷定义、样本标注与置信度分级标准</li>
                <li>对错 SKU、编号 / 证书错配、严重崩边等致命问题设置硬规则强拦截，疑似件进入人工复核队列</li>
                <li>定义工单、SKU、批次、编号、原图 / 结果图、AI 结果、人工结论、模型版本等留痕字段与 MES / QMS 回传规则</li>
                <li>围绕金面高反光浅划痕、包装膜反光、误报积压等边界场景，协同算法与设备侧优化成像方案、阈值和复检规则</li>
              </ul>
              <div className="pstats">
                <div className="ps-item">
                  <div className="ps-num">80%</div>
                  <div className="ps-lbl">漏检率 10%→2%</div>
                </div>
                <div className="ps-item">
                  <div className="ps-num">40%</div>
                  <div className="ps-lbl">质检效率提升</div>
                </div>
                <div className="ps-item">
                  <div className="ps-num">85%</div>
                  <div className="ps-lbl">初筛准确率</div>
                </div>
              </div>
            </article>

            <article className="pcard reveal d2">
              <div className="ptag">RAG 产品策略 · 对话状态机 · AI Eval · 合规校验</div>
              <h3 className="ptitle">RAG 智能客服与销售培训系统</h3>
              <p className="psub">
                面向黄金 ToB 批发的私域咨询和新人培养，搭建共用知识库的 RAG 智能客服 + 销售培训助手。
              </p>
              <ul className="phigh">
                <li>将需求拆成 RAG 智能客服和销售培训助手两条链路：客服侧覆盖产品咨询、辅助报价、异议处理和转人工，培训侧提供 Persona 模拟、Rubric 评分和错题本沉淀</li>
                <li>定义意图识别、检索召回、答案生成、合规校验、转人工判断等产品策略节点，降低错答、越界回复和高风险场景硬答</li>
                <li>将知识拆为产品知识、政策合规、实时行情、话术库、Persona 库，并用结构化字段校验与合规规则拦截红线话术</li>
                <li>用需求识别、产品推荐、异议处理、报价确认、合规确认 / 转人工等状态约束多轮回复目标、追问策略和边界</li>
                <li>设计 120 题分场景评估集，按产品知识、报价、推荐、异议处理、合规边界等维度评分并推动 Bad Case 归因迭代</li>
              </ul>
              <div className="pstats">
                <div className="ps-item">
                  <div className="ps-num">500+</div>
                  <div className="ps-lbl">销售人员覆盖</div>
                </div>
                <div className="ps-item">
                  <div className="ps-num">95%</div>
                  <div className="ps-lbl">专业问答准确率</div>
                </div>
                <div className="ps-item">
                  <div className="ps-num">15%</div>
                  <div className="ps-lbl">展厅转化提升</div>
                </div>
              </div>
            </article>

            <article className="pcard reveal d3">
              <div className="ptag">教育 RAG · 语料治理 · Prompt 调优 · 产品测试</div>
              <h3 className="ptitle">网易有道教育 RAG 语料治理</h3>
              <p className="psub">
                面向智慧教育长文档问答场景，参与 RAG 语料治理、召回评估、Prompt 调优与早期产品测试。
              </p>
              <ul className="phigh">
                <li>整理 1000+ 条 PDF 教材与翻译文档语料，围绕语义完整性、版面解析、跨段落召回构建错误 taxonomy</li>
                <li>辅助算法组定位复杂排版下的检索与解析失败问题，沉淀结构化错误归因与优化建议</li>
                <li>围绕切题性、语气适配、指令遵循做盲测评分，构建约 80 条学生口语化提问引导语库</li>
                <li>对 QAnything 早期内测长文档分块和追问引导问题输出结构化 Bug 清单</li>
              </ul>
              <div className="pstats">
                <div className="ps-item">
                  <div className="ps-num">1000+</div>
                  <div className="ps-lbl">语料整理</div>
                </div>
                <div className="ps-item">
                  <div className="ps-num">80</div>
                  <div className="ps-lbl">口语化提问库</div>
                </div>
                <div className="ps-item">
                  <div className="ps-num">QAnything</div>
                  <div className="ps-lbl">早期内测反馈</div>
                </div>
              </div>
            </article>
          </div>
        </div>
        </section>

        <section className="sec" id="methodology">
        <div className="wrap">
          <div className="sec-tag reveal-left">Methodology</div>
          <h2 className="sec-h reveal d1">我的 AI 产品方法论</h2>
          <div className="method-row">
            {methodology.map(([number, title, body], index) => (
              <div className={`mstep reveal d${index}`} key={title}>
                <div className="mnum">{number}</div>
                <h4 className="mtitle">{title}</h4>
                <p className="mdesc">{body}</p>
              </div>
            ))}
          </div>
        </div>
        </section>

        <section className="sec sec-panel" id="capabilities">
        <div className="wrap">
          <div className="sec-tag reveal-left">Capabilities</div>
          <h2 className="sec-h reveal d1">核心能力</h2>
          <div className="skills-wrap">
            {skills.map(([number, title, items], index) => (
              <div className={`sg reveal d${index}`} key={title as string}>
                <div className="sg-num">{number}</div>
                <h3 className="sg-title">{title as string}</h3>
                <div className="stags">
                  {(items as string[]).map((item) => (
                    <span className="stag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        </section>

        <section className="sec" id="experience">
        <div className="wrap">
          <div className="sec-tag reveal-left">Experience</div>
          <h2 className="sec-h reveal d1">经历</h2>
          <div className="timeline">
            {experience.map(([time, company, role], index) => (
              <div className={`titem reveal-left d${index}`} key={`${time}-${company}`}>
                <div className="tperiod">{time}</div>
                <div>
                  <div className="tcompany">{company}</div>
                  <div className="trole">{role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </section>

        <section id="contact">
        <div className="wrap">
          <h2 className="contact-h reveal">
            一起构建真正
            <br />
            有价值的 AI 产品。
          </h2>
          <div className="clinks reveal d1">
            <div className="clink-row">
              <div className="clink-icon">
                <svg viewBox="0 0 24 24">
                  <rect height="16" rx="2" width="20" x="2" y="4" />
                  <path d="M2 8l10 6 10-6" />
                </svg>
              </div>
              <div>
                <div className="clink-lbl">邮箱</div>
                <div className="clink-val">
                  <a href="mailto:NilsStarkman@gmail.com">NilsStarkman@gmail.com</a>
                </div>
              </div>
            </div>
            <div className="clink-row">
              <div className="clink-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.59 2.61a2 2 0 0 1-.45 2.11L8 9.69a16 16 0 0 0 6.31 6.31l1.25-1.25a2 2 0 0 1 2.11-.45c.84.27 1.71.47 2.61.59A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <div className="clink-lbl">电话</div>
                <div className="clink-val">
                  <a href="tel:13243747631">132-4374-7631</a>
                </div>
              </div>
            </div>
            <div className="clink-row">
              <div className="clink-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </div>
              <div>
                <div className="clink-lbl">GitHub</div>
                <div className="clink-val">
                  <a href="https://github.com/HHHJM845">github.com/HHHJM845</a>
                </div>
              </div>
            </div>
            <div className="clink-row">
              <div className="clink-icon">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 1 4 10 14.5 14.5 0 0 1-4 10 14.5 14.5 0 0 1-4-10A14.5 14.5 0 0 1 12 2z" />
                  <line x1="2" x2="22" y1="12" y2="12" />
                </svg>
              </div>
              <div>
                <div className="clink-lbl">个人网站</div>
                <div className="clink-val">
                  <a href="http://www.huangjiamu.fun">www.huangjiamu.fun</a>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-ctas reveal d2">
            <a className="btn btn-dark" href="mailto:NilsStarkman@gmail.com">
              联系我
            </a>
            <a className="btn btn-ghost" href="https://github.com/HHHJM845">
              查看 GitHub
            </a>
            <a
              className="btn btn-ghost resume-download-btn"
              download="黄佳沐_AI产品经理.pdf.pdf"
              href="/resume/黄佳沐_AI产品经理.pdf.pdf"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 19h14" />
              </svg>
              下载简历
            </a>
          </div>
        </div>
        </section>

        <footer>
        <div className="wrap">
          <div className="foot-inner">
            <div className="foot-copy">
              <b>© 2026</b> 黄佳沐 · AI Product Manager
            </div>
            <nav className="foot-nav">
              <a href="#arrival">顶部</a>
              <a href="mailto:NilsStarkman@gmail.com">邮箱</a>
              <a href="https://github.com/HHHJM845">GitHub</a>
              <a href="http://www.huangjiamu.fun">网站</a>
            </nav>
          </div>
        </div>
        </footer>
      </div>
    </main>
  );
}
