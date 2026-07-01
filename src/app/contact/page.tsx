import { Send } from "lucide-react";
import ContactInfo from "@/components/ContactInfo";

function GitHubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export default function ContactPage() {
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
            联系我
          </h1>
          <p
            className="text-lg leading-relaxed max-w-2xl"
            style={{ color: "var(--text-secondary)" }}
          >
            无论是技术交流、合作机会，还是单纯的聊天，都欢迎联系
          </p>
        </div>

        {/* ── Contact cards ── */}
        <ContactInfo />

        {/* ── Social & CTA ── */}
        <div className="mt-16 max-w-md mx-auto">
          <div className="grid grid-cols-2 gap-4 mb-8">
            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="card p-4 flex flex-col items-center gap-2 group"
            >
              <GitHubIcon size={22} />
              <span
                className="text-xs font-medium"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--text-secondary)",
                }}
              >
                GitHub
              </span>
            </a>

            {/* Email CTA */}
            <a
              href="mailto:chenwangjie1104@outlook.com"
              className="card p-4 flex flex-col items-center gap-2 group"
            >
              <Send size={20} style={{ color: "var(--accent-coral)" }} />
              <span
                className="text-xs font-medium"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--text-secondary)",
                }}
              >
                发送邮件
              </span>
            </a>
          </div>

          {/* Direct email CTA */}
          <div
            className="card p-8 text-center"
            style={{ background: "var(--bg-elevated)" }}
          >
            <p
              className="text-sm mb-4"
              style={{ color: "var(--text-secondary)" }}
            >
              更推荐直接发送邮件，我会尽快回复
            </p>
            <a
              href="mailto:chenwangjie1104@outlook.com"
              className="btn-primary"
            >
              写邮件给望杰
              <Send size={15} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
