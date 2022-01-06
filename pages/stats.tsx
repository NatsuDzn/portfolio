import Head from "next/head";
import { Box, Container, Heading } from "@chakra-ui/react";
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
            <Heading
              as="h1"
              fontSize={{ base: "28px", md: "32px", lg: "36px" }}
              mb={4}
            >
              Stats
            </Heading>
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
