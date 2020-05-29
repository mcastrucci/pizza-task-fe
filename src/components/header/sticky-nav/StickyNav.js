import React, { Component } from 'react';
import './StickyNav.css';

class StickyHeader extends Component {
    constructor(){
        super();
        this.state= {
          stickyHasFocus: false,
        }
      }

    togleStickyFocus = () => {
        this.setState({stickyHasFocus: !this.state.stickyHasFocus});
    }

    changeRoute = (route) =>{
        this.togleStickyFocus();
        this.props.onRouteChange(route);
    }

    render (){
        const stickyFocus = this.state.stickyHasFocus;
        return (
            <div className="sticky-header">
                {
                    stickyFocus === false ?
                        <div className= 'sticky-header__grid'>
                            <div className="sticky-header__name" onClick={()=> this.props.onRouteChange('home')}><h1>PizzaTask</h1></div>
                            <i className="fa fa-bars" aria-hidden="true" onClick={()=>this.togleStickyFocus()}></i>
                        </div>
                        
                    :
                        <div className="sticky-header__drop-menu">
                            <div className="sticky-header__drop-menu--menu">
                                <h2>MENU</h2>
                                <i className="fa fa-window-close-o" aria-hidden="true" onClick={()=>this.togleStickyFocus()}></i>
                            </div>
                            <ul>
                                <li onClick={()=> this.changeRoute ('home')}>Home</li>
                                <li onClick={()=> this.changeRoute ('menu')}>Menu</li>
                                <li onClick={()=> this.changeRoute ('location')}>location</li>
                                <li onClick={()=> this.changeRoute ('about')}>about</li>
                            </ul>
                        </div>
                }
            
            </div>
        );
    }
}

export default StickyHeader;