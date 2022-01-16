import { Box, Grid, Heading, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import useSWR from "swr";
import Paragraph from "../Paragraph";

const Anilist = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR("/api/anilist", fetcher);
  console.log(data);
  return (
    <>
      <Text as="p" fontSize="1rem" my={4}>Anilist</Text>
      <Grid
        mt={4}
        templateColumns={["1fr", "repeat(2, 1fr)", "repeat(2, 1fr)"]}
        gap={5}
      >
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
          <Box>
            <Text as="div" fontSize="sm" fontWeight="normal">
              Anime watched
            </Text>
            <Text as="div" mt={1} fontSize="xl" fontWeight="black">
              {data?.anilistUserStats.anime.count}
            </Text>
          </Box>
        </Box>

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
          <Box>
            <Text as="div" fontSize="sm" fontWeight="normal">
              Manga read
            </Text>
            <Text as="div" mt={1} fontSize="xl" fontWeight="black">
              {data?.anilistUserStats.manga.count}
            </Text>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default Anilist;
