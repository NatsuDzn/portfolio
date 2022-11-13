import Head from "next/head";
import { Container, Grid, Text } from "@chakra-ui/react";
import Paragraph from "../components/Paragraph";
import { getTable } from "../lib/airtable";
import BlogCard from "../components/BlogCard";
import sorter from "sort-isostring";
import { GetStaticProps } from "next";
import Section from "../components/Layout/Section";

const Blog = ({ articles }) => {
  return (
    <div>
      <Head>
        <title>Blog | Nathanael Louzoun</title>
        <meta name="description" content="Blog | Nathanael Louzoun" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="follow, index" />
        <meta property="og:title" content="Blog | Nathanael Louzoun" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container maxW="container.md" mt={10}>
          <Section delay={0.1}>
            <Text as="h1" fontSize="custom" fontWeight="bold" mb={2}>
              Blog
            </Text>
            <Paragraph fontSize="lg" lineHeight={1.6}>
              Blog list
            </Paragraph>
          </Section>

          {!articles.length && "No article found."}
          <Section delay={0.2}>
            <Grid
              mt={10}
              alignItems="center"
              templateColumns={["1fr", "repeat(2, 1fr)", "repeat(2, 1fr)"]}
              gap={5}
            >
              {articles
                .filter((article) => article.fields.status === "Published")
                .sort((x, y) =>
                  sorter(y.fields.publishDate, x.fields.publishDate)
                )
                .map((article) => {
                  return <BlogCard article={article} key={article.id} />;
                })}
            </Grid>
          </Section>
        </Container>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const articles = await getTable("Blog");

  return {
    props: {
      articles,
    },
    revalidate: 10,
  };
};

export default Blog;
