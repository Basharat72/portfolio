/* =========================================================================
   icons.tsx — hand-drawn SVG icon set (consistent 24×24 stroke style) plus
   the two official brand marks (GitHub, LinkedIn). All inline: zero requests.
   ========================================================================= */

import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement> & { size?: number };

const base = (size = 24) => ({
  viewBox: "0 0 24 24",
  width: size,
  height: size,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true as const,
});

/* ------------------------------------------------------------- brands -- */
export const GitHubIcon = ({ size = 19, ...p }: P) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden {...p}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

export const LinkedInIcon = ({ size = 18, ...p }: P) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden {...p}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  </svg>
);

/* -------------------------------------------------------- ui / generic -- */
export const MailIcon = ({ size, ...p }: P) => (
  <svg {...base(size ?? 20)} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m3.5 7 8.5 6 8.5-6" />
  </svg>
);

export const PinIcon = ({ size, ...p }: P) => (
  <svg {...base(size ?? 20)} {...p}>
    <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

export const SunIcon = ({ size, ...p }: P) => (
  <svg {...base(size ?? 18)} strokeWidth={1.8} {...p}>
    <circle cx="12" cy="12" r="4.2" />
    <path d="M12 2.5v2.4M12 19.1v2.4M2.5 12h2.4M19.1 12h2.4M5 5l1.7 1.7M17.3 17.3 19 19M19 5l-1.7 1.7M6.7 17.3 5 19" />
  </svg>
);

export const MoonIcon = ({ size, ...p }: P) => (
  <svg {...base(size ?? 18)} strokeWidth={1.8} {...p}>
    <path d="M20.5 14.5A8.5 8.5 0 1 1 9.5 3.5a7 7 0 0 0 11 11z" />
  </svg>
);

export const DownloadIcon = ({ size, ...p }: P) => (
  <svg {...base(size ?? 17)} strokeWidth={1.8} {...p}>
    <path d="M12 4v11m0 0 4.2-4.2M12 15l-4.2-4.2M4.5 19.5h15" />
  </svg>
);

export const ArrowRightIcon = ({ size, ...p }: P) => (
  <svg {...base(size ?? 16)} strokeWidth={1.8} {...p}>
    <path d="M5 12h13m0 0-5-5m5 5-5 5" />
  </svg>
);

export const ArrowUpIcon = ({ size, ...p }: P) => (
  <svg {...base(size ?? 18)} strokeWidth={1.8} {...p}>
    <path d="M12 19V5m0 0-6 6m6-6 6 6" />
  </svg>
);

export const ExternalIcon = ({ size, ...p }: P) => (
  <svg {...base(size ?? 14)} strokeWidth={1.8} {...p}>
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
);

export const SendIcon = ({ size, ...p }: P) => (
  <svg {...base(size ?? 16)} strokeWidth={1.8} {...p}>
    <path d="M21 3 10 14M21 3l-7 18-4-7-7-4 18-7z" />
  </svg>
);

export const SparkleIcon = ({ size = 14, ...p }: P) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden {...p}>
    <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" />
  </svg>
);

export const SearchIcon = ({ size, ...p }: P) => (
  <svg {...base(size ?? 20)} strokeWidth={1.7} {...p}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="M16 16l4.5 4.5M11 8v3l2 2" />
  </svg>
);

export const ShieldCheckIcon = ({ size, ...p }: P) => (
  <svg {...base(size ?? 20)} strokeWidth={1.7} {...p}>
    <path d="M12 3l7 3v5.5c0 4.6-3.3 7.6-7 9-3.7-1.4-7-4.4-7-9V6l7-3z" />
    <path d="M9 12l2 2 4-4.5" />
  </svg>
);

export const BoltIcon = ({ size, ...p }: P) => (
  <svg {...base(size ?? 20)} strokeWidth={1.7} {...p}>
    <path d="M13 3 5 13.5h5L10 21l8-10.5h-5L13 3z" />
  </svg>
);

export const GradCapIcon = ({ size, ...p }: P) => (
  <svg {...base(size ?? 24)} {...p}>
    <path d="M12 4 2.5 8.5 12 13l9.5-4.5L12 4z" />
    <path d="M6 10.7v5c0 1.5 2.7 2.8 6 2.8s6-1.3 6-2.8v-5" />
    <path d="M21.5 8.5V14" />
  </svg>
);

export const AtomIcon = ({ size, ...p }: P) => (
  <svg {...base(size ?? 24)} {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2.5v3M12 18.5v3M4.3 7.5l2.6 1.5M17.1 15l2.6 1.5M4.3 16.5 6.9 15M17.1 9l2.6-1.5" opacity=".8" />
    <circle cx="12" cy="12" r="8.5" opacity=".4" />
  </svg>
);

export const GearIcon = ({ size, ...p }: P) => (
  <svg {...base(size ?? 24)} {...p}>
    <circle cx="12" cy="12" r="2.6" />
    <path d="M12 5.5V3M12 21v-2.5M18.5 12H21M3 12h2.5M16.6 7.4l1.8-1.8M5.6 18.4l1.8-1.8M16.6 16.6l1.8 1.8M5.6 5.6l1.8 1.8" />
  </svg>
);

export const MedalIcon = ({ size, ...p }: P) => (
  <svg {...base(size ?? 22)} {...p}>
    <circle cx="12" cy="9" r="5.5" />
    <path d="M8.8 13.8 7 21l5-2.6L17 21l-1.8-7.2" />
  </svg>
);

export const BoardIcon = ({ size, ...p }: P) => (
  <svg {...base(size ?? 22)} {...p}>
    <path d="M4 5.5h16v11H4z" />
    <path d="M8 20h8M12 16.5V20M8 9l2.5 2L14 8" />
  </svg>
);

export const FlaskIcon = ({ size, ...p }: P) => (
  <svg {...base(size ?? 22)} {...p}>
    <path d="M9 3.5h6M10 3.5v5L5.5 16a3.5 3.5 0 0 0 3 5.5h7a3.5 3.5 0 0 0 3-5.5L14 8.5v-5" />
    <path d="M7.5 14.5h9" />
  </svg>
);

/* ----------------------------------------------------------- skills ---- */
export const PythonIcon = (p: P) => (
  <svg {...base()} {...p}>
    <path d="M12 2h2.5A3.5 3.5 0 0 1 18 5.5V9a3 3 0 0 1-3 3H9a3 3 0 0 0-3 3v1.5A3.5 3.5 0 0 0 9.5 20H12" />
    <path d="M12 22H9.5A3.5 3.5 0 0 1 6 18.5V15a3 3 0 0 1 3-3h6a3 3 0 0 0 3-3V7.5A3.5 3.5 0 0 0 14.5 4H12" />
    <circle cx="9.5" cy="5.5" r=".9" fill="currentColor" stroke="none" />
    <circle cx="14.5" cy="18.5" r=".9" fill="currentColor" stroke="none" />
  </svg>
);

export const DatabaseIcon = (p: P) => (
  <svg {...base()} {...p}>
    <ellipse cx="12" cy="5" rx="7" ry="2.5" />
    <path d="M5 5v7c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V5" />
    <path d="M5 12v7c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-7" />
  </svg>
);

export const RLangIcon = (p: P) => (
  <svg {...base()} {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
    <text x="12" y="16" textAnchor="middle" fontSize="11" fontWeight="700" fill="currentColor" stroke="none" fontFamily="inherit">R</text>
  </svg>
);

export const SpreadsheetIcon = (p: P) => (
  <svg {...base()} {...p}>
    <rect x="3.5" y="4.5" width="17" height="15" rx="2.5" />
    <path d="M3.5 9.5h17M9.5 9.5V19.5M15.5 9.5V19.5" />
  </svg>
);

export const BellCurveIcon = (p: P) => (
  <svg {...base()} {...p}>
    <path d="M3 19.5c3.4 0 4.6-13 9-13s5.6 13 9 13" />
    <path d="M3 19.5h18" opacity=".45" />
  </svg>
);

export const SchemaIcon = (p: P) => (
  <svg {...base()} {...p}>
    <rect x="3" y="3.5" width="7" height="5" rx="1.2" />
    <rect x="14" y="3.5" width="7" height="5" rx="1.2" />
    <rect x="8.5" y="15.5" width="7" height="5" rx="1.2" />
    <path d="M6.5 8.5v3.5h11V8.5M12 12v3.5" />
  </svg>
);

export const NetworkIcon = (p: P) => (
  <svg {...base()} {...p}>
    <circle cx="5" cy="12" r="2" />
    <circle cx="12" cy="5" r="2" />
    <circle cx="12" cy="19" r="2" />
    <circle cx="19" cy="12" r="2" />
    <path d="M6.8 10.8 10.2 6.8M13.8 6.8l3.4 4M6.8 13.2l3.4 4M13.8 17.2l3.4-4" />
  </svg>
);

export const ScatterIcon = (p: P) => (
  <svg {...base()} {...p}>
    <circle cx="6.5" cy="16" r="1.6" />
    <circle cx="10" cy="10" r="1.6" />
    <circle cx="14.5" cy="13" r="1.6" />
    <circle cx="18" cy="6.5" r="1.6" />
    <path d="M3.5 20.5C8 19 15 11 20.5 4.5" opacity=".55" />
  </svg>
);

export const FlameIcon = (p: P) => (
  <svg {...base()} {...p}>
    <path d="M12 3.5c2.9 3.2 5.5 5.7 5.5 9.3a5.5 5.5 0 1 1-11 0c0-2.4 1.1-4.3 2.6-6.2L12 3.5z" />
    <circle cx="14.8" cy="6.2" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const DataFrameIcon = (p: P) => (
  <svg {...base()} {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
    <path d="M3.5 8.5h17M9.5 3.5v17M15 8.5v12" opacity=".8" />
  </svg>
);

export const SparklesIcon = (p: P) => (
  <svg {...base()} {...p}>
    <path d="M11 4 12.6 8.4 17 10l-4.4 1.6L11 16l-1.6-4.4L5 10l4.4-1.6L11 4z" />
    <path d="M17.5 14l.9 2.6 2.6.9-2.6.9-.9 2.6-.9-2.6-2.6-.9 2.6-.9.9-2.6z" fill="currentColor" stroke="none" opacity=".8" />
  </svg>
);

export const WaveTextIcon = (p: P) => (
  <svg {...base()} {...p}>
    <path d="M4 6.5h16M4 11h10" />
    <path d="M4 17c1.5-2.6 3 2.6 4.5 0s3 2.6 4.5 0 3 2.6 4.5 0 1.7-1.4 2.5-1.6" opacity=".8" />
  </svg>
);

export const RobotIcon = (p: P) => (
  <svg {...base()} {...p}>
    <rect x="5" y="8.5" width="14" height="10" rx="3" />
    <path d="M12 8.5V5.5M12 5.5a1.4 1.4 0 1 0-.01 0z" />
    <circle cx="9.3" cy="13" r=".9" fill="currentColor" stroke="none" />
    <circle cx="14.7" cy="13" r=".9" fill="currentColor" stroke="none" />
    <path d="M9.5 16h5" opacity=".7" />
  </svg>
);

export const TrendIcon = (p: P) => (
  <svg {...base()} {...p}>
    <path d="M3.5 17.5 9 12l3.5 3L19 7.5" />
    <path d="M14.5 7.5H19V12" />
  </svg>
);

export const PinwheelIcon = (p: P) => (
  <svg {...base()} {...p}>
    <path d="M12 12C13 8.2 16 5.2 20 4.2c-1 4-4 7-8 7.8z" />
    <path d="M12 12c3.8 1 6.8 4 7.8 8-4-1-7-4-7.8-8z" />
    <path d="M12 12c-1 3.8-4 6.8-8 7.8 1-4 4-7 8-7.8z" />
    <path d="M12 12C8.2 11 5.2 8 4.2 4c4 1 7 4 7.8 8z" />
  </svg>
);

export const ContainerIcon = (p: P) => (
  <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor" aria-hidden {...p}>
    <rect x="5" y="10" width="2.7" height="2.7" rx=".5" />
    <rect x="8.4" y="10" width="2.7" height="2.7" rx=".5" />
    <rect x="11.8" y="10" width="2.7" height="2.7" rx=".5" />
    <rect x="8.4" y="6.6" width="2.7" height="2.7" rx=".5" />
    <rect x="11.8" y="6.6" width="2.7" height="2.7" rx=".5" />
    <rect x="15.2" y="10" width="2.7" height="2.7" rx=".5" />
    <path d="M3.2 15h17.6c-.6 3.2-3.6 5.4-8.8 5.4S3.8 18.2 3.2 15z" opacity=".85" />
  </svg>
);

export const BranchIcon = (p: P) => (
  <svg {...base()} {...p}>
    <circle cx="6" cy="6" r="2.3" />
    <circle cx="6" cy="18" r="2.3" />
    <circle cx="18" cy="6" r="2.3" />
    <path d="M18 8.5c0 5-4.5 5.5-9.4 7.1M6 8.5v7.2" />
  </svg>
);

export const InfinityIcon = (p: P) => (
  <svg {...base()} {...p}>
    <path d="M12 12c-1.5-2-2.5-3.5-4.5-3.5a3.5 3.5 0 0 0 0 7c2 0 3-1.5 4.5-3.5z" />
    <path d="M12 12c1.5 2 2.5 3.5 4.5 3.5a3.5 3.5 0 0 0 0-7c-2 0-3 1.5-4.5 3.5z" />
  </svg>
);

export const LensChartIcon = (p: P) => (
  <svg {...base()} {...p}>
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="M15.3 15.3 20.5 20.5" />
    <path d="M8 12.5v-2M10.5 12.5v-4M13 12.5v-3" />
  </svg>
);

export const LeafIcon = (p: P) => (
  <svg {...base()} {...p}>
    <path d="M12 2.5c3.8 4.4 5.3 7.8 3.9 11.7-1 2.6-2.9 4-3.9 4.9-1-.9-2.9-2.3-3.9-4.9C6.7 10.3 8.2 6.9 12 2.5z" />
    <path d="M12 19.1v2.4" />
  </svg>
);

export const DoubleDbIcon = (p: P) => (
  <svg {...base()} {...p}>
    <ellipse cx="12" cy="6" rx="7" ry="2.5" />
    <path d="M5 6v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6" />
    <path d="M5 12v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6" opacity=".55" />
  </svg>
);

export const CrossGridIcon = (p: P) => (
  <svg {...base()} strokeWidth={1.8} {...p}>
    <path d="M12 8.5v7M8.5 12h7" />
    <path d="M12 2.8v3.4M12 17.8v3.4M2.8 12h3.4M17.8 12h3.4" opacity=".7" />
    <path d="M5.5 5.5v2M4.5 6.5h2M18.5 5.5v2M17.5 6.5h2M5.5 16.5v2M4.5 17.5h2M18.5 16.5v2M17.5 17.5h2" opacity=".45" />
  </svg>
);

export const BarsIcon = (p: P) => (
  <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor" aria-hidden {...p}>
    <rect x="4.5" y="12" width="3.6" height="8" rx="1" />
    <rect x="10.2" y="7" width="3.6" height="13" rx="1" />
    <rect x="15.9" y="3" width="3.6" height="17" rx="1" />
  </svg>
);

export const ReportIcon = (p: P) => (
  <svg {...base()} {...p}>
    <path d="M7 3.5h7.5L19 8v12.5H7z" />
    <path d="M14 3.5V8.5h5M9.5 13h7M9.5 16.5h5" />
  </svg>
);

export const CycleIcon = (p: P) => (
  <svg {...base()} {...p}>
    <path d="M20 12a8 8 0 1 1-2.3-5.6" />
    <path d="M20 3.5V7h-3.5" />
  </svg>
);

export const StreamlitIcon = (p: P) => (
  <svg {...base()} {...p}>
    <rect x="3.5" y="4.5" width="17" height="15" rx="2.5" />
    <path d="M9.5 8.5v7l6-3.5-6-3.5z" />
  </svg>
);

export const DashIcon = (p: P) => (
  <svg {...base()} {...p}>
    <rect x="3.5" y="4.5" width="17" height="15" rx="2.5" />
    <path d="M3.5 8.5h17" opacity=".5" />
    <path d="M7 16l3-3.5 2.5 2 4.5-4.5" />
  </svg>
);
