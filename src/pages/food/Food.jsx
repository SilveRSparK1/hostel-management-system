import React from 'react';
import './food.css';
import { Card } from '@/components/card/Card';

export const Food = () => {
  return (
    <div>
      <h1 className='text-4xl leading-400 text-gray-900 sm:truncate sm:tracking-tight align-middle text-center pt-5 font-extrabold'>Menu for the day</h1>
      <h2 className='text-2xl align-middle text-center pt-6 font-bold'>Morning</h2>
      <div className='griddy'>
        <Card/>
      </div>
      <button onClick={'sfg'} className='btn'>Book my coupon</button>
      <br></br>
      <h2 className='text-2xl align-middle text-center pt-6 font-bold'>Afternoon</h2>
      <div className='griddy'>
        <Card/>
      </div>
      <h2 className='text-2xl align-middle text-center pt-6 font-bold'>Evening</h2>
      <div className='griddy'>
        <Card/>
      </div>
      <h2 className='text-2xl align-middle text-center pt-6 font-bold'>Night</h2>
      <div className='griddy'>
        <Card/>
      </div>
    </div>
  )
}
