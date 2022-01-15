import Head from "next/head";
import {
  Box,
  Container,
  Grid,
  Heading,
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
              Stacks list
            </Paragraph>
          </Section>

          <Section delay={0.2}>
            <Tabs
              variant="soft-rounded"
              colorScheme={useColorModeValue("gray", "teal")}
              align="center"
              mt={4}
            >
              <TabList flexWrap="wrap">
                <Tab onClick={() => filterStacks(null)}>
                  <HStack spacing={1}>
                    <HiCollection fontSize="20px" />
                    <Text>All</Text>
                  </HStack>
                </Tab>

                <Tab onClick={() => filterStacks("Web development")}>
                  <HStack spacing={1}>
                    <HiDesktopComputer fontSize="20px" />
                    <Text>Development</Text>
                  </HStack>
                </Tab>

                <Tab onClick={() => filterStacks("Scripting")}>
                  <HStack spacing={1}>
                    <HiCode fontSize="20px" />
                    <Text>Scripting</Text>
                  </HStack>
                </Tab>

                <Tab onClick={() => filterStacks("Devops")}>
                  <HStack spacing={1}>
                    <HiCloud fontSize="20px" />
                    <Text>Devops</Text>
                  </HStack>
                </Tab>

                <Tab onClick={() => filterStacks("Design")}>
                  <HStack spacing={1}>
                    <HiColorSwatch fontSize="20px" />
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

export const getStaticProps: GetStaticProps = async (context) => {
  const stacks = await getTable("Stacks");

  return {
    props: {
      stacks,
    },
    revalidate: 10,
  };
};

export default Stacks;
