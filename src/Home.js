import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className='home__container'>
        <img className='home__image' src="images/art15.jpg" alt="" />

        <div className='home__row'>
          <Product 
            id="123456789"
            title="The Spectral of light"
            price={20.09}
            image="images/bg3.jpg"
            />
          <Product 
            id="23456789"
            title="The sign of victory"
            price={19.09}
            image="images/art9.jpg"
            />
        </div>

        <div className='home__row'>
        <Product 
            id="1234567891"
            title="Fredom of a girl - The art"
            price={210.09}
            image="images/art2.jpg"
            />
          <Product 
            id="234567891"
            title="The worrier - Way to the victory"
            price={190.09}
            image="images/art12.jpg"
            />
            <Product 
              id="1234567890"
              title="Entry to the mysetry place"
              price={260.09}
              image="images/bg2.jpg"
            />
        </div>

        <div className='home__row'>
        <Product 
            id="1234567894"
            title="Jungle - Art for the WildLife lover"
            price={20.09}
            image="images/art1.jpg"
            />
        </div>

      </div>
    </div>
  );
}

export default Home;
