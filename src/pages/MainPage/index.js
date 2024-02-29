import React from "react";
import { Styled } from "./style";
import { Header, Footer, Sidebar } from "../../components";
import { useState } from "react";

const Mainpage = () => {
  const [on, setOn] = useState(true);

  const handleImageClick = () => {
    setOn(false);
  };

  return (
    <>
      <Header />
      <Styled.Body>
        <div className="image-container">
          {on && (
            <>
              <div className="main-logo-box" onClick={handleImageClick}>
                <img className="main-logo" src="images/popup.png" alt="팝업" />
                <img className="x-box" src="images/x-box.png" alt="x-box" />
                {/* <div className="main-description" onClick={handleImageClick}>
                  24시간 대표콜센터<span>&nbsp;1688-9427</span>
                </div> */}
              </div>
            </>
          )}
          <img className="main-image" src="images/main00.png" alt="메인페이지설명" />
          <img className="main-image" src="images/info02.png" alt="메인페이지설명" />
          <img className="main-image" src="images/info03.png" alt="메인페이지설명" />
          <img className="main-image" src="images/info01.png" alt="메인페이지설명" />
        </div>
      </Styled.Body>
      <Sidebar />
      <Footer />
    </>
  );
};

export default Mainpage;
