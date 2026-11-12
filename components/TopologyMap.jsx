"use client";

import { useState } from "react";

const nodes = [
  {
    id: "sobre",
    label: "SOBRE",
    ip: "10.10.0.11",
    href: "#sobre",
    preview: "Quem opera esta rede: UNICAP, UM Telecom e o caminho até redes.",
    x: 18,
    y: 26,
    w: 116,
    h: 40,
  },
  {
    id: "experiencia",
    label: "EXPERIÊNCIA",
    ip: "10.10.0.12",
    href: "#experiencia",
    preview: "Estágio em redes na UM Telecom (out/2026) e o histórico anterior.",
    x: 286,
    y: 34,
    w: 134,
    h: 40,
  },
  {
    id: "projetos",
    label: "PROJETOS",
    ip: "10.10.0.13",
    href: "#projetos",
    preview: "Rack de projetos: SINDHOSPE em produção, laboratórios de rede e software.",
    x: 18,
    y: 214,
    w: 122,
    h: 40,
  },
  {
    id: "contato",
    label: "CONTATO",
    ip: "10.10.0.14",
    href: "#contato",
    preview: "Canais diretos: e-mail, LinkedIn, GitHub e telefone.",
    x: 286,
    y: 206,
    w: 124,
    h: 40,
  },
];

const CORE = { x: 210, y: 140, w: 132, h: 46 };

const links = nodes.map((node) => ({
  id: node.id,
  x1: CORE.x,
  y1: CORE.y + CORE.h / 2,
  x2: node.x + node.w / 2,
  y2: node.y + node.h / 2,
}));

export default function TopologyMap() {
  const [active, setActive] = useState(null);

  const clear = () => setActive(null);
  const set = (id) => () => setActive(id);
  const current = nodes.find((node) => node.id === active) || null;

  return (
    <div className="topology">
      <p className="topology-title">
        <span>topologia</span>
        <span className="topology-title-meta">4 nós · 1 core</span>
      </p>

      <svg
        className="topology-svg"
        viewBox="0 0 440 290"
        role="group"
        aria-label="Diagrama de topologia do site. Cada nó abre uma seção."
      >
        <g aria-hidden="true">
          {links.map((link) => (
            <line
              key={`line-${link.id}`}
              className="topology-link"
              x1={link.x1}
              y1={link.y1}
              x2={link.x2}
              y2={link.y2}
            />
          ))}
          {links.map((link, index) => (
            <line
              key={`pulse-${link.id}`}
              className="topology-pulse"
              x1={link.x1}
              y1={link.y1}
              x2={link.x2}
              y2={link.y2}
              style={{ animationDelay: `${index * 0.9}s` }}
            />
          ))}
        </g>

        <g className="topology-core" aria-hidden="true">
          <rect x={CORE.x - CORE.w / 2} y={CORE.y} width={CORE.w} height={CORE.h} rx="1" />
          <text x={CORE.x} y={CORE.y + 20} textAnchor="middle" className="core-name">
            heitor@noc
          </text>
          <text x={CORE.x} y={CORE.y + 34} textAnchor="middle" className="core-meta">
            core · up
          </text>
        </g>

        {nodes.map((node) => (
          <a
            key={node.id}
            href={node.href}
            className="topology-node"
            onMouseEnter={set(node.id)}
            onMouseLeave={clear}
            onFocus={set(node.id)}
            onBlur={clear}
            aria-label={`${node.label} — ${node.preview}`}
          >
            <rect x={node.x} y={node.y} width={node.w} height={node.h} rx="1" />
            <circle cx={node.x + 12} cy={node.y + 12} r="2.5" className="node-dot" />
            <text x={node.x + 22} y={node.y + 17} className="node-label">
              {node.label}
            </text>
            <text x={node.x + 12} y={node.y + 31} className="node-ip">
              {node.ip}
            </text>
          </a>
        ))}
      </svg>

      <ul className="topology-list">
        {nodes.map((node) => (
          <li key={`list-${node.id}`}>
            <a href={node.href}>
              <span className="topology-list-label">{node.label}</span>
              <span className="topology-list-meta">{node.ip}</span>
              <span className="topology-list-preview">{node.preview}</span>
            </a>
          </li>
        ))}
      </ul>

      <p className="topology-readout" role="status">
        {current ? (
          <>
            <span className="readout-key">{current.label}</span> {current.preview}
          </>
        ) : (
          <span className="readout-idle">passe o mouse ou use Tab em um nó para ver a prévia</span>
        )}
      </p>
    </div>
  );
}
