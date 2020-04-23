import React, { useEffect, useState } from 'react';
import styles from './Tests.module.css';
import { TestIntro, TestQuestion, BackButton, TestResults, SubmitTestButton, Pagination } from 'components';

const basicQuestions = [
	{
		question: 'Which of the following tag represents the header of a section in HTML5?',
		answear1: {
			value: 'header',
			correct: true
		},
		answear2: {
			value: 'section',
			correct: false
		},
		answear3: {
			value: 'article',
			correct: false
		}
	},
	{
		question: 'Which of the following tag represents a section of the document intended for navigation in HTML5?',
		answear1: {
			value: 'navigation',
			correct: false
		},
		answear2: {
			value: 'navbar',
			correct: false
		},
		answear3: {
			value: 'nav',
			correct: true
		}
	},
	{
		question: 'Which of the following attribute specifies whether or not a user is allowed to drag an element?',
		answear1: {
			value: 'draggable',
			correct: true
		},
		answear2: {
			value: 'drag',
			correct: false
		},
		answear3: {
			value: 'context',
			correct: false
		}
	},
	{
		question: 'Which of the following attribute triggers events when a form changes?',
		answear1: {
			value: 'onformchange',
			correct: true
		},
		answear2: {
			value: 'onchange',
			correct: false
		},
		answear3: {
			value: 'onedit',
			correct: false
		}
	},
	{
		question: 'Which of the following tag represents an independent piece of content of a document in HTML5?',
		answear1: {
			value: 'section',
			correct: false
		},
		answear2: {
			value: 'article',
			correct: true
		},
		answear3: {
			value: 'aside',
			correct: false
		}
	},
	{
		question: 'HTML tags are case sensitive.',
		answear1: {
			value: 'false',
			correct: true
		},
		answear2: {
			value: 'true',
			correct: false
		},
		answear3: {
			value: 'sometimes',
			correct: false
		}
		
	},
	{
		question: 'DOM stands for',
		answear1: {
			value: 'Document object model',
			correct: true
		},
		answear2: {
			value: 'Data object model',
			correct: false
		},
		answear3: {
			value: 'Data oriented model',
			correct: false
		}
	},
	{
		question: 'Ancestor of all other elements on the page is called',
		answear1: {
			value: 'sibling',
			correct: false
		},
		answear2: {
			value: 'ancestor',
			correct: false
		},
		answear3: {
			value: 'parent',
			correct: true
		}
	},
	{
		question: 'The sessionStorage object stores the data for',
		answear1: {
			value: 'all sessions',
			correct: false
		},
		answear2: {
			value: 'one session',
			correct: true
		},
		answear3: {
			value: '3 sessions in a row',
			correct: false
		}
	},
	{
		question: 'The __________ is an instruction to the web browser about what version of HTML the page is written in',
		answear1: {
			value: '< DOCTYPE>',
			correct: false
		},
		answear2: {
			value: '< !DOCTYPE>',
			correct: true
		},
		answear3: {
			value: '< !TYPE>',
			correct: false
		}
	},
	{
		question: 'What HTML stands for?',
		answear1: {
			value: 'Hyper Text Markup Language',
			correct: true
		},
		answear2: {
			value: 'Hyper Text Markdown Language',
			correct: false
		},
		answear3: {
			value: 'Home Tool Markup Language',
			correct: false
		}
	},
	{
		question: 'What is the correct HTML for creating a hyperlink?',
		answear1: {
			value: '<a>http://www.intervyou.essa</a>',
			correct: false
		},
		answear2: {
			value: '<a href="http://www.intervyou.essa">IntervYou</a>',
			correct: true
		},
		answear3: {
			value: '<a url="http://www.intervyou.essa">IntervYou.essa</a>',
			correct: false
		}
	},
	{
		question: 'What is the correct HTML for inserting a background image?',
		answear1: {
			value: '<body bg="background.gif">',
			correct: false
		},
		answear2: {
			value: '<background img="background.gif">',
			correct: false
		},
		answear3: {
			value: '<body style="background-image:url(background.gif)">',
			correct: true
		}
	},
	{
		question: 'Choose the correct HTML element to define important text',
		answear1: {
			value: '<strong>',
			correct: true
		},
		answear2: {
			value: '<important>',
			correct: false
		},
		answear3: {
			value: '<i>',
			correct: false
		}
	},
	{
		question: 'How can you open a link in a new tab/browser window?',
		answear1: {
			value: '<a href="url" target="new">',
			correct: false
		},
		answear2: {
			value: '<a href="url" new>',
			correct: false
		},
		answear3: {
			value: '<a href="url" target="_blank">',
			correct: true
		}
	},
	{
		question: 'How can you open a link in a new tab/browser window?',
		answear1: {
			value: '<a href="url" target="new">',
			correct: false
		},
		answear2: {
			value: '<a href="url" new>',
			correct: false
		},
		answear3: {
			value: '<a href="url" target="_blank">',
			correct: true
		}
	},
	{
		question: 'How can you make a numbered list?',
		answear1: {
			value: '<ul>',
			correct: false
		},
		answear2: {
			value: '<ol>',
			correct: true
		},
		answear3: {
			value: '<li>',
			correct: false
		}
	},{
		question: 'How can you open a link in a new tab/browser window?',
		answear1: {
			value: '<a href="url" target="new">',
			correct: false
		},
		answear2: {
			value: '<a href="url" new>',
			correct: false
		},
		answear3: {
			value: '<a href="url" target="_blank">',
			correct: true
		}
	},{
		question: 'How can you open a link in a new tab/browser window?',
		answear1: {
			value: '<a href="url" target="new">',
			correct: false
		},
		answear2: {
			value: '<a href="url" new>',
			correct: false
		},
		answear3: {
			value: '<a href="url" target="_blank">',
			correct: true
		}
	},
];

export function Tests() {
	const [currentPage, setCurrentPage] = useState(1);
	const [elementToShow, setElementToShow] = useState('TestIntro');
	const [timeHasGone, setTimeHasGone] = useState(false)
	const postsPerPage = 1;
	const questions = 10;
	const indexOfLastPage = currentPage * postsPerPage;
	const indexOfFirtsPage = indexOfLastPage - postsPerPage;
	const [questionsDisplay, setQuestionsDisplay] = useState(basicQuestions);
	const currentQuestions = questionsDisplay.slice(indexOfFirtsPage, indexOfLastPage);
	let points = new Array(10).fill(0);
	const [userPoints, setUserPoints] = useState(points);
	let initialTimeLeft = questions * 60
	const [ baseTimeLeft, setbaseTimeLeft ] = useState(initialTimeLeft)

	useEffect(() => {
		shuffle(basicQuestions);
	}, []);

	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	function shuffle(a) {
		const newQuestions = [...a];
		for (let i = newQuestions.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[newQuestions[i], newQuestions[j]] = [newQuestions[j], newQuestions[i]];
		}
		setQuestionsDisplay(newQuestions);
	}
	return (
		<div className={styles.mainDiv1}>
			{elementToShow === 'TestIntro' ? (
				<TestIntro elementToShow={elementToShow} setElementToShow={setElementToShow} setbaseTimeLeft={setbaseTimeLeft}
					initialTimeLeft={initialTimeLeft} />
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
					setElementToShow={setElementToShow}
					baseTimeLeft={baseTimeLeft}
					setTimeHasGone={setTimeHasGone}
				/>
			))}


			{elementToShow === 'TestResults' ? (
				<TestResults
					elementToShow={elementToShow}
					setElementToShow={setElementToShow}
					userPoints={userPoints}
					setCurrentPage={setCurrentPage}
					timeHasGone={timeHasGone}
				/>
			) : null}
			<Pagination
				postsPerPage={postsPerPage}
				totalPosts={10}
				paginate={paginate}
				currentPage={currentPage}
				elementToShow={elementToShow}
			/>
			{currentPage === 10 && elementToShow === 'TestQuestion' ? (
				<SubmitTestButton setElementToShow={setElementToShow} setCurrentPage={setCurrentPage} onClick={() => setTimeHasGone(true)} />
			) : null}
		</div>
	);
}
