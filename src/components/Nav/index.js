import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import logo from '../../assets/logo.png';
import './styles.scss';

const Nav = () => {
  return (
    <nav className="main-nav">
      <Link to={routes.HOME} className="main-nav__home">
        <img src={logo} width="166" height="34" alt="" /> 
        <p>Recipes</p>
      </Link>
      <div className="main-nav__routes">
      <Link to={routes.INGREDIENTS} className="main-nav__routes__link">Ingredients</Link>
      <Link to={routes.CHEFS} className="main-nav__routes__link">Chefs</Link>
      <Link to={routes.GALLERIES} className="main-nav__routes__link">Galleries</Link>
      </div>
    </nav>
  )
}

export default Nav;