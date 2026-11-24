import { Box, Button, Container, Flex, Paper, Text, Title } from '@mantine/core';
import { getTranslations } from 'next-intl/server';

import { APP_URL } from '@/src/constants';

import classes from './classes.module.css';

export async function Hero() {
    const t = await getTranslations();
    return (
        <Box id="hero">
            <Container p={0} size={1520}>
                <Flex
                    gap="lg"
                    direction={{ base: 'column-reverse', md: 'row' }}
                    align="stretch"
                    justify="space-between"
                    flex={1}
                    mt="xl"
                >
                    <Paper bg="brand" className={classes.card} flex={1}>
                        <Flex direction="column" p={{ base: 20, md: 80 }} flex={1} gap={{ base: 'lg', md: 40 }}>
                            <Title className={classes.title} ff="var(--font-geologica)" order={1} c="white">
                                {t('Hero.title')}
                            </Title>
                            <Text maw={{ base: '100%', lg: '95%' }} className={classes.text} c="white">
                                {t('Hero.text')}
                            </Text>
                            <Button
                                size="lg"
                                component="a"
                                href={APP_URL}
                                w={{ base: '100%', xs: 'fit-content' }}
                                variant="white"
                                mt="auto"
                            >
                                {t('Hero.button')}
                            </Button>
                        </Flex>
                    </Paper>
                    {/* Место под иллюстрацию: замените на <Image src="/assets/hero/..." /> */}
                    <Paper bg="brand.0" className={classes.card} mih={{ base: 200, md: 400 }} flex={1} />
                </Flex>
            </Container>
        </Box>
    );
}
