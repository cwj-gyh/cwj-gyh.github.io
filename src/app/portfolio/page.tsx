import ProjectCard from "@/components/ProjectCard";
import { FileText, Briefcase } from "lucide-react";

const projects = [
  {
    title: "Tesla 车书问答系统",
    description:
      "基于 Tesla Model 3 用户手册，结合 RAG + LLM 微调 + 提示工程构建的智能问答系统。实现多路召回（Qwen3-Embedding / BGE-M3 / BM25）+ RRF 粗排 + BGE-Reranker 精排，问答准确率提升 3.7%，并利用 AWQ INT4 量化 + VLLM 实现 8 卡 A100 分布式推理部署。",
    techStack: [
      "PyMuPDF",
      "RAG",
      "LLM 微调",
      "VLLM",
      "Milvus",
      "MongoDB",
      "Qwen3",
      "BGE-Reranker",
    ],
    imageColor: "var(--accent-coral)",
  },
  {
    title: "车载多轮任务型对话系统",
    description:
      "覆盖 12 个领域、400+ 技能的车载对话系统。构建拒识模型（3 层 Bert-Tiny，50w 语料，拒识率 90%+）和意图识别模型（BERT-Large，40w 语料，TOP1 准确率 85%）。结合 MCP 协议实现第三方服务调用，采用「一级模型 top-k 召回 + LLM 精准匹配」解决海量工具库匹配难题。",
    techStack: [
      "LLM 微调",
      "Agent",
      "MCP",
      "Function Calling",
      "BERT",
      "DeepSeek",
      "Query 改写",
    ],
    imageColor: "var(--accent-blue)",
  },
  {
    title: "MT 生产效率看板",
    description:
      "梅特勒托利多实习期间独立开发的 Streamlit 数据看板，整合考勤、工时、产量、设备损失（WTG）等多源数据，实现 POLC 三大生产区域及六个细分单元的生产效率动态监控。编写自动化脚本实现每日数据自动采集，减少人工操作 90% 以上。",
    techStack: [
      "Python",
      "Streamlit",
      "Plotly",
      "Pandas",
      "ETL",
      "自动化脚本",
    ],
    imageColor: "var(--accent-gold)",
  },
];

const papers = [
  {
    title:
      "Adaptive Unified Framework with Global Anchor Graph for Large-Scale Multi-view Clustering",
    venue: "PRCV 2024 (CCF-C 类会议)",
    role: "导师一作，学生二作",
  },
  {
    title:
      "Hybrid Anchor Graph Learning and Tensorized Spectral Embedding Fusion for Multi-view Clustering",
    venue: "Neurocomputing 2026 (中科院二区)",
    role: "导师一作，学生二作",
  },
  {
    title:
      "Tensorized Consensus Graph Learning for Incomplete Multi-View Clustering with Confidence Integration",
    venue: "Applied Sciences, 2025",
    role: "通讯作者",
  },
];

const patents = [
  "基于深海环境下的水下机器人多域协同方法",
  "基于全局锚点图的大规模多视图聚类方法",
  "一种多视角聚类方法及装置",
  "一种基于高阶相关性引导的多视角模糊 C 均值聚类方法",
];

export default function PortfolioPage() {
  return (
    <div className="py-24 px-4" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-5xl mx-auto">
        {/* ── Header ── */}
        <div className="mb-16">
          <hr className="section-divider mb-6" />
          <h1
            className="text-3xl sm:text-4xl font-semibold mb-4"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--text-primary)",
            }}
          >
            项目与成果
          </h1>
          <p
            className="text-lg leading-relaxed max-w-2xl"
            style={{ color: "var(--text-secondary)" }}
          >
            将 AI 技术落地为可用产品，以学术严谨性做扎实工程
          </p>
        </div>

        {/* ── Projects ── */}
        <section className="mb-20">
          <div className="flex items-center gap-2.5 mb-8">
            <Briefcase size={18} style={{ color: "var(--accent-coral)" }} />
            <h2
              className="text-xl font-semibold"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--text-primary)",
              }}
            >
              工程实践
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        {/* ── Papers ── */}
        <section className="mb-20">
          <div className="flex items-center gap-2.5 mb-8">
            <FileText size={18} style={{ color: "var(--accent-blue)" }} />
            <h2
              className="text-xl font-semibold"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--text-primary)",
              }}
            >
              学术论文
            </h2>
          </div>
          <div className="grid gap-3">
            {papers.map((paper) => (
              <div key={paper.title} className="card p-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <p
                    className="text-sm leading-relaxed flex-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {paper.title}
                  </p>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span
                      className="text-xs px-2 py-0.5 rounded-md border"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "var(--accent-blue)",
                        borderColor: "color-mix(in srgb, var(--accent-blue) 20%, transparent)",
                        background: "color-mix(in srgb, var(--accent-blue) 6%, transparent)",
                      }}
                    >
                      {paper.venue}
                    </span>
                    <span
                      className="text-xs"
                      style={{ color: "var(--text-tertiary)" }}
                    >
                      {paper.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Patents ── */}
        <section className="mb-20">
          <h2
            className="text-xl font-semibold mb-6"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--text-primary)",
            }}
          >
            专利成果
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {patents.map((patent, i) => (
              <div key={i} className="card p-4 flex items-center gap-3">
                <span
                  className="text-xs font-bold flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center"
                  style={{
                    fontFamily: "var(--font-mono)",
                    background: "color-mix(in srgb, var(--accent-gold) 12%, transparent)",
                    color: "var(--accent-gold)",
                  }}
                >
                  {i + 1}
                </span>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-primary)" }}
                >
                  {patent}
                </p>
              </div>
            ))}
          </div>
          <p
            className="text-xs mt-3"
            style={{ color: "var(--text-tertiary)" }}
          >
            * 以上专利均已公开，均为二作
          </p>
        </section>

        {/* ── Stats ── */}
        <section>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: "3", label: "学术论文" },
              { value: "4", label: "发明专利" },
              { value: "CET-6", label: "490 分" },
              { value: "ENFJ", label: "人格类型" },
            ].map((stat) => (
              <div key={stat.label} className="card p-5 text-center">
                <p
                  className="text-2xl sm:text-3xl font-bold mb-1"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--accent-coral)",
                  }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-xs tracking-wider uppercase"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--text-tertiary)",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
