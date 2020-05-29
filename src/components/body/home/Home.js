import React, { Component } from 'react';
import './Home.css';
import {Helmet} from "react-helmet";
import s1 from '../../../images/slider/s1.jpg';
import s2 from '../../../images/slider/s2.jpeg';
import s3 from '../../../images/slider/s3.jpeg';


class Component_template extends Component {

    render (){
        return (
            <div className='home'>
                <Helmet>
                    <meta charSet="utf-8" />
                    <html lang="es"/>
                    <title>Component</title>
                    <meta name="description" content="component description" />
                </Helmet>

            </div>
        );
    }
}

export default Component_template;