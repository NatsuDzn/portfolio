import {
  Box,
  Stack,
  Text,
  Container,
  ButtonGroup,
  IconButton,
} from "@chakra-ui/react";

import { FaLinkedin, FaGithub } from "react-icons/fa";

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
          &copy; {new Date().getFullYear()} Nathanael Louzoun
        </Text>
        <ButtonGroup variant="ghost" color="gray.600">
          <IconButton
            as="a"
            href="https://www.linkedin.com/in/nathana%C3%ABl-louzoun-008078173/"
            target="_blank"
            aria-label="Linkedin"
            icon={<FaLinkedin fontSize="20px" />}
          />
          <IconButton
            as="a"
            href="https://github.com/NatsuDzn"
            target="_blank"
            aria-label="Github"
            icon={<FaGithub fontSize="20px" />}
          />
        </ButtonGroup>
      </Stack>
    </Container>
  </Box>
);

export default Footer;
