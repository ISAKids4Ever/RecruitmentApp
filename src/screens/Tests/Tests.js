import React, { useEffect, useState } from 'react';
import styles from './Tests.module.css';
import { TestIntro, TestQuestion, BackButton, TestResults, SubmitTestButton, Pagination } from 'components';

const basicQuestions = [
	{
		question: 'pytanko 1',
		answear1: {
			value: 'odp 1',
			correct: false
		},
		answear2: {
			value: 'odp 2',
			correct: true
		},
		answear3: {
			value: 'odp 3',
			correct: false
		}
	},
	{
		question: 'pytanko 2',
		answear1: {
			value: 'odp 1.2',
			correct: false
		},
		answear2: {
			value: 'odp 2.2',
			correct: false
		},
		answear3: {
			value: 'odp 3.2',
			correct: true
		}
	},
	{
		question: 'pytanko 3',
		answear1: {
			value: 'odp 1.3',
			correct: true
		},
		answear2: {
			value: 'odp 2.3',
			correct: false
		},
		answear3: {
			value: 'odp 3.3',
			correct: false
		}
	}
];

export function Tests() {
	const [ postsPerPage ] = useState(1);
	const [ currentPage, setCurrentPage ] = useState(1);
	const [ elementToShow, setElementToShow ] = useState('TestIntro');
	const indexOfLastPage = currentPage * postsPerPage;
	const indexOfFirtsPage = indexOfLastPage - postsPerPage;
	let points = new Array(10).fill(0);
	const [ userPoints, setUserPoints ] = useState(points);

	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	const [ questionsDisplay, setQuestionsDisplay ] = useState(basicQuestions);
	const currentQuestions = questionsDisplay.slice(indexOfFirtsPage, indexOfLastPage);

	useEffect(() => {
		shuffle(basicQuestions);
	}, []);

	function shuffle(a) {
		const newQuestions = [ ...a ];
		for (let i = newQuestions.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[ newQuestions[i], newQuestions[j] ] = [ newQuestions[j], newQuestions[i] ];
		}
		setQuestionsDisplay(newQuestions);
	}
	return (
		<div className={styles.mainDiv1}>
			{elementToShow === 'TestIntro' ? (
				<TestIntro elementToShow={elementToShow} setElementToShow={setElementToShow} />
			) : null}
			{elementToShow === 'TestQuestion' ? (
				<BackButton
					elementToShow={elementToShow}
					setElementToShow={setElementToShow}
					setUserPoints={setUserPoints}
					setCurrentPage={setCurrentPage}
				/>
			) : null}
			{currentQuestions.map((data, index) => (
				<TestQuestion
					question={data.question}
					answear1={data.answear1}
					answear2={data.answear2}
					answear3={data.answear3}
					key={index}
					elementToShow={elementToShow}
					userPoints={userPoints}
					setPoints={setUserPoints}
					currentPage={currentPage}
				/>
			))}

			{elementToShow === 'TestResults' ? (
				<TestResults
					elementToShow={elementToShow}
					setElementToShow={setElementToShow}
					userPoints={userPoints}
					setCurrentPage={setCurrentPage}
				/>
			) : null}
			<Pagination
				postsPerPage={postsPerPage}
				totalPosts={questionsDisplay.length}
				paginate={paginate}
				currentPage={currentPage}
				elementToShow={elementToShow}
			/>
			{currentPage === questionsDisplay.length && elementToShow === 'TestQuestion' ? (
				<SubmitTestButton setElementToShow={setElementToShow} setCurrentPage={setCurrentPage} />
			) : null}
		</div>
	);
}
