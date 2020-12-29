import React from 'react';

import * as S from './AboutSection.styled';

import home1 from '../img/home1.png';

const AboutSection = () => {
  return(
    <S.About>
      <S.Description>
        <div className="title">
          <S.HideTitle>
            <h2>We work to make</h2>
          </S.HideTitle>

          <S.HideTitle>
            <h2>your <span>dreams</span> come</h2>
          </S.HideTitle>

          <S.HideTitle>
            <h2>true.</h2>
          </S.HideTitle>

          <p>
            Contact us for any photography or videography ideais that you have. 
            We have profissionals with amazing skills.
          </p>
          <button>Contact Us</button>
        </div>
        </S.Description>

      <S.Image>
        <img src={home1} alt="Guy holding a cameera"/>
      </S.Image>
    </S.About>
  );
}

export default AboutSection;