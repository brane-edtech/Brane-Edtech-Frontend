import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const LanguagesComponent = () => {
  return (
    <>
      <div className='LanguagesComp__Div'>
        <h1 className='LanguagesComp__Div-heading'>
          Supports all Curriculum with Multiple Language Support
        </h1>

        <div className="LanguagesComp__Div-carousel">
          <div className="LanguagesComp__Div-carousel-slide">
            <button>తెలుగు</button>
            <button>English</button>
            <button>हिंदी</button>
            <button>ಕನ್ನಡ</button>
            <button>தமிழ்</button>
            <button>मराठी</button>
            <button>ગુજરાત</button>
            <button>മലയാളം</button>

          </div>
        </div>

      </div>
    </>
  );
};

export default LanguagesComponent;
