import React from 'react';
import './home.css';
import images from './images/a.png';

function home() {
  return (
    <div>
      <div class='img'>
    <center> <img src={images} alt='text' /> </center>
    </div>
    <br/>
    <div class='if'>
    <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D' alt='' />
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
      <img src='https://images.unsplash.com/photo-1629662179633-22aedfc1f854?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&w=1000&q=80' alt=''/>
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
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoVmEkCPqORrtskl4ZflV9LHxpM24Gx1hrD-By1hnJ4Ca4j3f6EsUBoWPRdgVg0RYk2DM&usqp=CAU' alt=''/>
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
      <img src='https://st3.depositphotos.com/12982378/17855/i/450/depositphotos_178558354-stock-photo-portrait-happy-young-man-playing.jpg' alt=''/>
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
  )
}

export default home
