import React from 'react';
import profilePicture from '../../assets/profile-picture.jpg';
import styles from './NavBar.module.css'
import { classNames } from '../../utils';

const NavBar = ({ className }) => (<div className={classNames(className, styles.navbar)}>
  <div className={styles.profileSection}>
    <img src={profilePicture} alt="profile-picture" className={styles.profilePicture} />
    <div className={styles.name}>Rupinder Singh</div>
  </div>
</div>);

export default NavBar;
