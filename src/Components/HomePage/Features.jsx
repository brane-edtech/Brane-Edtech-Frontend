import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import feature_img from "../../assets/feature_img.png";

const Features = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="Features">
      <div className="Features__Heading">
        <h1>Our Features</h1>
      </div>

      <div className="Features__Features_menu">
        <nav>
          <a
            className={activeTab === 0 ? "active" : ""}
            onClick={() => handleTabClick(0)}
          >
            Listening Skills
          </a>
          <a
            className={activeTab === 1 ? "active" : ""}
            onClick={() => handleTabClick(1)}
          >
            Dynamic Timetable
          </a>
          <a
            className={activeTab === 2 ? "active" : ""}
            onClick={() => handleTabClick(2)}
          >
            General Search
          </a>
          <a
            className={activeTab === 3 ? "active" : ""}
            onClick={() => handleTabClick(3)}
          >
            Taken Your Lesson
          </a>
        </nav>
      </div>

      <div className="Features__Features_1">
        <Carousel
          selectedItem={activeTab}
          onChange={(index) => handleTabClick(index)}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={2000}
          showIndicators={false}
        >
          <div className="ourfeaturecomp1">
            <div className="ourfeaturecomp1-img">
              <img src={feature_img} alt="Feature 1" />
            </div>
            <div className="ourfeaturecomp1-content">
              <div className="ourfeaturecomp1-content-heading">
                A Platform Devoting Time to Enhance the Listening Ability
              </div>
              <div className="ourfeaturecomp1-content-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                dolorum quo sint saepe dolorem totam consectetur pariatur labore
                tempore vitae, soluta, voluptatibus nulla reiciendis commodi
                mollitia recusandae voluptates non nisi. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Ad placeat veritatis quam
                esse tenetur facere perferendis reprehenderit quas itaque enim
                doloribus delectus, recusandae, a cumque saepe rem adipisci,
                sunt necessitatibus tempore accusamus dolorem eos. Nulla
                repellendus ad maiores cum magnam. doloribus delectus, recusandae, a cumque saepe rem adipisci,
                sunt necessitatibus tempore accusamus dolorem eos. Nulla
                repellendus ad maiores cum magnam.
              </div>
            </div>
          </div>

          <div className="ourfeaturecomp1">
            <div className="ourfeaturecomp1-img">
              <img src={feature_img} alt="Feature 2" />
            </div>
            <div className="ourfeaturecomp1-content">
              <div className="ourfeaturecomp1-content-heading">
                A Platform Devoting Time to Enhance the Listening Ability
              </div>
              <div className="ourfeaturecomp1-content-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                dolorum quo sint saepe dolorem totam consectetur pariatur labore
                tempore vitae, soluta, voluptatibus nulla reiciendis commodi
                mollitia recusandae voluptates non nisi. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Ad placeat veritatis quam
                esse tenetur facere perferendis reprehenderit quas itaque enim
                doloribus delectus, recusandae, a cumque saepe rem adipisci,
                sunt necessitatibus tempore accusamus dolorem eos. Nulla
                repellendus ad maiores cum magnam. doloribus delectus, recusandae, a cumque saepe rem adipisci,
                sunt necessitatibus tempore accusamus dolorem eos. Nulla
                repellendus ad maiores cum magnam.
              </div>
            </div>
          </div>

          <div className="ourfeaturecomp1">
            <div className="ourfeaturecomp1-img">
              <img src={feature_img} alt="Feature 3" />
            </div>
            <div className="ourfeaturecomp1-content">
              <div className="ourfeaturecomp1-content-heading">
                A Platform Devoting Time to Enhance the Listening Ability
              </div>
              <div className="ourfeaturecomp1-content-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                dolorum quo sint saepe dolorem totam consectetur pariatur labore
                tempore vitae, soluta, voluptatibus nulla reiciendis commodi
                mollitia recusandae voluptates non nisi. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Ad placeat veritatis quam
                esse tenetur facere perferendis reprehenderit quas itaque enim
                doloribus delectus, recusandae, a cumque saepe rem adipisci,
                sunt necessitatibus tempore accusamus dolorem eos. Nulla
                repellendus ad maiores cum magnam. doloribus delectus, recusandae, a cumque saepe rem adipisci,
                sunt necessitatibus tempore accusamus dolorem eos. Nulla
                repellendus ad maiores cum magnam.
              </div>
            </div>
          </div>

          <div className="ourfeaturecomp1">
            <div className="ourfeaturecomp1-img">
              <img src={feature_img} alt="Feature 4" />
            </div>
            <div className="ourfeaturecomp1-content">
              <div className="ourfeaturecomp1-content-heading">
                A Platform Devoting Time to Enhance the Listening Ability
              </div>
              <div className="ourfeaturecomp1-content-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                dolorum quo sint saepe dolorem totam consectetur pariatur labore
                tempore vitae, soluta, voluptatibus nulla reiciendis commodi
                mollitia recusandae voluptates non nisi. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Ad placeat veritatis quam
                esse tenetur facere perferendis reprehenderit quas itaque enim
                doloribus delectus, recusandae, a cumque saepe rem adipisci,
                sunt necessitatibus tempore accusamus dolorem eos. Nulla
                repellendus ad maiores cum magnam. doloribus delectus, recusandae, a cumque saepe rem adipisci,
                sunt necessitatibus tempore accusamus dolorem eos. Nulla
                repellendus ad maiores cum magnam.
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Features;
