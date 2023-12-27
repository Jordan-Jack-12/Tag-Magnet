import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer style={{ bottom: '0px', borderTopWidth: '2px', borderTopColor: 'gray' }}>
            <div>
                Tag Magnet &copy; 2024
            </div>
            <div><Link to="/terms-and-conditions">Terms and Conditions</Link> | <Link to="/disclaimer">Disclaimer</Link> | <Link to="/privacy-policies">Privacy Policies</Link></div>
        </footer>
    )
}

export default Footer