import React, { Component } from 'react';
import './Component.css';
import {Helmet} from "react-helmet";

class Component_template extends Component {

    componentDidMount(){
        //none
    }

    render (){
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <html lang="es"/>
                    <title>Component</title>
                    <meta name="description" content="component description" />
                </Helmet>
                
                component
            </div>
        );
    }
}

export default Component_template;