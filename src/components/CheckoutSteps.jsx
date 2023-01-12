import { Box, Center, Container, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./CheckoutSteps.css";

export default function CheckoutSteps(props) {
  const navigate = useNavigate();
  return (
    <>
      <Center
        bg={"white"}
        borderBottom={"2px"}
        borderColor={"#BABABA"}
        marginTop={"0.2%"}
      >
        <HStack
          className="stepper-wrapper"
          height={"50px"}
          marginBottom={"0.3%"}
        >
          {props.step1 && (
            <>
              <div className={"stepper-item completed "}>
                <div className="step-counter"></div>
                <div className="step-name">General</div>
              </div>
              <div className={"stepper-item "}>
                <div className="step-counter"></div>
                <div className="step-name">Specific</div>
              </div>
              <div className={"stepper-item "}>
                <div className="step-counter"></div>
                <div className="step-name">Further</div>
              </div>
            </>
          )}
          {props.step2 && (
            <>
              <div className={"stepper-item completed "}>
                <div className="step-counter"></div>
                <div className="step-name">General</div>
              </div>
              <div className={"stepper-item  completed"}>
                <div className="step-counter"></div>
                <div className="step-name">Specific</div>
              </div>
              <div className={"stepper-item "}>
                <div className="step-counter"></div>
                <div className="step-name">Further</div>
              </div>
            </>
          )}
          {props.step3 && (
            <>
              <div className={"stepper-item completed "}>
                <div className="step-counter"></div>
                <div className="step-name">General</div>
              </div>
              <div className={"stepper-item  completed"}>
                <div className="step-counter"></div>
                <div className="step-name">Specific</div>
              </div>
              <div className={"stepper-item completed"}>
                <div className="step-counter"></div>
                <div className="step-name">Further</div>
              </div>
            </>
          )}
    
        </HStack>
      </Center>
      <Box
        bg={"white"}
        w={"20%"}
        h={"auto"}
        minH={"93vh"}
        borderEnd={"2px"}
        borderColor={"#BABABA"}
      >
        <button className="btn" onClick={() => navigate("/")}>
          <Box w="100%" p={4} className={props.step1 ? "activeside" : ""}>
            <Text fontSize="lg">GENERAL FEEDBACK</Text>
          </Box>
        </button>
        <button className="btn" onClick={() => navigate("/specificFeedback")}>
          <Box w="100%" p={4} className={props.step2 ? "activeside" : ""}>
            <Text fontSize="lg">SPECIFIC FEEDBACK</Text>
          </Box>
        </button>
        <button className="btn" onClick={() => navigate("/futherDetails")}>
          <Box w="100%" p={4} className={props.step3 ? "activeside" : ""}>
            <Text fontSize="lg">FURTHER DETAILS</Text>
          </Box>
        </button>
      </Box>
    </>
  );
}
