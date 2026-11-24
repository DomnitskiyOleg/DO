import { defineRouting } from 'next-intl/routing';

import { LANGUAGES } from '../constants';

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: [LANGUAGES.Ru],

    // Used when no locale matches
    defaultLocale: LANGUAGES.Ru,
});
