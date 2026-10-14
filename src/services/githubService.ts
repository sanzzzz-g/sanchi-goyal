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

const CACHE_KEY = 'sanchi_portfolio_github_repos_v2';
const CACHE_TTL_MS = 15 * 60 * 1000; // 15 minutes

// Verified fallback repository data reflecting actual GitHub activity
export const VERIFIED_FALLBACK_REPOS: GitHubRepo[] = [
  {
    id: 101,
    name: 'JalSuraksha',
    fullName: 'sanzzzz-g/JalSuraksha',
    description:
      '💧 JalSuraksha is an AI-powered water security & drought management platform that lets users upload regional water datasets, visualize insights through interactive dashboards, and generate drought predictions.',
    language: 'TypeScript',
    stars: 1,
    forks: 0,
    updatedAt: '2026-03-28T10:00:00Z',
    topics: ['water-security', 'drought-prediction', 'react', 'supabase', 'machine-learning'],
    repoUrl: 'https://github.com/sanzzzz-g/JalSuraksha',
    homepageUrl: 'https://jalsuraksha-1.onrender.com',
    isFork: false,
  },
  {
    id: 102,
    name: 'bharat-grid-intelligence',
    fullName: 'sanzzzz-g/bharat-grid-intelligence',
    description:
      '⚡ Full-stack power grid intelligence dashboard for Bharat — real-time monitoring, scenario simulation, risk scoring & renewable analytics | React + Node.js + Leaflet + Chart.js',
    language: 'JavaScript',
    stars: 1,
    forks: 0,
    updatedAt: '2026-03-24T12:00:00Z',
    topics: ['smart-grid', 'leaflet', 'power-monitoring', 'risk-analysis', 'react'],
    repoUrl: 'https://github.com/sanzzzz-g/bharat-grid-intelligence',
    homepageUrl: 'https://bharat-grid-intelligence.netlify.app',
    isFork: false,
  },
  {
    id: 103,
    name: 'BloodBridge-Ai',
    fullName: 'sanzzzz-g/BloodBridge-Ai',
    description:
      '🩸 BloodBridge AI — An AI-powered blood bank management platform featuring intelligent inventory tracking, expiry alerts, emergency blood request coordination, and ML-based blood demand forecasting.',
    language: 'TypeScript',
    stars: 1,
    forks: 0,
    updatedAt: '2026-03-18T14:30:00Z',
    topics: ['healthcare-ai', 'react', 'typescript', 'fullstack'],
    repoUrl: 'https://github.com/sanzzzz-g/BloodBridge-Ai',
    homepageUrl: 'https://blood-bridge-ai-nine.vercel.app',
    isFork: false,
  },
  {
    id: 104,
    name: 'CHATTERBOX',
    fullName: 'sanzzzz-g/CHATTERBOX',
    description:
      'A chat-style interface with a custom CSS theme engine supporting seven switchable visual themes without page reload.',
    language: 'React / CSS',
    stars: 1,
    forks: 0,
    updatedAt: '2026-02-14T08:00:00Z',
    topics: ['chat-ui', 'theme-engine', 'css3', 'react'],
    repoUrl: 'https://github.com/sanzzzz-g/CHATTERBOX',
    homepageUrl: 'https://chatterbox-blush.vercel.app',
    isFork: false,
  },
  {
    id: 105,
    name: 'Tourism',
    fullName: 'sanzzzz-g/Tourism',
    description:
      'A responsive multi-page tourism website featuring destination pages, tour packages, and an interactive contact form.',
    language: 'HTML / Bootstrap',
    stars: 2,
    forks: 0,
    updatedAt: '2026-01-20T09:00:00Z',
    topics: ['tourism', 'responsive-design', 'bootstrap', 'travel'],
    repoUrl: 'https://github.com/sanzzzz-g/Tourism',
    homepageUrl: 'https://steady-flan-9e7803.netlify.app/',
    isFork: false,
  },
  {
    id: 106,
    name: 'marathwada-drought-wsi',
    fullName: 'sanzzzz-g/marathwada-drought-wsi',
    description:
      'Marathwada Drought Early Warning and Water Stress Index (WSI) calculation model and analytical notebooks (2003–2024).',
    language: 'Python',
    stars: 0,
    forks: 0,
    updatedAt: '2026-03-12T16:00:00Z',
    topics: ['drought-analysis', 'python', 'geospatial', 'data-science'],
    repoUrl: 'https://github.com/sanzzzz-g/marathwada-drought-wsi',
    homepageUrl: null,
    isFork: false,
  },
  {
    id: 107,
    name: 'adk-multi-agent-codelab',
    fullName: 'sanzzzz-g/adk-multi-agent-codelab',
    description:
      'Building AI Agents with Google ADK — from single agents to multi-agent orchestrations using Gemini and Agent Development Kit.',
    language: 'Python',
    stars: 0,
    forks: 0,
    updatedAt: '2026-03-05T11:00:00Z',
    topics: ['google-adk', 'ai-agents', 'gemini-api', 'python'],
    repoUrl: 'https://github.com/sanzzzz-g/adk-multi-agent-codelab',
    homepageUrl: null,
    isFork: false,
  },
  {
    id: 108,
    name: 'lead-management-api',
    fullName: 'sanzzzz-g/lead-management-api',
    description:
      'REST API for lead management built with Node.js & Express. Supports POST /leads, GET /leads, PATCH /leads/:id with input validation and clean error handling.',
    language: 'JavaScript',
    stars: 1,
    forks: 0,
    updatedAt: '2026-02-28T15:00:00Z',
    topics: ['nodejs', 'express', 'rest-api', 'backend'],
    repoUrl: 'https://github.com/sanzzzz-g/lead-management-api',
    homepageUrl: null,
    isFork: false,
  },
  {
    id: 109,
    name: 'java',
    fullName: 'sanzzzz-g/java',
    description:
      'Core Java and Object-Oriented Programming implementations, design patterns, and algorithmic problem-solving exercises.',
    language: 'Java',
    stars: 1,
    forks: 0,
    updatedAt: '2026-01-15T09:00:00Z',
    topics: ['java', 'dsa', 'oop', 'algorithms'],
    repoUrl: 'https://github.com/sanzzzz-g/java',
    homepageUrl: null,
    isFork: false,
  },
];

export async function fetchGitHubRepos(): Promise<{
  repos: GitHubRepo[];
  isFromCache: boolean;
  isFallback: boolean;
  rateLimited: boolean;
}> {
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

    // Filter out config repos if description is empty and name is username
    const parsedRepos: GitHubRepo[] = rawData
      .filter((r: any) => r.name !== 'sanzzzz-g')
      .map((r: any) => ({
        id: r.id,
        name: r.name,
        fullName: r.full_name,
        description: r.description || getVerifiedDescription(r.name),
        language: r.language || 'Code',
        stars: r.stargazers_count ?? 0,
        forks: r.forks_count ?? 0,
        updatedAt: r.updated_at,
        topics: Array.isArray(r.topics) && r.topics.length > 0 ? r.topics : getVerifiedTopics(r.name),
        repoUrl: r.html_url,
        homepageUrl: r.homepage && r.homepage.trim().length > 0 ? r.homepage : getVerifiedHomepage(r.name),
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

// Helpers for repos with empty descriptions on GitHub
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
