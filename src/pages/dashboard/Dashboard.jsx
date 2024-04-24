import React from 'react';
import './dashboard.css';


const dashboard = () =>  {

  return (
    <>
        
        <div className='image'>
            <img src="https://nomadsworld.com/wp-content/uploads/2018/11/nomads-brisbane-hostel-dorm.jpg"></img>
            <div className='image-text'>
              <h1 className="text-5xl font-bold leading-10 text-gray-900 sm:truncate sm:tracking-tight">H O S T E L H U B</h1>
              <br></br>
              <h2 className="text-xl font-bold leading-100 text-gray-900 sm:truncate sm:tracking-tight">A Hostel Management System for NMAMIT students</h2>
            </div>
            <div className='btn-toolbar'>
              <button className='btn1'>Register as an Admin</button>
              
              <button className='btn2'>Register as a Student</button>
            </div>
        </div>
    </>
  )
}

export default dashboard