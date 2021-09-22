import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import Icon from '@chakra-ui/icon';
import { DiWebplatform } from 'react-icons/di'
import { Image } from '@chakra-ui/image';


function Profile() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%"
            maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}>
            <Box alignSelf="center" px="27" py="16">
                <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
                    1+
                </Heading>
                <Text fontSize="2xl" color="gray.400">Year of Experience</Text>
            </Box>
            <Box alignSelf="center" px="27" py="16">
                <Text fontWeight="bold" fontSize="2xl">Software Developer specialised in Web app and Backend development.</Text>
                <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
                <Flex rounded="xl" direction="column" mt={4} bg="blue.400" h="30vh" w="30vh" justify="flex-end">
                        <Image
                            mt="7"
                            ml="2"
                            boxSize="65px"
                            src="https://uxwing.com/wp-content/themes/uxwing/download/07-web-app-development/web-api.png"
                            alt="Express"
                        />          
                        <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                            API Development
                        </Text>
                    </Flex>
                    
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="gray.100" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "teal.400", }}>
                        <Image
                            mt="7"
                            ml="2"
                            boxSize="73px"
                            src="https://www.upstreamtech.io/hubfs/Icons-svg/webdev-purple.svg"
                            alt="Express"
                        />
                        <Text color="black" p="2" fontSize="xl" fontWeight="semibold">
                            Software Development
                        </Text>
                    </Flex>
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="gray.100" h="30vh" w="30vh" justify="flex-end"
                        _hover={{ bg: "green.400", }}

                    >
                        <Icon as={DiWebplatform} p="4" w="24" h="24" color="black" />
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                            Web Apps
                        </Text>
                    </Flex>
                </Flex>

            </Box>
        </Flex>
    )
}

export default Profile