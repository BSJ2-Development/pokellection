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
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
          />
      </CarouselItem>
    );
  });

  return (
    <>
    <br></br>
    <br></br>
      <h1 className='welcome_homepage'>Welcome to Pokellection</h1>
            <button>
        <NavLink to='/pokemonindex'>
          Get Started Now!
        </NavLink>
      </button>

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
      <p className='ptagonhomepage'>
      With Pokellection, you can manage your entire collection of Pokemon across all platforms. From the video games, to the card game or even the action figures you have on your shelf. By creating new cards for each Pokemon within your collection, you can add to the Pokellection Pokedex for everyone to see. When you log in, you can enjoy checking out the cards that everyone has contributed, but you can only modify the listings that you have added yourself.
      </p> 
    </div>
    </>
  );
}

export default Home;