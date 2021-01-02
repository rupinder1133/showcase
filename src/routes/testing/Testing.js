import React, { useRef } from 'react';
import styles from './Testing.module.css';

const keepInRange = (lower, upper, testValue) => {
  const [absLower, absUpper, absTestValue] = [lower, upper, testValue].map(v => Math.abs(parseInt(v)));
  if( absTestValue < absLower) return (absLower);
  if( absTestValue > absUpper) return absUpper;

  return absTestValue;
}

const Testing = () => {
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
      eyeBottom - playAreaTop - ((eyeballHeight / 2) + 3),
      pointerTop - playAreaTop
    );
    eyeball.current.style.left = keepInRange(
      eyeLeft - playAreaLeft + ((eyeballHeight / 2) + 1),
      eyeRight - playAreaLeft - ((eyeballHeight / 2) + 3),
      pointerLeft - playAreaLeft
    );
  }

  const resetEyeball = () => {
    eyeball.current.style.top = '50%';
    eyeball.current.style.left = '50%';
  }

  return (
    <div className={styles.container} onMouseMove={onMouseMove} ref={playArea} onMouseLeave={resetEyeball}>
      <div className={styles.eye} ref={eye}>
        <div className={styles.eyeball} ref={eyeball}>
        </div>
      </div>
    </div>
  );
};

export default Testing;
