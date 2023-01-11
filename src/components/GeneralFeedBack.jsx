import React from "react";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
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
const GeneralFeedBack = () => {
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
          <Box w="80%" minW={"20"}>
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
                    How do you rate our Service?
                  </Text>
                </Center>
                <Spacer />
                <Box>
                  <Stack direction={["column", "row"]} spacing={"3.2rem"}>
                    <ButtonGroup buttons={["1", "2", "3", "4", "5"]} q={0} />
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
              p={4}
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
                  <Stack direction={["column", "row"]} spacing={"7vh"}>
                    <ButtonGroup buttons={["1", "2", "3", "4", "5"]} q={1} />
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
              p={4}
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
                    <ButtonGroup buttons={["1", "2", "3", "4", "5"]} q={2} />
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
              p={4}
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
                    <ButtonGroup buttons={["1", "2", "3", "4", "5"]} q={3} />
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
              p={4}
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
                    <ButtonGroup buttons={["1", "2", "3", "4", "5"]} q={4} />
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

export default GeneralFeedBack;
