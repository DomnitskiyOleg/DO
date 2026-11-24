import type { useTranslations } from 'next-intl';

type Translator = ReturnType<typeof useTranslations>;

// Пункты меню — якоря на id секций страницы
export function getNavigationItems(t: Translator) {
    return [
        { id: 1, name: t('navigation.steps'), href: '#steps' },
        { id: 2, name: t('navigation.faq'), href: '#faq' },
    ];
}
