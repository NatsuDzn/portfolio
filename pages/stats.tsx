import Head from "next/head";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Anilist from "../components/pages/Anilist";
import Section from "../components/Layout/Section";

const Bookmarks = () => {
  return (
    <div>
      <Head>
        <title>Stats | Nathanael Louzoun</title>
        <meta name="description" content="Stats | Nathanael Louzoun" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="follow, index" />
        <meta property="og:title" content="Stats | Nathanael Louzoun" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container maxW="container.md" mt={10}>
          <Section delay={0.1}>
            <Text
              as="h1"
              fontSize="custom"
              fontWeight="bold"
              mb={4}
            >
              Stats
            </Text>
          </Section>

          <Section delay={0.2}>
            <Anilist />
          </Section>
        </Container>
      </main>
    </div>
  );
};

export default Bookmarks;
