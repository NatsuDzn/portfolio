import {
  AspectRatio,
  Box,
  Heading,
  Tag,
  TagLeftIcon,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Link from "./Layout/nav/Link";
import Paragraph from "./Paragraph";
import { format } from "timeago.js";
import { useRouter } from "next/router";
import Image from "next/image";
import { HiClock } from "react-icons/hi";

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
  const router = useRouter();
  const { asPath } = router;

  return (
    <Link href={`/blog/${article?.fields.slug}`} currentPath={asPath}>
      <VStack
        p={4}
        borderColor={useColorModeValue("gray.300", "gray.700")}
        borderRadius="lg"
        borderWidth="1px"
        transition=".25s"
        cursor="pointer"
        alignItems="flex-start"
        role="group"
        _hover={{
          borderColor: useColorModeValue("black", "green.500"),
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
            <TagLeftIcon boxSize="12px" as={HiClock} />
            {format(article?.fields.publishDate)}
          </Tag>
        </Box>
      </VStack>
    </Link>
  );
};

export default Blogcard;
