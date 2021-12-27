import { Text, TextProps, useColorModeValue } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

const Paragraph = ({ children, ...props }: PropsWithChildren<TextProps>) => {
  const textColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Text color={textColor} {...props}>
      {children}
    </Text>
  );
};

export default Paragraph;
