const repo = 'pluton_corp'
const isGithubPages = process.env.GITHUB_PAGES === 'true'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
  ...(isGithubPages && {
    basePath: `/${repo}`,
    assetPrefix: `/${repo}/`,
    env: {
      NEXT_PUBLIC_BASE_PATH: `/${repo}`,
    },
  }),
}

export default nextConfig
