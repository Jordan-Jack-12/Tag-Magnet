import React from 'react'
import { Heading } from '@chakra-ui/react'
import Style from './NavBar.module.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav style={{display: 'flex', justifyContent: "space-around", alignItems: 'center', background: 'linear-gradient(90deg, rgba(76,173,239,1) 0%, rgba(8,124,172,1) 50%, rgba(76,173,239,1) 100%)', color: 'white' }}>
            <div style={{padding: '10px'}} className={Style.logo}>
                <Heading>TAG MAGNET</Heading>
            </div>
            <div className={Style.link} style={{display: 'flex', gap: '10px'}}>
                <Link to="/">HOME</Link>
                <Link to="/about">ABOUT</Link>
            </div>
        </nav>
    )
}

export default NavBar
