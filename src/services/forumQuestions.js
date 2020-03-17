import { db } from '..//firebase';
import uuid from 'react-uuid';

export function handleCreateLink(values, errors) {
	const { title, description } = values;
	if (errors.length !== 0) {
		const newLink = {
			title,
			description,
			votes: [
				{
					user: 'unknown',
					date: Date.now()
				}
			],
			comments: [],
			created: Date.now(),
			id: uuid()
		};
		db.collection('forum').add(newLink);
	}
}

export function addQuestion(questionId, text, id, user) {
	const questionRef = db.collection('forum').doc(questionId);

	questionRef.get().then((doc) => {
		if (doc.exists) {
			const previosuComments = doc.data().comments;
			const newComment = {
				postedBy: {
					id,
					user
				},
				created: Date.now(),
				text
			};
			const updatedComments = [ ...previosuComments, newComment ];
			questionRef.update({ comments: updatedComments });
		}
	});
}
