import {
  Menu,
  MenuButton,
  useColorModeValue,
  MenuList,
  Button,
  MenuItem,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import { FaAngleDown } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import CustomLink from "./CustomLink";

type DropdownProps = {
  currentPath: string;
  extraLinks: extraLinks[];
}

interface extraLinks {
  name: string;
  route: string;
  icon: IconType | any;
}

const DropdownMenu: FunctionComponent<DropdownProps> = ({ currentPath, extraLinks }) => {
  const router = useRouter();
  const { asPath } = router;
  
  const activeColor = useColorModeValue("gray.100", "active");

  return (
    <Menu autoSelect={false}>
      <MenuButton
        p={2}
        textAlign="left"
        rounded={"md"}
        bg="none"
        _hover={{
          bg: activeColor,
        }}
        _active={{
          bg: activeColor,
        }}
        fontWeight={400}
        as={Button}
        rightIcon={<FaAngleDown />}
      >
        Links
      </MenuButton>
      <MenuList bg={useColorModeValue("gray.100", "darkBackground")}> 
        {extraLinks &&
          extraLinks?.map(({ name, route, icon }) => (
            <CustomLink href={route} key={name} currentPath={asPath}>
              <MenuItem
                icon={icon}
                bg={
                  currentPath === route &&
                  activeColor
                }
                _hover={{
                  bg: activeColor,
                }}
              >
                {name}
              </MenuItem>
            </CustomLink>
          ))}
      </MenuList>
    </Menu>
  );
};

export default DropdownMenu;
