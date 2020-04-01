import { useEffect, useState } from "react";

import firebase from "../firebase";

export function useAuth()  {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (firebase.auth().currentUser) {
        setIsLoggedIn(user);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, [isLoggedIn]);

  return isLoggedIn;
};
