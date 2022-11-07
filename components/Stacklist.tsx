import { HStack, Icon, Tooltip } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";
import {
  SiAirtable,
  SiAngular,
  SiChakraui,
  SiMaterialdesign,
  SiNextdotjs,
  SiSass,
  SiVuedotjs,
} from "react-icons/si";

const handleStackIcon = (stack: string): IconType => {
  switch (stack) {
    case "next":
      return SiNextdotjs;
    case "mantine":
      return SiNextdotjs;
    case "chakraui":
      return SiChakraui;
    case "airtable":
      return SiAirtable;
    case "angular":
      return SiAngular;
    case "angular material":
      return SiMaterialdesign;
    case "sass":
      return SiSass;
    case "vue":
      return SiVuedotjs;
  }
};

const Stacklist = ({ stacks }) => {
  return (
    <HStack mt={4} gap={1}>
      {stacks.split(",").map((stack) => {
        return (
          <Tooltip key={stack} label={stack} shouldWrapChildren textTransform="capitalize">
            <Icon as={handleStackIcon(stack)} />
          </Tooltip>
        );
      })}
    </HStack>
  );
};

export default Stacklist;
