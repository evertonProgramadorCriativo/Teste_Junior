import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../../assets/images/Vector.svg';


import './Logo.styles.scss';

const logo = () => (
  <aside className="logo">
    <Link className="logo_container" to='/'>
      <Logo className="logo_svg" />
    </Link>


  </aside>
);

export default logo;
