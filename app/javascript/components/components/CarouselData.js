import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
    altText: 'bulbasaur',
    caption: 'bulbasaur',
    key: 1,
  },
  {
    src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg',
    altText: 'ivysaur',
    caption: 'ivysaur',
    key: 2,
  },
  {
    src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg',
    altText: 'venasaur',
    caption: 'venasaur',
    key: 3,
  },
  {
    src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg',
    altText: 'charmander',
    caption: 'charmander',
    key: 4,
  },
  {
    src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg',
    altText: 'charmeleon',
    caption: 'charmeleon',
    key: 5,
  },
  {
    src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg',
    altText: 'charizard',
    caption: 'charizard',
    key: 6,
  },
  {
    src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg',
    altText: 'squirtle',
    caption: 'squirtle',
    key: 7,
  },
  {
    src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/8.svg',
    altText: 'wartortle',
    caption: 'wartortle',
    key: 8,
  },
  {
    src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/9.svg',
    altText: 'blastoise',
    caption: 'blastoise',
    key: 9,
  },
  {
    src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg',
    altText: 'pikachu',
    caption: 'pikachu',
    key: 25,
  },
];
const CarouselData = ()  => {
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
      <h1>Welcome to Pokellection</h1>
      <button>Get Started Now!</button>
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

      <p>
      With Pokellection, you can manage your entire collection of Pokemon across all platforms. From the video games, to the card game or even the action figures you have on your shelf. By creating new cards for each Pokemon within your collection, you can add to the Pokellection Pokedex for everyone to see. When you log in, you can enjoy checking out the cards that everyone has contributed, but you can only modify the listings that you have added yourself.
      </p>
    </>
  );
}

export default CarouselData