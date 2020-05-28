import React, { Component } from 'react';
import './Home.css';
import {Helmet} from "react-helmet";
import background from '../../../images/wooden_plate.png';
import pizza from '../../../images/pizza_cut.png';
import slice1 from '../../../images/slice1.png';
import slice2 from '../../../images/slice2.png';

class Component_template extends Component {

    componentDidMount(){
        //none
    }

    render (){
        return (
            <div className='home'>
                <Helmet>
                    <meta charSet="utf-8" />
                    <html lang="es"/>
                    <title>Component</title>
                    <meta name="description" content="component description" />
                </Helmet>
                <div className="home__pizza--animation home__pizza-container">
                    <img src={background} className="home__wooden-table" alt="background"/>
                    <img src={pizza} className="home__pizza--pizza home__pizza--animation" alt="pizza" />
                    <img src={slice1} className="home__pizza--slice home__pizza--slice--1 slice-animation--delay" alt="pizza-slice" />
                    <img src={slice2} className="home__pizza--slice home__pizza--slice--2 slice-animation" alt="pizza-slice" />
                </div>
            </div>
        );
    }
}

export default Component_template;