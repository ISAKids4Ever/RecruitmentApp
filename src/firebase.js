import app from 'firebase/app'
import 'firebase/firestore'
// import 'firebase/auth'

// zakomentowane rzeczy to te, o ktorych pisalem, jak nie chcesz z nich skorzystac to poprostu je usun
const {
  REACT_APP_API_KEY,
  REACT_APP_AUTH_DOMAIN,
  REACT_APP_DATABASE_URL,
  REACT_APP_PROJECT_ID,
  REACT_APP_STORAGE_BUCKET,
  REACT_APP_MESSAGING_SENDER_ID,
  REACT_APP_APP_ID
} = process.env

const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  databaseURL: REACT_APP_DATABASE_URL,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
  appId: REACT_APP_APP_ID
};

     class Firebase {
       constructor() {
        app.initializeApp(firebaseConfig);
        this.db=app.firestore();
        // this.auth = app.auth()
       }

      //  async register(name, email, password) {
      //    const newUser = await this.auth.createUserWithEmailAndPassword(email, password)
      //    return await newUser.user.updateProfile({
      //      displayName: name
      //    })
      //  }
      //  async login(email, password) {
      //    return await this.auth.signInWithEmailAndPassword(email, password)
      //  }

     }
     const firebase = new Firebase()
export default firebase
