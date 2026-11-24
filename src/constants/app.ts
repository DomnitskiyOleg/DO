export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL as string;
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL as string;
export const YANDEX_METRIKA_ID = process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID;
export const IS_PRODUCTION = process.env.NEXT_PUBLIC_MODE === 'production';

export const LANGUAGES = {
    Ru: 'ru',
    En: 'en',
} as const;

// Контакты компании — замените на свои
export const PHONE = '+7 (000) 000-00-00';
export const EMAIL = 'info@example.com';
export const TG = '@example';
export const TG_HREF = 'https://t.me/example';
