/**
 * Node Cluster Graph — 签名视觉元素
 *
 * 散布的节点由细线连接，形成类似多视角聚类算法可视化的效果。
 * 直接呼应陈望杰的研究方向：多视角聚类。
 *
 * 节点分布逻辑：
 * - 3 个聚类中心，每个中心周围散布若干节点
 * - 聚类内部节点相互连接
 * - 聚类之间有少量跨聚类连接
 * - 少量游离节点
 */

interface Node {
  x: number;
  y: number;
  r: number;
  cluster: number;
  animationDelay: string;
  opacity: number;
}

interface Edge {
  from: number;
  to: number;
}

function generateGraph(): { nodes: Node[]; edges: Edge[] } {
  // 3 cluster centers
  const centers = [
    { x: 35, y: 30 },
    { x: 60, y: 55 },
    { x: 25, y: 70 },
  ];

  const nodes: Node[] = [];
  const edges: Edge[] = [];

  // Generate nodes around each center
  centers.forEach((center, ci) => {
    const count = 5 + ci * 2; // 5, 7, 9 nodes per cluster
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + Math.random() * 0.4;
      const dist = 5 + Math.random() * 10;
      nodes.push({
        x: center.x + Math.cos(angle) * dist,
        y: center.y + Math.sin(angle) * dist,
        r: 2 + Math.random() * 3,
        cluster: ci,
        animationDelay: `${(Math.random() * 8).toFixed(1)}s`,
        opacity: 0.5 + Math.random() * 0.5,
      });
    }
  });

  // Add some free-floating nodes
  for (let i = 0; i < 5; i++) {
    nodes.push({
      x: 10 + Math.random() * 80,
      y: 10 + Math.random() * 80,
      r: 1.5 + Math.random() * 2,
      cluster: -1,
      animationDelay: `${(Math.random() * 8).toFixed(1)}s`,
      opacity: 0.3 + Math.random() * 0.3,
    });
  }

  // Connect nodes within same cluster (sparse — not fully connected)
  nodes.forEach((a, ai) => {
    nodes.forEach((b, bi) => {
      if (ai >= bi || a.cluster !== b.cluster || a.cluster === -1) return;
      // Connect with ~60% probability for intra-cluster
      if (Math.random() < 0.6) {
        edges.push({ from: ai, to: bi });
      }
    });
  });

  // Add a few cross-cluster edges
  for (let i = 0; i < 4; i++) {
    const aIdx = Math.floor(Math.random() * nodes.length);
    const bIdx = Math.floor(Math.random() * nodes.length);
    if (
      aIdx !== bIdx &&
      nodes[aIdx].cluster !== -1 &&
      nodes[bIdx].cluster !== -1 &&
      nodes[aIdx].cluster !== nodes[bIdx].cluster
    ) {
      edges.push({ from: aIdx, to: bIdx });
    }
  }

  return { nodes, edges };
}

export default function NodeClusterGraph() {
  const { nodes, edges } = generateGraph();
  // Use a stable seed — the graph is generated once at build time (SSG)

  return (
    <svg
      viewBox="0 0 100 100"
      className="w-full h-full max-w-[420px] mx-auto"
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Edges */}
      {edges.map((edge, i) => (
        <line
          key={`e-${i}`}
          x1={nodes[edge.from].x}
          y1={nodes[edge.from].y}
          x2={nodes[edge.to].x}
          y2={nodes[edge.to].y}
          stroke="currentColor"
          strokeOpacity="0.12"
          strokeWidth="0.3"
          className="text-[var(--accent-coral)] dark:text-[var(--accent-blue)]"
        />
      ))}

      {/* Nodes */}
      {nodes.map((node, i) => (
        <circle
          key={`n-${i}`}
          cx={node.x}
          cy={node.y}
          r={node.r}
          fill={node.cluster >= 0 ? "var(--accent-coral)" : "var(--accent-gold)"}
          opacity={node.opacity}
          className={
            node.cluster >= 0
              ? "animate-float-slow"
              : "animate-float-slower"
          }
          style={{ animationDelay: node.animationDelay }}
        />
      ))}

      {/* Cluster centers — larger, semi-transparent circles */}
      {[
        { x: 35, y: 30, r: 8 },
        { x: 60, y: 55, r: 10 },
        { x: 25, y: 70, r: 7 },
      ].map((c, i) => (
        <circle
          key={`cc-${i}`}
          cx={c.x}
          cy={c.y}
          r={c.r}
          fill="none"
          stroke="var(--accent-coral)"
          strokeOpacity="0.15"
          strokeWidth="0.5"
          strokeDasharray="1 2"
          className="animate-pulse-subtle"
        />
      ))}
    </svg>
  );
}
