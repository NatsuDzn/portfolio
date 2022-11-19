import {
  Box,
  Heading,
  LinkOverlay,
  LinkBox,
  useColorModeValue,
  HStack,
  Text,
} from "@chakra-ui/react";
import Paragraph from "./Paragraph";
import Image from "next/image";

const convertDate = (date: string): string => {  
  if (date)
    return new Date(date).toLocaleDateString("en-us", {
      month: "long",
      year: "numeric",
    });
};

const ExpCard = ({ exp }) => {
  return (
    <LinkBox as="article">
      <HStack
        w="100%"
        p={4}
        borderColor={useColorModeValue("gray.300", "gray.700")}
        borderRadius={5}
        borderWidth="1px"
        transition=".25s"
        cursor="pointer"
        role="group"
        _hover={{
          borderColor: useColorModeValue("black", "green.500"),
          shadow: "lg",
          transform: "translateY(-4px)",
        }}
      >
        <Box
          p={2}
          borderColor={useColorModeValue("gray.300", "gray.700")}
          borderRadius="lg"
          borderWidth="1px"
          transition=".25s"
          display="flex"
          mr={2}
        >
          <Image
            height={36}
            width={36}
            alt={exp.name}
            src={exp.logo_url}
            objectFit="contain"
          />
        </Box>
        <Box w="100%">
          <LinkOverlay href={exp.url} rel="noopener" isExternal>
            <HStack justifyContent="space-between">
              <Heading as="h2" fontSize="14px">
                {exp.name}
              </Heading>
              <HStack fontSize="xs" fontWeight="light">
                <Text>{convertDate(exp.start_date)}</Text>
                <Text>-</Text>
                <Text>{convertDate(exp.end_date) || "Present"}</Text>
              </HStack>
            </HStack>
            <Paragraph mt={1} fontSize="sm">
              {exp.description}
            </Paragraph>
          </LinkOverlay>
        </Box>
      </HStack>
    </LinkBox>
  );
};

export default ExpCard;
