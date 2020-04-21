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
        pauseOnHover: true,
    };
    return (
        <div className="homepage__slider">
            <Slider {...settings}>
                <div className={`${styles.slideWrapper}`}>
                    <div className={`${styles.slide} ${styles.first}`}>
                        <h2 className={styles.slideHeader}>
                            Hello, welcome to IntervYou!
                        </h2>
                        <p className={styles.slideText}>
							<br/>
                            Here, you will learn common interview questions. You can
                            explore Flashcards and then check your knowledge with Tests.
                            If there is anything more you would like to ask about you can
                            do it on our Forum.
                        </p>
                    </div>
                </div>
                <div className={`${styles.slideWrapper}`}>
                    <div className={styles.slide}>Tests description</div>
                </div>
                <div className={`${styles.slideWrapper}`}>
                    <div className={styles.slide}>Flashcards description</div>
                </div>
                <div className={`${styles.slideWrapper}`}>
                    <div className={styles.slide}>Forum description</div>
                </div>
            </Slider>
        </div>
    );
}
