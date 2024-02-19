import React from 'react';
import { Container } from '@chakra-ui/react';

const PrivacyPolicies = () => {
    return (
        <Container maxW='4xl' marginBottom={'40px'}>
            <h1 style={{ fontSize: '48px' }}>Privacy Policy</h1>

            <p style={{textAlign: 'left', paddingLeft: '48px', paddingTop: '10px'}}>This Privacy Policy is effective as of 2024.</p>

            <h2 style={{textAlign: 'left', fontSize: '24px', fontWeight: 'bold', paddingTop: '10px'}}>1. Information We Collect</h2>

            <p style={{textAlign: 'left', paddingLeft: '48px', paddingTop: '10px'}}>We collect information you provide directly to us, such as inputs of forms.</p>

            <h2 style={{textAlign: 'left', fontSize: '24px', fontWeight: 'bold', paddingTop: '10px'}}>2. How We Use Your Information</h2>

            <p style={{textAlign: 'left', paddingLeft: '48px', paddingTop: '10px'}}>We may use the information you put on the website and other than that we don't use any personal information.</p>

            <h2 style={{textAlign: 'left', fontSize: '24px', fontWeight: 'bold', paddingTop: '10px'}}>3. Cookies</h2>

            <p style={{textAlign: 'left', paddingLeft: '48px', paddingTop: '10px'}}>We use third-parties cookies. i.e. amazon affiliate links and google analytics will store cookies in your browser.</p>

            <h2 style={{textAlign: 'left', fontSize: '24px', fontWeight: 'bold', paddingTop: '10px'}}>4. Contact Us</h2>

            <p style={{textAlign: 'left', paddingLeft: '48px', paddingTop: '10px'}}>If you have any questions about this Privacy Policy, please contact us at wolframstudio74w@gmail.com.</p>
        </Container>
    )
}

export default PrivacyPolicies