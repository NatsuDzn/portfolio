import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { Container, Heading } from "@chakra-ui/react";
import { getAllPostsPaths, getPostData } from "../../lib/airtable";
import readingTime from "reading-time";
import MDXComponents from "../../components/MDX";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import Bloglayout from "../../components/Layout/Bloglayout";

export default function Blog({ source, post, frontMatter }) {
  return (
    <div>
      <Head>
        <title>{post.fields.title}</title>
        <meta property="og:type" content="website" />
        <meta name="robots" content="follow, index" />
        <meta property="og:title" content={post.fields.title} />
        <meta name="og:description" content={post.fields.summary} />
        <meta name="description" content={post.fields.summary} />
        <meta name="og:image" content={post.fields.thumbnail[0].url} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW="container.md" mt={10}>
        <Heading
          as="h1"
          fontSize={{ base: "28px", md: "32px", lg: "36px" }}
          mb={4}
        >
          <Bloglayout frontMatter={frontMatter}>
            <MDXRemote {...source} components={MDXComponents} />
          </Bloglayout>
        </Heading>
      </Container>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostsPaths();

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.slug);

  const mdxSource = await serialize(postData.post[0].fields.mdx);

  return {
    props: {
      source: mdxSource,
      post: postData.post[0],
      frontMatter: {
        wordCount: postData.post[0].fields.mdx.split(/\s+/gu).length,
        readingTime: readingTime(postData.post[0].fields.mdx),
        ...postData.post[0].fields,
      },
    },
    revalidate: 10,
  };
};
