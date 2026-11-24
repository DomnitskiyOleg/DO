import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/carousel/styles.css';
import 'mantine-datatable/styles.css';

import { MantineProvider as BaseMantineProvider } from '@mantine/core';
import { DatesProvider } from '@mantine/dates';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import type { ReactNode } from 'react';

import { THEME } from './theme';

export const MantineProvider = ({ children }: { children: ReactNode }) => {
    return (
        <BaseMantineProvider
            withStaticClasses
            withGlobalClasses
            deduplicateCssVariables
            theme={THEME}
            defaultColorScheme="light"
        >
            <DatesProvider settings={{ consistentWeeks: true }}>
                <Notifications />
                <ModalsProvider>{children}</ModalsProvider>
            </DatesProvider>
        </BaseMantineProvider>
    );
};
