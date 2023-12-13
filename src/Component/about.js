import React from 'react';
import './about.css'; // Assuming you have a CSS file for your component styles

function About() {
  return (
    <div>
      <div className='which'>
        <div className="about-section">
          <h1>About Us Page</h1>
          <p>Some text about who we are and what we do.</p>
          <p>Resize the browser window to see that this page is responsive, by the way.</p>
        </div>
        <h2 className="title-center">Our Team</h2>
        <div className="row">
          <div className="column">
            <div className="card">
              <img src="https://media.licdn.com/dms/image/C4D03AQE0GYXvR2RNZA/profile-displayphoto-shrink_800_800/0/1662967549790?e=2147483647&v=beta&t=RLlb-HXBVta1oT7T2eONmG5bvyduU4QjRl4szqr6DT4" alt="Jane" className="card-img" />
              <div className="container">
                <h2>Jane Doe</h2>
                <p className="title">CEO &amp; Founder</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>jane@example.com</p>
                <p><button className="button">Contact</button></p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww" alt="Mike" className="card-img" />
              <div className="container">
                <h2>Mike Ross</h2>
                <p className="title">Art Director</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>mike@example.com</p>
                <p><button className="button">Contact</button></p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img src="https://www.rri.res.in/sites/default/files/2022-09/Abhisek%20Tamang.jpg" alt="John" className="card-img" />
              <div className="container">
                <h2>John Doe</h2>
                <p className="title">Designer</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>john@example.com</p>
                <p><button className="button">Contact</button></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
