import React from 'react'
import { Divider, Container, Text, Heading } from '@chakra-ui/react';

const About = () => {
    return (
        <Container maxW={'4xl'} marginBottom={'40px'}>
            <Text as='h1' fontSize={'6xl'}>About</Text>
            <Divider />
            <p style={{textAlign: 'left', paddingLeft: '48px', paddingTop: '10px'}}>&emsp;&emsp;Welcome to Tag Magnet, your go-to destination for discovering trending and relevant hashtags across various platforms. Our mission is to simplify your social media experience by providing you with the right tags to amplify your reach.</p>

            <Heading size={'md'}>What We Do?</Heading>

            <p style={{textAlign: 'left', paddingLeft: '48px', paddingTop: '10px'}}>&emsp;&emsp;At Tag Magnet, we understand the importance of using the right hashtags to enhance the visibility of your content. Whether you're a content creator, marketer, or just someone looking to boost their social media presence, we've got you covered.</p>

            <Heading size={'md'}>Why Tag Magnet?</Heading>

            <p style={{textAlign: 'left', paddingLeft: '48px', paddingTop: '10px'}}>
                <strong>Efficiency:</strong> Our platform streamlines the process of finding the most effective hashtags for your content.</p>

                <p style={{textAlign: 'left', paddingLeft: '48px', paddingTop: '10px'}}><strong>Trending Tags:</strong> Stay ahead of the curve with our constantly updated list of trending hashtags.</p>

                <p style={{textAlign: 'left', paddingLeft: '48px', paddingTop: '10px'}}><strong>User-Friendly:</strong> Our intuitive interface ensures a seamless experience, even for those new to the world of hashtags.
            </p>

            <Heading size={'md'}>Connect With Us</Heading>
            <p style={{textAlign: 'left', paddingLeft: '48px', paddingTop: '10px'}}>
                &emsp;&emsp;We value your feedback and suggestions. Connect with us on social media to stay updated on the latest features and trends.
            </p>
            <p style={{textAlign: 'left', paddingLeft: '48px', paddingTop: '10px'}}>Thank you for choosing Tag Magnet to elevate your social media game!</p>
        </Container>
    )
}

export default About
