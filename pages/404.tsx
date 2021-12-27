import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Heading,
  SlideFade,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";

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
          <SlideFade in={true}>
            <Box>
              <Center direction="column" alignItems="center">
                <Box borderRadius="full" overflow="hidden" width={128} height={128}>
                  <Image
                    width={256}
                    height={256}
                    objectFit="cover"
                    alt="test"
                    src="/assets/images/404.jpg"
                  />
                </Box>
              </Center>
              <Heading as="h1" my={3}>
                Not Found
              </Heading>
              <Text>The page you&apos;re looking for wasn&apos;t found.</Text>
            </Box>

            <Divider my={6} />

            <Box my={6} align="center">
              <NextLink href="/">
                <Button colorScheme="teal">Go back to home</Button>
              </NextLink>
            </Box>
          </SlideFade>
        </Container>
      </main>
    </div>
  );
}
