import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  HStack,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Link, NavLink } from "react-router-dom";
import ButtonGroup from "../components/ButtonGroup";
import CheckoutSteps from "../components/CheckoutSteps";
import Futher from "../components/Further";
import GeneralFeedBack from "../components/GeneralFeedBack";
import SpecificFeedback from "../components/SpecificFeedback";

const Home = () => {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  return (
    <>
      <Center bg={"white"} borderBottom={"2px"} borderColor={"#BABABA"}>
        <HStack className="stepper-wrapper" height={"50px"}>
          {page === 0 && (
            <>
              <div className={"stepper-item completed "}>
                <div class="step-counter"></div>
                <div class="step-name">General</div>
              </div>
              <div class={"stepper-item "}>
                <div class="step-counter"></div>
                <div class="step-name">Specific</div>
              </div>
              <div class={"stepper-item "}>
                <div class="step-counter"></div>
                <div class="step-name">Further</div>
              </div>
            </>
          )}

          {page === 1 && (
            <>
              <div className={"stepper-item completed "}>
                <div class="step-counter"></div>
                <div class="step-name">General</div>
              </div>
              <div class={"stepper-item  completed"}>
                <div class="step-counter"></div>
                <div class="step-name">Specific</div>
              </div>
              <div class={"stepper-item "}>
                <div class="step-counter"></div>
                <div class="step-name">Further</div>
              </div>
            </>
          )}
          {page === 2 && (
            <>
              <div className={"stepper-item completed "}>
                <div class="step-counter"></div>
                <div class="step-name">General</div>
              </div>
              <div class={"stepper-item  completed"}>
                <div class="step-counter"></div>
                <div class="step-name">Specific</div>
              </div>
              <div class={"stepper-item completed"}>
                <div class="step-counter"></div>
                <div class="step-name">Further</div>
              </div>
            </>
          )}
        </HStack>
      </Center>

      <Box bg={""} w={"100%"}>
        {page === 0 && (
          <CheckoutSteps
            step1
            step2={undefined}
            step3={undefined}
          ></CheckoutSteps>
        )}
        {page === 1 && (
          <CheckoutSteps
            step1={undefined}
            step2
            step3={undefined}
          ></CheckoutSteps>
        )}
        {page === 2 && (
          <CheckoutSteps
            step1={undefined}
            step2={undefined}
            step3
          ></CheckoutSteps>
        )}
      </Box>
      {page === 0 && <GeneralFeedBack />}
      {page === 1 && <SpecificFeedback />}
      {page === 2 && <Futher />}

      <Box
        borderTop={"2px"}
        h={"60px"}
        borderColor={"#BABABA"}
        bg={"white"}
        w={"80%"}
        marginLeft={"20%"}
        position={"absolute"}
        bottom={"0"}
      >
        <Flex marginTop={"3px"}>
          {page >= 1 && (
            <Button
              colorScheme="purple"
              variant="ghost"
              size="lg"
              w={"10rem"}
              onClick={() => {
                console.log(page);
                if (page >= 1) {
                  setPage(page - 1);
                }
              }}
            >
              <Text> {"< Previous"}</Text>
            </Button>
          )}
          <Spacer />

          {page === 2 && (
            <Button
              onClick={() => navigate("/submited")}
              marginRight={"20%"}
              colorScheme="purple"
              variant="outline"
              marginTop={"5px"}
            >
              Submit
            </Button>
          )}

          <Spacer />
          {page <= 1 && (
            <Button
              colorScheme="purple"
              variant="ghost"
              size="lg"
              marginRight={"20px"}
              onClick={() => {
                console.log(page);
                if (page < 2) {
                  setPage(page + 1);
                }
              }}
            >
              <Text> {" Next >"}</Text>
            </Button>
          )}
        </Flex>
      </Box>
    </>
  );
};

export default Home;
