import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import boardimg1 from "../../assets/AP_Board.png"
import boardimg2 from "../../assets/Cambridge_Board.png"
import boardimg3 from "../../assets/NIO.png"
import boardimg4 from "../../assets/TN_Board.png"
import boardimg5 from "../../assets/CBSI.png"
import boardimg6 from "../../assets/CDMIB.png"
import boardimg7 from "../../assets/CISCE.png"
import microsoftlogo from '../../assets/Microsoft-Logo.png'
import amazonlogo from '../../assets/Amazon_logo.png'
import googlelogo from '../../assets/google.png'
import slacklogo from '../../assets/slack.png'

const NewsComponent = () => {
  return (
    <>
      <div className="NewsComponent__Div">
        <div className="NewsComponent__Div__Articles__Div">
          <Carousel
            showArrows={false}
            autoPlay={true}
            interval={3000}
            showIndicators={false}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            stopOnHover={true}
            swipeable={true}
            emulateTouch={true}
            centerMode={true}
            centerSlidePercentage={100}
            dynamicHeight={false}
          >
            <div className="NewsComponent__Div__Articles__Div__slide">
              <div className="Articles__Div__slide-Heading">
                Times of India
              </div>
              <div className="NewsComponent__Div__Articles__Div__slide-Para">
                Best Platform for Education

              </div>
            </div>
            <div className="NewsComponent__Div__Articles__Div__slide">
              <div className="NewsComponent__Div__Articles__Div__slide-Heading">
                Forbes
              </div>
              <div className="NewsComponent__Div__Articles__Div__slide-Para">
                World's Leading Platform
              </div>
            </div>
            <div className="NewsComponent__Div__Articles__Div__slide">
              <div className="NewsComponent__Div__Articles__Div__slide-Heading">
                BBC News
              </div>
              <div className="NewsComponent__Div__Articles__Div__slide-Para">
                Brane is Brain for future
              </div>
            </div>
            <div className="NewsComponent__Div__Articles__Div__slide">
              <div className="NewsComponent__Div__Articles__Div__slide-Heading">
                USA Today
              </div>
              <div className="NewsComponent__Div__Articles__Div__slide-Para">
                Brane Replaces All
              </div>
            </div>
            <div className="NewsComponent__Div__Articles__Div__slide">
              <div className="NewsComponent__Div__Articles__Div__slide-Heading">
                American Times
              </div>
              <div className="NewsComponent__Div__Articles__Div__slide-Para">
                Brane at #1
              </div>
            </div>
          </Carousel>
        </div>
        <div className="NewsComponent__Div__BoardsLogoDiv">
          <img src={boardimg1} alt="" />
          <img src={boardimg2} alt="" />
          <img src={boardimg3} alt="" />
          <img src={boardimg4} alt="" />
          <img src={boardimg5} alt="" />
          <img src={boardimg6} alt="" />
          <img src={boardimg7} alt="" />
        </div>

        <div className='NewsComponent__Div__OurPartners__Div'>
          <h1 className='NewsComponent__Div__OurPartners__Div-heading'>Our Partners</h1>
          <div className="NewsComponent__Div__OurPartners__Div-parent" >
            <img src={microsoftlogo} />
            <img src={amazonlogo} />
            <img src={googlelogo} />
            <img src={slacklogo} />
          </div>
        </div>

      </div>
    </>
  );
};

export default NewsComponent;
