import React from 'react';
import Typewriter from 'typewriter-effect';
import styles from './Home.module.css';
import { classNames } from '../../utils';

const Home = () => (
<div className={styles.container}>
  <Typewriter
    onInit={() => null}
    options={{
      strings: ['I am a web developer', "Churning Javascript and CSS since 2017"],
      deleteSpeed: 25,
      autoStart: true,
      loop: true,
      wrapperClassName: classNames(styles.typewriterTextSize, styles.typewriterText),
      cursorClassName: styles.typewriterTextSize,
    }}
  />
</div>
);

export default Home;
