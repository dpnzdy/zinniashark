export type Locale = 'en' | 'ko';

export const ui = {
  en: {
    home: 'ZINNIASHARK home', navigation: 'Main navigation', languages: 'Language',
    products: 'Products', support: 'Support', privacy: 'Privacy', contact: 'Contact',
    privacyPolicy: 'Privacy Policy', terms: 'Terms of Use',
    tagline: 'Simple software for keeping what matters.', rights: 'All rights reserved.',
  },
  ko: {
    home: 'ZINNIASHARK 홈', navigation: '주 메뉴', languages: '언어 선택',
    products: '제품', support: '지원', privacy: '개인정보', contact: '문의',
    privacyPolicy: '개인정보처리방침', terms: '이용약관',
    tagline: '소중한 것을 간직하는 심플한 소프트웨어.', rights: '모든 권리 보유.',
  },
} satisfies Record<Locale, Record<string, string>>;

export function localizedPath(path: string, locale: Locale): string {
  const base = path.replace(/^\/ko(?=\/|$)/, '') || '/';
  return locale === 'ko' ? `/ko${base}` : base;
}
