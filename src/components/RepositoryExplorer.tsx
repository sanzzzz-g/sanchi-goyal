import { useState, useEffect, useMemo } from 'react';
import { fetchGitHubRepos, GitHubRepo } from '../services/githubService';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Search, Github, ExternalLink, Star, GitFork, RotateCw, FolderGit2, AlertCircle, ArrowUpRight } from 'lucide-react';

export function RepositoryExplorer() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFromCache, setIsFromCache] = useState(false);
  const [isFallback, setIsFallback] = useState(false);
  const [rateLimited, setRateLimited] = useState(false);

  // Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const [sortBy, setSortBy] = useState<'updated' | 'stars' | 'name'>('updated');

  const loadRepositories = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchGitHubRepos();
      setRepos(result.repos);
      setIsFromCache(result.isFromCache);
      setIsFallback(result.isFallback);
      setRateLimited(result.rateLimited);
    } catch (err: any) {
      setError(err?.message || 'Failed to load public repositories.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRepositories();
  }, []);

  // Compute available languages
  const availableLanguages = useMemo(() => {
    const langs = new Set<string>();
    repos.forEach((r) => {
      if (r.language) langs.add(r.language);
    });
    return ['All', ...Array.from(langs)];
  }, [repos]);

  // Filter & sort
  const filteredRepos = useMemo(() => {
    return repos
      .filter((repo) => {
        const matchesSearch =
          repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (repo.description && repo.description.toLowerCase().includes(searchQuery.toLowerCase()));

        const matchesLanguage =
          selectedLanguage === 'All' || repo.language === selectedLanguage;

        return matchesSearch && matchesLanguage;
      })
      .sort((a, b) => {
        if (sortBy === 'updated') {
          return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
        }
        if (sortBy === 'stars') {
          return b.stars - a.stars;
        }
        return a.name.localeCompare(b.name);
      });
  }, [repos, searchQuery, selectedLanguage, sortBy]);

  const formatDate = (dateString: string) => {
    try {
      const d = new Date(dateString);
      return d.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });
    } catch {
      return 'Recently';
    }
  };

  return (
    <section id="repositories" className="py-24 px-6 border-t border-[#EAE7F0] bg-[#FAF9F6]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-[#7A6EC2] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D9EAFB]" />
              <span>LIVE GITHUB INTEGRATION · PUBLIC REPOSITORIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#29283A]">
              Things I&apos;ve Built.
            </h2>
            <p className="text-base text-[#777487] leading-relaxed">
              Explore public code repositories fetched directly from GitHub with active commit histories, open-source pull requests, and live demos.
            </p>
          </div>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#29283A] bg-white hover:bg-[#FAF9F6] border border-[#EAE7F0] hover:border-[#DCD6FF] rounded-full transition-all shadow-soft self-start md:self-auto shrink-0"
          >
            <Github className="w-4 h-4" />
            <span>Visit @sanzzzz-g on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#7A6EC2]" />
          </a>
        </div>

        {/* Status / API notice strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-[#EAE7F0] text-xs font-mono text-[#777487] shadow-soft">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            <span>
              {repos.length} Public Repositories Found
            </span>
            {isFromCache && <span className="text-[#5A4CB5]">· Cached (15m TTL)</span>}
            {rateLimited && (
              <span className="text-[#D97706] flex items-center gap-1">
                · GitHub API Rate Limit reached (Showing verified sync)
              </span>
            )}
          </div>

          <button
            onClick={loadRepositories}
            disabled={loading}
            className="inline-flex items-center gap-1.5 text-[#5A4CB5] hover:underline disabled:opacity-50"
          >
            <RotateCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            <span>Refresh Sync</span>
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#777487]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search repositories by name or keyword..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#EAE7F0] rounded-2xl text-xs text-[#29283A] placeholder-[#777487] focus:outline-none focus:border-[#DCD6FF] focus:ring-2 focus:ring-[#DCD6FF]/40 transition-all font-sans"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Language filter pills */}
            <div className="flex items-center gap-1 p-1 bg-white border border-[#EAE7F0] rounded-2xl overflow-x-auto">
              {availableLanguages.slice(0, 5).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedLanguage(lang)}
                  className={`px-3 py-1 text-xs font-medium rounded-xl transition-all whitespace-nowrap ${
                    selectedLanguage === lang
                      ? 'bg-[#DCD6FF] text-[#29283A] font-semibold'
                      : 'text-[#777487] hover:text-[#29283A]'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e: any) => setSortBy(e.target.value)}
              className="px-3 py-2 bg-white border border-[#EAE7F0] rounded-2xl text-xs font-medium text-[#29283A] focus:outline-none focus:border-[#DCD6FF]"
            >
              <option value="updated">Recently Updated</option>
              <option value="stars">Most Stars</option>
              <option value="name">Alphabetical (A–Z)</option>
            </select>
          </div>
        </div>

        {/* Loading Skeletons */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className="p-6 rounded-3xl bg-white border border-[#EAE7F0] space-y-4 animate-pulse"
              >
                <div className="w-8 h-8 rounded-xl bg-[#FAF9F6]" />
                <div className="h-5 bg-[#FAF9F6] rounded w-3/4" />
                <div className="h-12 bg-[#FAF9F6] rounded w-full" />
                <div className="h-4 bg-[#FAF9F6] rounded w-1/2" />
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <div className="p-8 rounded-3xl bg-white border border-[#F8DCE8] text-center space-y-4 max-w-lg mx-auto">
            <AlertCircle className="w-8 h-8 text-[#DB2777] mx-auto" />
            <div className="space-y-1">
              <h3 className="text-base font-bold text-[#29283A]">Unable to reach GitHub API</h3>
              <p className="text-xs text-[#777487]">{error}</p>
            </div>
            <button
              onClick={loadRepositories}
              className="px-4 py-2 text-xs font-semibold text-[#29283A] bg-[#F8DCE8] hover:bg-[#F2C5D7] rounded-full transition-colors"
            >
              Retry Connection
            </button>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && filteredRepos.length === 0 && (
          <div className="p-12 rounded-3xl bg-white border border-[#EAE7F0] text-center space-y-3">
            <FolderGit2 className="w-8 h-8 text-[#777487] mx-auto opacity-50" />
            <h3 className="text-base font-semibold text-[#29283A]">No repositories match your filter</h3>
            <p className="text-xs text-[#777487]">
              Try adjusting your search terms or clearing the selected language filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedLanguage('All');
              }}
              className="text-xs font-mono text-[#5A4CB5] underline pt-1"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Repositories Cards Grid */}
        {!loading && !error && filteredRepos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRepos.map((repo) => (
              <div
                key={repo.id}
                className="p-6 rounded-3xl bg-white border border-[#EAE7F0] hover:border-[#DCD6FF] hover:shadow-soft-hover transition-all duration-300 flex flex-col justify-between space-y-5 group"
              >
                <div className="space-y-3">
                  {/* Top Bar: Icon & Language */}
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-xl bg-[#FAF9F6] border border-[#EAE7F0] text-[#7A6EC2] group-hover:scale-105 transition-transform">
                      <FolderGit2 className="w-4 h-4" />
                    </div>

                    {repo.language && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono text-[#29283A] bg-[#FAF9F6] border border-[#EAE7F0]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7A6EC2]" />
                        <span>{repo.language}</span>
                      </span>
                    )}
                  </div>

                  {/* Name & Description */}
                  <div className="space-y-1.5">
                    <h3 className="text-base font-bold text-[#29283A] group-hover:text-[#5A4CB5] transition-colors line-clamp-1">
                      {repo.name}
                    </h3>
                    <p className="text-xs text-[#777487] leading-relaxed line-clamp-3 min-h-[3rem]">
                      {repo.description || 'Public GitHub repository by Sanchi Goyal.'}
                    </p>
                  </div>

                  {/* Topics if available */}
                  {repo.topics && repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {repo.topics.slice(0, 3).map((topic) => (
                        <span
                          key={topic}
                          className="px-2 py-0.5 text-[10px] font-mono rounded-md bg-[#FAF9F6] text-[#777487]"
                        >
                          #{topic}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer: Stars, Forks, Date & Links */}
                <div className="pt-4 border-t border-[#EAE7F0] space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#777487] font-mono">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-[#D97706]" />
                        <span>{repo.stars}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="w-3.5 h-3.5 text-[#777487]" />
                        <span>{repo.forks}</span>
                      </span>
                    </div>

                    <span className="text-[11px]">{formatDate(repo.updatedAt)}</span>
                  </div>

                  <div className="flex items-center justify-between gap-2 pt-1">
                    <a
                      href={repo.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-semibold text-[#29283A] hover:text-[#5A4CB5] flex items-center gap-1 transition-colors"
                    >
                      <span>View Repository</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#7A6EC2]" />
                    </a>

                    {repo.homepageUrl && (
                      <a
                        href={repo.homepageUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-semibold text-[#5A4CB5] hover:underline flex items-center gap-1"
                        title="Live Demo"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
