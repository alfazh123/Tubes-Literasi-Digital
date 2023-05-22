import React from 'react';
import Navbar from '../component/navbar';
import './home.css';
import { Link } from 'react-router-dom';
import ImageSlider from '../component/ImageSlider';
import { SliderData } from '../component/SliderData';


function Home() {

  return (
    <div className='home'>
        <Navbar />

      <div className='hero'>

        <div className='hero-content'>
          <h1>welcom to lorem ipsum</h1>
          <p>be safety from internet</p>
          <Link to="/" className="link-btn" >Get start!</Link>
        </div>

      </div>

      <main className='home-content'>

        <div className='homeSub-content'>
          <h2>Logo</h2>
          <p>bdjsbkdnasfnl lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum bdjsbkdnasfnl lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum bdjsbkdnasfnl lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum</p>
        </div>

        <div className='home-content-section'>
          
            <h2>Chose one!</h2>
          <div className='home-card'>
            <ImageSlider slides={SliderData}/>
          </div>
        
        </div>

      </main>


      <footer className='footer'>
        <p>project by Alfazh©️2023</p>
      </footer>

      
    </div>
  );
}

export default Home;