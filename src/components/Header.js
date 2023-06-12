import React from 'react'

import {Image} from 'react-bootstrap';

import '../App.css';
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <>
            <div className='hf-color h-size'>
                <a href='/'><Image src={logo} className='ml-100 vertical-center'/></a>
            </div>
        </>
        
    )
}

export default Header