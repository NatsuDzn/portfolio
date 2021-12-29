import {
  Box,
  Alert,
  Code,
  Heading,
  Kbd,
  Link,
  Text,
  Divider,
  useColorMode,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";

const Table = (props) => (
  <chakra.div overflowX="auto">
    <chakra.table textAlign="left" mt="32px" width="full" {...props} />
  </chakra.div>
);

const THead = (props) => (
  <chakra.th
    bg={useColorModeValue("neutral.50", "whiteAlpha.100")}
    p={2}
    fontSize="sm"
    {...props}
  />
);

const TData = (props) => (
  <chakra.td
    p={2}
    borderTopWidth="1px"
    borderColor="inherit"
    fontSize="sm"
    whiteSpace="normal"
    fontWeight="semibold"
    {...props}
  />
);

const TImage = (props) => (
  <chakra.img shadow="md" mt={4} borderRadius="lg" {...props} />
);

const CustomLink = (props) => {
  const { colorMode } = useColorMode();
  const color = {
    light: "hsl(208, 99%, 44%)",
    dark: "hsl(208, 95%, 68%)",
  };

  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Link color={color[colorMode]} {...props} />
      </NextLink>
    );
  }

  return <Link color={color[colorMode]} isExternal {...props} />;
};

const Quote = (props) => {
  return (
    <Alert
      mt={4}
      w="98%"
      colorScheme="white"
      variant="left-accent"
      status="info"
      css={{
        "> *:first-of-type": {
          marginTop: 0,
          marginLeft: 8,
        },
      }}
      {...props}
    />
  );
};

const Hr = () => {
  const { colorMode } = useColorMode();
  const borderColor = {
    light: "gray.200",
    dark: "gray.600",
  };

  return <Divider borderColor={borderColor[colorMode]} my={4} w="100%" />;
};

const Tstrong = (props) => {
  const { colorMode } = useColorMode();
  const textColor = {
    light: "black",
    dark: "white",
  };

  return <Text as="strong" color={textColor[colorMode]} {...props} />;
};

const MDXComponents = {
  h1: (props) => <Heading as="h1" size="4xl" my={4} {...props} />,
  h2: (props) => <Heading as="h2" size="xl" my={4} {...props} />,
  h3: (props) => <Heading as="h3" size="lg" my={4} {...props} />,
  h4: (props) => <Heading as="h4" size="md" my={4} {...props} />,
  h5: (props) => <Heading as="h5" size="sm" my={4} {...props} />,
  h6: (props) => <Heading as="h6" size="xs" my={4} {...props} />,
  inlineCode: (props) => <Code colorScheme="white" {...props} />,
  code: (props) => <Code colorScheme="white" {...props} />,
  kbd: Kbd,
  br: (props) => <Box height="24px" {...props} />,
  hr: Hr,
  table: Table,
  th: THead,
  td: TData,
  a: CustomLink,
  img: TImage,
  p: (props) => <Text as="p" mt={4} fontWeight="normal" fontSize="1rem" {...props} />,
  ul: (props) => (
    <Box as="ul" pt={2} fontSize="1rem" fontWeight="normal" pl={4} ml={2} {...props} />
  ),
  ol: (props) => (
    <Box as="ol" pt={2} fontSize="1rem" fontWeight="normal" pl={4} ml={2} {...props} />
  ),
  li: (props) => <Box as="li" pb={1} fontSize="1rem" fontWeight="normal" {...props} />,
  strong: Tstrong,
  blockquote: Quote,
};

export { CustomLink };
export default MDXComponents;
