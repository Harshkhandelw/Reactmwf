import React from 'react'
import Fruit from "./Fruit.jpeg"
function Navfun() {
  return (
    <>
      <div className='container d-flex justify-content-between text-center'>
        <div className='d-flex'>
          <img src={Fruit}></img>
          <h1>Nest</h1><br />
          <span className='font-1'>Mart & Grocery </span>
        </div>
        <div>
          <form className="search-bar">
            <select
              className="search-bar__select"
            >
              <option value="">All Categories</option>
              <option >
              </option>
            </select>
            <input
              type="text"
              placeholder="Search..."
              className="search-bar__input position-relative"
            />
            <i class="fa-solid fa-magnifying-glass text-dark position-absolute left-100"></i>
          </form>
        </div>
        <div className='d-flex justify-content-between'>
          <select className='py-auto'>
            <option>Your Location</option>
            <option>INDIA</option>
            <option>USA</option>
          </select>
          <h4>
            <i class="fa-solid fa-code-compare"></i>
            compare
          </h4>
          <h4>
            <i class="fa-regular fa-heart"></i>
            Wishlist
          </h4>
          <h4>
            <i class="fa-solid fa-cart-shopping"></i>
            Cart
          </h4>
          <h4>
            <i class="fa-solid fa-user"></i>
            Account
          </h4>
        </div>
      </div>

      <div className='container d-flex justify-content-between '>
        <div className='d-flex gap-4 m-2'>
          <select>
            <option >Browse all Categories</option>
          </select>
          <h3 >
            <i class="fa-solid fa-fire"></i>
            Hot Deals</h3>
          <h3>Home</h3>
          <h3>About</h3>
          <h3>Shop</h3>
          <h3>Vendors</h3>
          <h3>Mega menu</h3>
          <h3>Blog</h3>
          <h3>page</h3>
          <h3>contact</h3>
        </div>
        <div class="size">
        <i class="fa-solid fa-headphones"></i>
        <span>1900-888</span>
        </div>
      </div>
    </>
  )
}

export default Navfun
