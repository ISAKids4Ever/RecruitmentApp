import React from 'react';
import {useFormValidation} from 'hooks';
import {validateCreate,  handleCreateLink} from 'services';

import styles from './CreateItem.module.css';


const INITIAL_STATE = {
	title: '',
	description: ''
};
export function CreateItem({clicked}) {
	const { handleSubmit, handleChange, values, errors } = useFormValidation(INITIAL_STATE, validateCreate, handleCreateLink);
     

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
