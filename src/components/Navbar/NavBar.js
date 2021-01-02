import React from 'react';
import profilePicture from '../../assets/profile-picture.jpg';
import styles from './NavBar.module.css';
import { classNames } from '../../utils';
import {
  NavLink,
} from 'react-router-dom';


const NavBar = ({className}) => (<div className={classNames(className, styles.navbar)}>
  <div className={styles.profileSection}>
    <img src={profilePicture} alt="profile-picture" className={styles.profilePicture}/>
    <div className={styles.name}>Rupinder Singh</div>
  </div>
  <NavLink to="/" exact activeClassName={styles.active}>Home</NavLink>
  <NavLink to="testing/" activeClassName={styles.active}>Testing</NavLink>
</div>);

export default NavBar;
