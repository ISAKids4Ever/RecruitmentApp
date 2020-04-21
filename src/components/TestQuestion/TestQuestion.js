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

	const [testTimeLeft, setTestTimeLeft] = React.useState(baseTimeLeft)
	const unMarkedAnswer = styles.answer;
	const [liClassName, setLiClassName] = React.useState(unMarkedAnswer);

	React.useEffect(
		() => {
			setLiClassName(unMarkedAnswer);
		},
		[question, unMarkedAnswer]
	);

	function calculatePoints(currentPage, answear) {
		const markedAnswer = styles.answerMarked;
		setLiClassName(markedAnswer);
		const points = [...userPoints];
		if (answear.correct === true) {
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
						<li className={liClassName} onClick={() => calculatePoints(currentPage, answear1)}>
							{answear1.value}
						</li>
						<li className={liClassName} onClick={() => calculatePoints(currentPage, answear2)}>
							{answear2.value}
						</li>
						<li className={liClassName} onClick={() => calculatePoints(currentPage, answear3)}>
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
