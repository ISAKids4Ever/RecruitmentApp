import React from 'react';
import styles from './Pagination.module.css';
import { Button } from 'components';

export const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage, elementToShow }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}

	if (elementToShow !== 'TestIntro') {
		return (
			<nav>
				<section className={styles.pagination}>
					{pageNumbers.map((number) => (
						<div key={number} className={styles.pageItem}>
							<Button
								tabIndex={-1}
								onClick={() => {
									paginate(number);
								}}
								className={number === currentPage ? 'regularButton current' : 'regularButton'}
							>
								{number}
							</Button>
						</div>
					))}
				</section>
			</nav>
		);
	} else {
		return null;
	}
};
