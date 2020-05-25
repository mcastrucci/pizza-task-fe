import React, { Component } from 'react';
import './Nav.css';
import logo from '../../../images/pizzatask_logo.png';

class Nav extends Component {

    componentDidMount(){
        //none
    }

    render (){
        return (
            <div className='nav-bar'>
                <div className='nav-bar__button-container'>
                    <div className='nav-bar__logo nav-bar__button-container__button'>
                        <img alt='site logo' src={logo} height="50" width="50"></img>
                    </div>
                    <div className='nav-bar__button nav-bar__button-container__button'>
                        <p>botton 1</p>
                    </div>
                    <div className='nav-bar__button nav-bar__button-container__button'>
                        <p>botton 2</p>
                    </div>
                    <div className='nav-bar__icon nav-bar__button-container__button'>
                        <p class="fas fa-coins"></p>
                    </div>
                    <div className='nav-bar__icon nav-bar__button-container__button'>
                        <p class="fa fa-shopping-cart"></p>
                    </div>
                </div>    
            </div>
        );
    }
}

export default Nav;