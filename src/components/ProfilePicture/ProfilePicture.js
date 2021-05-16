import React, { useRef } from 'react';
import styles from './ProfilePicture.module.css';
import eyeballs from '../../assets/eyeballs.png';
import profilePicture from '../../assets/profile-picture.png';
import { classNames } from '../../utils';

const keepInRange = (lower, upper, testValue) => {
  const [absLower, absUpper, absTestValue] = [lower, upper, testValue].map(v => Math.abs(parseInt(v)));
  if( absTestValue < absLower) return (absLower);
  if( absTestValue > absUpper) return absUpper;

  return absTestValue;
}

const ProfilePicture = ({ className }) => {
  const eyeball = useRef(null);
  const eye = useRef(null);
  const playArea = useRef(null);

  const onMouseMove = (e) => {
    const [pointerLeft, pointerTop] = [e.clientX, e.clientY];
    const { left: playAreaLeft, top: playAreaTop } = playArea.current.getBoundingClientRect();
    const { left: eyeLeft, right: eyeRight, top: eyeTop, bottom: eyeBottom } = eye.current.getBoundingClientRect();
    const { height: eyeballHeight, width: eyeballWidth} = eyeball.current.getBoundingClientRect();

    eyeball.current.style.top = keepInRange(
      eyeTop - playAreaTop + ((eyeballHeight / 2) + 1),
      eyeBottom - playAreaTop - ((eyeballHeight / 2)),
      pointerTop - playAreaTop
    );
    eyeball.current.style.left = keepInRange(
      eyeLeft - playAreaLeft + ((eyeballWidth / 2)),
      eyeRight - playAreaLeft - ((eyeballWidth / 2)),
      pointerLeft - playAreaLeft
    );
  }

  const resetEyeball = () => {
    eyeball.current.style.top = '40.6%';
    eyeball.current.style.left = '49%';
  }

  return (
    <div className={classNames(styles.container, className)} onMouseMove={onMouseMove} ref={playArea} onMouseLeave={resetEyeball}>
      <img src={eyeballs} alt="eyeballs" className={styles.eyeball} ref={eyeball}/>
      <div className={styles.eye} ref={eye} />
      <img src={profilePicture} alt="profile-picture" className={styles.profilePicture}/>
      <div className={styles.name}>Rupinder Singh</div>
    </div>
  );
};

export default ProfilePicture;
