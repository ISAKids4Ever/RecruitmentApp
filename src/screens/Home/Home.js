import React from 'react';
import Slider from 'react-slick';

import styles from './Home.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function Home() {
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 8000,
		pauseOnHover: true
	};
	return (
		<div className="homepage__slider">
			<Slider {...settings}>
				<div className={`${styles.slideWrapper}`}>
					<div className={`${styles.slide} ${styles.first}`}>
						<h2 className={styles.slideHeader}>IntervYou</h2>
						<p className={styles.slideText}>
							Jest to aplikacja dzięki której sprawdzisz swoją wiedzę z frontendu
						</p>
					</div>
				</div>
				<div className={`${styles.slideWrapper}`}>
					<div className={`${styles.slide} ${styles.second}`}>2</div>
				</div>
				<div className={`${styles.slideWrapper}`}>
					<div className={`${styles.slide} ${styles.third}`}>3</div>
				</div>
				<div className={`${styles.slideWrapper}`}>
					<div className={`${styles.slide} ${styles.fourth}`}>4</div>
				</div>
				<div className={`${styles.slideWrapper}`}>
					<div className={`${styles.slide} ${styles.fifth}`}>5</div>
				</div>
				<div className={`${styles.slideWrapper}`}>
					<div className={`${styles.slide} ${styles.sixth}`}>6</div>
				</div>
			</Slider>
		</div>
	);
}
