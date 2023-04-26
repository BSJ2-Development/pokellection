import React, { useState } from 'react';
import items from '../components/Items';
import { NavLink } from 'react-router-dom'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import pokellection from '../assets/Pokellection.png'

const Home = ()  => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (

      <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={item.src}
      >
      <CarouselCaption className='carousel-text'
        captionText={item.caption}

        />
        <img src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <>
    <div className='home-page-background'>
      <br></br>
      <br></br>
        <div className='pokellection-logo-container'>
          <NavLink className='pokellection-logo' to="/pokemonindex"><img src={pokellection} alt="About Image"/></NavLink>
        </div>
        <Carousel className='carousel-content'
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
            />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
            />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
            />
        </Carousel>
      <div className='homepage_description'> 
        <p>
        With Pokellection, you can manage your entire collection of Pokemon across all platforms. From the video games, to the card game or even the action figures you have on your shelf. By creating new cards for each Pokemon within your collection, you can add to the Pokellection Pokedex for everyone to see. When you log in, you can enjoy checking out the cards that everyone has contributed, but you can only modify the listings that you have added yourself.
        </p> 
      </div>
    </div>
    </>
  );
}

export default Home;