import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { Image } from '@chakra-ui/image';
import { Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Tooltip } from '@chakra-ui/tooltip';
import React from 'react';
import avatarImg from './BoyWithGlasses.jpg';

function Header() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");


    return (
        <Stack>
            <Circle position="absolute" bg="blue.100" opacity="0.1" w="300px" h="300px" alignSelf="flex-end"/>
            <Flex direction={isNotSmallerScreen ? "row" : "column"}
                spacing="200px" p={isNotSmallerScreen ? "32" : "0"} alignSelf="flex-start">
                <Box mt={isNotSmallerScreen ? "0" : "16"} align="flex-start">
                    <Text fontSize="4xl" fontWeight="semibold">Hi, I am</Text>
                    <Text fontSize="6xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">Sayed Sohail Jamadar</Text>
                    <Text color={isDark ? "gray.200" : "gray.500"}> Software Developer - Node.js, MongoDB, Python, Java, PHP, MySQL, AWS </Text>
                    <Button mt={8} colorScheme="blue" onClick={() => window.open("mailto:sohailjamadar2@gmail.com")}>Hire Me</Button>
                    <Button ml={5} mt={8} colorScheme="white.100" border="2px" borderColor="blue.500" color="black.900"  onClick={() => window.open("https://www.linkedin.com/in/sayed-sohail-jamadar")}>LinkedIn</Button>
                </Box>
                <Tooltip label="Img source: vecteezy.com" placement="right-end">
                    <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "0" : "12"} borderRadius="full"
                    backgroundColor="transparent" alt="avatar" loading="lazy" onClick={() =>{ window.open('https://vecteezy.com') }} boxShadow="lg" boxSize="300px" src={avatarImg} />
                </Tooltip>
            </Flex>
        </Stack>
    );
}

export default Header;
