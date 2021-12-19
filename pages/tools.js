import Head from "next/head";
import { Box, Container, Heading, SlideFade } from "@chakra-ui/react";
import Paragraph from "../components/Paragraph";
import { useState } from "react";

const Tools = () => {
  return (
    <div>
      <Head>
        <title>Tools | Nathanael Louzoun</title>
        <meta name="description" content="Tools | Nathanael Louzoun" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="follow, index" />
        <meta property="og:title" content="Tools | Nathanael Louzoun" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container maxW="container.md" mt={10}>
          <SlideFade in={true} offsetY={80}>
            <Box>
              <Heading
                as="h1"
                fontSize={{ base: "28px", md: "32px", lg: "36px" }}
                textAlign="center"
                mb={4}
              >
                Tools
              </Heading>
              <Paragraph fontSize="xl" lineHeight={1.6} textAlign="center">
                List all tools
              </Paragraph>
            </Box>
          </SlideFade>
        </Container>
      </main>
    </div>
  );
};

export default Tools;
