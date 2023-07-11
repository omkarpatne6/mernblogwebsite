import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import '../App.css';
import Logo from '../images/logo.png'
import { NavLink } from 'react-router-dom'

const Header = () => {


    const clicked = (e) => {

        let names = e.target.name;

        var layerClass = "." + names + "-layer";
        var layers = document.querySelectorAll(layerClass);

        for (const layer of layers) {
            const active = layer.classList.toggle("active");

            if (active) {
                document.getElementById('lastlayer').style.top = "0%";
            } else {
                document.getElementById('lastlayer').style.top = "-100%";
            }
        }
    }

    return (
        <>
            <div className="top-layer"></div>
            <div className="top-layer top-layer-2"></div>
            <div className="last-layer-3 text-light" id="lastlayer">
                <ul>
                    <li><NavLink onClick={clicked} name='top' to='/'>Home</NavLink></li>
                    <li><NavLink onClick={clicked} name='top' to='/newblog'>Add new +</NavLink></li>
                </ul>
            </div>

            <Navbar className="header" sticky='top'>
                <Container fluid>
                    <Navbar.Brand href="/" className='text-light'><img src={Logo} alt="logo" className='logo'/></Navbar.Brand>

                    <div className="buttons">
                        <button name='top' onClick={clicked}>&#9776;</button>
                    </div>
                </Container>
            </Navbar>
        </>



    )
}

export default Header;