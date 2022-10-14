import Head from "next/head";
import { Container, Grid, Text } from "@chakra-ui/react";
import Paragraph from "../components/Paragraph";
import { getTable } from "../lib/airtable";
import sorter from "sort-isostring";
import { GetStaticProps } from "next";
import Section from "../components/Layout/Section";
import Projectcard from "../components/Projectcard";
import { createThumbnail } from "../lib/helpers";

const Projects = ({ projects }) => {
  return (
    <div>
      <Head>
        <title>Projects | Nathanael Louzoun</title>
        <meta name="description" content="Projects | Nathanael Louzoun" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="follow, index" />
        <meta property="og:title" content="Projects | Nathanael Louzoun" />
        <meta property="og:image" content={createThumbnail("Projects", "💻")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container maxW="container.md" mt={10}>
          <Section delay={0.1}>
            <Text as="h1" fontSize="custom" fontWeight="bold" mb={2}>
              Projects
            </Text>
            <Paragraph fontSize="lg" lineHeight={1.6}>
              Some projects made to learn new stacks
            </Paragraph>
          </Section>

          {!projects.length && "No projects found."}
          <Section delay={0.2}>
            <Grid
              mt={10}
              alignItems="center"
              templateColumns={["1fr", "repeat(2, 1fr)", "repeat(2, 1fr)"]}
              gap={5}
            >
              {projects
                .sort((x, y) => sorter(y.fields.year, x.fields.year))
                .map((project) => {
                  return <Projectcard project={project} key={project.id} />;
                })}
            </Grid>
          </Section>
        </Container>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getTable("Projects");

  return {
    props: {
      projects,
    },
    revalidate: 10,
  };
};

export default Projects;
