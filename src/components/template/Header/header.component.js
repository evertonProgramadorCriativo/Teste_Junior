import React from 'react';
import Nav from './NavBar/NavBar.component'
import { Route , Switch } from 'react-router-dom';
import Sapatos from './componentsHeader/Sapatos/Sapatos.component'

import './header.styles.scss';




const header = () => (
    <header className="heade">
             <Nav />

             <React.Fragment>
             <Switch> 
               <Route path='/SAPATOS' component={Sapatos} />
               </Switch>
             </React.Fragment>
      </header>
      );

export default header;
