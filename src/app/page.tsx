import Hero from "@/components/Hero";

const skillCategories = [
  {
    title: "AI & 大模型",
    skills: [
      "RAG",
      "LLM 微调 (LoRA/QLoRA)",
      "Agent 开发",
      "MCP 协议",
      "Prompt Engineering",
      "VLLM 推理加速",
      "LangChain",
      "Dify / Coze",
      "RLHF (PPO/GRPO)",
    ],
  },
  {
    title: "后端 & 数据",
    skills: [
      "Python",
      "FastAPI",
      "MySQL",
      "MongoDB",
      "Milvus 向量数据库",
      "Docker",
      "Git",
      "Redis",
    ],
  },
  {
    title: "工程 & 可视化",
    skills: [
      "MATLAB",
      "Streamlit",
      "Plotly",
      "PyMuPDF",
      "BM25 / BGE",
      "Function Calling",
      "分布式部署",
      "数据 ETL",
    ],
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* ── Skills ── */}
      <section
        className="py-24 px-4"
        style={{ background: "var(--bg-primary)" }}
      >
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="mb-12">
            <hr className="section-divider mb-6" />
            <h2
              className="text-2xl sm:text-3xl font-semibold mb-3"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--text-primary)",
              }}
            >
              技术能力
            </h2>
            <p
              className="text-base"
              style={{ color: "var(--text-secondary)" }}
            >
              硕士期间积累的 AI 工程化与全栈开发能力
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillCategories.map((category) => (
              <div key={category.title} className="card p-5 sm:p-6">
                <h3
                  className="text-base font-semibold mb-4"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--text-primary)",
                  }}
                >
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Education ── */}
      <section
        className="py-24 px-4"
        style={{ background: "var(--bg-elevated)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <hr className="section-divider mb-6" />
            <h2
              className="text-2xl sm:text-3xl font-semibold mb-3"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--text-primary)",
              }}
            >
              教育背景
            </h2>
            <p
              className="text-base"
              style={{ color: "var(--text-secondary)" }}
            >
              常州大学 · 计算机科学与技术
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {/* Master */}
            <div className="card p-6">
              <div className="flex items-start gap-4">
                <div
                  className="w-8 h-8 rounded-md flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                  style={{
                    background: "var(--accent-coral)",
                    color: "#fff",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  硕
                </div>
                <div>
                  <p
                    className="text-xs tracking-wider uppercase mb-1"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: "var(--text-tertiary)",
                    }}
                  >
                    2023.09 — 至今
                  </p>
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--text-primary)",
                    }}
                  >
                    计算机科学与技术
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    全日制硕士。研究方向：传统多视角聚类、基于深度学习的多视角聚类、多模态大语言模型。
                  </p>
                </div>
              </div>
            </div>

            {/* Bachelor */}
            <div className="card p-6">
              <div className="flex items-start gap-4">
                <div
                  className="w-8 h-8 rounded-md flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                  style={{
                    background: "var(--accent-blue)",
                    color: "#fff",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  本
                </div>
                <div>
                  <p
                    className="text-xs tracking-wider uppercase mb-1"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: "var(--text-tertiary)",
                    }}
                  >
                    2019.09 — 2023.06
                  </p>
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--text-primary)",
                    }}
                  >
                    数据科学与大数据技术
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    全日制本科。主修：C 语言、Python 科学计算、机器学习、Java 分布式开发、大数据实践。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick nav ── */}
      <section
        className="py-24 px-4"
        style={{ background: "var(--bg-primary)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-5">
            <a
              href="/portfolio"
              className="card p-6 sm:p-8 group flex items-center gap-5"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{
                  background: "var(--accent-coral)",
                  color: "#fff",
                  fontFamily: "var(--font-display)",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                }}
              >
                P
              </div>
              <div>
                <h3
                  className="text-lg font-semibold mb-1"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--text-primary)",
                  }}
                >
                  项目经历
                </h3>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  RAG 问答系统 · Agent 对话系统 · 数据看板
                </p>
              </div>
            </a>
            <a
              href="/contact"
              className="card p-6 sm:p-8 group flex items-center gap-5"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{
                  background: "var(--accent-blue)",
                  color: "#fff",
                  fontFamily: "var(--font-display)",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                }}
              >
                C
              </div>
              <div>
                <h3
                  className="text-lg font-semibold mb-1"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--text-primary)",
                  }}
                >
                  联系我
                </h3>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  技术交流、合作机会，欢迎联系
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
