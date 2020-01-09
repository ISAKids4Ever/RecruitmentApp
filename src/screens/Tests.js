import React from "react";
import styles from "./Tests.module.css";
import TestQuestion from "../components/TestQuestion";
import TestIntro from "../components/TestIntro";



function View1() {
  return (
   <div className={styles.mainDiv1}>
       <TestQuestion question='pierwsze pytanie' answear1='pierwsza odp' answear2='pierwsza odp' answear3='pierwsza odp'/>
       <TestIntro/>
   </div>
  );
}

export default View1;