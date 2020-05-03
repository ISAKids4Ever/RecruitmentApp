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
                            Some more tests description below. <br />
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
                            src={FlashcardsImage}
                            alt="flashcardsImage"
                        />
                        <h2 className={styles.slideHeader}>Flashcards!</h2>
                        <p className={styles.slideText}>
                            Flashcards descriptions. <br />
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
                            src={ForumImage}
                            alt="forumImage"
                        />
                        <h2 className={styles.slideHeader}>Forum!</h2>
                        <p className={styles.slideText}>
                            Forum description. <br />
                            You can explore <strong>Flashcards</strong> and then check
                            your knowledge with <strong> Tests</strong>. <br />
                            If there is anything more you would like to ask about go to
                            our <strong>Forum</strong>.
                        </p>
                    </div>
                </div>
            </Slider>
        </div>
    );
}
