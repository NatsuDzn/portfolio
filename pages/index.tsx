import Head from "next/head";
import {
  Box,
  Container,
  Heading,
  ScaleFade,
  Divider,
  Center,
  SkeletonCircle,
} from "@chakra-ui/react";

import Paragraph from "../components/Paragraph";
import Company from "../components/pages/Company";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [avatarLoading, setAvatarLoading] = useState(false);

  return (
    <div>
      <Head>
        <title>Nathanael Louzoun | Front end developer</title>
        <meta
          name="description"
          content="Nathanael Louzoun | Front end developer"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="follow, index" />
        <meta
          property="og:title"
          content="Nathanael Louzoun | Front end developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container maxW="container.md" mt={10}>
          <ScaleFade in={true}>
            <Box>
              <Center>
                <Box
                  borderRadius="full"
                  overflow="hidden"
                  width={128}
                  height={128}
                >
                  {!avatarLoading && <SkeletonCircle height={128} width={128} />}

                  <Image
                    width={256}
                    height={256}
                    objectFit="cover"
                    alt="test"
                    src="/assets/images/me.jpg"
                    onLoadingComplete={() => setAvatarLoading(true)}
                  />
                </Box>
              </Center>

              <Heading
                as="h1"
                fontSize={{ base: "28px", md: "40px", lg: "48px" }}
                my={3}
              >
                Hey, I’m Nathanael Louzoun
              </Heading>
              <Paragraph fontSize="2xl" lineHeight={1.6}>
                I’m a front end developer, who is focused on React and Angular.
                I’m born in Paris. I’ve studied at Hetic and I’m now working
                fulltime at DessIA. In my spare time, I’m contributing to open
                source projects I used on a daily basis.
              </Paragraph>
              <Divider my={[8, 10]} />
            </Box>
          </ScaleFade>
          <Company />
        </Container>
      </main>
    </div>
  );
}
