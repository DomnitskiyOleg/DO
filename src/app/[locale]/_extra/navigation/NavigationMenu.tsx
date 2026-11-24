import { Anchor, Flex } from '@mantine/core';
import { getTranslations } from 'next-intl/server';

import { getNavigationItems } from '@/src/helpers';

import classes from './classes.module.css';

export async function NavigationMenu() {
    const t = await getTranslations();

    const items = getNavigationItems(t);

    return (
        <Flex direction="row" visibleFrom="md" wrap="nowrap" gap={{ md: 20, lg: 40 }}>
            {items.map((v) => (
                <Anchor key={v.id} fw={500} aria-label={v.name} className={classes.navigationItem} href={v.href}>
                    {v.name}
                </Anchor>
            ))}
        </Flex>
    );
}
