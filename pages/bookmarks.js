import Head from "next/head";
import { Box, Container, Heading, SlideFade } from "@chakra-ui/react";
import Paragraph from "../components/Paragraph";

const Bookmarks = () => {
  return (
    <div>
      <Head>
        <title>Bookmarks | Nathanael Louzoun</title>
        <meta name="description" content="Bookmarks | Nathanael Louzoun" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="follow, index" />
        <meta property="og:title" content="Bookmarks | Nathanael Louzoun" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container maxW="container.md" mt={10}>
          <SlideFade in={true} offsetY={80}>
            <Box>
              <Heading
                as="h1"
                fontSize={{ base: "28px", md: "32px", lg: "36px" }}
                mb={4}
              >
                Bookmarks
              </Heading>
              <Paragraph fontSize="xl" lineHeight={1.6}>
                Bookmarks list
              </Paragraph>
            </Box>
          </SlideFade>
        </Container>
      </main>
    </div>
  );
};

export default Bookmarks;
