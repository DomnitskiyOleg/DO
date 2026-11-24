import './_extra/global.css';

import { ReactNode } from 'react';
import {
    ActionIcon,
    Anchor,
    AppShell,
    AppShellFooter,
    AppShellHeader,
    AppShellMain,
    Container,
    Group,
    Image,
    Stack,
    Text,
} from '@mantine/core';
import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';
import { IconBrandTelegram, IconMail } from '@tabler/icons-react';
import type { Metadata } from 'next';
import Script from 'next/script';
import { NextIntlClientProvider } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import {
    BASE_URL,
    EMAIL,
    HEADER_HEIGHT,
    ICON_SIZE_LG,
    ICON_STROKE_SIZE,
    LOGO_WIDTH_LAYOUT,
    PHONE,
    TG_HREF,
    YANDEX_METRIKA_ID,
} from '@/src/constants';
import { routing } from '@/src/i18n/routing';
import { MantineProvider } from '@/src/providers/mantine';

import { Footer, MobileMenu, NavigationMenu } from './_extra';

import classes from './_extra/classes.module.css';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Meta' });

    return {
        metadataBase: BASE_URL ? new URL(BASE_URL) : undefined,
        title: t('title'),
        description: t('description'),
        // Добавьте images: { url: '/share/share.png', width: 1200, height: 630 } для превью в соцсетях
        openGraph: { title: t('title'), description: t('description') },
    };
}

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
    children,
    params,
}: {
    children: ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    return (
        <html lang={locale} {...mantineHtmlProps}>
            <head>
                <ColorSchemeScript />
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                <link
                    rel="preload"
                    href="/fonts/inter-latin.woff2"
                    as="font"
                    type="font/woff2"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    href="/fonts/inter-cyrillic.woff2"
                    as="font"
                    type="font/woff2"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    href="/fonts/geologica-latin.woff2"
                    as="font"
                    type="font/woff2"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    href="/fonts/geologica-cyrillic.woff2"
                    as="font"
                    type="font/woff2"
                    crossOrigin="anonymous"
                />
                {YANDEX_METRIKA_ID && (
                    <Script id="yandex-metrika" strategy="afterInteractive">
                        {`
                            (function(m,e,t,r,i,k,a){
                                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                                m[i].l=1*new Date();
                                for (var j = 0; j < document.scripts.length; j++) {
                                    if (document.scripts[j].src === r) { return; }
                                }
                                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
                            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js', 'ym');

                            ym(${YANDEX_METRIKA_ID}, 'init', {
                                webvisor: true,
                                clickmap: true,
                                accurateTrackBounce: true,
                                trackLinks: true
                            });
                        `}
                    </Script>
                )}
            </head>
            <body>
                <MantineProvider>
                    <NextIntlClientProvider locale={locale}>
                        <AppShell header={{ height: HEADER_HEIGHT }} className={classes.container} padding="md">
                            <AppShellHeader px="md" id="header" zIndex={99}>
                                <Container h="100%" p={0} size={1520}>
                                    <Group
                                        justify="space-between"
                                        h="100%"
                                        align="center"
                                        gap="xs"
                                        wrap="nowrap"
                                        flex={1}
                                    >
                                        <Anchor href="#hero">
                                            <Image
                                                src="/logo/logo-light.svg"
                                                w={{ base: 150, lg: LOGO_WIDTH_LAYOUT }}
                                                h="auto"
                                                alt="logo"
                                            />
                                        </Anchor>
                                        <NavigationMenu />
                                        <Group align="center" wrap="nowrap">
                                            <Stack gap={4} align="center">
                                                <Group align="center" wrap="nowrap" gap="xs">
                                                    <ActionIcon
                                                        component="a"
                                                        href={TG_HREF}
                                                        target="_blank"
                                                        size="lg"
                                                        variant="light"
                                                        aria-label="telegram"
                                                    >
                                                        <IconBrandTelegram
                                                            size={ICON_SIZE_LG}
                                                            stroke={ICON_STROKE_SIZE}
                                                        />
                                                    </ActionIcon>
                                                    <ActionIcon
                                                        component="a"
                                                        href={`mailto:${EMAIL}`}
                                                        size="lg"
                                                        variant="light"
                                                        aria-label="email"
                                                    >
                                                        <IconMail size={ICON_SIZE_LG} stroke={ICON_STROKE_SIZE} />
                                                    </ActionIcon>
                                                </Group>
                                                <Text c="brand.4" lh={1} fw={500} className={classes.phone}>
                                                    {PHONE}
                                                </Text>
                                            </Stack>
                                            <MobileMenu />
                                        </Group>
                                    </Group>
                                </Container>
                            </AppShellHeader>
                            <AppShellMain className={classes.main}>{children}</AppShellMain>
                            <AppShellFooter pos="initial" mt="auto">
                                <Footer />
                            </AppShellFooter>
                        </AppShell>
                    </NextIntlClientProvider>
                </MantineProvider>
            </body>
        </html>
    );
}
