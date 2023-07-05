import leftArrowImage from '../../assets/leftarrow.png';
import rightArrowImage from '../../assets/rightarrow.png';
import React from "react";
import userimage1 from "../../assets/userimage1.png"
import userimage2 from "../../assets/userimage2.png"
import userimage3 from "../../assets/userimage3.png"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Parentscarousel = () => {
  const renderCustomPrevArrow = (onClickHandler, hasPrev, label) => {
    return (
      hasPrev && (
        <button className="carousel-custom-arrow" onClick={onClickHandler}>
          <img src={leftArrowImage} alt="Previous" />
        </button>
      )
    );
  };
  const renderCustomNextArrow = (onClickHandler, hasNext, label) => {
    return (
      hasNext && (
        <button className="carousel-custom-arrow" onClick={onClickHandler}>
          <img src={rightArrowImage} alt="Next" />
        </button>
      )
    );
  };
  return (
    <div className='ParentsComponent'>
      <div className="ParentsVoice__Div">
        <div className="ParentsVoice__Div__title">
          <h2>Parents Voice</h2>
        </div>
        <Carousel
          className="ParentsVoice__Div__carousel"
          renderArrowPrev={renderCustomPrevArrow}
          renderArrowNext={renderCustomNextArrow}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={4000}
        >
          <div className="ParentsVoice__Div__carousel-row">
            <div className="ParentsVoice__Div__carousel-row-card1">
              <div className="ParentsVoice__Div__carousel-row-card1-image">
                <img
                  src={userimage1}
                  width="60vw"
                  height="60vh"
                ></img>
              </div>
              <div className="ParentsVoice__Div__carousel-row-card1-text">
                <cardtitle className="ParentsVoice__Div__carousel-row-card1-text-name">
                  Julia Harris
                </cardtitle>
                <cardsubtitle className="ParentsVoice__Div__carousel-row-card1-text-desc">
                  Parent, Varun 8th Class
                </cardsubtitle>
                <carddescription className="ParentsVoice__Div__carousel-row-card1-text-review">
                  Brane Education has helped my son alot in his studies. He has
                  improved alot in his studies and is now able to score good marks
                  in his exams.
                </carddescription>
              </div>
            </div>

            <div className="ParentsVoice__Div__carousel-row-card1">
              <div className="ParentsVoice__Div__carousel-row-card1-image">
                <img
                  src={userimage1}
                  width="60vw"
                  height="60vh"
                ></img>
              </div>
              <div className="ParentsVoice__Div__carousel-row-card1-text">
                <cardtitle className="ParentsVoice__Div__carousel-row-card1-text-name">
                  Julia Harris
                </cardtitle>
                <cardsubtitle className="ParentsVoice__Div__carousel-row-card1-text-desc">
                  Parent, Varun 8th Class
                </cardsubtitle>
                <carddescription className="ParentsVoice__Div__carousel-row-card1-text-review">
                  Brane Education has helped my son alot in his studies. He has
                  improved alot in his studies and is now able to score good marks
                  in his exams.
                </carddescription>
              </div>
            </div>

            <div className="ParentsVoice__Div__carousel-row-card1">
              <div className="ParentsVoice__Div__carousel-row-card1-image">
                <img
                  src={userimage1}
                  width="60vw"
                  height="60vh"
                ></img>
              </div>
              <div className="ParentsVoice__Div__carousel-row-card1-text">
                <cardtitle className="ParentsVoice__Div__carousel-row-card1-text-name">
                  Julia Harris
                </cardtitle>
                <cardsubtitle className="ParentsVoice__Div__carousel-row-card1-text-desc">
                  Parent, Varun 8th Class
                </cardsubtitle>
                <carddescription className="ParentsVoice__Div__carousel-row-card1-text-review">
                  Brane Education has helped my son alot in his studies. He has
                  improved alot in his studies and is now able to score good marks
                  in his exams.
                </carddescription>
              </div>
            </div>

          </div>

          <div className="ParentsVoice__Div__carousel-row">
            <div className="ParentsVoice__Div__carousel-row-card1">
              <div className="ParentsVoice__Div__carousel-row-card1-image">
                <img
                  src={userimage1}
                  width="60vw"
                  height="60vh"
                ></img>
              </div>
              <div className="ParentsVoice__Div__carousel-row-card1-text">
                <cardtitle className="ParentsVoice__Div__carousel-row-card1-text-name">
                  Julia Harris
                </cardtitle>
                <cardsubtitle className="ParentsVoice__Div__carousel-row-card1-text-desc">
                  Parent, Varun 8th Class
                </cardsubtitle>
                <carddescription className="ParentsVoice__Div__carousel-row-card1-text-review">
                  Brane Education has helped my son alot in his studies. He has
                  improved alot in his studies and is now able to score good marks
                  in his exams.
                </carddescription>
              </div>
            </div>

            <div className="ParentsVoice__Div__carousel-row-card1">
              <div className="ParentsVoice__Div__carousel-row-card1-image">
                <img
                  src={userimage1}
                  width="60vw"
                  height="60vh"
                ></img>
              </div>
              <div className="ParentsVoice__Div__carousel-row-card1-text">
                <cardtitle className="ParentsVoice__Div__carousel-row-card1-text-name">
                  Julia Harris
                </cardtitle>
                <cardsubtitle className="ParentsVoice__Div__carousel-row-card1-text-desc">
                  Parent, Varun 8th Class
                </cardsubtitle>
                <carddescription className="ParentsVoice__Div__carousel-row-card1-text-review">
                  Brane Education has helped my son alot in his studies. He has
                  improved alot in his studies and is now able to score good marks
                  in his exams.
                </carddescription>
              </div>
            </div>

            <div className="ParentsVoice__Div__carousel-row-card1">
              <div className="ParentsVoice__Div__carousel-row-card1-image">
                <img
                  src={userimage1}
                  width="60vw"
                  height="60vh"
                ></img>
              </div>
              <div className="ParentsVoice__Div__carousel-row-card1-text">
                <cardtitle className="ParentsVoice__Div__carousel-row-card1-text-name">
                  Julia Harris
                </cardtitle>
                <cardsubtitle className="ParentsVoice__Div__carousel-row-card1-text-desc">
                  Parent, Varun 8th Class
                </cardsubtitle>
                <carddescription className="ParentsVoice__Div__carousel-row-card1-text-review">
                  Brane Education has helped my son alot in his studies. He has
                  improved alot in his studies and is now able to score good marks
                  in his exams.
                </carddescription>
              </div>
            </div>

          </div>

          <div className="ParentsVoice__Div__carousel-row">
            <div className="ParentsVoice__Div__carousel-row-card1">
              <div className="ParentsVoice__Div__carousel-row-card1-image">
                <img
                  src={userimage1}
                  width="60vw"
                  height="60vh"
                ></img>
              </div>
              <div className="ParentsVoice__Div__carousel-row-card1-text">
                <cardtitle className="ParentsVoice__Div__carousel-row-card1-text-name">
                  Julia Harris
                </cardtitle>
                <cardsubtitle className="ParentsVoice__Div__carousel-row-card1-text-desc">
                  Parent, Varun 8th Class
                </cardsubtitle>
                <carddescription className="ParentsVoice__Div__carousel-row-card1-text-review">
                  Brane Education has helped my son alot in his studies. He has
                  improved alot in his studies and is now able to score good marks
                  in his exams.
                </carddescription>
              </div>
            </div>

            <div className="ParentsVoice__Div__carousel-row-card1">
              <div className="ParentsVoice__Div__carousel-row-card1-image">
                <img
                  src={userimage1}
                  width="60vw"
                  height="60vh"
                ></img>
              </div>
              <div className="ParentsVoice__Div__carousel-row-card1-text">
                <cardtitle className="ParentsVoice__Div__carousel-row-card1-text-name">
                  Julia Harris
                </cardtitle>
                <cardsubtitle className="ParentsVoice__Div__carousel-row-card1-text-desc">
                  Parent, Varun 8th Class
                </cardsubtitle>
                <carddescription className="ParentsVoice__Div__carousel-row-card1-text-review">
                  Brane Education has helped my son alot in his studies. He has
                  improved alot in his studies and is now able to score good marks
                  in his exams.
                </carddescription>
              </div>
            </div>

            <div className="ParentsVoice__Div__carousel-row-card1">
              <div className="ParentsVoice__Div__carousel-row-card1-image">
                <img
                  src={userimage1}
                  width="60vw"
                  height="60vh"
                ></img>
              </div>
              <div className="ParentsVoice__Div__carousel-row-card1-text">
                <cardtitle className="ParentsVoice__Div__carousel-row-card1-text-name">
                  Julia Harris
                </cardtitle>
                <cardsubtitle className="ParentsVoice__Div__carousel-row-card1-text-desc">
                  Parent, Varun 8th Class
                </cardsubtitle>
                <carddescription className="ParentsVoice__Div__carousel-row-card1-text-review">
                  Brane Education has helped my son alot in his studies. He has
                  improved alot in his studies and is now able to score good marks
                  in his exams.
                </carddescription>
              </div>
            </div>

          </div>

        </Carousel>
      </div>
    </div>
  );
};

export default Parentscarousel;