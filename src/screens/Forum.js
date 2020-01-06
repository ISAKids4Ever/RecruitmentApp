import React from 'react';
import styles from './Forum.module.css'
import Question from '../components/Question'


function Forum() {
  return (
    <div className={styles.mainDiv3}>
      <div>FILTRY</div>
      <Question question="SIEMKA"/>
      <Question question="LOOOL"/>
      <Question question="TRZECI!"/>
      <Question />
       </div>
  );
}

export default Forum;