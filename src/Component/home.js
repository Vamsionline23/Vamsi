import React from 'react';
import './home.css';
import images from './images/a.png';

function home() {
  return (
    <div>
      <div class='img'>
    <center> <img src={images} alt='text' /> </center>
    
    <br/>
    <br/>
    <br/>
    <div class='if'>
    <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src='https://images.unsplash.com/photo-1534237710431-e2fc698436d0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D' alt='' />
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1> 
      <p>Architect & Engineer</p> 
      <p>We love that guy</p>
    </div>
  </div>
</div>
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src='https://images.unsplash.com/photo-1633571318583-e0fea2e715ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&w=1000&q=80' alt=''/>
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1> 
      <p>Architect & Engineer</p> 
      <p>We love that guy</p>
    </div>
  </div>
</div>
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYZAMwJPrnbjLM7-4X5SPz-sixWmYkir1YYXu2bMZbmLbV4xzN04NxPO8z-zCyL9lk9Qc&usqp=CAU' alt=''/>
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1> 
      <p>Architect & Engineer</p> 
      <p>We love that guy</p>
    </div>
  </div>
</div>
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr9h6h-FY2KYveIVhis1w93Km6Va9pRux-xtYVqpCZIp2PyYoXZYpPF-D7MDfzXMDO7hU&usqp=CAU' alt=''/>
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1> 
      <p>Architect & Engineer</p> 
      <p>We love that guy</p>
    </div>
  </div>
</div>

    </div>
    </div>
    </div>
  )
}

export default home
