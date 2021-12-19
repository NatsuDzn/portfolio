import { Avatar, Box, Container, Heading, SlideFade, Stack } from "@chakra-ui/react";
import Head from "next/head";

export default function Custom404() {
  return (
    <div>
      <Head>
        <title>404 | Not Found</title>
        <meta name="description" content="404 | Not Found" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="follow, index" />
        <meta property="og:title" content="404 | Not Found" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container maxW="container.md" mt={10}>
          <SlideFade in={true} offsetY={80}>
            <Box>
              <Stack direction="column" alignItems="center">
                <Avatar
                  mb={8}
                  size="2xl"
                  name="Nathanael Louzoun"
                  src="/assets/404.jpg"
                />
                <Heading
                  as="h1"
                  fontSize={{ base: "28px", md: "40px", lg: "48px" }}
                  my={3}
                >
                  404 Not Found
                </Heading>
              </Stack>
            </Box>
          </SlideFade>
        </Container>
      </main>
    </div>
  );
}
