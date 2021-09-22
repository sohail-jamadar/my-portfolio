import { Image } from '@chakra-ui/image'
import { Box, Flex, Heading, HStack, Link, List, ListIcon, ListItem, Stack, Text, VStack } from '@chakra-ui/layout'
import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query';
import { Tooltip } from '@chakra-ui/tooltip';
import { ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons'


// import { FaFacebookF, FaGoogle, FaSpotify, FaShopify } from 'react-icons/fa'

function Social() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Stack>
        <VStack alignSelf="center" align="center">
            
            {/* About Me starts from here */}
            <Box px="27" py="16">
                <Heading fontWeight="extrabold" align="center" color="cyan.500" size="2xl">
                    About me
                </Heading>

                <Text mt="7" fontSize="2xl" align="center" fontWeight="semibold">Hello World, Iam Sohail, a software engineer from Vijayapur, Karnataka</Text>
                <Text mt="4" fontSize="2xl" align="center" >I love to design and code. I have good experience of building Restful API using Node.js . I concentrate on writing clean and understandable code. Currently, I have completed my B.E in Computer Science Engineering at Secab Institute of Engineering and Technology, Vijayapura.</Text>

            </Box>

            {/* Proficient Skills starts from here */}
            <Box>
                <Heading fontWeight="extrabold" align="center" color="cyan.500" size="2xl">
                    Proficient skills
                </Heading>
            </Box>
            <HStack>
            <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
                <Tooltip label="Node.js" aria-label="A tooltip">
                <Image
                    mt="7"
                    loading="lazy"
                    boxSize="70px"
                    objectFit="cover"
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
                    alt="Node.js"
                />
                </Tooltip>
                <Tooltip label="MongoDB" aria-label="A tooltip">
                <Image
                    mt="7"
                    ml="2"
                    loading="lazy"
                    boxSize="70px"
                    objectFit="cover"
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg"
                    alt="MongoDB"
                />
                </Tooltip>
                <Tooltip label="Javascript" aria-label="A tooltip">
                <Image
                    mt="7"
                    ml="2"
                    loading="lazy"
                    boxSize="70px"
                    objectFit="cover"
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                    alt="Javascript"
                />
                </Tooltip>
                <Tooltip label="Express" aria-label="A tooltip">
                <Image
                    mt="7"
                    ml="2"
                    loading="lazy"
                    boxSize="70px"
                    objectFit="cover"
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                    alt="Express"
                />
                </Tooltip>
                <Tooltip label="Java" aria-label="A tooltip">
                <Image
                    mt="7"
                    ml="2"
                    loading="lazy"
                    boxSize="70px"
                    objectFit="cover"
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
                    alt="Java"
                />
                </Tooltip>
                <Tooltip label="Python" aria-label="A tooltip">
                <Image
                    mt="7"
                    ml="2"
                    loading="lazy"
                    boxSize="70px"
                    objectFit="cover"
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                    alt="Python"
                />
                </Tooltip>
                <Tooltip label="PHP" aria-label="A tooltip">
                <Image
                    mt="7"
                    ml="2"
                    loading="lazy"
                    boxSize="70px"
                    objectFit="cover"
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"
                    alt="PHP"
                />
                </Tooltip>
                <Tooltip label="MySQL" aria-label="A tooltip">
                <Image
                    mt="7"
                    ml="2"
                    loading="lazy"
                    boxSize="70px"
                    objectFit="cover"
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg"
                    alt="MySQL"
                />
                </Tooltip>
                <Tooltip label="HTML5" aria-label="A tooltip">
                <Image
                    mt="7"
                    ml="2"
                    loading="lazy"
                    boxSize="70px"
                    objectFit="cover"
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                    alt="HTML5"
                />
                </Tooltip>
                <Tooltip label="CSS3" aria-label="A tooltip">
                <Image
                    mt="7"
                    ml="2"
                    loading="lazy"
                    boxSize="70px"
                    objectFit="cover"
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                    alt="CSS3"
                />
                </Tooltip>
                <Tooltip label="AWS" aria-label="A tooltip">
                <Image
                    mt="7"
                    ml="2"
                    loading="lazy"
                    boxSize="70px"
                    objectFit="cover"
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg"
                    alt="AWS"
                />
                </Tooltip>
                </Flex>
            </HStack>

            {/* My Projects from here */}
            <Box px="27" py="16">
                <Heading fontWeight="extrabold" mt="9" align="center" color="cyan.500" size="2xl">
                    My Projects
                </Heading>
                <Text mt="7" fontSize="2xl" align="left" fontWeight="semibold" color="orange.600"> PixaWiki Search Bot (July 2021 - July 2021)</Text>
                <Text mt="3" fontSize="2xl" align="left" >A Node.js based Telegram bot. This amazing bot helps to search free images from Pixabay and articles from Wikipedia. This bot is an inline, which can be used in any chat/group/channel just by typing its username and along with query in any chat.</Text>
                <List>
                    <ListItem>
                        <ListIcon as={ChevronRightIcon} color="green.500" />
                        Link: <Link href="https://telegram.me/s/mvpbots" isExternal>https://telegram.me/s/mvpbots <ExternalLinkIcon mx="2px" /></Link>
                    </ListItem>
                </List>
                <Text mt="3" fontSize="2xl" align="left" color="gray.500">Tech Stack: Node.js, Express.js, Telegraf Framework, API</Text>

                <Text mt="7" fontSize="2xl" align="left" fontWeight="semibold" color="orange.500">Blockchain Based Procurement System.  (Feb 2021 - Jun 2021)</Text>
                <Text mt="3" fontSize="2xl" align="left" >A Blockchain based framework for procurement system. Main objective of this project is to provide improved transparency and trust to tackle issues that were faced with exisiting system.</Text>
                <List spacing={3} mt="3">
                    <ListItem>
                        <ListIcon as={ChevronRightIcon} color="green.500" />
                        Decentralized system
                    </ListItem>
                    <ListItem>
                        <ListIcon as={ChevronRightIcon} color="green.500" />
                        Improved transparency
                    </ListItem>
                </List>
                
                <Text mt="3" fontSize="2xl" align="left" color="gray.500">Tech Stack: Ethereum, Solidity, Metamask</Text>

                <Link href="https://github.com/sohail-jamadar/user_auth" isExternal><Text mt="7" fontSize="2xl" align="left" fontWeight="semibold" color="orange.400">User Authorization System. <ExternalLinkIcon mx="2px" /> (Sep 2020 - Oct 2020)</Text></Link>
                <Text mt="3" fontSize="2xl" align="left" >Fast and simple login/registration module. Built using Passport.js. Extremely flexible and modular, supporting authentication using a username and password, Facebook, Twitter, and more.</Text>
                <Text mt="3" fontSize="2xl" align="left" color="gray.500" >Tech Stack: Node.js, Passport.js, Javascript, MongoDB</Text>


                <Text mt="7" fontSize="2xl" align="left" fontWeight="semibold" color="orange.300">ATM Reporting System. (Feb 2019 - Apr 2019)</Text>
                <Text mt="3" fontSize="2xl" align="left" >This project is a simple report management system that is provided using a web interface for the banking executives to post and monitor daily operational status reports of ATM machines. Hence, encouraging towards a paperless system and providing access to operational reports at any given moment. Project was hosted on AWS</Text>
                <Text mt="3" fontSize="2xl" align="left" color="gray.500" >Tech Stack: PHP, MySQL, HTML, CSS, Javascript</Text>

                <Text mt="7" fontSize="2xl" align="left" fontWeight="semibold" color="orange.200">Smart Garbage Monitoring with IOT. (Mar 2018 - Jun 2018)</Text>
                <Text mt="3" fontSize="2xl" align="left"> Garbge Monitoring System with Advanced Sensors and Real time information with support of IOT. One of the highlighting feature of this project is that it alerts or notifies the admin when the garbage bin is about to completely fill in. This project was built as a framework to motivate towards the adoption of Smart Garbage Management under Swachh Bharat Mission</Text>
                <Text mt="3" fontSize="2xl" align="left" color="gray.500" >Tech Stack: IOT, Samsung Artik, Embedded C, Sensors(Temperature sensor, Ultrasonic sensor)</Text>

            </Box>



        </VStack>
        </Stack>        
    )
}

export default Social

// link to get icons
// https://github.com/devicons/devicon/tree/master/icons