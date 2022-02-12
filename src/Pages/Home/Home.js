import React from 'react';
import './Home.css';
import imgHomeShop from './shopimg.jpg';

export default function Home() {
  return (
    <div className='global-container'>
      <h1 className="home-title">
        Bienvenue au <span>Shop</span>
      </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum minus veniam deleniti porro inventore libero sunt odio, id natus numquam illum autem rem laboriosam aperiam nostrum repellat explicabo maiores accusamus?</p>
      <img src={imgHomeShop} alt="accueil shop" />
    </div>
  )
}
