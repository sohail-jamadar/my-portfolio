import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import React from "react";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
import { FaSun, FaMoon, FaGithub, FaLinkedin } from 'react-icons/fa'
import Header from "./components/header";
import Profile from "./components/profile";
import Social from "./components/social";

function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  
  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading
          ml="8" size="md" fontWeight='semibold' color="cyan.400">sohail.codes</Heading>

        <Spacer></Spacer>
        <IconButton icon={<FaLinkedin />} isRound='true' onClick={() => window.open("https://www.linkedin.com/in/sayed-sohail-jamadar")}></IconButton>
        <IconButton ml={2} icon={<FaGithub />} onClick={() => window.open("https://github.com/sohail-jamadar")} isRound='true'></IconButton>
        <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
      </Flex>
      <Header></Header>
      <Social></Social>
      <Profile></Profile>      
    </VStack>
  );
}

export default App;