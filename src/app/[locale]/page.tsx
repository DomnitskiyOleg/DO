import { Flex } from '@mantine/core';

import { Faq, Hero, Steps } from './_extra';

export default function Home() {
    return (
        <Flex direction="column" gap={{ base: 60, md: 80, lg: 160 }} py={{ base: 0, sm: 'md', md: 'xl' }}>
            <Hero />
            <Steps />
            <Faq />
        </Flex>
    );
}
