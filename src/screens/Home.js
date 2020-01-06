import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styles from "./Home.module.css"
 

function Home() {
  console.log(styles)
  return (
    <CarouselProvider
        naturalSlideWidth={50}
        naturalSlideHeight={50}
        totalSlides={3}
      >
        <Slider className={styles.slider}>
          <Slide className={styles.slide} index={0}>
            <img src="https://www.sciencealert.com/images/2019-12/processed/CatsHaveFacialExpressionsButHardToRead_1024.jpg" alt=""/>
            <span className={styles.heroText}>I am the first Slide.</span>
          </Slide>
          <Slide className={styles.slide} index={1}>I am the second Slide.</Slide>
          <Slide className={styles.slide} index={2}>I am the third Slide.</Slide>
        </Slider>
        <ButtonBack className={styles.prevButton}>Back</ButtonBack>
        <ButtonNext className={styles.nextButton}>Next</ButtonNext>
        <DotGroup className={styles.dots}/>
      </CarouselProvider>
  );
}


export default Home;