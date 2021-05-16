import React from 'react';
import styles from './NavBar.module.css';
import { classNames } from '../../utils';
import {
  NavLink,
} from 'react-router-dom';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';

const routes = [
  {children: 'Home', to: '/', exact: true},
  {children: 'Testing', to: '/testing'},
  {children: 'Alpaca', to: '/a'},
  {children: 'Orangutan', to: '/b'},
  {children: 'Dodo', to: '/c'},
  {children: 'Jurassic Park', to: '/d'},
];

const NavBar = ({className}) => {
  const [isOpen, setOpen] = React.useState(false);

  return (<div className={classNames(className, styles.navbar)}>
    <ProfilePicture className={styles.profilePic}/>
    <div className={styles.collapsedNavbar}>
      <NavLink
        to={routes[0].to}
      >
        <HomeIcon style={{ color: 'white' }}/>
      </NavLink>
      <MenuIcon onClick={() => setOpen(!isOpen)}/>
    </div>
    <div
      className={classNames(styles.links, isOpen && styles.isOpen)}
      onClick={() => {
        if (isOpen) {
          setOpen(!isOpen)
        }
      }}
    >
      {
        routes.map((props) => (<div key={props.to}>
          <NavLink
            key={props.to}
            {...props}
            className={styles.navLink}
            activeClassName={styles.active}
          />
        </div>))
      }
    </div>
  </div>);
};

export default NavBar;
