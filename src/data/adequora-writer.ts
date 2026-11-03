// Confirmed release information from the Adequora Writer product website.
// Update these values together when a new Store package is published.
const site = 'https://dpnzdy.github.io/adequora-writer/';
export const writer = {
  name: 'Adequora Writer',
  version: '1.0.1.0',
  releaseDate: '2026-11-03',
  store: 'https://apps.microsoft.com/detail/9NKD9SB9HXMM',
  email: 'dpnzdy@zinniashark.com',
  site,
  download: `${site}download.html`,
  guide: `${site}guide.html`,
  installation: `${site}installation.html`,
  troubleshooting: `${site}troubleshooting.html`,
  releases: `${site}releases.html`,
  privacy: `${site}app-privacy.html`,
  sample: `${site}docs/04_Adequora_Writer_글과_자료를_한_문서에.html`,
  screenshot: '/images/adequora-writer-screen.png',
  icon: '/images/adequora-writer-icon.webp',
} as const;
