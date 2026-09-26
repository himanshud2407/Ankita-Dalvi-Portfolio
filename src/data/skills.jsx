import React from 'react';
import { SiPython, SiPostgresql, SiMysql, SiGithub, SiJira, SiPandas } from 'react-icons/si';

/**
 * SKILLS DATA
 * 
 * Each skill has an authentic official software logo via `iconUrl`.
 * Transparent background - the icons fit and scale directly inside the card!
 */

export const skillCategories = [
  'All',
  'BI & Visualization',
  'Data & Databases',
  'Advanced Excel & MIS',
  'Process & Analytics'
];

export const skillsData = [
  {
    name: 'Power BI',
    category: 'BI & Visualization',
    subtitle: 'Business Intelligence',
    iconUrl: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/powerbi.svg',
    icon: (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor">
        <path d="M4 14.5a1.5 1.5 0 0 1 1.5-1.5h1A1.5 1.5 0 0 1 8 14.5v5A1.5 1.5 0 0 1 6.5 21h-1A1.5 1.5 0 0 1 4 19.5v-5zm5.5-5A1.5 1.5 0 0 1 11 8h1a1.5 1.5 0 0 1 1.5 1.5v10A1.5 1.5 0 0 1 12 21h-1a1.5 1.5 0 0 1-1.5-1.5v-10zm5.5-6A1.5 1.5 0 0 1 16.5 2h1A1.5 1.5 0 0 1 19 3.5v16a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-16z"/>
      </svg>
    )
  },
  {
    name: 'SQL',
    category: 'Data & Databases',
    subtitle: 'Database Querying',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    icon: <SiPostgresql className="w-[18px] h-[18px]" />
  },
  {
    name: 'Python',
    category: 'Data & Databases',
    subtitle: 'Analytics & Scripting',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    icon: <SiPython className="w-[18px] h-[18px]" />
  },
  {
    name: 'Advanced Excel',
    category: 'Advanced Excel & MIS',
    subtitle: 'Modeling & MIS',
    iconUrl: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/microsoft-excel.svg',
    icon: (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm1.8 15-1.8-3.1-1.8 3.1h-2l2.8-4.5L10.3 8h2l1.7 3 1.7-3h2l-2.7 4.5 2.8 4.5h-2.1zM13 9V3.5L18.5 9H13z"/>
      </svg>
    )
  },
  {
    name: 'Tableau',
    category: 'BI & Visualization',
    subtitle: 'Visual Analytics',
    iconUrl: 'https://cdn.jsdelivr.net/gh/selfhst/icons/svg/tableau.svg',
    icon: (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor">
        <path d="M11.4 1.5h1.2v3.8h-1.2V1.5zm-5 4.8h1.2v3.8H6.4V6.3zm10 0h1.2v3.8h-1.2V6.3zM1.5 11.4h3.8v1.2H1.5v-1.2zm17.2 0h3.8v1.2h-3.8v-1.2zm-7.3-3.8h1.2v7.6h-1.2V7.6zm-5 8.7h1.2v3.8H6.4v-3.8zm10 0h1.2v3.8h-1.2v-3.8zm-5 2.4h1.2v3.8h-1.2v-3.8z"/>
      </svg>
    )
  },
  {
    name: 'DAX Formulas',
    category: 'BI & Visualization',
    subtitle: 'Measures & Calculations',
    iconUrl: '/icons/dax.svg',
    icon: (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 7h6" />
        <path d="M7 4v16" />
        <path d="M13 10l6 6" />
        <path d="M19 10l-6 6" />
      </svg>
    )
  },
  {
    name: 'Power Query',
    category: 'Data & Databases',
    subtitle: 'M Code & ETL',
    iconUrl: '/icons/powerquery.svg',
    icon: (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 3 21 3 21 8" />
        <line x1="4" y1="20" x2="21" y2="3" />
        <polyline points="21 16 21 21 16 21" />
        <line x1="15" y1="15" x2="21" y2="21" />
        <line x1="4" y1="4" x2="9" y2="9" />
      </svg>
    )
  },
  {
    name: 'Spotfire',
    category: 'BI & Visualization',
    subtitle: 'TIBCO Dashboards',
    iconUrl: '/icons/spotfire.svg',
    icon: (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
        <circle cx="19" cy="9" r="1.5" fill="currentColor" />
        <circle cx="14" cy="14" r="1.5" fill="currentColor" />
        <circle cx="10" cy="10" r="1.5" fill="currentColor" />
      </svg>
    )
  },
  {
    name: 'Data Modeling',
    category: 'Data & Databases',
    subtitle: 'Star & Snowflake Schema',
    iconUrl: '/icons/datamodeling.svg',
    icon: (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="9" width="6" height="6" rx="1" fill="currentColor" />
        <rect x="2" y="2" width="5" height="5" rx="1" />
        <rect x="17" y="2" width="5" height="5" rx="1" />
        <rect x="2" y="17" width="5" height="5" rx="1" />
        <rect x="17" y="17" width="5" height="5" rx="1" />
        <line x1="7" y1="5" x2="9" y2="10" />
        <line x1="17" y1="5" x2="15" y2="10" />
        <line x1="7" y1="19" x2="9" y2="14" />
        <line x1="17" y1="19" x2="15" y2="14" />
      </svg>
    )
  },
  {
    name: 'Pandas & NumPy',
    category: 'Data & Databases',
    subtitle: 'Data Manipulation',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
    icon: <SiPandas className="w-[18px] h-[18px]" />
  },
  {
    name: 'MySQL',
    category: 'Data & Databases',
    subtitle: 'Relational Database',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    icon: <SiMysql className="w-[20px] h-[20px]" />
  },
  {
    name: 'Minitab',
    category: 'Process & Analytics',
    subtitle: 'Statistical Quality',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/minitab/minitab-original.svg',
    icon: (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 20h18" />
        <path d="M4 18c3 0 5-13 8-13s5 13 8 13" />
      </svg>
    )
  },
  {
    name: 'ETL Pipelines',
    category: 'Data & Databases',
    subtitle: 'Data Warehousing',
    iconUrl: '/icons/etlpipeline.svg',
    icon: (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
        <path d="M12 12v9" />
        <path d="m8 17 4 4 4-4" />
      </svg>
    )
  },
  {
    name: 'MIS Reporting',
    category: 'Advanced Excel & MIS',
    subtitle: 'Automated Reports',
    iconUrl: '/icons/misreporting.svg',
    icon: (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
        <path d="M13 14h4" />
        <path d="M13 17h2" />
      </svg>
    )
  },
  {
    name: 'Git & GitHub',
    category: 'Process & Analytics',
    subtitle: 'Version Control',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    icon: <SiGithub className="w-[18px] h-[18px]" />
  },
  {
    name: 'Jira Software',
    category: 'Process & Analytics',
    subtitle: 'Agile & Scrum',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
    icon: <SiJira className="w-[18px] h-[18px]" />
  },
  {
    name: 'Process Improvement',
    category: 'Process & Analytics',
    subtitle: 'Gap & Quality Analysis',
    iconUrl: '/icons/processimprovement.svg',
    icon: (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="m16 12-4-4-4 4" />
        <path d="M12 16V8" />
      </svg>
    )
  },
  {
    name: 'KPI Tracking',
    category: 'BI & Visualization',
    subtitle: 'Performance Metrics',
    iconUrl: '/icons/kpitracking.svg',
    icon: (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    )
  }
];

export const certificationsData = [
  {
    name: 'Introduction to Data Analytics Using Microsoft Power BI',
    issuer: 'ALISON'
  },
  {
    name: 'SQL Masterclass for Data Analytics',
    issuer: 'Udemy'
  },
  {
    name: 'Advanced Excel Course',
    issuer: 'Udemy'
  },
  {
    name: 'Korean TOPIK1 Level 1',
    issuer: 'The Language Network'
  }
];

export const languagesData = {
  languages: 'English (Fluent) • Korean (TOPIK Level 1)',
  availability: 'Open to relocation & remote opportunities (India & International)'
};
