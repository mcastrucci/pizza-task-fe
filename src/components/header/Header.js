import React, { Component } from 'react';
import './Header.css';
import Nav from './nav/Nav';

class Header extends Component {

    componentDidMount(){
        //none
    }

    render (){
        return (
            <header className='header'>
                <Nav/>
            </header>
        );
    }
}

export default Header;