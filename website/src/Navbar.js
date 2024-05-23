import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Indiawaveflag from './India wave flag.jpeg';

function Navbar1() {
  return (
    <>
      <Navbar>
        <Container>
          <Nav>
            <div className='back'>
              <div class="main">
                <div>
                  <h1>Booking.com</h1>
                </div>
                <div className='other'>
                  <h2>INR</h2>
                  <img src={Indiawaveflag} />
                  <h2><i class="fa-regular fa-circle-question"></i></h2>
                  <h2>List your Property</h2>
                  <button>Register</button>
                  <button>SignIn</button>
                </div>
              </div>
              <div className='services'>
                <div className='stays'>
                  <i class="fa-solid fa-bed"></i>
                  <h3>Stays</h3>
                </div>
                <div className='stays'>
                  <i class="fa-solid fa-plane"></i>
                  <h3>Flight</h3>
                </div>
                <div className='stays'>
                  <i class="fa-solid fa-earth-americas"></i>
                  <h3>Hotel+Flight</h3>
                </div>
                <div className='stays'>
                  <i class="fa-solid fa-car"></i>
                  <h3>Car Rentals</h3>
                </div>
                <div className='stays'>
                  <i class="fa-solid fa-ranking-star"></i>
                  <h3>Attractions</h3>
                </div>
                <div className='stays'>
                  <i class="fa-solid fa-taxi"></i>
                  <h3>Airport taxis</h3>
                </div>
              </div>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbar1
