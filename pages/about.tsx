import Head from "next/head";
import { Box, Container, Divider, Tag, Text } from "@chakra-ui/react";
import Paragraph from "../components/Paragraph";
import Section from "../components/Layout/Section";
import { createThumbnail } from "../lib/helpers";

const About = () => {
  const coolStuff: string[] = [
    "React",
    "Angular",
    "Typescript",
    "iOS",
    "Space",
    "Anime",
    "Manga",
  ];

  return (
    <div>
      <Head>
        <title>About | Nathanael Louzoun</title>
        <meta name="description" content="About | Nathanael Louzoun" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="follow, index" />
        <meta property="og:title" content="About | Nathanael Louzoun" />
        <meta property="og:image" content={createThumbnail("About me", "👨‍🎓")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container maxW="container.md" mt={10}>
          <Section delay={0.1}>
            <Box>
              <Text as="h1" fontSize="custom" fontWeight="bold" mb={4}>
                About Me
              </Text>
              <Paragraph fontSize="lg" lineHeight={1.6}>
                After high school, I studied at Hetic in Montreuil, where I
                started front-end development, and ui/ux design and back-end. In
                my free time I like to learn new things. During the weekend I
                like to read manga, code new things and hang out with friends.
              </Paragraph>
            </Box>
          </Section>

          <Divider my={[6, 8]} />

          <Section delay={0.2}>
            <Box>
              <Text as="h1" fontSize="custom" fontWeight="bold" mb={4}>
                Work
              </Text>
              <Paragraph fontSize="lg" lineHeight={1.6}>
                While I was at Hetic I had the chance to work after the end of
                my 1st year. I have started to work for ThingType where I
                learned about Angular. During my second and last year I worked
                at DessIA where I really dived in Angular. After my internship
                DessIA hired me full time.
              </Paragraph>
            </Box>
          </Section>

          <Divider my={[6, 8]} />

          <Section delay={0.3}>
            <Box>
              <Text as="h1" fontSize="custom" fontWeight="bold" mb={4}>
                Thing I ❤
              </Text>
              <Paragraph fontSize="xl" lineHeight={1.6}>
                {coolStuff.map((item) => (
                  <Tag
                    size="lg"
                    colorScheme="green"
                    key={item}
                    marginY={2}
                    marginRight={2}
                  >
                    {item}
                  </Tag>
                ))}
              </Paragraph>
            </Box>
          </Section>
        </Container>
      </main>
    </div>
  );
};

export default About;
