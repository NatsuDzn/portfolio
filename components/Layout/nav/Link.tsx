import NextLink from "next/link";
import {
  Link as ChakraLink,
  LinkProps,
  useColorModeValue,
} from "@chakra-ui/react";
import { PropsWithChildren } from "react";

interface CustomLinkProps extends LinkProps {
  href: string;
  currentPath: string;
}

const Link = ({
  children,
  href,
  currentPath,
  ...props
}: PropsWithChildren<CustomLinkProps>) => {

  const isActive = currentPath === href;
  const activeColor = useColorModeValue("gray.100", "active");

  return (
    <NextLink href={href} passHref>
      <ChakraLink
        bg={isActive && activeColor}
        _hover={{
          textDecoration: "none",
        }}
        {...props}
      >
        {children}
      </ChakraLink>
    </NextLink>
  );
};

export default Link;
