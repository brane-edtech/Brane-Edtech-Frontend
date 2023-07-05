import React from "react";
import AI from "../../assets/AI.png"
import ConceptLearning from "../../assets/ConceptLearning.png";
import VoicebasedPlatform from "../../assets/VoicebasedPlatform.png";

const Ourproject = () => {

  const imageData = [
    {
      imageSrc: AI,
      imageAlt: "Image 1",
      heading: "Fully AI Powered Personalized Education",
      caption: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum mollitia voluptatem ea debitis provident blanditiis repellat culpa repudiandae consectetur laudantium consequuntur aliquid, corrupti soluta commodi. Magnam dolores explicabo eligendi fugit.",
    },

    {
      imageSrc: VoicebasedPlatform,
      imageAlt: "Image 2",
      heading: "Worlds First Voice Based Interactive Learning Platform",
      caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nemo non corrupti adipisci, placeat sit veritatis debitis quo corporis eaque sapiente, temporibus distinctio iure illum! Praesentium dolorem dignissimos enim obcaecati.",
    },

    {
      imageSrc: ConceptLearning,
      imageAlt: "Image 3",
      heading: "Concept Based Learning We Include Life Concepts Too",
      caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus recusandae neque quia odit veritatis culpa, eveniet, quibusdam laudantium alias ipsam error laboriosam accusantium excepturi unde, fuga expedita porro! Voluptatibus, at.",
    },

  ];

  return (
    <div className="OurProject__Div">
      <h1 className="OurProject__Div__heading">Our Projects</h1>
      <div className="OurProject__Div__container">
        {imageData.map((image, index) => (
          <div className="OurProject__Div__container__imageContainer" key={index}>
            <img src={image.imageSrc} alt={image.imageAlt} className="OurProject__Div__container__imageContainer-image" />
            <h2 className="OurProject__Div__container__imageContainer-heading">{image.heading}</h2>
            <p className="OurProject__Div__container__imageContainer-caption">{image.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};




export default Ourproject;