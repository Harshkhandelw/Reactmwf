import React from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.css'
import background_image from './background_image.jpeg';
import airplan from './airplan.jpeg'
import view from './view.png'


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
          <div className='text'>
            <h4>Offers</h4>
            <p>Promotions, deals, and special offers for you</p>
          </div>
          <div className='Card'>
            <div className='borx'>
              <div className='row'>
                <h4>Fly away to your dream vacation</h4>
                <p>Get inspired – compare and book flights with flexibility</p>
                <button className='sear'>Search for flights</button>
              </div>
              <div>
                <img src={airplan} className='plan' />
              </div>
            </div>
            <div className='borx'>
              <div className='row'>
                <h4>Planning a trip to the 2024 Summer Games?</h4>
                <p>Brussels is a quick train ride from all the action</p>
                <button className='sear'>Explore Brussels</button>
              </div>
              <div>
                <img src={view} className='plan' />
              </div>
            </div>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
