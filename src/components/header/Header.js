import React, { Component } from 'react';
import './Header.css';
import Nav from './nav/Nav';
import StickyNav from './sticky-nav/StickyNav'

class Header extends Component {

    componentDidMount(){
        //none
    }

    render (){
        return (
            <header className='header'>
                <Nav/>
                <StickyNav/>
            </header>
        );
    }
}

export default Header;