export interface GitHubRepo {
  id: number;
  name: string;
  fullName: string;
  description: string | null;
  language: string | null;
  stars: number;
  forks: number;
  updatedAt: string;
  topics: string[];
  repoUrl: string;
  homepageUrl: string | null;
  isFork: boolean;
}

const CACHE_KEY = 'sanchi_portfolio_github_repos_v4';
const CACHE_TTL_MS = 15 * 60 * 1000; // 15 minutes

// Verified fallback repository data reflecting current live GitHub activity (October 2026)
export const VERIFIED_FALLBACK_REPOS: GitHubRepo[] = [
  {
    id: 1419383423,
    name: 'weather-aware-farm-decisions',
    fullName: 'sanzzzz-g/weather-aware-farm-decisions',
    description:
      'A resource-aware decision-support framework for smallholder rice farmers that evaluates weather warnings, resource availability, time constraints, and economic feasibility to recommend actionable agricultural decisions.',
    language: 'HTML',
    stars: 0,
    forks: 0,
    updatedAt: '2026-10-14T16:24:41Z',
    topics: ['agricultural-decision-support', 'weather-analytics', 'farm-management', 'rice-farming'],
    repoUrl: 'https://github.com/sanzzzz-g/weather-aware-farm-decisions',
    homepageUrl: null,
    isFork: false,
  },
  {
    id: 1419256348,
    name: 'sanchi-goyal',
    fullName: 'sanzzzz-g/sanchi-goyal',
    description:
      'My personal portfolio showcasing my projects, technical skills, open-source contributions, and journey as a Computer Science student and software developer. Built with a passion for turning curiosity into meaningful software. Curiosity, Compiled. Ideas, Made Real.',
    language: 'TypeScript',
    stars: 0,
    forks: 0,
    updatedAt: '2026-10-14T15:24:22Z',
    topics: ['portfolio', 'react', 'typescript', 'tailwind-css', 'vite'],
    repoUrl: 'https://github.com/sanzzzz-g/sanchi-goyal',
    homepageUrl: null,
    isFork: false,
  },
  {
    id: 1418992232,
    name: 'marathwada-water-stress-index',
    fullName: 'sanzzzz-g/marathwada-water-stress-index',
    description:
      'A research-driven hydroclimatic water stress monitoring and forecasting platform for Marathwada, Maharashtra, integrating rainfall, soil moisture, vegetation, land surface temperature, groundwater, and surface-water indicators to generate district-wise 3-month WSI forecasts, evaluate ML models, analyze water stress trends, and simulate potential scenarios.',
    language: 'Python',
    stars: 0,
    forks: 0,
    updatedAt: '2026-10-14T14:59:29Z',
    topics: ['water-stress-index', 'hydroclimate', 'drought-monitoring', 'marathwada', 'python', 'machine-learning'],
    repoUrl: 'https://github.com/sanzzzz-g/marathwada-water-stress-index',
    homepageUrl: 'https://marathwada-water-stress-index.netlify.app',
    isFork: false,
  },
  {
    id: 1418950978,
    name: 'chatterbox-chat',
    fullName: 'sanzzzz-g/chatterbox-chat',
    description:
      'A real-time chat interface and conversational UI engine built with TypeScript, featuring multi-theme visual customization, responsive layouts, and clean component architecture.',
    language: 'TypeScript',
    stars: 0,
    forks: 0,
    updatedAt: '2026-10-14T13:11:19Z',
    topics: ['chat-app', 'typescript', 'conversational-ui', 'theme-engine', 'react'],
    repoUrl: 'https://github.com/sanzzzz-g/chatterbox-chat',
    homepageUrl: null,
    isFork: false,
  },
  {
    id: 1418395948,
    name: 'BloodBridge-Ai',
    fullName: 'sanzzzz-g/BloodBridge-Ai',
    description:
      '🩸 BloodBridge AI — An AI-powered blood bank management platform featuring intelligent inventory tracking, expiry alerts, emergency blood request coordination, role-based access control, and ML-based blood demand forecasting.',
    language: 'TypeScript',
    stars: 0,
    forks: 0,
    updatedAt: '2026-10-14T10:15:35Z',
    topics: ['healthcare-ai', 'blood-bank-management', 'react', 'typescript', 'predictive-ml'],
    repoUrl: 'https://github.com/sanzzzz-g/BloodBridge-Ai',
    homepageUrl: 'https://blood-bridge-ai-nine.vercel.app',
    isFork: false,
  },
  {
    id: 1365577904,
    name: 'marathwada-drought-wsi',
    fullName: 'sanzzzz-g/marathwada-drought-wsi',
    description:
      'Marathwada Drought Early Warning and Water Stress Index (WSI) calculation model and analytical notebooks (2003–2024).',
    language: 'Python',
    stars: 0,
    forks: 1,
    updatedAt: '2026-10-10T13:39:42Z',
    topics: ['drought-analysis', 'python', 'geospatial', 'data-science', 'wsi-modeling'],
    repoUrl: 'https://github.com/sanzzzz-g/marathwada-drought-wsi',
    homepageUrl: null,
    isFork: false,
  },
  {
    id: 1242604411,
    name: 'lead-management-api',
    fullName: 'sanzzzz-g/lead-management-api',
    description:
      'Built a REST API for lead management using Node.js & Express. Supports POST /leads (create), GET /leads (fetch all), and PATCH /leads/:id (update status). JSON file used for persistence. Includes input validation, error handling, and a README with setup instructions.',
    language: 'JavaScript',
    stars: 1,
    forks: 0,
    updatedAt: '2026-05-18T17:03:53Z',
    topics: ['nodejs', 'express', 'rest-api', 'backend', 'lead-management'],
    repoUrl: 'https://github.com/sanzzzz-g/lead-management-api',
    homepageUrl: null,
    isFork: false,
  },
  {
    id: 1240460043,
    name: 'adk-multi-agent-codelab',
    fullName: 'sanzzzz-g/adk-multi-agent-codelab',
    description:
      'Building AI Agents with Google ADK — from single agents to multi-agent systems using Gemini and Agent Development Kit.',
    language: 'Python',
    stars: 0,
    forks: 0,
    updatedAt: '2026-05-16T06:47:37Z',
    topics: ['google-adk', 'ai-agents', 'gemini-api', 'python', 'multi-agent'],
    repoUrl: 'https://github.com/sanzzzz-g/adk-multi-agent-codelab',
    homepageUrl: null,
    isFork: false,
  },
  {
    id: 1176014273,
    name: 'bharat-grid-intelligence',
    fullName: 'sanzzzz-g/bharat-grid-intelligence',
    description:
      '⚡ Full-stack power grid intelligence dashboard for Bharat — real-time monitoring, scenario simulation, risk scoring & renewable analytics | React + Node.js + Leaflet + Chart.js',
    language: 'JavaScript',
    stars: 1,
    forks: 0,
    updatedAt: '2026-05-13T09:32:08Z',
    topics: ['smart-grid', 'leaflet', 'power-monitoring', 'risk-analysis', 'react'],
    repoUrl: 'https://github.com/sanzzzz-g/bharat-grid-intelligence',
    homepageUrl: 'https://bharat-grid-intelligence-2.onrender.com/',
    isFork: false,
  },
  {
    id: 1019891167,
    name: 'java',
    fullName: 'sanzzzz-g/java',
    description:
      'Core Java and Object-Oriented Programming implementations, design patterns, and algorithmic problem-solving exercises.',
    language: 'Java',
    stars: 1,
    forks: 0,
    updatedAt: '2026-05-12T14:06:37Z',
    topics: ['java', 'dsa', 'oop', 'algorithms', 'problem-solving'],
    repoUrl: 'https://github.com/sanzzzz-g/java',
    homepageUrl: null,
    isFork: false,
  },
  {
    id: 1229903393,
    name: 'JalSuraksha',
    fullName: 'sanzzzz-g/JalSuraksha',
    description:
      '💧 JalSuraksha is an AI-powered water security & drought management platform that lets users upload regional water datasets 📂, visualize insights through interactive dashboards 📊, and generate drought predictions 🤖 to support smarter water resource management 🌍.',
    language: 'TypeScript',
    stars: 1,
    forks: 0,
    updatedAt: '2026-05-08T17:19:08Z',
    topics: ['water-security', 'drought-prediction', 'react', 'supabase', 'machine-learning'],
    repoUrl: 'https://github.com/sanzzzz-g/JalSuraksha',
    homepageUrl: 'https://jalsuraksha-1.onrender.com',
    isFork: false,
  },
  {
    id: 1121714781,
    name: 'Tourism',
    fullName: 'sanzzzz-g/Tourism',
    description:
      'A responsive multi-page tourism website featuring destination showcases, tour packages, and an interactive reservation contact form.',
    language: 'HTML',
    stars: 2,
    forks: 0,
    updatedAt: '2025-12-28T12:03:10Z',
    topics: ['tourism', 'responsive-design', 'bootstrap', 'travel', 'html5'],
    repoUrl: 'https://github.com/sanzzzz-g/Tourism',
    homepageUrl: 'https://steady-flan-9e7803.netlify.app/',
    isFork: false,
  },
  {
    id: 1014126722,
    name: 'Test_lang',
    fullName: 'sanzzzz-g/Test_lang',
    description:
      'Programming language exploration, lexical analysis, and parser verification tests in Java.',
    language: 'Java',
    stars: 1,
    forks: 0,
    updatedAt: '2025-07-15T18:21:08Z',
    topics: ['java', 'compiler-design', 'parsers', 'language-engineering'],
    repoUrl: 'https://github.com/sanzzzz-g/Test_lang',
    homepageUrl: null,
    isFork: false,
  },
  {
    id: 1011796002,
    name: 'sanzzzz-g',
    fullName: 'sanzzzz-g/sanzzzz-g',
    description: 'Special configuration and profile repository for Sanchi Goyal (@sanzzzz-g).',
    language: 'Markdown',
    stars: 1,
    forks: 0,
    updatedAt: '2026-05-12T14:17:25Z',
    topics: ['github-profile', 'readme'],
    repoUrl: 'https://github.com/sanzzzz-g/sanzzzz-g',
    homepageUrl: null,
    isFork: false,
  },
];

export async function fetchGitHubRepos(forceRefresh: boolean = false): Promise<{
  repos: GitHubRepo[];
  isFromCache: boolean;
  isFallback: boolean;
  rateLimited: boolean;
}> {
  // If forceRefresh, clear cache first
  if (forceRefresh) {
    try {
      localStorage.removeItem(CACHE_KEY);
    } catch {
      // ignore
    }
  } else {
    // Check localStorage cache
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const { timestamp, data } = JSON.parse(cached);
        if (Date.now() - timestamp < CACHE_TTL_MS && Array.isArray(data) && data.length > 0) {
          return {
            repos: data,
            isFromCache: true,
            isFallback: false,
            rateLimited: false,
          };
        }
      }
    } catch {
      // ignore cache read issues
    }
  }

  try {
    const response = await fetch(
      'https://api.github.com/users/sanzzzz-g/repos?sort=updated&per_page=100',
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
      }
    );

    if (response.status === 403 || response.status === 429) {
      // GitHub rate limited
      return {
        repos: VERIFIED_FALLBACK_REPOS,
        isFromCache: false,
        isFallback: true,
        rateLimited: true,
      };
    }

    if (!response.ok) {
      throw new Error(`GitHub API returned status ${response.status}`);
    }

    const rawData = await response.json();

    if (!Array.isArray(rawData)) {
      throw new Error('Unexpected GitHub API response format');
    }

    const parsedRepos: GitHubRepo[] = rawData.map((r: any) => ({
      id: r.id,
      name: r.name,
      fullName: r.full_name,
      description: r.description || getVerifiedDescription(r.name),
      language: r.language || (r.name === 'sanzzzz-g' ? 'Markdown' : 'Code'),
      stars: r.stargazers_count ?? 0,
      forks: r.forks_count ?? 0,
      updatedAt: r.updated_at,
      topics:
        Array.isArray(r.topics) && r.topics.length > 0
          ? r.topics
          : getVerifiedTopics(r.name),
      repoUrl: r.html_url,
      homepageUrl:
        r.homepage && r.homepage.trim().length > 0
          ? r.homepage.trim()
          : getVerifiedHomepage(r.name),
      isFork: Boolean(r.fork),
    }));

    // Cache the good response
    try {
      localStorage.setItem(
        CACHE_KEY,
        JSON.stringify({
          timestamp: Date.now(),
          data: parsedRepos,
        })
      );
    } catch {
      // ignore cache write issue
    }

    return {
      repos: parsedRepos,
      isFromCache: false,
      isFallback: false,
      rateLimited: false,
    };
  } catch {
    return {
      repos: VERIFIED_FALLBACK_REPOS,
      isFromCache: false,
      isFallback: true,
      rateLimited: false,
    };
  }
}

// Helpers for repos with empty descriptions or extra topics on GitHub
function getVerifiedDescription(repoName: string): string | null {
  const match = VERIFIED_FALLBACK_REPOS.find(
    (r) => r.name.toLowerCase() === repoName.toLowerCase()
  );
  return match ? match.description : null;
}

function getVerifiedTopics(repoName: string): string[] {
  const match = VERIFIED_FALLBACK_REPOS.find(
    (r) => r.name.toLowerCase() === repoName.toLowerCase()
  );
  return match ? match.topics : [];
}

function getVerifiedHomepage(repoName: string): string | null {
  const match = VERIFIED_FALLBACK_REPOS.find(
    (r) => r.name.toLowerCase() === repoName.toLowerCase()
  );
  return match ? match.homepageUrl : null;
}
