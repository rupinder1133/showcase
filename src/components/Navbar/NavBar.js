import React from 'react';
import styles from './NavBar.module.css';
import { classNames } from '../../utils';
import {
  NavLink,
} from 'react-router-dom';
import ProfilePicture from '../ProfilePicture/ProfilePicture';


const NavBar = ({className}) => {
  const routes = [
    {children: 'Home', to: '/', exact: true},
    {children: 'Testing', to: '/testing'},
    {children: 'Alpaca', to: '/a'},
    {children: 'Orangutan', to: '/b'},
    {children: 'Dodo', to: '/c'},
    {children: 'Jurassic Park', to: '/d'},
  ];

  return (<div className={classNames(className)}>
    <ProfilePicture/>
    {
      routes.map((props) => (<div>
        <NavLink
          key={props.to}
          {...props}
          className={styles.navLink}
          activeClassName={styles.active}
        />
      </div>))
    }
  </div>);
};

export default NavBar;
