import Head from "next/head";
import {
  Box,
  Container,
  Heading,
  Divider,
  Center,
  SkeletonCircle,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import Paragraph from "../components/Paragraph";
import Company from "../components/pages/Company";
import Image from "next/image";
import { useState } from "react";
import Section from "../components/Layout/Section";

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
      <Container maxW="container.md" mt={10}>
        <Section delay={0.1}>
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
            <Paragraph fontSize="18px" lineHeight={1.6}>
              I’m a front end developer, who is focused on React and Angular.
              I’m born in Paris. I’ve studied at{" "}
              <Text
                fontWeight="medium"
                as="span"
                color={useColorModeValue("black", "teal.500")}
              >
                Hetic
              </Text>{" "}
              and I’m now working fulltime at{" "}
              <Text
                fontWeight="medium"
                as="span"
                color={useColorModeValue("black", "teal.500")}
              >
                DessIA
              </Text>
              . In my spare time, I’m contributing to open source projects I
              used on a daily basis.
            </Paragraph>
            <Divider my={[6, 8]} />
          </Box>
        </Section>
        <Section delay={0.2}>
        <Company />
        </Section>
      </Container>
    </div>
  );
}
