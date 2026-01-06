export const SITE_URL = (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '') || '';

export const absoluteUrl = (path: string) => {
  if (!path.startsWith('/')) return path;
  return SITE_URL ? `${SITE_URL}${path}` : '';
};

export const DEFAULT_SEO = {
  siteName: 'ARX STAR',
  twitterCard: 'summary_large_image',
  locale: 'es_ES',
};
