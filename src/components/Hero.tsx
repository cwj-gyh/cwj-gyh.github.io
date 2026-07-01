import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import NodeClusterGraph from "./NodeClusterGraph";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
      {/* Subtle top gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--accent-coral), var(--accent-blue), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Left: Text content ── */}
          <div className="text-center lg:text-left">
            {/* Photo — circular with coral ring */}
            <div className="mb-8 inline-block">
              <div
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden"
                style={{
                  border: "2px solid var(--accent-coral)",
                  boxShadow: "0 4px 24px -6px color-mix(in srgb, var(--accent-coral) 30%, transparent)",
                }}
              >
                <img
                  src="/images/cwj.jpg"
                  alt="陈望杰证件照"
                  className="w-full h-full object-cover"
                  width={400}
                  height={400}
                />
              </div>
            </div>

            {/* Eyebrow */}
            <p
              className="text-sm tracking-widest uppercase mb-6"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--text-tertiary)",
              }}
            >
              常州大学 · 计算机科学与技术
            </p>

            {/* Name */}
            <h1 className="mb-6">
              <span
                className="block text-5xl sm:text-6xl lg:text-7xl font-bold leading-none tracking-tight"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--text-primary)",
                }}
              >
                陈望杰
              </span>
              <span
                className="block text-lg sm:text-xl mt-3"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "var(--text-secondary)",
                  fontWeight: 400,
                }}
              >
                多视角聚类 · 多模态大模型
              </span>
            </h1>

            {/* Bio paragraph */}
            <p
              className="max-w-md mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed mb-10"
              style={{
                fontFamily: "var(--font-body)",
                color: "var(--text-secondary)",
              }}
            >
              将前沿 AI 研究落地为工程实践。
              <br />
              专注于 RAG、LLM 微调与 Agent 开发，
              <br />
              以严谨的学术态度做扎实的工程。
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center lg:justify-start gap-3">
              <Link href="/portfolio" className="btn-primary">
                查看项目经历
                <ArrowRight size={17} />
              </Link>
              <Link href="/contact" className="btn-ghost">
                联系我
                <Mail size={17} />
              </Link>
            </div>
          </div>

          {/* ── Right: Signature node graph ── */}
          <div className="hidden lg:flex items-center justify-center">
            <NodeClusterGraph />
          </div>
        </div>
      </div>
    </section>
  );
}
