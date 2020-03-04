import React, { useState } from 'react';
import {useFormValidation} from 'hooks';
import {validateCreate} from 'services';
import firebase from '../../firebase';
import uuid from 'react-uuid';
import styles from './CreateItem.module.css';

const INITIAL_STATE = {
	title: '',
	description: ''
};
export function CreateItem({clicked}) {
	const { handleSubmit, handleChange, values } = useFormValidation(INITIAL_STATE, validateCreate, handleCreateLink);
	function handleCreateLink() {
		const { title, description } = values;
		const newLink = {
			title,
			description,
			votedBy: [
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
		firebase.database().ref('forum').push(newLink);
        

		

	}
	function handleClick() {
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
			<input
				className={styles.input}
				name="description"
				placeholder="Description"
				autoComplete="off"
				onChange={handleChange}
				value={values.description}
				type="text"
			/>
			<button type="submit" className={styles.button} onClick={handleClick}>
				ADD QUESTION
			</button>
		</form>
	);
}
