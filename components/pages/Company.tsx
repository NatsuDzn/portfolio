import Card from "../Card";
import { Heading, Grid, Text } from "@chakra-ui/react";
import { FaRobot, FaMicrochip } from "react-icons/fa";

const companies = [
  {
    name: "DessIA",
    description:
      "Bot platform based on an Explainable AI to automate engineers tasks.",
    icon: <FaRobot fontSize="xl" />,
    url: "https://dessia.tech/",
    stack: ["Angular", "PrimeNG", "Babylon JS", "Figma"],
    start: "October 2019",
    end: "Present"
  },
  {
    name: "ThingType",
    description: "Automatic conception of electronic board.",
    icon: <FaMicrochip fontSize="xl" />,
    url: "https://www.linkedin.com/company/thingtype/about/",
    stack: ["Angular", "Figma"],
    start: "Jul 2019",
    end: "Aug 2019"
  },
];

const Company = () => {
  return (
    <>
      <Text as="h1" fontSize="custom" fontWeight="bold">
        I’ve worked with
      </Text>
      <Grid mt={4} templateColumns={["1fr"]} gap={5}>
        {companies.map((company) => (
          <Card company={company} key={company?.name} />
        ))}
      </Grid>
    </>
  );
};

export default Company;
