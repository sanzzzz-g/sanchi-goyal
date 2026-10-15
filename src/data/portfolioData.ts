export interface FeaturedProject {
  id: string;
  title: string;
  repoName: string;
  category: string;
  tagline: string;
  description: string;
  technologies: string[];
  language: string;
  stars: number;
  forks: number;
  updatedAt: string;
  liveDemoUrl: string | null;
  repoUrl: string;
  imagePath: string;
  accentColor: 'lavender' | 'powder' | 'blush' | 'peach';
  features: string[];
}

export interface PhilosophyCard {
  number: string;
  title: string;
  phase: string;
  quote: string;
  accent: string;
  badge: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  department: string;
  period: string;
  type: string;
  performedWork: string[];
  observedSystems: string[];
}

export const PERSONAL_INFO = {
  name: 'Sanchi Goyal',
  eyebrow: 'COMPUTER SCIENCE STUDENT · DEVELOPER · BUILDER',
  signatureHeading: "Hi, I'm Sanchi.",
  signaturePhrase: 'Curiosity, Compiled.',
  supportingPhrase: 'Ideas, Made Real.',
  description:
    'I build thoughtful software, explore interesting problems, and turn ideas into applications that make a difference.',
  aboutDetailed:
    "I'm Sanchi, a Computer Science and Engineering student at VIT Chennai. I enjoy exploring how technology works, building practical applications, and turning interesting problems into software. My work spans full-stack development, data-driven dashboards, and interactive digital experiences. I believe the best way to learn is to keep experimenting, building, and improving.",
  institution: 'Vellore Institute of Technology (VIT), Chennai',
  degree: 'B.Tech in Computer Science and Engineering',
  duration: 'August 2024 – May 2028',
  cgpa: '8.74 / 10.00',
  location: 'India',
  email: 'gsanchi21@gmail.com',
  github: 'https://github.com/sanzzzz-g',
  githubUsername: 'sanzzzz-g',
  linkedin: 'https://linkedin.com/in/sanchi-goyal',
  leetcode: 'https://leetcode.com/u/sanzzzz_g',
  leetcodeSolved: '109+',
  resumePath: '/resume.pdf',
  photoPath: '/images/sanchi.jpg',
};

export const PHILOSOPHY_CARDS: PhilosophyCard[] = [
  {
    number: '01',
    phase: 'Curiosity → Exploration',
    title: 'Exploring Fundamentals',
    quote:
      'I enjoy exploring new technologies, understanding how systems work, and learning by building.',
    accent: '#DCD6FF', // Lavender
    badge: 'Inquiry & Systems',
  },
  {
    number: '02',
    phase: 'Ideas → Impact',
    title: 'Translating Need into Code',
    quote:
      'From water-security platforms to power-grid intelligence, I enjoy translating complex problems into practical software.',
    accent: '#D9EAFB', // Powder Blue
    badge: 'Applied Solutions',
  },
  {
    number: '03',
    phase: 'Learning → Building',
    title: 'Iterative Implementation',
    quote:
      'Every project, coding challenge, and open-source contribution is an opportunity to learn something new and make something useful.',
    accent: '#F8DCE8', // Blush Pink
    badge: 'Continuous Growth',
  },
];

export const ABOUT_INFO_CARDS = [
  {
    title: 'Education',
    detail: 'B.Tech CSE, VIT Chennai (2024–2028)',
    desc: 'Maintaining an 8.74 CGPA with coursework in Data Structures, OOP, DBMS, OS, and Networks.',
    accent: '#DCD6FF',
  },
  {
    title: 'Software Engineering',
    detail: 'Full-Stack Architecture',
    desc: 'Building responsive React interfaces, robust Node.js/Express APIs, and relational/document databases.',
    accent: '#D9EAFB',
  },
  {
    title: 'Open-Source Contributions',
    detail: 'GSSoC 2026 Contributor',
    desc: 'Authored an incremental repository analysis cache feature to eliminate redundant code scans.',
    accent: '#F8DCE8',
  },
  {
    title: 'Projects & Experimentation',
    detail: 'Applied Systems & Analytics',
    desc: 'From water stress indices to distributed energy grids and algorithmic visualizers.',
    accent: '#F8E3D7',
  },
];

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: 'marathwada-water-stress-index',
    title: 'Marathwada Water Stress Index',
    repoName: 'marathwada-water-stress-index',
    category: 'Hydroclimatic ML & Water Security',
    tagline: 'District-Wise 3-Month Water Stress Monitoring & Forecasting Platform',
    description:
      'A research-driven hydroclimatic water stress monitoring and forecasting platform for Marathwada, Maharashtra, integrating rainfall, soil moisture, vegetation, land surface temperature, groundwater, and surface-water indicators to generate district-wise 3-month WSI forecasts, evaluate ML models, and simulate potential scenarios.',
    technologies: ['Python', 'Machine Learning', 'Hydroclimatic Analytics', 'Data Science', 'Netlify'],
    language: 'Python',
    stars: 0,
    forks: 0,
    updatedAt: '2026-10-14T14:59:29Z',
    liveDemoUrl: 'https://marathwada-water-stress-index.netlify.app',
    repoUrl: 'https://github.com/sanzzzz-g/marathwada-water-stress-index',
    imagePath: '/images/marathwada_wsi_cover_1792053621041.jpg',
    accentColor: 'powder',
    features: [
      'Multi-indicator hydroclimatic modeling (rainfall, soil moisture, NDVI, LST, groundwater)',
      'District-wise 3-month forward Water Stress Index (WSI) forecasting engine',
      'Interactive scenario simulations for precipitation deficits and reservoir depletion',
      'Evaluated predictive ML models across historical Marathwada hydroclimatic datasets',
    ],
  },
  {
    id: 'bloodbridge-ai',
    title: 'BloodBridge AI',
    repoName: 'BloodBridge-Ai',
    category: 'Healthcare Logistics & Predictive AI',
    tagline: 'Intelligent Blood Bank Management & Demand Forecasting Platform',
    description:
      'An AI-powered blood bank management platform featuring intelligent inventory tracking, expiry alerts, emergency blood request coordination, role-based access control, and ML-based blood demand forecasting.',
    technologies: ['TypeScript', 'React', 'Node.js', 'Machine Learning', 'Tailwind CSS', 'Vercel'],
    language: 'TypeScript',
    stars: 0,
    forks: 0,
    updatedAt: '2026-10-14T10:15:35Z',
    liveDemoUrl: 'https://blood-bridge-ai-nine.vercel.app',
    repoUrl: 'https://github.com/sanzzzz-g/BloodBridge-Ai',
    imagePath: '/images/bloodbridge_cover_1792053601628.jpg',
    accentColor: 'blush',
    features: [
      'Real-time blood stock inventory matrix with critical threshold and expiry alerts',
      'ML-driven demand forecasting based on regional trauma patterns and seasonal needs',
      'Emergency hospital donor coordination pipeline with role-based access control',
      'Live telemetry dashboard for rapid-response fulfillment and dispatch tracking',
    ],
  },
  {
    id: 'weather-aware-farm-decisions',
    title: 'Weather-Aware Farm Decisions',
    repoName: 'weather-aware-farm-decisions',
    category: 'Agricultural Decision Support',
    tagline: 'Resource-Aware Decision Framework for Smallholder Rice Farmers',
    description:
      'A resource-aware decision-support framework for smallholder rice farmers that evaluates weather warnings, resource availability, time constraints, and economic feasibility to recommend actionable agricultural decisions.',
    technologies: ['HTML5', 'JavaScript', 'Weather Analytics', 'Agricultural Economics', 'CSS3'],
    language: 'HTML',
    stars: 0,
    forks: 0,
    updatedAt: '2026-10-14T16:24:41Z',
    liveDemoUrl: null,
    repoUrl: 'https://github.com/sanzzzz-g/weather-aware-farm-decisions',
    imagePath: '/images/weather_farm_cover_1792053640730.jpg',
    accentColor: 'peach',
    features: [
      'Evaluates localized weather warnings against seasonal rice cultivation stage requirements',
      'Resource availability, labor, and time constraint optimization modeling',
      'Economic feasibility analysis for cost-effective agricultural interventions',
      'Actionable farm advisory schedule with risk scoring and contingency planning',
    ],
  },
  {
    id: 'chatterbox-chat',
    title: 'chatterbox-chat',
    repoName: 'chatterbox-chat',
    category: 'Real-Time Messaging & UI Architecture',
    tagline: 'Modern Conversational UI Engine with Dynamic Theme Architecture',
    description:
      'A chat-style interface and messaging engine built with TypeScript, featuring multi-theme visual customization, responsive layouts, and clean component architecture.',
    technologies: ['TypeScript', 'React', 'CSS Variables', 'Responsive UI'],
    language: 'TypeScript',
    stars: 0,
    forks: 0,
    updatedAt: '2026-10-14T13:11:19Z',
    liveDemoUrl: null,
    repoUrl: 'https://github.com/sanzzzz-g/chatterbox-chat',
    imagePath: '/images/project_chatterbox_1791982353810.jpg',
    accentColor: 'lavender',
    features: [
      'Engineered with modern TypeScript component architecture and strong type safety',
      'Multi-theme visual engine supporting instant aesthetic switching',
      'Realistic conversational UI with message bubbles, typing indicators, and timestamps',
      'Accessible keyboard navigation, focus states, and fluid responsive design',
    ],
  },
  {
    id: 'jalsuraksha',
    title: 'JalSuraksha',
    repoName: 'JalSuraksha',
    category: 'Water Security & Drought Management',
    tagline: 'AI-Powered Environmental Resilience Platform',
    description:
      'An AI-powered water-security platform featuring multi-format dataset ingestion, interactive dashboards, drought prediction, prediction history, and multi-dataset analysis.',
    technologies: ['TypeScript', 'React', 'Node.js', 'Supabase', 'Tailwind CSS', 'Chart.js'],
    language: 'TypeScript',
    stars: 1,
    forks: 0,
    updatedAt: '2026-05-08T17:19:08Z',
    liveDemoUrl: 'https://jalsuraksha-1.onrender.com',
    repoUrl: 'https://github.com/sanzzzz-g/JalSuraksha',
    imagePath: '/images/project_jalsuraksha_1791982354480.jpg',
    accentColor: 'powder',
    features: [
      'Multi-format environmental dataset ingestion (CSV, JSON, regional records)',
      'Predictive machine-learning model forecasting water stress index across quarters',
      'Historical trend audit dashboard with interactive reservoir storage tracking',
      'Role-based water conservation advisory alerts and analytics',
    ],
  },
  {
    id: 'bharat-grid-intelligence',
    title: 'Bharat Grid Intelligence',
    repoName: 'bharat-grid-intelligence',
    category: 'Power-Grid Monitoring & Risk Analysis',
    tagline: 'Full-Stack Power Grid Intelligence Dashboard for Bharat',
    description:
      'A power-grid monitoring dashboard featuring risk scoring across 20 Indian states, interactive mapping, analytics, and simulations for heatwaves, coal outages, and renewable-energy surges.',
    technologies: ['JavaScript', 'React', 'Leaflet.js', 'Node.js', 'Express', 'Chart.js'],
    language: 'JavaScript',
    stars: 1,
    forks: 0,
    updatedAt: '2026-05-13T09:32:08Z',
    liveDemoUrl: 'https://bharat-grid-intelligence-2.onrender.com/',
    repoUrl: 'https://github.com/sanzzzz-g/bharat-grid-intelligence',
    imagePath: '/images/project_bharat_grid_1791982353836.jpg',
    accentColor: 'lavender',
    features: [
      'Interactive geospatial risk mapping covering 20 Indian states with live node indicators',
      'Stress-test scenario simulations: extreme heatwave loads, coal supply bottlenecks, solar surge',
      'State-by-state stability and transmission outage vulnerability scoring',
      'Real-time telemetry chart visualizations with sub-50ms render performance',
    ],
  },
];

export const EXPERIENCE_DATA: ExperienceItem = {
  role: 'Systems Engineer Intern',
  organization: 'Northern Coalfields Limited (NCL)',
  department: 'Systems Department',
  period: 'May – June 2026',
  type: 'Vocational Engineering Internship (46 Days)',
  performedWork: [
    'Conducted a comprehensive IT asset inventory audit covering 1,906 existing PC and UPS units across 19 operational projects and corporate units.',
    'Assessed and documented requirements for 400 additional IT units scheduled for enterprise procurement.',
    'Audited deployed enterprise SAP ERP module access points and assisted in system documentation.',
  ],
  observedSystems: [
    'Gained hands-on operational exposure to enterprise IT infrastructure across mining operations.',
    'Observed large-scale biometric attendance architectures and access control synchronization.',
    'Studied enterprise cybersecurity infrastructure, network segmentation, and SAP ERP workflow pipelines.',
  ],
};

export const SKILL_GROUPS = [
  {
    category: 'Programming Languages',
    skills: ['Java', 'C++', 'C', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
    accent: '#DCD6FF',
  },
  {
    category: 'Frontend Engineering',
    skills: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
    accent: '#F8DCE8',
  },
  {
    category: 'Backend & Systems',
    skills: ['Node.js', 'Express.js', 'REST APIs'],
    accent: '#D9EAFB',
  },
  {
    category: 'Databases & Storage',
    skills: ['MongoDB', 'PostgreSQL', 'Supabase', 'SQL'],
    accent: '#F8E3D7',
  },
  {
    category: 'Tools & DevOps',
    skills: [
      'Git',
      'GitHub',
      'Docker',
      'VS Code',
      'CI/CD',
      'Agile / Scrum',
      'Unit Testing',
      'Debugging',
    ],
    accent: '#DCD6FF',
  },
  {
    category: 'Computer Science Foundations',
    skills: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming (OOP)',
      'Database Management Systems (DBMS)',
      'Operating Systems',
      'System Design',
    ],
    accent: '#D9EAFB',
  },
];

export const ACHIEVEMENTS_DATA = [
  {
    title: 'GSSoC 2026 Contributor',
    category: 'Open Source',
    description:
      'Contributed to GirlScript Summer of Code 2026, building and submitting pull requests to community repositories.',
    highlight: 'Open-Source Ecosystem',
    accent: '#DCD6FF',
  },
  {
    title: 'Incremental Repository Analysis Cache',
    category: 'Software Optimization',
    description:
      'Engineered an incremental analysis feature that caches file metadata across commits to eliminate redundant static analysis repository scans.',
    highlight: 'Performance Optimization',
    accent: '#D9EAFB',
  },
  {
    title: '109+ LeetCode Problems Solved',
    category: 'Algorithmic Problem-Solving',
    description:
      'Consistent algorithmic practice across trees, dynamic programming, graphs, binary search, and arrays on LeetCode.',
    highlight: '109+ Verified Solutions',
    link: 'https://leetcode.com/u/sanzzzz_g',
    accent: '#F8DCE8',
  },
  {
    title: 'Drone-Delivery Routing Engine',
    category: 'Hackathon Challenge',
    description:
      'Engineered a Python-based delivery route optimization engine for simulated drone fleets during a Goldman Sachs-affiliated hackathon.',
    highlight: 'Autonomous Routing Algorithm',
    accent: '#F8E3D7',
  },
];

export const RESEARCH_DATA = {
  sectionTitle: 'Exploring Beyond the Build.',
  statusBadge: 'Manuscript in preparation — not yet submitted or published',
  title:
    'Cloud-Based Automated Attendance Management System using AWS Rekognition and Serverless Architecture',
  summary:
    'A serverless architectural design for contactless institutional attendance monitoring utilizing computer vision facial verification, automated cloud ingestion pipelines, and event-driven logging.',
  architecturePipeline: [
    {
      step: '01. Ingestion',
      service: 'AWS S3',
      detail: 'Secure encrypted bucket receiving edge camera facial snapshot payloads with metadata tagging.',
    },
    {
      step: '02. Compute Trigger',
      service: 'AWS Lambda',
      detail: 'Event-driven serverless worker validating payload schema and initiating recognition job.',
    },
    {
      step: '03. Identity Verification',
      service: 'AWS Rekognition',
      detail: 'Facial search against pre-indexed student feature collection with confidence thresholding.',
    },
    {
      step: '04. Record Persistence',
      service: 'Amazon DynamoDB',
      detail: 'Single-digit millisecond latency attendance log entry with partition and sort keys.',
    },
    {
      step: '05. Telemetry & Alerting',
      service: 'Amazon CloudWatch',
      detail: 'Centralized observability, execution latency tracking, and operational failure alarms.',
    },
  ],
};

export const CERTIFICATIONS_DATA = [
  {
    title: 'Engineer AI Agents with Agent Development Kit (ADK)',
    issuer: 'Google Cloud',
    category: 'Generative AI & Agentic Workflows',
    date: 'Verified',
  },
  {
    title: 'Networking Basics',
    issuer: 'Cisco',
    category: 'Computer Networks & Protocols',
    date: 'Verified',
  },
  {
    title: 'The Basics of Google Cloud Compute Skill Badge',
    issuer: 'Google Cloud',
    category: 'Cloud Infrastructure & Virtualization',
    date: 'Verified',
  },
  {
    title: 'NPTEL: Wildlife Ecology',
    issuer: 'NPTEL',
    category: 'Environmental Systems',
    date: 'Certified',
  },
  {
    title: 'NPTEL: Education for Sustainable Development',
    issuer: 'NPTEL',
    category: 'Sustainability & Governance',
    date: 'Certified',
  },
];

export const EDUCATION_DATA = {
  institution: 'Vellore Institute of Technology, Vellore, India',
  degree: 'Bachelor of Technology in Computer Science and Engineering',
  duration: 'August 2024 – May 2028',
  cgpa: '8.74 / 10.00',
  coursework: [
    'Data Structures and Algorithms',
    'Object-Oriented Programming (Java / C++)',
    'Database Management Systems (DBMS)',
    'Operating Systems',
    'System Design',
    'Computer Networks',
    'Software Engineering Principles',
  ],
};
