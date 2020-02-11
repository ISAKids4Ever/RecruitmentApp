import { useEffect, useState } from "react";

import firebase from "../firebase";

export default  function useAuth()  {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       setIsLoggedIn(user);
  //     } else {
  //       setIsLoggedIn(null);
  //     }
  //   });
  // }, []);

  return isLoggedIn;
};
