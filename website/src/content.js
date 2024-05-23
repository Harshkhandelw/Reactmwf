import React from 'react';
import background_image from './background_image.jpeg';
import Carousel from 'react-bootstrap/Carousel';
// Assuming ExampleCarouselImage is a component that you need to use for carousel images

function Content() {
  return (
    <div>
      <div>
        <div>
          <img src={background_image} className='Background' alt='Background' />
        </div>
        <div className='infom'>
          <h1 id='Toy'>Pack the whole toybox</h1>
          <p id='Toy1'>Unwind and stretch out in a vacation home</p>
          <button id='toy2'>Discover vacation rentals</button>
        </div>
        <div>
          <div className='form'>
            <input type='text' placeholder='Where are you going?' id='check' />
            <input type='date' placeholder='check-in-Date -- check-out Date' id='check' />
            <select id='adults-children-room'>
              <option value='' selected>Adult-Children-Room</option>
              <option value='1-adult'>1 Adult</option>
              <option value='2-adults'>2 Adults</option>
              <option value='1-child'>1 Child</option>
              <option value='2-children'>2 Children</option>
              <option value='1-room'>1 Room</option>
              <option value='2-rooms'>2 Rooms</option>
            </select>
            <button id='sear'>Search</button>
          </div>
          <div className='check'>
            <input type='checkbox' id='flights-checkbox' />
            <label htmlFor='flights-checkbox'><h4>I’m looking for flights</h4></label>
          </div>
          <div>
            <h4>Offers</h4>
            <p>Promotions, deals, and special offers for you</p>
          </div>
          <div className='flexcard'>
            <div className='row'>
              <Carousel>
                <Carousel.Item>
                  {/* <ExampleCarouselImage text="First slide" /> */}
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  {/* <ExampleCarouselImage text="Second slide" /> */}
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  {/* <ExampleCarouselImage text="Third slide" /> */}
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
