import React, { Component } from 'react';
import './Home.css';
import {Helmet} from "react-helmet";

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
            </div>
        );
    }
}

export default Component_template;