import {
  Box,
  Heading,
  useColorModeValue,
  Tag,
  Stack,
  TagLeftIcon,
  Link,
  ScaleFade,
  Image,
} from "@chakra-ui/react";
import { FaApple, FaAppStoreIos, FaWindows } from "react-icons/fa";
import Paragraph from "./Paragraph";

const handlePlatform = (platform) => {
  switch (platform) {
    case "mac":
      return FaApple;
    case "windows":
      return FaWindows;
    case "ios":
      return FaAppStoreIos;
  }
};

const Toolcard = ({ tool }) => {
  return (
    <Link
      style={{ textDecoration: "none" }}
      href={tool?.fields.url}
      rel="noopener"
      isExternal
    >
      <ScaleFade in={true} offsetY={80} delay={0.2}>
        <Box
          p={4}
          borderColor={useColorModeValue("gray.300", "gray.700")}
          borderRadius={5}
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
          <Box
            p={2}
            borderColor={useColorModeValue("gray.300", "gray.700")}
            borderRadius="lg"
            borderWidth="1px"
            transition=".5s"
          >
            <Image
              height="36px"
              width="36px"
              layout="fixed"
              rounded="md"
              alt={tool?.fields.name}
              src={tool?.fields.image}
            />
          </Box>

          <Box ml={4}>
            <Heading as="h2" size="sm">
              {tool?.fields.name}
            </Heading>
            <Paragraph mt={1} fontSize="sm">
              {tool?.fields.description}
            </Paragraph>
            <Stack mt={2} direction="row" spacing="1rem">
              {tool.fields.platform.map((platform, index) => (
                <Tag key={index} size="sm">
                  <TagLeftIcon as={handlePlatform(platform)} />
                  {platform}
                </Tag>
              ))}
            </Stack>
          </Box>
        </Box>
      </ScaleFade>
    </Link>
  );
};

export default Toolcard;
