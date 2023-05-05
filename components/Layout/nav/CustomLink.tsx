import NextLink from "next/link";
import {
  Link,
  LinkProps,
  useColorModeValue,
} from "@chakra-ui/react";
import { PropsWithChildren } from "react";

interface CustomLinkProps extends LinkProps {
  href: string;
  currentPath: string;
}

const CustomLink = ({
  children,
  href,
  currentPath,
  ...props
}: PropsWithChildren<CustomLinkProps>) => {
  const isActive = currentPath === href;
  const activeColor = useColorModeValue("gray.100", "active");

  return (
    <Link
      as={NextLink}
      href={href}
      bg={isActive && activeColor}
      _hover={{
        textDecoration: "none",
        bg: activeColor,
      }}
      {...props}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
