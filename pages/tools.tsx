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
import { FaApple, FaWindows } from "react-icons/fa";
import { useCallback, useState } from "react";
import Toolcard from "../components/Toolcard";
import { GetStaticProps } from "next";
import { HiCollection } from "react-icons/hi";
import Section from "../components/Layout/Section";
import { createThumbnail } from "../lib/helpers";

const Tools = ({ tools }) => {
  const [toolsList, setToolsList] = useState(tools);

  const filterTools = useCallback(
    (tab) => {
      if (tab !== null) {
        setToolsList(
          tools.filter((tool) => {
            return tool.fields.platform.includes(tab);
          })
        );
      } else {
        setToolsList(tools);
      }
    },
    [tools]
  );

  return (
    <div>
      <Head>
        <title>Tools | Nathanael Louzoun</title>
        <meta name="description" content="Tools | Nathanael Louzoun" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="follow, index" />
        <meta property="og:title" content="Tools | Nathanael Louzoun" />
        <meta property="og:image" content={createThumbnail("Tools I use everyday", "🚀")} />
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
              Tools
            </Text>
            <Paragraph fontSize="lg" lineHeight={1.6} textAlign="center">
              Tools I used on a daily basis
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
                <Tab onClick={() => filterTools(null)}>
                  <HStack spacing={1}>
                    <HiCollection fontSize="lg" />
                    <Text>All</Text>
                  </HStack>
                </Tab>

                <Tab onClick={() => filterTools("mac")}>
                  <HStack spacing={1}>
                    <FaApple />
                    <Text>Mac</Text>
                  </HStack>
                </Tab>

                <Tab onClick={() => filterTools("windows")}>
                  <HStack spacing={1}>
                    <FaWindows />
                    <Text>Windows</Text>
                  </HStack>
                </Tab>
              </TabList>
            </Tabs>
          </Section>

          {!toolsList.length && "No tools found."}
          <Section delay={0.3}>
            <Grid
              mt={10}
              alignItems="center"
              templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]}
              gap={5}
            >
              {toolsList
                .sort((a, b) => (a.fields.ID > b.fields.ID ? 1 : -1))
                .map((tool, index) => (
                  <Toolcard tool={tool} key={index} />
                ))}
            </Grid>
          </Section>
        </Container>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const tools = await getTable("Tools");

  return {
    props: {
      tools,
    },
    revalidate: 10,
  };
};

export default Tools;
