import {
  AspectRatio,
  Box,
  Heading,
  ScaleFade,
  Tag,
  TagLeftIcon,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Link from "./Layout/extraNavOptions/Link";
import Paragraph from "./Paragraph";
import { format } from "timeago.js";
import { FaRegClock } from "react-icons/fa";
import { useRouter } from "next/router";
import Image from "next/image";

interface Article {
  article: {
    id: string;
    fields: Fields;
  };
}

interface Fields {
  title: string;
  mdx: string;
  summary: string;
  publishDate: Date;
  status: string;
  thumbnail: Thumbnail[];
  slug: string;
}

interface Thumbnail {
  id: string;
  width: number;
  height: number;
  url: string;
  filename: string;
  size: number;
  type: string;
  thumbnails: Thumbnails;
}

interface Thumbnails {
  small: Full;
  large: Full;
  full: Full;
}

interface Full {
  url: string;
  width: number;
  height: number;
}

const Blogcard = ({ article }: Article) => {
  let router = useRouter();
  let { asPath } = router;

  return (
    <Link href={`/blog/${article?.fields.slug}`} currentPath={asPath}>
      <ScaleFade in={true} delay={0.2}>
        <VStack
          p={4}
          borderColor={useColorModeValue("gray.300", "gray.700")}
          borderRadius="lg"
          borderWidth="1px"
          transition=".25s"
          cursor="pointer"
          d="flex"
          alignItems="flex-start"
          role="group"
          _hover={{
            borderColor: "teal.500",
            shadow: "lg",
            transform: "translateY(-4px)",
          }}
        >
          <AspectRatio
            ratio={16 / 9}
            w="100%"
            rounded="lg"
            overflow="hidden"
            borderWidth="1px"
            bg={useColorModeValue("gray.300", "gray.700")}
            borderColor={useColorModeValue("gray.300", "gray.700")}
          >
            <Image
              alt={article?.fields.title}
              src={article?.fields.thumbnail[0].url}
              layout="fill"
              objectFit="cover"
            />
          </AspectRatio>

          <Box ml={4}>
            <Heading as="h1" size="md" noOfLines={1}>
              {article?.fields.title}
            </Heading>
            <Paragraph mt={1} fontSize="sm" noOfLines={1}>
              {article?.fields.summary}
            </Paragraph>
            <Tag mt={2} size="sm">
              <TagLeftIcon boxSize="12px" as={FaRegClock} />
              {format(article?.fields.publishDate)}
            </Tag>
          </Box>
        </VStack>
      </ScaleFade>
    </Link>
  );
};

export default Blogcard;
