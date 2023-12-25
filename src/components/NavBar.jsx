import React from 'react'
import { Heading } from '@chakra-ui/react'

const NavBar = () => {
    return (
        <nav style={{display: 'flex', justifyContent: "space-around", alignItems: 'center', background: 'linear-gradient(90deg, rgba(76,173,239,1) 0%, rgba(8,124,172,1) 50%, rgba(76,173,239,1) 100%)', color: 'white' }}>
            <div style={{padding: '10px'}}>
                <Heading>TAG MAGNET</Heading>
            </div>
            <div style={{display: 'flex', gap: '10px'}}>
                <a href="/home">HOME</a>
                <a href="/about">ABOUT</a>
            </div>
        </nav>
    )
}

export default NavBar