import Head from "next/head";
import {
  Container,
  Grid,
  HStack,
  Tab,
  TabList,
  Tabs,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Paragraph from "../components/Paragraph";
import { getTable } from "../lib/airtable";
import { useCallback, useState } from "react";
import Stackcard from "../components/Stackcard";
import { GetStaticProps } from "next";
import {
  HiCloud,
  HiCode,
  HiCollection,
  HiColorSwatch,
  HiDesktopComputer,
} from "react-icons/hi";
import Section from "../components/Layout/Section";
import { createThumbnail } from "../lib/helpers";

const Stacks = ({ stacks }) => {
  const [stacksList, setStacksList] = useState(stacks);

  const filterStacks = useCallback(
    (tab) => {
      if (tab !== null) {
        setStacksList(
          stacks.filter((skill) => {
            return skill.fields.type.includes(tab);
          })
        );
      } else {
        setStacksList(stacks);
      }
    },
    [stacks]
  );

  return (
    <div>
      <Head>
        <title>Stacks | Nathanael Louzoun</title>
        <meta name="description" content="Stacks | Nathanael Louzoun" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="follow, index" />
        <meta property="og:title" content="Stacks | Nathanael Louzoun" />
        <meta property="og:image" content={createThumbnail("Stacks I use", "⚡")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container maxW="container.md" mt={10}>
          <Section delay={0.1}>
            <Text
              as="h1"
              fontSize="custom"
              fontWeight="bold"
              textAlign="center"
              mb={2}
            >
              Stacks
            </Text>
            <Paragraph fontSize="lg" lineHeight={1.6} textAlign="center">
              List of my favorite technologies
            </Paragraph>
          </Section>

          <Section delay={0.2}>
            <Tabs
              variant="soft-rounded"
              colorScheme={useColorModeValue("gray", "green")}
              align="center"
              mt={4}
            >
              <TabList flexWrap="wrap">
                <Tab onClick={() => filterStacks(null)}>
                  <HStack spacing={1}>
                    <HiCollection fontSize="xl" />
                    <Text>All</Text>
                  </HStack>
                </Tab>

                <Tab onClick={() => filterStacks("Web development")}>
                  <HStack spacing={1}>
                    <HiDesktopComputer fontSize="xl" />
                    <Text>Development</Text>
                  </HStack>
                </Tab>

                <Tab onClick={() => filterStacks("Scripting")}>
                  <HStack spacing={1}>
                    <HiCode fontSize="xl" />
                    <Text>Scripting</Text>
                  </HStack>
                </Tab>

                <Tab onClick={() => filterStacks("Devops")}>
                  <HStack spacing={1}>
                    <HiCloud fontSize="xl" />
                    <Text>Devops</Text>
                  </HStack>
                </Tab>

                <Tab onClick={() => filterStacks("Design")}>
                  <HStack spacing={1}>
                    <HiColorSwatch fontSize="xl" />
                    <Text>Design</Text>
                  </HStack>
                </Tab>
              </TabList>
            </Tabs>
          </Section>

          {!stacksList.length && "No stacks found."}
          <Section delay={0.3}>
            <Grid
              mt={10}
              alignItems="center"
              templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]}
              gap={5}
            >
              {stacksList
                .sort((a, b) => (a.fields.ID > b.fields.ID ? 1 : -1))
                .map((stack, index) => (
                  <Stackcard stack={stack} key={index} />
                ))}
            </Grid>
          </Section>
        </Container>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const stacks = await getTable("Stacks");

  return {
    props: {
      stacks,
    },
    revalidate: 10,
  };
};

export default Stacks;
