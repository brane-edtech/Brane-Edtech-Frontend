import React,{ useState } from "react";
import HomePageImage from "../../assets/HomePageImg.png";

const HomeChild1 = () => {

  const [expanded, setExpanded] = useState(false);

  const toggleReadMoreLess = () =>{
    setExpanded(!expanded)
  }

  return (
    <>
      <div className="Home__Div">
        <div className="Home__Div__Child1">
          <div className="Home__Div__Child1__title">
            <div>Brane</div>
            <div>Education</div>
            <div>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              {expanded && (
                <div>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </div>
              )}
            </div>
            <div>
              <button onClick={toggleReadMoreLess}>{expanded? "Read Less" : "Read More"} </button>
            </div>
          </div>
          <div className="Home__Div__Child1__image">
            <img src={HomePageImage} alt="Brane" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeChild1;
