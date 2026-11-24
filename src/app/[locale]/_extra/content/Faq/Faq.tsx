'use client';

import { useMemo, useState } from 'react';
import {
    Accordion,
    AccordionControl,
    AccordionItem,
    AccordionPanel,
    Box,
    Container,
    Group,
    Paper,
    Scroller,
    Text,
    ThemeIcon,
    Title,
} from '@mantine/core';
import { IconChevronLeft, IconChevronRight, IconPlus } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';

import { ICON_SIZE_XXXL, ICON_STROKE_SIZE } from '@/src/constants';

import classes from './classes.module.css';

import data from '~/data/faq/index.json';

interface FaqItem {
    id: number;
    slug: string;
    question: string;
    answer: string;
}

interface FaqGroup {
    id: number;
    slug: string;
    title: string;
    items: FaqItem[];
}
export function Faq() {
    const t = useTranslations();

    const faq: FaqGroup[] = data;
    const [activeTopic, setActiveTopic] = useState(faq[0].slug);

    const faqItems = useMemo(() => {
        const found = faq.find((v) => v.slug === activeTopic);
        return found?.items ?? [];
    }, [activeTopic, faq]);

    return (
        <Box id="faq">
            <Container p={0} size={1520}>
                <Title className={classes.title} ff="var(--font-geologica)">
                    {t('Faq.title')}
                </Title>

                <Scroller
                    mt={{ base: 30, md: 50, lg: 60 }}
                    mx="auto"
                    controlSize="75px"
                    startControlIcon={
                        <ThemeIcon size="xl" variant="transparent">
                            <IconChevronLeft width="100%" height="100%" stroke={ICON_STROKE_SIZE} />
                        </ThemeIcon>
                    }
                    endControlIcon={
                        <ThemeIcon size="xl" variant="transparent">
                            <IconChevronRight width="100%" height="100%" stroke={ICON_STROKE_SIZE} />
                        </ThemeIcon>
                    }
                >
                    <Group wrap="nowrap">
                        {faq.map((v) => (
                            <Paper
                                onClick={() => setActiveTopic(v.slug)}
                                bg={v.slug === activeTopic ? 'brand.4' : 'white'}
                                key={v.id}
                                withBorder
                                p="xs"
                                className={classes.badge}
                            >
                                <Text className={classes.badgeText} c={v.slug === activeTopic ? 'white' : 'black'}>
                                    {v.title}
                                </Text>
                            </Paper>
                        ))}
                    </Group>
                </Scroller>

                <Accordion
                    mt={{ base: 30, md: 50, lg: 60 }}
                    variant="separated"
                    transitionDuration={550}
                    chevron={
                        <ThemeIcon variant="transparent" size="xl">
                            <IconPlus stroke={ICON_STROKE_SIZE} size={ICON_SIZE_XXXL} />
                        </ThemeIcon>
                    }
                    order={3}
                >
                    {faqItems.map((v) => (
                        <AccordionItem key={v.id} bg="brand.0" p="sm" value={v.slug}>
                            <AccordionControl>
                                <Text className={classes.question}>{v.question}</Text>
                            </AccordionControl>
                            <AccordionPanel>
                                <Box className={classes.answer} dangerouslySetInnerHTML={{ __html: v.answer }} />
                            </AccordionPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </Container>
        </Box>
    );
}
