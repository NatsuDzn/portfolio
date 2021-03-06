import { WarningTwoIcon } from "@chakra-ui/icons";
import {
  Box,
  Stack,
  Text,
  Container,
  ButtonGroup,
  IconButton,
  Tag,
  TagLeftIcon,
  TagLabel,
  Center,
} from "@chakra-ui/react";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import Nowplaying from "../Nowplaying";
import Nowwatching from "../Nowwatching";

const Footer = () => (
  <Box
    as="footer"
    role="contentinfo"
    mx="auto"
    maxW="7xl"
    py="12"
    px={{ base: "4", md: "8" }}
  >
    <Container maxW="container.md">
      <Stack direction="row" spacing="4" align="center" justify="space-between">
        <Text fontSize="sm">
          <Tag mr={4} size="sm" key="sm" variant="outline" colorScheme="yellow">
            <TagLeftIcon boxSize="12px" as={WarningTwoIcon} />
            <TagLabel>WIP</TagLabel>
          </Tag>
          &copy; {new Date().getFullYear()} Nathanael Louzoun
        </Text>
        <ButtonGroup variant="ghost" color="gray.600">
          <IconButton
            as="a"
            href="https://www.linkedin.com/in/nathana%C3%ABl-louzoun-008078173/"
            target="_blank"
            rel="noopener"
            aria-label="Linkedin"
            icon={<FaLinkedin fontSize="xl" />}
          />
          <IconButton
            as="a"
            href="https://github.com/NatsuDzn"
            target="_blank"
            rel="noopener"
            aria-label="Github"
            icon={<FaGithub fontSize="xl" />}
          />
        </ButtonGroup>
      </Stack>
      <Center mt={4} gap={4} flexWrap="wrap" alignItems="start">
        <Nowplaying />
        {/* <Nowwatching /> */}
      </Center>
    </Container>
  </Box>
);

export default Footer;
