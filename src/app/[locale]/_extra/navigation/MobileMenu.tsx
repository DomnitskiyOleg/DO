'use client';

import { useMemo } from 'react';
import { Anchor, Burger, Drawer, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useTranslations } from 'next-intl';

import { getNavigationItems } from '@/src/helpers';

export function MobileMenu() {
    const [opened, { toggle, close }] = useDisclosure();

    const t = useTranslations();

    const items = useMemo(() => getNavigationItems(t), [t]);

    return (
        <>
            <Burger opened={opened} hiddenFrom="md" onClick={toggle} aria-label="Toggle navigation" />
            <Drawer
                opened={opened}
                onClose={close}
                size="100%"
                transitionProps={{ transition: 'slide-up', duration: 150, timingFunction: 'linear' }}
            >
                <Stack pt={{ base: 'md', md: 'xl' }}>
                    {items.map((v) => (
                        <Anchor key={v.id} fw={500} size="md" onClick={close} aria-label={v.name} href={v.href}>
                            {v.name}
                        </Anchor>
                    ))}
                </Stack>
            </Drawer>
        </>
    );
}
