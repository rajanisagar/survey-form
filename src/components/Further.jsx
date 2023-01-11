import React, { useContext } from "react";
import {
  Box,
  RadioGroup,
  Radio,
  Button,
  Center,
  Container,
  Flex,
  Stack,
  Text,
} from "@chakra-ui/react";

import ContextApp from "../contextApp";
const Futher = () => {
  const { questions, setQuestions } = useContext(ContextApp);
  const handleChangeAge = (event) => {
    questions[10] = event.target.value;
    console.log(questions);
  };
  const handleChangegender = (event) => {
    questions[11] = event.target.value;
    console.log(questions);
  };
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
            pangram—a the letters of the English alphabet. Owing to
          </Text>
        </Center>

        <Center marginTop={"2rem"}>
          <Box w="40%" minW={"20vh"}>
            <Stack
              borderLeftWidth={"5px"}
              borderColor={"#4E37A5"}
              bg="white"
              p={4}
              color="#5A45AB"
              boxShadow="lg"
              borderRadius="sm"
            >
              <Text
                as={"b"}
                fontSize={{ base: "md" }}
                textAlign={"left"}
                color={"black"}
              >
                Please add your age
              </Text>

              <Flex>
                <RadioGroup defaultValue={questions[10]}>
                  <Stack spacing={5} direction="column">
                    <Radio value="<15" onChange={handleChangeAge}>
                      <Text color={"black"}> {"<15"}</Text>
                    </Radio>
                    <Radio value="25-40" onChange={handleChangeAge}>
                      <Text color={"black"}> {"25-40"}</Text>
                    </Radio>
                    <Radio value=">41" onChange={handleChangeAge}>
                      <Text color={"black"}> {">40"}</Text>
                    </Radio>
                    <Radio value="pefer_not_to_say" onChange={handleChangeAge}>
                      <Text color={"black"}> {"Perfer not to say"}</Text>
                    </Radio>
                  </Stack>
                </RadioGroup>
              </Flex>
            </Stack>
          </Box>
        </Center>

        <Center marginTop={"1rem"}>
          <Box w="40%" minW={"20vh"}>
            <Stack
              borderLeftWidth={"5px"}
              borderColor={"#4E37A5"}
              bg="white"
              p={4}
              color="#5A45AB"
              boxShadow="lg"
              borderRadius="sm"
            >
              <Text
                as={"b"}
                fontSize={{ base: "md" }}
                textAlign={"left"}
                color={"black"}
              >
                Please select your geneder
              </Text>

              <Flex>
                <RadioGroup defaultValue={questions[11]}>
                  <Stack spacing={5} direction="column">
                    <Radio value="male" onChange={handleChangegender}>
                      <Text color={"black"}> {">40"}</Text>
                    </Radio>
                    <Radio value="female" onChange={handleChangegender}>
                      <Text color={"black"}> Female</Text>
                    </Radio>
                    <Radio value="other" onChange={handleChangegender}>
                      <Text color={"black"}> Other</Text>
                    </Radio>
                    <Radio
                      value="perfer_not_to_say"
                      onChange={handleChangegender}
                    >
                      <Text color={"black"}> Pefer not to say</Text>
                    </Radio>
                  </Stack>
                </RadioGroup>
              </Flex>
            </Stack>
          </Box>
        </Center>
      </Box>
    </>
  );
};

export default Futher;
