import { Box, Container, Flex, Grid, GridCol, Paper, Text, Title } from '@mantine/core';
import { getTranslations } from 'next-intl/server';

import classes from './classes.module.css';

export async function Steps() {
    const t = await getTranslations();

    const steps = [
        {
            id: 1,
            title: t('Steps.steps.1.title'),
            text: t('Steps.steps.1.text'),
        },
        {
            id: 2,
            title: t('Steps.steps.2.title'),
            text: t('Steps.steps.2.text'),
        },
        {
            id: 3,
            title: t('Steps.steps.3.title'),
            text: t('Steps.steps.3.text'),
        },
        {
            id: 4,
            title: t('Steps.steps.4.title'),
            text: t('Steps.steps.4.text'),
        },
    ];

    return (
        <Box id="steps">
            <Container p={0} size={1520}>
                <Title className={classes.title} ff="var(--font-geologica)">
                    {t('Steps.title')}
                </Title>

                <Grid mt={{ base: 30, md: 50, lg: 60 }} gap="lg" align="stretch">
                    {steps.map((v) => (
                        <GridCol key={v.id} span={{ base: 12, sm: 6, lg: 3 }}>
                            <Paper bg="brand.0" display="flex" h="100%">
                                <Flex direction="column" justify="space-between" flex={1}>
                                    <Flex
                                        p={{ base: 'lg', xs: 'xl' }}
                                        direction="column"
                                        pb={0}
                                        gap={{ base: 'xs', xl: 'lg' }}
                                    >
                                        <Text fw={500} className={classes.cardTitle}>
                                            {v.title}
                                        </Text>
                                        <Text c="dimmed" className={classes.text}>
                                            {v.text}
                                        </Text>
                                    </Flex>
                                    <Box p={{ base: 'lg', xs: 'xl' }} mt={{ base: 20, md: 40 }}>
                                        <Flex
                                            bg="white"
                                            className={classes.step}
                                            align="center"
                                            justify="center"
                                            w={60}
                                            h={60}
                                        >
                                            <Text fw={600} size="xl" c="brand">
                                                {v.id}
                                            </Text>
                                        </Flex>
                                    </Box>
                                </Flex>
                            </Paper>
                        </GridCol>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
