import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/Navbar/NavBar';
import styles from './index.module.css';

const App = () => (<div className={styles.mainBody}>
  <NavBar className={styles.navbar}/>
  <div>Content</div>
</div>);

ReactDOM.render(<App />, document.getElementById('root'));
