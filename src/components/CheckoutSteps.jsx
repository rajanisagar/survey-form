import { Box, Center, Container, HStack, Text } from "@chakra-ui/react";
import React from "react";

import "./CheckoutSteps.css";

export default function CheckoutSteps(props) {
  //   const active = "md:mx-4 border-b-2 border-b-sky-300";
  // const notActive = "md:mx-4 border-b-2 hover:border-b-sky-600";
  return (
    <>
      <Box
        bg={"white"}
        w={"20%"}
        h={"100%"}
        minH={"93vh"}
        borderEnd={"2px"}
        borderColor={"#BABABA"}
      >
        <Box w="100%" p={4} className={props.step1 ? "activeside" : ""}>
          <Text fontSize="lg">GENERAL FEEDBACK</Text>
        </Box>
        <Box w="100%" p={4} className={props.step2 ? "activeside" : ""}>
          <Text fontSize="lg">SPECIFIC FEEDBACK</Text>
        </Box>

        <Box w="100%" p={4} className={props.step3 ? "activeside" : ""}>
          <Text fontSize="lg">FURTHER DETAILS</Text>
        </Box>
      </Box>
    </>
  );
}
