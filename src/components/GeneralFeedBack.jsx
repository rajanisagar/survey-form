import React from "react";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import ButtonGroup from "../components/ButtonGroup";
import CheckoutSteps from "./CheckoutSteps";
import { useNavigate } from "react-router-dom";
const GeneralFeedBack = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box bg={""} w={"100%"}>
        <CheckoutSteps
          step1
          step2={undefined}
          step3={undefined}
        ></CheckoutSteps>
      </Box>
      <Box
        bg={"#EFEFEF"}
        h={"auto"}
        // w={"auto"}
        marginLeft="20%"
        position={"absolute"}
        top={"10"}
        marginTop={"22px"}
        minW={"80%"}
      >
        <Center>
          <Text as="b" marginTop={8}>
            "The quick brown fox jumps over the lazy dog" is an English-language
            pangram—a
          </Text>
        </Center>

        <Center>
          <Text marginTop={"1%"}>
            "The quick brown fox jumps over the lazy dog" is an English-language
            pangram—a
            <br />
            the letters of the English alphabet. Owing to
          </Text>
        </Center>

        <Center>
          <Box w="83%" minW={"20"} marginTop={8}>
            <Stack p={4} color="#5A45AB">
              <Flex>
                <Box marginLeft={"55.6%"}>
                  <Stack direction={["column", "row"]} spacing={"2rem"}>
                    <Text fontSize={"xs"} color={"#38343A"} as={"b"}>
                      STRONGLY <br /> DISAGREE
                    </Text>
                    <Center>
                      <Text fontSize={"xs"} color={"#38343A"} as={"b"}>
                        DISAGREE
                      </Text>
                    </Center>
                    <Center>
                      <Text fontSize={"xs"} color={"#38343A"} as={"b"}>
                        &nbsp;&nbsp;&nbsp;&nbsp;{"AGREE"}
                        &nbsp;&nbsp;&nbsp;
                      </Text>
                    </Center>

                    <Center>
                      <Text fontSize={"xs"} color={"#38343A"} as={"b"}>
                        STRONGLY <br /> AGREE
                      </Text>
                    </Center>
                    <Center>
                      <Text fontSize={"xs"} color={"#38343A"} as={"b"}>
                        NO ANSWER
                      </Text>
                    </Center>
                  </Stack>
                </Box>
              </Flex>
            </Stack>
          </Box>
        </Center>
        <Center>
          <Box w="80%" minW={"20vh"}>
            <Stack
              borderLeftWidth={"5px"}
              borderColor={"#4E37A5"}
              bg="white"
              p={3}
              color="#5A45AB"
              boxShadow="lg"
              borderRadius="sm"
            >
              <Flex>
                <Center>
                  <Text fontSize={{ base: "sm" }} color={"black"}>
                    How do you rate our Service?
                  </Text>
                </Center>
                <Spacer />
                <Box>
                  <Stack direction={["column", "row"]} spacing={"3.2rem"}>
                    <ButtonGroup buttons={["1", "2", "3", "4", "0"]} q={0} />
                  </Stack>
                </Box>
              </Flex>
            </Stack>
          </Box>
        </Center>
        <Center marginTop={"3"}>
          <Box w="80%" minW={"20"}>
            <Stack
              borderLeftWidth={"5px"}
              borderColor={"#4E37A5"}
              bg="white"
              p={3}
              color="#5A45AB"
              boxShadow="lg"
              borderRadius="sm"
            >
              <Flex>
                <Center>
                  <Text fontSize={{ base: "sm" }} color={"black"}>
                    Do you enjoy our company’s culture?
                  </Text>
                </Center>
                <Spacer />
                <Box>
                  <Stack direction={["column", "row"]} spacing={"3.2rem"}>
                    <ButtonGroup buttons={["1", "2", "3", "4", "0"]} q={1} />
                  </Stack>
                </Box>
              </Flex>
            </Stack>
          </Box>
        </Center>

        <Center marginTop={"3"}>
          <Box w="80%" minW={"20"}>
            <Stack
              borderLeftWidth={"5px"}
              borderColor={"#4E37A5"}
              bg="white"
              p={3}
              color="#5A45AB"
              boxShadow="lg"
              borderRadius="sm"
            >
              <Flex>
                <Center>
                  <Text fontSize={{ base: "sm" }} color={"black"}>
                    how satisfied are you with your in-store experience today?
                  </Text>
                </Center>
                <Spacer />
                <Box>
                  <Stack direction={["column", "row"]} spacing={"3.2rem"}>
                    <ButtonGroup buttons={["1", "2", "3", "4", "0"]} q={2} />
                  </Stack>
                </Box>
              </Flex>
            </Stack>
          </Box>
        </Center>
        <Center marginTop={"3"}>
          <Box w="80%" minW={"20"}>
            <Stack
              borderLeftWidth={"5px"}
              borderColor={"#4E37A5"}
              bg="white"
              p={3}
              color="#5A45AB"
              boxShadow="lg"
              borderRadius="sm"
            >
              <Flex>
                <Center>
                  <Text fontSize={{ base: "sm" }} color={"black"}>
                    How likely are you to recommend (insert product or service)
                    to others?
                  </Text>
                </Center>
                <Spacer />
                <Box>
                  <Stack direction={["column", "row"]} spacing={"3.2rem"}>
                    <ButtonGroup buttons={["1", "2", "3", "4", "0"]} q={3} />
                  </Stack>
                </Box>
              </Flex>
            </Stack>
          </Box>
        </Center>

        <Center marginTop={"3"}>
          <Box w="80%" minW={"20"}>
            <Stack
              borderLeftWidth={"5px"}
              borderColor={"#4E37A5"}
              bg="white"
              p={3}
              color="#5A45AB"
              boxShadow="lg"
              borderRadius="sm"
            >
              <Flex>
                <Center>
                  <Text fontSize={{ base: "sm" }} color={"black"}>
                    Rate your satisfaction with our team in resolving your
                    issue.
                  </Text>
                </Center>
                <Spacer />
                <Box>
                  <Stack direction={["column", "row"]} spacing={"3.2rem"}>
                    <ButtonGroup buttons={["1", "2", "3", "4", "0"]} q={4} />
                  </Stack>
                </Box>
              </Flex>
            </Stack>
          </Box>
        </Center>
        <Box
          borderTop={"2px"}
          h={"60px"}
          borderColor={"#BABABA"}
          bg={"white"}
          w={"100%"}
          marginTop={"4%"}
          // position={'absolute'}
          // botton={'0'}
        >
          <Flex>
            <Spacer />
            <Button
              colorScheme="purple"
              variant="ghost"
              size="md"
              fontSize={"1.3rem"}
              marginTop={"0.5%"}
              marginRight={"15px"}
              onClick={() => navigate("/specificFeedback")}
            >
              <Text> {" Next >"}</Text>
            </Button>
          </Flex>
        </Box>
      </Box>


    </>
  );
};

export default GeneralFeedBack;
