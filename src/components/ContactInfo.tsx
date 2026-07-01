"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Copy, Check } from "lucide-react";

const contactItems = [
  {
    icon: Phone,
    label: "手机",
    value: "19850300982",
    href: "tel:19850300982",
  },
  {
    icon: Mail,
    label: "邮箱",
    value: "chenwangjie1104@outlook.com",
    href: "mailto:chenwangjie1104@outlook.com",
  },
  {
    icon: MapPin,
    label: "所在地",
    value: "江苏 常州",
    href: null,
  },
];

export default function ContactInfo() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (value: string, index: number) => {
    await navigator.clipboard.writeText(value);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {contactItems.map((item, index) => (
        <div key={item.label} className="card p-5 text-center">
          {/* Icon */}
          <div
            className="w-10 h-10 mx-auto mb-3 rounded-lg flex items-center justify-center"
            style={{
              background: "color-mix(in srgb, var(--accent-coral) 8%, transparent)",
              color: "var(--accent-coral)",
            }}
          >
            <item.icon size={18} />
          </div>

          {/* Label */}
          <p
            className="text-xs mb-1.5 tracking-wider uppercase"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--text-tertiary)",
            }}
          >
            {item.label}
          </p>

          {/* Value */}
          {item.href ? (
            <a
              href={item.href}
              className="text-base font-semibold block mb-3 transition-colors hover:opacity-70"
              style={{
                fontFamily: "var(--font-body)",
                color: "var(--text-primary)",
              }}
            >
              {item.value}
            </a>
          ) : (
            <p
              className="text-base font-semibold mb-3"
              style={{
                fontFamily: "var(--font-body)",
                color: "var(--text-primary)",
              }}
            >
              {item.value}
            </p>
          )}

          {/* Copy button */}
          <button
            onClick={() => handleCopy(item.value, index)}
            className="inline-flex items-center gap-1 text-xs font-medium transition-colors hover:opacity-70"
            style={{ color: "var(--text-tertiary)" }}
          >
            {copiedIndex === index ? (
              <>
                <Check size={13} />
                已复制
              </>
            ) : (
              <>
                <Copy size={13} />
                复制
              </>
            )}
          </button>
        </div>
      ))}
    </div>
  );
}
