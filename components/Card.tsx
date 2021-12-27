import {
  Box,
  Heading,
  IconButton,
  LinkOverlay,
  LinkBox,
  useColorModeValue,
  Tag,
  Stack,
  TagLeftIcon,
} from "@chakra-ui/react";
import { FaAngular, FaBook, FaCube, FaFigma } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import Paragraph from "./Paragraph";

const handleStack = (stack) => {
  switch (stack) {
    case "Angular":
      return FaAngular;
    case "PrimeNG":
      return FaBook;
    case "Babylon JS":
      return FaCube;
    case "Figma":
      return FaFigma;
  }
};

const Card = ({ company }) => {
  return (
    <LinkBox as="article">
      <Box
        w="100%"
        p={4}
        borderColor={useColorModeValue("gray.300", "gray.700")}
        borderRadius={5}
        borderWidth="1px"
        transition=".25s"
        cursor="pointer"
        d="flex"
        role="group"
        _hover={{
          borderColor: "teal.500",
          shadow: "lg",
          transform: "translateY(-4px)",
        }}
      >
        <IconButton
          as="a"
          href={company?.url}
          rel="noopener"
          aria-label={company?.name}
          mr={3}
          _groupHover={{ color: "teal.500" }}
          icon={company?.icon}
        />
        <Box>
          <LinkOverlay href={company?.url} rel="noopener" isExternal>
            <Heading as="h2" size="sm">
              {company?.name}
            </Heading>
            <Paragraph mt={1} fontSize="sm">
              {company?.description}
            </Paragraph>
            <Stack
              mt={2}
              direction="row"
              display={["none", "block"]}
              spacing="1rem"
            >
              {company.stack.map((stack) => (
                <Tag key={stack} size="sm">
                  <TagLeftIcon as={handleStack(stack)} />
                  {stack}
                </Tag>
              ))}
            </Stack>
          </LinkOverlay>
        </Box>
      </Box>
    </LinkBox>
  );
};

export default Card;
