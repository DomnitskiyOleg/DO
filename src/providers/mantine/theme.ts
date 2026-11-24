import { createTheme } from '@mantine/core';

export const THEME = createTheme({
    // Фирменная палитра: 10 оттенков от светлого к тёмному, основной — индекс 4
    colors: {
        brand: [
            '#E7F5FF',
            '#D0EBFF',
            '#A5D8FF',
            '#4DABF7',
            '#228BE6', //main
            '#1C7ED6',
            '#1971C2',
            '#1864AB',
            '#0F4C81',
            '#08304F',
        ],
    },
    primaryColor: 'brand',
    primaryShade: {
        dark: 4,
        light: 4,
    },
    defaultRadius: 'md',
    defaultGradient: {
        from: 'brand.4',
        to: 'brand.3',
        deg: 45,
    },
});
