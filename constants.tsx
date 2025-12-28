import { 
  Server, 
  Cloud, 
  Shield, 
  RefreshCcw, 
  Smartphone, 
  Terminal, 
  Activity, 
  Database,
  Code,
  Cpu,
  Globe
} from 'lucide-react';
import { Service, Project, Experience, SkillCategory, Certification } from './types';

export const NAVIGATION_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'CV / About', path: '/about' },
  { name: 'Certifications', path: '/certifications' },
  { name: 'Contact', path: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'm365-admin',
    title: 'Microsoft 365 Administration',
    description: 'Comprehensive management of your M365 tenant, ensuring security and efficiency.',
    icon: Cloud,
    bullets: [
      'User & Group Management',
      'License Optimization',
      'SharePoint & Teams Governance',
      'Security Policy Implementation'
    ],
    deliverables: ['Tenant Health Report', 'Configuration Documentation', 'Optimized Licensing']
  },
  {
    id: 'linux-hosting',
    title: 'Linux & Web Hosting',
    description: 'Reliable web infrastructure setup, monitoring, and management using Nginx and Apache.',
    icon: Server,
    bullets: [
      'Linux Server Administration',
      'Jenkins CI/CD Automation',
      'Nginx & Apache Configuration',
      'Linux/Windows OS Monitoring',
      'Web Scraper Hosting'
    ],
    deliverables: ['Server Setup', 'Monitoring Dashboard', 'Uptime Reports', 'CI/CD Pipelines']
  },
  {
    id: 'entra-id',
    title: 'Identity & Access (Entra ID)',
    description: 'Hybrid identity management and secure access control strategies.',
    icon: Shield,
    bullets: [
      'Azure AD Connect Health',
      'Conditional Access Policies',
      'MFA Enforcement',
      'SSO Integration'
    ],
    deliverables: ['Access Policy Report', 'SSO Configuration', 'Security Score Improvement']
  },
  {
    id: 'azure-hybrid',
    title: 'Azure & Virtualization',
    description: 'Managing hybrid server environments including AVD, VMware, and Azure Arc.',
    icon: Database,
    bullets: [
      'Azure Arc Deployment',
      'VMware vSphere Mgmt',
      'Azure Virtual Desktop',
      'Server Performance Tuning'
    ],
    deliverables: ['Architecture Diagram', 'Cost Analysis', 'Hybrid Connectivity Setup']
  },
  {
    id: 'intune',
    title: 'Endpoint Manager (Intune)',
    description: 'Modern device management for Windows, macOS, iOS, and Android.',
    icon: Smartphone,
    bullets: [
      'Autopilot Deployment',
      'Compliance Policies',
      'App Protection Policies',
      'Patch Management (MECM)'
    ],
    deliverables: ['Device Compliance Report', 'Autopilot Profiles', 'App Deployment Strategy']
  },
  {
    id: 'backup-dr',
    title: 'Backup & Recovery',
    description: 'Robust data protection using Veeam for Microsoft 365, Exchange, and Virtual Machines.',
    icon: RefreshCcw,
    bullets: [
      'Veeam Backup & Replication',
      'Disaster Recovery Testing',
      'Restore Operations',
      'Retention Policy Config'
    ],
    deliverables: ['Backup Strategy Doc', 'Restore Test Report', 'RPO/RTO Definition']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'local-llm',
    title: 'Secure Local LLM Deployment',
    summary: 'Deployed private AI models locally for secure data processing.',
    tags: ['AI', 'Python', 'Ollama', 'Hardware Acceleration'],
    date: '2025',
    challenge: 'Need to leverage Large Language Models (LLMs) for document analysis and automation without sending sensitive data to public cloud APIs.',
    solution: 'Configured and optimized local instances of Llama models using Ollama and Python, utilizing GPU hardware acceleration for efficient inference.',
    outcome: 'Enabled secure, offline AI capabilities for internal workflows, ensuring 100% data privacy while reducing API costs.'
  },
  {
    id: 'web-hosting-stack',
    title: 'High-Availability Web Hosting',
    summary: 'Architected a robust Linux-based web hosting environment using Nginx and Apache.',
    tags: ['Linux', 'Nginx', 'Apache', 'Web Hosting', 'Jenkins'],
    date: '2024',
    challenge: 'Required a stable and scalable web hosting environment to support multiple client websites with varying traffic loads.',
    solution: 'Deployed Linux servers configured with Nginx as a reverse proxy in front of Apache, implemented Jenkins for automated updates, and monitored OS health.',
    outcome: 'Achieved 99.9% uptime, improved page load speeds via caching, and established real-time alerts for server health.'
  },
  {
    id: 'data-scraper',
    title: 'Automated Data Extraction Engine',
    summary: 'Developed Python scrapers to gather market data and identify feed anomalies.',
    tags: ['Python', 'Automation', 'Web Scraping', 'APIs', 'Linux Hosting'],
    date: '2023 - 2024',
    challenge: 'Manual verification of RSS feeds, API endpoints, and website metadata was time-consuming and prone to human error.',
    solution: 'Built custom Python scripts using BeautifulSoup and Selenium hosted on specialized Linux instances, with integrity validation and automated reporting.',
    outcome: 'Reduced manual data verification time by 80% and proactively identified metadata anomalies before they affected client services.'
  },
  {
    id: 'internal-web-tools',
    title: 'Internal IT Management Portal',
    summary: 'Built a React-based web portal to streamline user account management.',
    tags: ['React JS', 'JavaScript', 'Web Development', 'Internal Tools'],
    date: '2022',
    challenge: 'The IT support team lacked a centralized interface for common tasks like user account creation and permission audits.',
    solution: 'Designed and developed a responsive internal website using React JS that interfaced with backend scripts to handle routine account operations.',
    outcome: 'Streamlined the onboarding process, reduced ticket resolution time for account requests, and improved operational efficiency.'
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'lutech',
    role: 'System Admin / Microsoft Specialist',
    company: 'Lutech (Tirana)',
    period: '20/01/2025 – Present',
    description: [
      'Manage hybrid identity using Microsoft Entra ID, Azure AD Connect, and on-prem Active Directory.',
      'Administer M365 services (Exchange, Teams, SharePoint) and hybrid server environments (AVD, VMware, AWS via Azure Arc).',
      'Manage Linux-based web hosting infrastructure using Nginx/Apache with Jenkins for automated deployments.',
      'Implement comprehensive monitoring for both Linux and Windows OS environments to ensure high availability.',
      'Automate admin tasks using PowerShell and Python; lead Exchange upgrades and Azure migrations.'
    ]
  },
  {
    id: 'revenued',
    role: 'IT Specialist',
    company: 'Revenued Albania',
    period: '08/04/2024 – 18/01/2025',
    description: [
      'Managed Google Workspace accounts and permissions.',
      'Administered Active Directory and Microsoft Admin Center (Group Policies, Licenses).',
      'Configured firewall restrictions to enhance security and compliance.'
    ]
  },
  {
    id: 'kalemi',
    role: 'Technical Support (Part-time)',
    company: 'Kalemi Code',
    period: '05/12/2022 – Present',
    description: [
      'Address client queries using Crisp and troubleshoot API/Feed anomalies.',
      'Conduct instructional sessions via Trafft/Google Meet.',
      'Manage internal Confluence documentation and public Help Center.'
    ]
  },
  {
    id: 'sisal',
    role: 'IT Help Desk',
    company: 'Sisal SpA',
    period: '30/11/2020 – 08/04/2024',
    description: [
      'Managed AD accounts, Exchange Server, and M365 licenses.',
      'Administered MECM and Intune for software deployment and device management.',
      'Developed internal tools using JavaScript/React JS and automated tasks with PowerShell.'
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  { category: 'Microsoft 365 & Identity', skills: ['M365 Admin', 'Exchange Online', 'Entra ID', 'Azure AD Connect', 'Teams Admin', 'SharePoint'] },
  { category: 'Azure & Infrastructure', skills: ['Azure Arc', 'Azure Virtual Desktop', 'VMware vSphere', 'Windows Server', 'Hyper-V'] },
  { category: 'Linux & Web Hosting', skills: ['Linux Admin', 'Jenkins CI/CD', 'Nginx', 'Apache', 'OS Monitoring', 'Web Hosting', 'SSL/TLS'] },
  { category: 'Automation & Dev', skills: ['PowerShell', 'Python', 'Jenkins', 'JavaScript', 'React JS', 'Web Scraping', 'Local LLMs'] }
];

export const CERTIFICATIONS: Certification[] = [
  { name: 'Microsoft Identity and Access Administrator (SC-300)', issuer: 'Microsoft', date: 'Planned 2026', status: 'Planned' },
  { name: 'Microsoft Azure Administrator (AZ-104)', issuer: 'Microsoft', date: 'Expected 2025', status: 'In Progress' },
  { name: 'Microsoft Azure Fundamentals (AZ-900)', issuer: 'Microsoft', date: '2025', status: 'Active' },
  { name: 'React - The Complete Guide (incl. Next.js, Redux)', issuer: 'Udemy', date: '2025', status: 'Active' },
  { name: 'Google IT Support Specialization', issuer: 'Coursera', date: '10/2022', status: 'Active' },
  { name: 'Aviatrix Certified Engineer - Multi-Cloud Network Associate', issuer: 'Aviatrix', date: '07/2022', status: 'Active' },
  { name: 'The Complete Javascript Course 2023', issuer: 'Udemy', date: '06/2022', status: 'Active' }
];

export const TOOL_LOGOS = [
  { name: 'Azure', icon: Cloud },
  { name: 'M365', icon: Activity },
  { name: 'Entra', icon: Shield },
  { name: 'Intune', icon: Smartphone },
  { name: 'Veeam', icon: RefreshCcw },
  { name: 'PowerShell', icon: Terminal },
  { name: 'Code', icon: Code },
];
