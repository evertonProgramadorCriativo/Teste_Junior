
import React, { Component } from 'react';
import './App.styles.scss'

import Logo from './components/template/Logo/Logo.component'
import Header from './components/template/Header/header.component'
import Sugestoes from './components/template/SectionSugestao/sectionSugestao.component'
import Contato from './components/template/SectionContato/SectionContato.component'
import Footer from './components/template/Footer/footer.component'

import { Route , Switch } from 'react-router-dom';




class App extends Component {
  render() {
    return (
      
      <div className="App">
          <Logo />
          <Header />
          <Sugestoes />
          <Contato />
          <Footer />


        <React.Fragment>
        <Switch> 
          <Route exact path='/' component={Logo} />
          </Switch>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
