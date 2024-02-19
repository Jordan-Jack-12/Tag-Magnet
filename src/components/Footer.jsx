import { ButtonGroup, Container, IconButton, Stack, Text, Heading } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => (
    <Container
        as="footer"
        role="contentinfo"
        py={{
            base: '12',
            md: '16',
        }}
        maxW={'4xl'}
    >
        <Stack
            spacing={{
                base: '4',
                md: '5',
            }}
        >
            <Stack justify="space-between" direction="row" align="center">
                <Heading size={'md'} fontFamily={'anta'}>tag magnet</Heading>
                <ButtonGroup variant="tertiary">
                    <IconButton as="a" href="https://www.linkedin.com/in/suresh-kumar-ekka-b1081627b/" aria-label="LinkedIn" icon={<FaLinkedin />} />
                    <IconButton as="a" href="https://github.com/Jordan-Jack-12/" aria-label="GitHub" icon={<FaGithub />} />
                    <IconButton as="a" href="https://twitter.com/JordanJ8D" aria-label="Twitter" icon={<FaTwitter />} />
                </ButtonGroup>
            </Stack>
            <Stack justify="space-around" direction="row" align="center" maxW='400px' mx={'auto'}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/terms-and-conditions">Terms</Link>
                    <Link to="/disclaimer">Disclaimer</Link>
                    <Link to="/privacy-policies">Privacy Policies</Link>
            </Stack>
            <Text fontSize="sm" color="fg.subtle">
                &copy; {new Date().getFullYear()} Tag Magnet, Inc. All rights reserved.
            </Text>
        </Stack>
    </Container>
)

export default Footer;