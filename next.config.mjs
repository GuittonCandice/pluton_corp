const repo = 'pluton_corp'
const isGithubPages = process.env.GITHUB_PAGES === 'true'
// false par défaut : domaine custom plutoncorp.fr (CNAME)
const useSubpath = process.env.GITHUB_PAGES_SUBPATH === 'true'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
  ...(isGithubPages &&
    useSubpath && {
      basePath: `/${repo}`,
      assetPrefix: `/${repo}/`,
      env: {
        NEXT_PUBLIC_BASE_PATH: `/${repo}`,
      },
    }),
}

export default nextConfig
