import { Anchor, Box, Container, Divider, Flex, Grid, GridCol, Group, Image, Stack, Text } from '@mantine/core';
import { IconBrandTelegram, IconMailOpened, IconPhone } from '@tabler/icons-react';
import { getTranslations } from 'next-intl/server';

import { EMAIL, ICON_SIZE_XL, ICON_STROKE_SIZE, LOGO_WIDTH_LAYOUT, PHONE, TG, TG_HREF } from '@/src/constants';
import { getNavigationItems } from '@/src/helpers';

import classes from './classes.module.css';

export async function Footer() {
    const t = await getTranslations();

    const items = getNavigationItems(t);

    // Положите документы в public/documents и укажите пути
    const links = [
        { id: 1, name: t('Footer.agreement'), href: '#' },
        { id: 2, name: t('Footer.policy'), href: '#' },
    ];

    const contacts = [
        { id: 1, name: PHONE, href: `tel:${PHONE.replace(/[^\d+]/g, '')}`, icon: IconPhone, blank: false },
        { id: 2, name: TG, href: TG_HREF, icon: IconBrandTelegram, blank: true },
        { id: 3, name: EMAIL, href: `mailto:${EMAIL}`, icon: IconMailOpened, blank: false },
    ];

    return (
        <Box px="md" py={52} id="footer" className={classes.footer}>
            <Container p={0} size={1520}>
                <Grid columns={24} gap="xl" align="stretch">
                    <GridCol span={{ base: 24, lg: 12 }}>
                        <Flex gap="lg" direction="column" align={{ base: 'center', lg: 'start' }}>
                            <Image src="/logo/logo-dark.svg" w={LOGO_WIDTH_LAYOUT} h="auto" alt="logo" />
                            <Text c="gray.5" ta={{ base: 'center', lg: 'start' }} className={classes.text}>
                                {t('Footer.description')}
                            </Text>
                        </Flex>
                    </GridCol>
                    <GridCol span={{ base: 24, sm: 12, lg: 6 }}>
                        <Stack>
                            <Text c="gray.5" size="xl">
                                {t('Footer.navigation')}
                            </Text>
                            <Stack>
                                {items.map((v) => (
                                    <Anchor c="white" key={v.id} fw={500} size="lg" aria-label={v.name} href={v.href}>
                                        {v.name}
                                    </Anchor>
                                ))}
                            </Stack>
                        </Stack>
                    </GridCol>
                    <GridCol span={{ base: 24, sm: 12, lg: 6 }}>
                        <Stack>
                            <Text c="gray.5" size="xl">
                                {t('Footer.contacts')}
                            </Text>
                            <Stack>
                                {contacts.map((v) => {
                                    const Icon = v.icon;
                                    return (
                                        <Group c="white" key={v.id} align="center">
                                            <Icon stroke={ICON_STROKE_SIZE} size={ICON_SIZE_XL} />
                                            <Anchor c="white" href={v.href} target={v.blank ? '_blank' : undefined}>
                                                {v.name}
                                            </Anchor>
                                        </Group>
                                    );
                                })}
                            </Stack>
                        </Stack>
                    </GridCol>
                </Grid>
                <Divider my="xl" color="gray.5" />
                <Flex
                    align="center"
                    justify="space-between"
                    gap={{ base: 'md', sm: 'lg' }}
                    direction={{ base: 'column-reverse', lg: 'row' }}
                >
                    <Text c="gray.5">{t('Footer.rights')}</Text>
                    <Flex gap={{ base: 'md', sm: 'xl' }} align="center" direction={{ base: 'column', sm: 'row' }}>
                        {links.map((v) => (
                            <Anchor key={v.id} fw={500} c="gray.5" href={v.href} target="_blank" aria-label={v.name}>
                                {v.name}
                            </Anchor>
                        ))}
                    </Flex>
                </Flex>
            </Container>
        </Box>
    );
}
