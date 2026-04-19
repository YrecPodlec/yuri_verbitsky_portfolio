export const LOCALES = {
    en: {
        label: 'English',
        flag: 'US',
    },
    ru: {
        label: 'Русский',
        flag: 'RU',
    },
    fr: {
        label: 'Français',
        flag: 'FR',
    },
    zh: {
        label: '中文',
        flag: 'CN',
    },
} as const;
export type Locale = keyof typeof LOCALES;