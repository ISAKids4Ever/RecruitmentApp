import React from 'react';
import {useFormValidation} from 'hooks';
import {validateCreate} from 'services';
import {db} from '../../firebase';
import uuid from 'react-uuid';
import styles from './CreateItem.module.css';

const INITIAL_STATE = {
	title: '',
	description: ''
};
export function CreateItem({clicked}) {
	const { handleSubmit, handleChange, values, errors } = useFormValidation(INITIAL_STATE, validateCreate, handleCreateLink);
	function handleCreateLink() {
		const { title, description } = values;
		console.log("Errors: ", errors)
		if(errors.length !== 0) {
			const newLink = {
				title,
				description,
				votes: [
					{
						user: 'unknown',
						date: Date.now()
					}
				],
				comments: [
					{
						createdBy: '',
						comment: '',
						createdAt: ''
					}
				],
				created: Date.now(),
				id: uuid()
			};
			console.log("newLink", newLink)
			db.collection("forum").add(newLink)
		}
		
	}

	return (
		<form onSubmit={handleSubmit} className={clicked ? styles.forum : styles.none}>
			<input
				className={styles.input}
				name="title"
				placeholder="Topic/Question title"
				autoComplete="off"
				onChange={handleChange}
				value={values.title}
				type="text"
			/>
			{errors.title && <div>{`ERROR: ${errors.title}`}</div>}
			<input
				className={styles.input}
				name="description"
				placeholder="Description"
				autoComplete="off"
				onChange={handleChange}
				value={values.description}
				type="text"
			/>
			{errors.description && <div>{`ERROR: ${errors.description}`}</div>}

			<button type="submit" className={styles.button} >
				ADD QUESTION
			</button>
		</form>
	);
}
