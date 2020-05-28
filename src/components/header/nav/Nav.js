import React, { Component } from 'react';
import './Nav.css';
import logo from '../../../images/pizzatask_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'

const cart = <FontAwesomeIcon icon={faShoppingCart} />
const insta = <FontAwesomeIcon icon={faInstagram} />
const facebook = <FontAwesomeIcon icon={faFacebookSquare} />
const twitter = <FontAwesomeIcon icon={faTwitterSquare} />
const yt = <FontAwesomeIcon icon={faYoutubeSquare} />
const git = <FontAwesomeIcon icon={faGithubSquare} />

class Nav extends Component {

    componentDidMount(){
        //none
    }

    render (){

        return (
            <div className='nav-bar'>
                <div className="nav-bar__little-container">
                    <div className="nav-bar__little-container__social">
                        <p className="nav-bar--pointer nav-bar--h-scale">maximiliano.castrucci@gmail.com</p>
                        <div className="nav-bar__little-container__social__bar">
                            <div className="nav-bar__little-container__social__bar__brand brand--i nav-bar--h-scale"><i>{insta}</i></div>
                            <div className="nav-bar__little-container__social__bar__brand brand--f nav-bar--h-scale">{facebook}</div>
                            <div className="nav-bar__little-container__social__bar__brand brand--t nav-bar--h-scale">{twitter}</div>
                            <div className="nav-bar__little-container__social__bar__brand brand--y nav-bar--h-scale">{yt}</div>
                            <div className="nav-bar__little-container__social__bar__brand brand--g nav-bar--h-scale">{git}</div>
                        </div>
                    </div>
                    <div className='nav-bar__icon nav-bar__little-container__button nav-bar--pointer nav-bar--h-scale'>
                        <i className="fa-icon nav_bar__fa">{cart}</i>
                        <p>shopping cart</p>
                    </div>
                </div>
                <div className='nav-bar__button-container'>
                    <div className='nav-bar__logo'>
                        <img alt='site logo' src={logo}></img>
                    </div>
                    <div className='nav-bar__button nav-bar__button-container__button'>
                        <p>Menu</p>
                    </div>
                    <div className='nav-bar__button nav-bar__button-container__button'>
                        <p>Locations</p>
                    </div>
                    <div className='nav-bar__button nav-bar__button-container__button'>
                        <p>About</p>
                    </div>
                </div>    
            </div>
        );
    }
}

export default Nav;