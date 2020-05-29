import React, { Component } from 'react';
import './Nav.css';
import logo from '../../../images/logo_4.png';


class Nav extends Component {

    componentDidMount(){
        //none
    }

    render (){

        return (
            <div className='nav-bar'>
                <div className='nav-bar__upper'>
                    <div className='nav-bar__upper__container'>
                        <div className="nav-bar__upper__logo">
                            <img className="nav-bar__upper__logo--img" src={logo}></img>
                        </div>
                        <div className="nav-bar__upper__extra">
                            asdasd
                        </div>
                    </div>
                </div>
                <div className='nav-bar__bottom'>
                    <div className="nav-bar__bottom__container">
                        <p>Menu</p>
                        <p>locations</p>
                        <p>about</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;