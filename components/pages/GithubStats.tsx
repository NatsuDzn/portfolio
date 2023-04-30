import { Box, Grid, GridItem, Skeleton, Text, useColorModeValue } from "@chakra-ui/react";
import useSWRImmutable from "swr/immutable";

const GithubStats = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data } = useSWRImmutable("/api/github", fetcher);

  const borderColor = {
    default: useColorModeValue("gray.300", "gray.700"),
    hover: useColorModeValue("black", "green.500"),
  };

  return (
    <>
      <Text as="p" fontSize="1rem" my={4}>
        Github
      </Text>
      <Grid
        mt={4}
        templateColumns={["1fr", "repeat(2, 1fr)", "repeat(2, 1fr)"]}
        gap={5}
      >
        {!data ? <Skeleton height="90px" w="100%" borderRadius={5} /> : null}
        {data &&
          Object.keys(data.formattedStats).map((key, index) => (
            <GridItem
              key={index}
              w="100%"
              p={4}
              borderColor={borderColor.default}
              borderRadius={5}
              borderWidth="1px"
              transition=".25s"
              cursor="pointer"
              role="group"
              _hover={{
                borderColor: borderColor.hover,
                shadow: "lg",
                transform: "translateY(-4px)",
              }}
            >
              <Box>
                <Text as="div" fontSize="sm" fontWeight="normal">
                  Public contributions in the last year
                </Text>
                <Text as="div" mt={1} fontSize="xl" fontWeight="black">
                  {data.formattedStats[key].contributionCalendar.total}
                </Text>
              </Box>
            </GridItem>
          ))}
      </Grid>
    </>
  );
};

export default GithubStats;
