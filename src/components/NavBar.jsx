import React from 'react'
import { Heading, Flex, Spacer, Container } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <Box as="nav" role="navigation" bgGradient={'linear(to-r, #7928CA, #FF0080)'} color={'white'}>
            <Container maxW='4xl'>
                    <Flex align={'center'} minH='80px'>
                        <Box>
                            <Heading size={'lg'} fontFamily='anta'>tag magnet</Heading>
                        </Box>
                        <Spacer />
                        <Flex minW='100px' fontWeight={'bold'}>
                            <Link to="/">home</Link>
                            <Spacer/>
                            <Link to="/about">about</Link>
                        </Flex>
                    </Flex>
            </Container>
        </Box>
    )
}

export default NavBar
