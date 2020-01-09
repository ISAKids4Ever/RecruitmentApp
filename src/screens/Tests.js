import React from "react";
import styles from "./Tests.module.css";
import TestQuestion from "../components/TestQuestion";



function View1() {
  return (
   <div className={styles.mainDiv1}>
       <TestQuestion/>
   </div>
  );
}

export default View1;