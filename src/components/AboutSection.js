import React from 'react';

import home1 from '../img/home1.png';

const AboutSection = () => {
  return(
    <section>
      <div className="description">
        <div className="title">
          <div className="hide-title">
            <h2>We work to make</h2>
          </div>

          <div className="hide-title">
            <h2>your <span>dreams</span> come</h2>
          </div>

          <div className="hide-title">
            <h2>true.</h2>
          </div>

          <p>
            Contact us for any photography or videography ideais that you have. We have profissionals with amazing skills.
          </p>
          <button>Contact Us</button>
        </div>

        <div className="image">
          <img src={home1} alt="Guy holding a cameera"/>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;