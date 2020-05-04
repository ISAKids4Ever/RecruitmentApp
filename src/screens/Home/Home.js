import React from 'react';
import Slider from 'react-slick';

import styles from './Home.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HomeImage from '../../images/HomeImage.svg';
import TestsImage from '../../images/TestsImage.svg';
import FlashcardsImage from '../../images/FlashcardsImage.svg';
import ForumImage from '../../images/ForumImage.svg';

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
                <div className={styles.slideWrapper}>
                    <div className={styles.slide}>
                        <img
                            className={styles.descriptionImage}
                            src={HomeImage}
                            alt="homeImage"
                        />
                        <h2 className={styles.slideHeader}>Welcome to IntervYou!</h2>
                        <p className={styles.slideText}>
                            Here, you will learn common IT interview questions. <br />
                            You can explore <strong>Flashcards</strong> and then check
                            your knowledge with <strong> Tests</strong>. <br />
                            If there is anything more you would like to ask about go to
                            our <strong>Forum</strong>.
                        </p>
                    </div>
                </div>
                <div className={styles.slideWrapper}>
                    <div className={styles.slide}>
                        <img
                            className={styles.descriptionImage}
                            src={TestsImage}
                            alt="testsImage"
                        />
                        <h2 className={styles.slideHeader}>Tests!</h2>
                        <p className={styles.slideText}>
                            In this part you can check your knowledge by taking a test in the IT technology of your choice. You have a certain amount of time to mark the answer and finally you will know the result and all the correct answers.
                        </p>
                    </div>
                </div>
                <div className={styles.slideWrapper}>
                    <div className={styles.slide}>
                        <img
                            className={styles.descriptionImage}
                            src={FlashcardsImage}
                            alt="flashcardsImage"
                        />
                        <h2 className={styles.slideHeader}>Flashcards!</h2>
                        <p className={styles.slideText}>
                            Here you can learn recruitment questions an sample answers in the form of flashcards. You can choose the technology to which the questions will relate. Logged-in users can also mark flashcards that they already know the answer to see them less often and those to see more often because they do not remember the answer yet.
                        </p>
                    </div>
                </div>
                <div className={styles.slideWrapper}>
                    <div className={styles.slide}>
                        <img
                            className={styles.descriptionImage}
                            src={ForumImage}
                            alt="forumImage"
                        />
                        <h2 className={styles.slideHeader}>Forum!</h2>
                        <p className={styles.slideText}>
                            In this section you can ask questions that have not been answered in other modules and start discussions on IT topics, if you get a satisfactory answer you can select it and  will be added to the database.
                        </p>
                    </div>
                </div>
            </Slider>
        </div>
    );
}
