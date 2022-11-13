import useSWR from "swr";
import {
  Box,
  HStack,
  Image,
  Link,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { usePalette } from "react-palette";
import { SiTrakt } from "react-icons/si";
import { IoPlay } from "react-icons/io5";
import Section from "./Layout/Section";
import { AnimatePresence } from "framer-motion";

const NowWatching = () => {
  const { colorMode } = useColorMode();
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data } = useSWR("/api/trakt", fetcher);

  const palette = usePalette(data?.poster_path).data;

  const borderColor = {
    base: useColorModeValue("gray.300", "gray.700"),
    hover: colorMode !== "light" ? palette.darkVibrant : palette.lightVibrant,
  };

  const paletteColor = {
    background:
      colorMode === "light" ? palette.darkVibrant : palette.lightVibrant,
    text: colorMode === "light" ? palette.lightVibrant : palette.darkVibrant,
  };

  return (
    <AnimatePresence>
      {data?.isWatching ? (
        <Section delay={0.1}>
          <HStack fontSize="xs" mb={2}>
            <IoPlay size="14px" />
            <Text>Currently watching:</Text>
          </HStack>
          <Link
            style={{ textDecoration: "none" }}
            href={
              data?.isWatching ? data?.url : "https://trakt.tv/users/natsudzn"
            }
            rel="noopener"
            isExternal
            w={72}
            position="relative"
            display="flex"
            alignItems="center"
            gap={4}
            px={4}
            py={3}
            bg={paletteColor.background}
            rounded="md"
            outline="4px solid"
            outlineColor="transparent"
            transition=".25s"
            _hover={{ outlineColor: borderColor["hover"], shadow: "lg" }}
            _focus={{ outlineColor: borderColor["hover"] }}
          >
            <Image
              w={12}
              h="auto"
              shadow="md"
              rounded="md"
              src={data?.poster_path}
              alt={data?.title}
            />

            <VStack align="start" gap={0} w="100%">
              <Text
                as="p"
                fontWeight="bold"
                noOfLines={1}
                color={paletteColor.text}
              >
                {data?.title}
              </Text>
              <Text
                as="span"
                fontSize="xs"
                m="0 !important"
                noOfLines={1}
                color={paletteColor.text}
              >
                {data?.type === "episode"
                  ? `S${String(data?.info.season).padStart(
                      2,
                      "0"
                    )} - EP${String(data?.info.number).padStart(2, "0")} (${
                      data?.info.title
                    })`
                  : data?.info.year}
              </Text>
            </VStack>

            <Box position="absolute" bottom={1.5} right={1.5}>
              <SiTrakt size={16} color={paletteColor.text} />
            </Box>
          </Link>
        </Section>
      ) : null}
    </AnimatePresence>
  );
};

export default NowWatching;
