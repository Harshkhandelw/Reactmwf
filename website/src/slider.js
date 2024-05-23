// src/CardSlider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const cards = [
    {
      id: 1,
      imgSrc: 'https://via.placeholder.com/150',
      title: 'Card 1',
      description: 'This is the description for card 1.',
      buttonText: 'Learn More'
    },
    {
      id: 2,
      imgSrc: 'https://via.placeholder.com/150',
      title: 'Card 2',
      description: 'This is the description for card 2.',
      buttonText: 'Learn More'
    },
    {
      id: 3,
      imgSrc: 'https://via.placeholder.com/150',
      title: 'Card 3',
      description: 'This is the description for card 3.',
      buttonText: 'Learn More'
    },
    {
      id: 4,
      imgSrc: 'https://via.placeholder.com/150',
      title: 'Card 4',
      description: 'This is the description for card 4.',
      buttonText: 'Learn More'
    },
    {
      id: 5,
      imgSrc: 'https://via.placeholder.com/150',
      title: 'Card 5',
      description: 'This is the description for card 5.',
      buttonText: 'Learn More'
    }
  ];

  return (
    <div className="card-slider">
      <Slider {...settings}>
        {cards.map(card => (
          <div key={card.id} className="card">
            <img src={card.imgSrc} alt={card.title} />
            <h1>{card.title}</h1>
            <p>{card.description}</p>
            <button>{card.buttonText}</button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
