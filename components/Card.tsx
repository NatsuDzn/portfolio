import {
  Box,
  Heading,
  IconButton,
  LinkOverlay,
  LinkBox,
  useColorModeValue,
  HStack,
  Text,
} from "@chakra-ui/react";
import { FaAngular, FaBook, FaCube, FaFigma } from "react-icons/fa";
import Paragraph from "./Paragraph";

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
          borderColor: useColorModeValue("black", "green.500"),
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
          color={useColorModeValue("gray.600", "white")}
          _groupHover={{ color: useColorModeValue("black", "green.500") }}
          icon={company?.icon}
        />
        <Box w="100%">
          <LinkOverlay href={company?.url} rel="noopener" isExternal>
            <HStack justifyContent="space-between">
              <Heading as="h2" fontSize="14px">
                {company?.name}
              </Heading>
              <HStack fontSize="xs" fontWeight="light">
                <Text>{company?.start}</Text>
                <Text>-</Text>
                <Text>{company?.end}</Text>
              </HStack>
            </HStack>
            <Paragraph mt={1} fontSize="sm">
              {company?.description}
            </Paragraph>
          </LinkOverlay>
        </Box>
      </Box>
    </LinkBox>
  );
};

export default Card;
