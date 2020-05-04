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
                        <p className={`${styles.slideText}  ${styles.overviewSlide}`}>
                            If you want to conquer interviews on the IT market, this application is just for you. It was created by our team - young engineers, that wanted to give you a hand while entering this complicated technology world. While we still develop the application, we want to give you highest quality of information most needed during your first interviews in this trade. We take care about details, a well-developed database and form of learning.
                            What can you expect from the app? Let's have a look!
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
                            We hope you're gonna love the <strong>Tests</strong> we have created here. They'll give you short answers for not so complicated questions, problems that can be explained with a single line - first of all the basics of the technology of your choice, in which you can check yourself within 10 minutes!
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
                            Next level - <strong>Flashcards</strong> - whenever you feel more confident with your basics. Here you'll get access to more complicated knowledge with more advanced explanation. To the well known form we added functionality, that allows you to skip questions you already know and focus on more difficult issues.
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
                            Last but not least - our <strong>Forum</strong> - the place, where you'll be able to ask about more detailed stuff, get in touch with other users, discuss and gain even more valuable knowledge based on experience of others! Try not to lose yourself here and keep your learning path, so you can see effects as soon as possible! 
                        </p>
                    </div>
                </div>
            </Slider>
        </div>
    );
}
