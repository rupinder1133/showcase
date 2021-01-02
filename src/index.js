import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from './components/Navbar/NavBar';
import styles from './index.module.css';
import Home from './routes/home/Home';
import Testing from './routes/testing/Testing';

const App = () => (<div className={styles.mainBody}>
  <Router>
    <NavBar className={styles.navbar}/>
    <Switch>
      <Route path="testing/">
        <Testing />
      </Route>
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
  </Router>
</div>);

ReactDOM.render(<App />, document.getElementById('root'));
