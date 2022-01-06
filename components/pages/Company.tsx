import Card from "../Card";
import { Heading, Grid } from "@chakra-ui/react";
import { FaRobot, FaMicrochip } from "react-icons/fa";

const companies = [
  {
    name: "DessIA",
    description:
      "Bot platform based on an Explainable AI to automate engineers tasks.",
    icon: <FaRobot fontSize="20px" />,
    url: "https://dessia.tech/",
    stack: ["Angular", "PrimeNG", "Babylon JS", "Figma"],
  },
  {
    name: "ThingType",
    description: "Automatic conception of electronic board.",
    icon: <FaMicrochip fontSize="20px" />,
    url: "https://www.linkedin.com/company/thingtype/about/",
    stack: ["Angular", "Figma"],
  },
];

const Company = () => {
  return (
    <>
      <Heading
        as="h1"
        fontSize={{ base: "24px", md: "30px", lg: "36px" }}
        mb={3}
      >
        I’ve worked with
      </Heading>
      <Grid mt={[4, 10]} templateColumns={["1fr"]} gap={5}>
        {companies.map((company) => (
          <Card company={company} key={company?.name} />
        ))}
      </Grid>
    </>
  );
};

export default Company;
