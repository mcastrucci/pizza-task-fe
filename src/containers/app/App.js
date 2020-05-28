import React, { Component } from 'react';
import './App.css';
import {Helmet} from "react-helmet";
import Home from '../../components/body/home/Home';
import Header from '../../components/header/Header';


class App extends Component{
  constructor () {
    super();
    this.state={
      route: 'home',
      loaded: false
    }
  }

  componentDidMount() {
    document.title = "Pizza-Task";
    window.scrollTo(0, 0);
  }

  onRouteChange = (route) =>{
    this.setState ({route: route});
    window.scrollTo(0, 0);
  }

  render() {
    const route = this.state.route;
    return (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <html lang="en"/>
          <title>Pizza-Task!</title>
          <meta name="description" content="Best pizza Page ever"/>
        </Helmet>
        <Header/>
        {(route === 'home') ?
            <Home/>
          :
          <div>TODO</div>
        }
      </div>
    );
  }
}

export default App;
