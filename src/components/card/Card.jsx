import React from 'react';
import './card.css';

export const Card = () => {
  return (
   <> 
    <div className='card-container'>
        <img src="https://picsum.photos/300/200" alt="Card Image" className='card-img'/>
        <h1 className='card-title'>Dosa</h1>
        <p className='card-description'>Card Description</p>
    </div>
    <div className='card-container'>
      <img src="https://picsum.photos/300/200" alt="Card Image" className='card-img'/>
      <h1 className='card-title'>Sambhar</h1>
      <p className='card-description'>Card Description</p>
    </div>
    <div className='card-container'>
      <img src="https://picsum.photos/300/200" alt="Card Image" className='card-img'/>
      <h1 className='card-title'>Buns</h1>
      <p className='card-description'>Card Description</p>
    </div>
    <div className='card-container'>
      <img src="https://picsum.photos/300/200" alt="Card Image" className='card-img'/>
      <h1 className='card-title'>Card Title</h1>
      <p className='card-description'>Card Description</p>
    </div>
   </>
  )
}
