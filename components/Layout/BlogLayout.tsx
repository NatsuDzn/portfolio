import { Divider, Heading } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import BlogAuthor from "../BlogAuthor";
import BlogFooter from "../BlogFooter";
import Section from "./Section";

interface BlogLayout {
  frontMatter: any;
}

const BlogLayout = ({
  children,
  frontMatter,
}: PropsWithChildren<BlogLayout>) => {
  return (
    <div>
      <Section delay={0.1}>
        <Heading
          as="h1"
          fontSize={{ base: "28px", md: "32px", lg: "36px" }}
          mb={4}
        >
          {frontMatter.title}
        </Heading>

        <Divider my={4} />

        <BlogAuthor
          readingTime={frontMatter.readingTime.text}
          publishedAt={frontMatter.publishDate}
          url={"https://nathanael-louzoun.vercel.app/blog/" + frontMatter.slug}
          mb={8}
        />
      </Section>

      {children}

      <Section delay={0.3}>
        <BlogFooter
          url={"https://nathanael-louzoun.vercel.app/blog/" + frontMatter.slug}
          mt={8}
        />
      </Section>
    </div>
  );
};

export default BlogLayout;
