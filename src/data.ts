/* =========================================================================
   data.ts — structured content: which entries exist, their translation-key
   prefixes, tags and visuals. The wording itself lives in i18n/translations.
   ========================================================================= */

import type { ComponentType } from "react";
import type { TranslationKey } from "./i18n/translations";
import {
  PythonIcon, DatabaseIcon, RLangIcon, SpreadsheetIcon, BellCurveIcon, SchemaIcon,
  NetworkIcon, ScatterIcon, FlameIcon, DataFrameIcon, SparklesIcon, WaveTextIcon,
  RobotIcon, TrendIcon, PinwheelIcon, ContainerIcon, BranchIcon, InfinityIcon,
  LensChartIcon, LeafIcon, DoubleDbIcon, CrossGridIcon, BarsIcon, ReportIcon,
  CycleIcon, ShieldCheckIcon, GradCapIcon, AtomIcon, GearIcon, MedalIcon,
  BoardIcon, FlaskIcon, SearchIcon, BoltIcon, StreamlitIcon, DashIcon,
} from "./components/icons";

type IconType = ComponentType<{ size?: number }>;

/* ------------------------------------------------------------- skills -- */
export interface Skill {
  /** static label, or a translation key when the name differs per language */
  name?: string;
  nameKey?: TranslationKey;
  icon: IconType;
}

export interface SkillGroup {
  titleKey: TranslationKey;
  skills: Skill[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    titleKey: "skills.g1",
    skills: [
      { name: "Python", icon: PythonIcon },
      { name: "SQL", icon: DatabaseIcon },
      { name: "R", icon: RLangIcon },
      { name: "Excel & Access", icon: SpreadsheetIcon },
      { nameKey: "skills.statistics", icon: BellCurveIcon },
      { nameKey: "skills.modeling", icon: SchemaIcon },
    ],
  },
  {
    titleKey: "skills.g2",
    skills: [
      { name: "Machine Learning", icon: NetworkIcon },
      { name: "scikit-learn", icon: ScatterIcon },
      { name: "PyTorch", icon: FlameIcon },
      { name: "Pandas", icon: DataFrameIcon },
      { name: "LLMs & RAG", icon: SparklesIcon },
      { name: "NLP", icon: WaveTextIcon },
      { nameKey: "skills.agents", icon: RobotIcon },
      { nameKey: "skills.forecasting", icon: TrendIcon },
    ],
  },
  {
    titleKey: "skills.g3",
    skills: [
      { name: "Airflow", icon: PinwheelIcon },
      { name: "Docker", icon: ContainerIcon },
      { name: "Git", icon: BranchIcon },
      { name: "CI/CD", icon: InfinityIcon },
      { name: "BigQuery", icon: LensChartIcon },
      { name: "MongoDB", icon: LeafIcon },
      { name: "MySQL", icon: DoubleDbIcon },
      { nameKey: "skills.validation", icon: ShieldCheckIcon },
    ],
  },
  {
    titleKey: "skills.g4",
    skills: [
      { name: "Tableau", icon: CrossGridIcon },
      { name: "Streamlit", icon: StreamlitIcon },
      { name: "Dash", icon: DashIcon },
      { name: "Reporting", icon: ReportIcon },
      { nameKey: "skills.agile", icon: CycleIcon },
    ],
  },
];

/* --------------------------------------------------------- experience -- */
export interface ExperienceEntry {
  company: string;
  prefix: string; // "exp1" … "exp8"
  bullets: number;
  tags: string[];
  current?: boolean;
}

export const EXPERIENCE: ExperienceEntry[] = [
  { company: "Hyundai Motor Deutschland", prefix: "exp1", bullets: 3, tags: ["Tableau", "SQL", "AI Agents", "LLMs"], current: true },
  { company: "Goethe-Universität Frankfurt", prefix: "exp2", bullets: 4, tags: ["KPI Analytics", "Data Integration", "Automation"] },
  { company: "Volkswagen Financial Services", prefix: "exp3", bullets: 4, tags: ["Python", "scikit-learn", "CI/CD", "Forecasting"] },
  { company: "Robert Bosch GmbH", prefix: "exp4", bullets: 2, tags: ["Python", "Anomaly Detection", "Quality Assurance"] },
  { company: "Fraunhofer IEE", prefix: "exp5", bullets: 2, tags: ["Statistics", "Time Series", "Reporting"] },
  { company: "Universität Hildesheim", prefix: "exp6", bullets: 2, tags: ["R", "Python", "Power BI", "Teaching"] },
  { company: "Synaos GmbH", prefix: "exp7", bullets: 2, tags: ["Dashboards", "KPI Monitoring"] },
  { company: "Bajaj Auto", prefix: "exp8", bullets: 2, tags: ["Market Analysis", "R&D"] },
];

/* ---------------------------------------------------------- education -- */
export interface EducationEntry {
  school: string;
  prefix: string; // "edu1" … "edu3"
  icon: IconType;
  badgeKey?: TranslationKey;
}

export const EDUCATION: EducationEntry[] = [
  { school: "Universität Hildesheim", prefix: "edu1", icon: GradCapIcon, badgeKey: "edu1.badge" },
  { school: "IIT Delhi", prefix: "edu2", icon: AtomIcon },
  { school: "NIT Durgapur", prefix: "edu3", icon: GearIcon },
];

/* ----------------------------------------------------------- projects -- */
export interface ProjectEntry {
  prefix: string; // "proj1" … "proj6"
  cover: string;  // cover-1 … cover-6
  icon: IconType;
  tags: string[];
  wip?: boolean;
}

export const PROJECTS: ProjectEntry[] = [
  { prefix: "proj1", cover: "cover-1", icon: TrendIcon, tags: ["Python", "scikit-learn", "ML", "CI/CD"] },
  { prefix: "proj2", cover: "cover-2", icon: ShieldCheckIcon, tags: ["SQL", "Data Integration", "Automation", "Dashboards"] },
  { prefix: "proj3", cover: "cover-3", icon: RobotIcon, tags: ["LLMs", "AI Agents", "Tableau", "SQL"], wip: true },
  { prefix: "proj4", cover: "cover-4", icon: SearchIcon, tags: ["Python", "Statistics", "Anomaly Detection"] },
  { prefix: "proj5", cover: "cover-5", icon: BarsIcon, tags: ["Dashboards", "KPI Monitoring", "Automation"] },
  { prefix: "proj6", cover: "cover-6", icon: BoltIcon, tags: ["Python", "Statistics", "Time Series"] },
];

/* ------------------------------------------------------------- honors -- */
export interface HonorEntry {
  prefix: string; // "hon1" … "hon3"
  icon: IconType;
}

export const HONORS: HonorEntry[] = [
  { prefix: "hon1", icon: MedalIcon },
  { prefix: "hon2", icon: BoardIcon },
  { prefix: "hon3", icon: FlaskIcon },
];

/* -------------------------------------------------------------- links -- */
export const LINKS = {
  github: "https://github.com/Basharat72",
  linkedin: "https://www.linkedin.com/in/basharat-mubashir-ahmed-86a8a4165/",
  email: "basharatsaigal72@gmail.com",
  cv: "./assets/Basharat-Mubashir-Ahmed-CV.pdf",
};
