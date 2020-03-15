import firebase, { db } from '../firebase';
import moment from 'moment';

export const login = (email, password) => {
	return firebase.auth().signInWithEmailAndPassword(email, password);
};

export const loginWithGoogle = () => {
	var provider = new firebase.auth.GoogleAuthProvider();
	provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
	firebase.auth().languageCode = 'pl';
	provider.setCustomParameters({
		login_hint: 'user@example.com'
	});

	firebase.auth().signInWithPopup(provider).then(function(result) {
		const user = result.user;

		db.collection('users').doc(user.uid).set({
			name: user.displayName,
			email: user.email,
			joined: moment(user.metadata.creationTime).format('L')
		});
	});
};

export const register = async (email, password, name, bio, joined) => {
	await firebase.auth().createUserWithEmailAndPassword(email, password);
	const user = await firebase.auth().currentUser;

	await user.updateProfile({
		displayName: name
	});

	db.collection('users').doc(user.uid).set({
		name,
		email,
		bio,
		joined
	});

	return user;
};

export const passwordReset = (email) => {
	return firebase.auth().sendPasswordResetEmail(email);
};
