import React from 'react';
import { Container } from '@chakra-ui/react';

const Disclaimer = () => {
    return (
        <Container maxW='4xl' minH='60vh'>
            <h1 style={{ fontSize: '48px' }}>Disclaimer</h1>
            <p style={{textAlign: 'left', paddingLeft: '48px', paddingTop: '10px'}}>The information provided on the Tag Magnet website (the "Service") is for general informational purposes only.</p>
            <h2 style={{textAlign: 'left', fontSize: '24px', fontWeight: 'bold', paddingTop: '10px'}}>Accuracy of Information</h2>
            <p style={{textAlign: 'left', paddingLeft: '48px', paddingTop: '10px'}}>&emsp;&emsp;Tag Magnet makes no representation or warranty of any kind regarding the completeness, accuracy, reliability, or suitability of the information contained on the website. Any reliance you place on such information is strictly at your own risk.</p>
        </Container>
    )
}

export default Disclaimer
