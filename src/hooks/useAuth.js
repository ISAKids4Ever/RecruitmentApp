import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from '../Context'

import firebase from "../firebase";

export function useAuth()  {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (firebase.auth().currentUser) {
        setUser(user);
      } else {
        setUser(false);
      }
    });
  }, [user]);

  return user;
};

export function useUser() {
  const { user } = useContext(FirebaseContext)
  return user
}
