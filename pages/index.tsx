import Head from "next/head";
import {
  Box,
  Container,
  Divider,
  Center,
  Text,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import Paragraph from "../components/Paragraph";
import Section from "../components/Layout/Section";
import { createThumbnail } from "../lib/helpers";
import SEO from "../components/Layout/SEO";
import { getTable } from "../lib/airtable";
import Experiences from "../components/pages/Experiences";

export default function Home({exps}) {
  return (
    <>
      <SEO
        title={"Nathanael Louzoun | Front end developer"}
        description={"Front end developer based in Paris"}
        thumbnail={createThumbnail("My portfolio", "👋")}
      />
      <Head>
        <meta name="robots" content="follow, index" />
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
                <Image
                  boxSize="128px"
                  objectFit="cover"
                  alt="me"
                  src="/assets/images/me.jpg"
                />
              </Box>
            </Center>

            <Text
              as="h1"
              fontSize="custom"
              fontWeight="bold"
              my={3}
              textAlign={["left", "center"]}
            >
              Hey, I’m Nathanael Louzoun
            </Text>
            <Paragraph fontSize="lg" lineHeight={1.6}>
              I’m a software developer, who is focused on React and Angular.
              I’m born in Paris. I’ve studied at{" "}
              <Text
                as="span"
                fontWeight="medium"
                color={useColorModeValue("black", "green.500")}
                style={{ boxShadow: "0 2px" }}
              >
                Hetic
              </Text>{" "}
              and I’m now working fulltime at{" "}
              <Text
                as="span"
                fontWeight="medium"
                color={useColorModeValue("black", "green.500")}
                style={{ boxShadow: "0 2px" }}
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
          <Experiences experiences={exps} />
        </Section>
      </Container>
    </>
  );
}

export const getStaticProps = async () => {
  const exps = await getTable("Experience");

  return {
    props: {
      exps,
    },
    revalidate: 10,
  };
};
