import React from "react";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  HStack,
  Spacer,
  Stack,
  Table,
  TableContainer,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import ButtonGroup from "../components/ButtonGroup";
const SpecificFeedback = () => {
  return (
    <>
      <Box
        bg={"#EFEFEF"}
        h={"85vh"}
        w={"80%"}
        marginLeft="20%"
        position={"absolute"}
        top={"10"}
        marginTop={"17px"}
      >
        <Center>
          <Text as="b" marginTop={"2%"}>
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
          <TableContainer w="80%" marginTop={"2rem"} marginRight={"-2rem"}>
            <Table size="sm">
              <Thead>
                <Flex justifyContent={"right"}>
                  <Tr>
                    <Th>
                      STRONGLY
                      <br />
                      DISAGREE
                    </Th>
                    <Th>DISAGREE</Th>
                    <Th>AGREE</Th>
                    <Th>
                      {" "}
                      STROGLY
                      <br /> AGREE
                    </Th>
                    <Th>NO ANSWER</Th>
                  </Tr>
                </Flex>
              </Thead>
            </Table>
          </TableContainer>
        </Center>

        <Center>
          <Box w="80%" minW={"20vh"}>
            <Stack
              borderLeftWidth={"5px"}
              borderColor={"#4E37A5"}
              bg="white"
              p={4}
              color="#5A45AB"
              boxShadow="lg"
              borderRadius="sm"
            >
              <Flex>
                <Center>
                  <Text fontSize={{ base: "sm" }} color={"black"}>
                    Did you feel that our team answered your inquiry promptly?
                  </Text>
                </Center>
                <Spacer />
                <Box>
                  <Stack direction={["column", "row"]} spacing={"3.2rem"}>
                    <ButtonGroup buttons={["1", "2", "3", "4", "5"]} q={5} />
                  </Stack>
                </Box>
              </Flex>
            </Stack>
          </Box>
        </Center>

        <Center marginTop={"3"}>
          <Box w="80%" minW={"20vh"}>
            <Stack
              borderLeftWidth={"5px"}
              borderColor={"#4E37A5"}
              bg="white"
              p={4}
              color="#5A45AB"
              boxShadow="lg"
              borderRadius="sm"
            >
              <Flex>
                <Center>
                  <Text fontSize={{ base: "sm" }} color={"black"}>
                    Do you agree or disagree that your issue was effectively
                    resolved?
                  </Text>
                </Center>
                <Spacer />
                <Box>
                  <Stack direction={["column", "row"]} spacing={"3.2rem"}>
                    <ButtonGroup buttons={["1", "2", "3", "4", "5"]} q={6} />
                  </Stack>
                </Box>
              </Flex>
            </Stack>
          </Box>
        </Center>

        <Center marginTop={"3"}>
          <Box w="80%" minW={"20vh"}>
            <Stack
              borderLeftWidth={"5px"}
              borderColor={"#4E37A5"}
              bg="white"
              p={4}
              color="#5A45AB"
              boxShadow="lg"
              borderRadius="sm"
            >
              <Flex>
                <Center>
                  <Text fontSize={{ base: "sm" }} color={"black"}>
                    How likely are you to purchase again from us?
                  </Text>
                </Center>
                <Spacer />
                <Box>
                  <Stack direction={["column", "row"]} spacing={"3.2rem"}>
                    <ButtonGroup buttons={["1", "2", "3", "4", "5"]} q={7} />
                  </Stack>
                </Box>
              </Flex>
            </Stack>
          </Box>
        </Center>
        <Center marginTop={"3"}>
          <Box w="80%" minW={"20vh"}>
            <Stack
              borderLeftWidth={"5px"}
              borderColor={"#4E37A5"}
              bg="white"
              p={4}
              color="#5A45AB"
              boxShadow="lg"
              borderRadius="sm"
            >
              <Flex>
                <Center>
                  <Text fontSize={{ base: "sm" }} color={"black"}>
                    How likely are you to return to our website?
                  </Text>
                </Center>
                <Spacer />
                <Box>
                  <Stack direction={["column", "row"]} spacing={"3.2rem"}>
                    <ButtonGroup buttons={["1", "2", "3", "4", "5"]} q={8} />
                  </Stack>
                </Box>
              </Flex>
            </Stack>
          </Box>
        </Center>

        <Center marginTop={"3"}>
          <Box w="80%" minW={"20vh"}>
            <Stack
              borderLeftWidth={"5px"}
              borderColor={"#4E37A5"}
              bg="white"
              p={4}
              color="#5A45AB"
              boxShadow="lg"
              borderRadius="sm"
            >
              <Flex>
                <Center>
                  <Text fontSize={{ base: "sm" }} color={"black"}>
                    How satisfied are you with products?
                  </Text>
                </Center>
                <Spacer />
                <Box>
                  <Stack direction={["column", "row"]} spacing={"3.2rem"}>
                    <ButtonGroup buttons={["1", "2", "3", "4", "5"]} q={9} />
                  </Stack>
                </Box>
              </Flex>
            </Stack>
          </Box>
        </Center>
      </Box>
    </>
  );
};

export default SpecificFeedback;
