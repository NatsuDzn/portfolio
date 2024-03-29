import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { Container } from "@chakra-ui/react";
import { getAllPostsPaths, getPostData } from "../../lib/airtable";
import readingTime from "reading-time";
import MDXComponents from "../../components/MDX";
import { GetStaticPaths, GetStaticProps } from "next";
import BlogLayout from "../../components/Layout/BlogLayout";
import SEO from "../../components/Layout/SEO";
import remarkSlug from "remark-slug";
import remarkCodeTitles from "remark-code-titles";
import remarkPrism from "remark-prism";
import Section from "../../components/Layout/Section";
import Error from "../../components/Layout/Error";

export default function Blog({ source, post, frontMatter }) {
  if (post?.fields.status === "Draft") {
    return (
      <Error
        title="Not found"
        subtitle="The page you're looking for wasn't found."
      />
    );
  }

  return (
    <div>
      <SEO
        title={post?.fields.title}
        description={post?.fields.summary}
        thumbnail={post?.fields.thumbnail[0].url}
      />

      <Container maxW="container.md" mt={10}>
        <BlogLayout frontMatter={frontMatter}>
          <Section delay={0.2}>
            <MDXRemote {...source} components={MDXComponents} />
          </Section>
        </BlogLayout>
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

  const mdxSource = await serialize(postData.post[0].fields.mdx, {
    mdxOptions: {
      remarkPlugins: [remarkSlug, remarkCodeTitles, remarkPrism],
    },
  });

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
