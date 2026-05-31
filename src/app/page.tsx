import { AIBuilderOrbit } from "@/components/AIBuilderOrbit";
import { ArrivalExperience } from "@/components/ArrivalExperience";
import { RevealEffects } from "@/components/RevealEffects";

const stats = [
  ["92", "%", "RAG 召回", "准确率"],
  ["78", "%", "AI 建议", "一键采纳"],
  ["8", "家", "付费影视", "工作室签约"],
  ["500", "+", "销售人员", "覆盖"],
  ["3", "×", "分镜策划", "效率提升"],
  ["95", "%", "智能客服", "专业问答准确率"],
];

const tags = [
  "RAG",
  "Agentic RAG",
  "Prompt Engineering",
  "Context Engineering",
  "LLM",
  "AI Evaluation",
  "Model Selection",
  "Claude Code",
  "Codex",
  "AI-assisted Prototyping",
  "PMF",
  "AIGC",
  "MVP",
];

const methodology = [
  ["01", "场景洞察", "识别真实用户工作流中的高频痛点。"],
  ["02", "AI 能力匹配", "判断问题是否适合用 RAG、Agent、LLM 或自动化工作流解决。"],
  ["03", "快速原型验证", "使用 Claude Code / Codex 等工具快速搭建可交互 Demo。"],
  ["04", "评测框架设计", "用准确率、采纳率、召回率、转化率等指标验证 AI 效果。"],
  ["05", "商业化落地", "通过定价、成本结构、用户反馈闭环完成 PMF 验证。"],
];

const skills = [
  [
    "01",
    "AI 产品设计",
    [
      "RAG",
      "Agentic RAG",
      "Prompt Engineering",
      "Context Engineering",
      "AI Evaluation",
      "Model Selection",
      "Dialogue State Machine",
    ],
  ],
  ["02", "产品策略", ["用户访谈", "竞品分析", "PMF 验证", "订阅 + 积分", "商业化设计"]],
  ["03", "技术协作", ["LLM 选型", "Embedding 评测", "AI Eval", "Badcase 归因", "API 集成", "Claude Code", "Codex"]],
  ["04", "AIGC 创作工具", ["分镜生成", "视频模型评测", "3D 导演台", "视觉工作流", "内容生产效率优化"]],
];

const experience = [
  ["2025.09 - 至今", "深圳跃然像素科技", "产品经理 · AI 内容工具 / 多模型评测 / 商业化冷启动"],
  ["2024.07 - 2025.09", "深圳华禧文化", "产品经理 · 轻量 Agentic RAG / 智能客服与销售培训"],
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
                ，具备从产品定义到技术落地的独立判断能力，主导过 AI 内容生产工作流、RAG 三层检索、轻量
                Agentic RAG、对话状态机与 Prompt / Context Engineering 落地。相比只做需求管理，我更关注
                AI 是否真正解决用户工作流中的痛点，并通过模型评测、数据反馈、快速原型和 PMF 验证推动产品价值闭环。
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
            <a
              className="pcard pcard-featured reveal"
              href="http://122.152.224.125:3001/"
              rel="noreferrer"
              target="_blank"
            >
              <div>
                <div className="pcard-link-hint">
                  <ExternalIcon />
                  点击查看 Demo
                </div>
                <div className="ptag">AI Workflow · HITL Review · Context Engineering</div>
                <h3 className="ptitle">AI 内容创作协作平台</h3>
                <p className="psub">
                  面向影视与内容团队的 AI 创作协作平台，从单点生成工具升级为可管理的团队工作流。
                </p>
                <ul className="phigh">
                  <li>调研 9 个主流 AIGC 工具并访谈影视团队，定义多项目管理、版本控制、甲方审片等协作能力</li>
                  <li>设计剧本解析、Prompt 生成、图片生成、批注审阅的 AI 全链路视觉工作流与 HITL 审阅机制</li>
                  <li>设计多模型评测框架，评估 Kling、Seedance、Vidu、Nano Banana、即梦等模型调用策略</li>
                  <li>搭建 RAG Prompt 经验库与 Context Engineering 测评集，口语化指令召回从 60% 提升至 92%</li>
                  <li>完成商业化冷启动，签约 8 家付费影视工作室，采用「订阅 + 积分」双轨变现模式</li>
                  <li>辅助增量作品入围海南岛国际电影节 AI 电影季、北京国际电影节 AIGC 电影单元，并获海螺 AI × WAIFF 最佳叙事奖</li>
                </ul>
              </div>
              <div>
                <div className="pmetrics">
                  {[
                    ["RAG Recall Accuracy", "92%", "92%"],
                    ["AI Suggestion Adoption", "78%", "78%"],
                    ["Target Gross Margin", "40%+", "40%"],
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
              </div>
            </a>

            <a
              className="pcard reveal d1"
              href="http://175.178.27.151/"
              rel="noreferrer"
              target="_blank"
            >
              <div className="pcard-link-hint">
                <ExternalIcon />
                点击查看 Demo
              </div>
              <div className="ptag">MVP · Marketplace · AI Matching · Escrow</div>
              <h3 className="ptitle">AI 影视承接平台</h3>
              <p className="psub">已上线内测，连接影视制作公司与 AI 创作者的双边协作平台。</p>
              <ul className="phigh">
                <li>2 周内独立交付双角色 MVP，覆盖需求发布、投标承接、合同签署、里程碑交付审核</li>
                <li>引入 AI 自动打标签机制，依据创作者上传作品生成能力标签并自动匹配相关需求</li>
                <li>支持作品集展示、资质验证、资金托管与甲乙双方自定义付款比例、里程碑节点</li>
              </ul>
              <div className="pstats">
                <div className="ps-item">
                  <div className="ps-num">2w</div>
                  <div className="ps-lbl">MVP 完成时间</div>
                </div>
                <div className="ps-item">
                  <div className="ps-num">2</div>
                  <div className="ps-lbl">双角色闭环</div>
                </div>
                <div className="ps-item">
                  <div className="ps-num">Auto</div>
                  <div className="ps-lbl">AI 自动标签</div>
                </div>
              </div>
            </a>

            <article className="pcard reveal d2">
              <div className="ptag">Agentic RAG · AI Eval · 智能客服 · ToB</div>
              <h3 className="ptitle">RAG 智能客服与销售培训系统</h3>
              <p className="psub">面向黄金批发业务的私域咨询承接与新人销售培训系统，数字人作为后续增强层。</p>
              <ul className="phigh">
                <li>设计 Router 意图路由、Retriever 检索增强、Grader 相关性判断、Generator 答案生成、Verifier 合规校验的轻量 Agentic RAG 控制回路</li>
                <li>设计 120 题分场景评估集，结合人工抽检与 LLM 辅助评分，专业问答准确率达 95%</li>
                <li>5 个月完成 MVP，覆盖 500+ 销售人员，新人培训周期缩短约 60%，私域响应效率提升 2 倍</li>
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
