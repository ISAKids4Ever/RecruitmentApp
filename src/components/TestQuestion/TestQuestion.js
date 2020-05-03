import * as React from 'react';
import styles from './TestQuestion.module.css';
import Countdown from '../Countdown/Countdown';

export function TestQuestion({
	question,
	answear1,
	answear2,
	answear3,
	elementToShow,
	setElementToShow,
	userPoints,
	setPoints,
	currentPage,
	baseTimeLeft,
	setTimeHasGone
}) {

	const [testTimeLeft, setTestTimeLeft] = React.useState(baseTimeLeft);
	const unMarkedAnswer = styles.answer;
	const markedAnswer = styles.answerMarked;
	const [classMarked, setclassMarked] = React.useState([unMarkedAnswer, unMarkedAnswer, unMarkedAnswer])


	function calculatePoints(currentPage, answer) {
		const points = [...userPoints];
		if (answer.correct === true) {
			points[currentPage] = 1;
		} else {
			points[currentPage] = 0;
		}
		setPoints(points);
	}

	if (testTimeLeft === 0) {
		setElementToShow('TestResults');
		setTimeHasGone(true);
	}
	if (elementToShow === 'TestQuestion' && testTimeLeft > 0) {
		return (
			<div className={styles.testView}>
				<Countdown seconds={baseTimeLeft} setTestTimeLeft={setTestTimeLeft} />
				<div className={styles.question}>{question}</div>
				<div className={styles.answers}>
					<ul>
						<li className={classMarked[0]} onClick={() => {
							calculatePoints(currentPage, answear1)
							setclassMarked([markedAnswer, unMarkedAnswer, unMarkedAnswer])
							}}>
							{answear1.value}
						</li>
						<li className={classMarked[1]} onClick={() => {
							calculatePoints(currentPage, answear2)
							setclassMarked([unMarkedAnswer, markedAnswer, unMarkedAnswer])
							}}>
							{answear2.value}
						</li>
						<li className={classMarked[2]} onClick={() => {
							calculatePoints(currentPage, answear3)
							setclassMarked([unMarkedAnswer, unMarkedAnswer, markedAnswer])
							}}>
							{answear3.value}
						</li>
					</ul>
				</div>
			</div>
		);
	} else {
		return null;
	}
}
