import React from "react";
import { Styled } from "./style";
import { Header, Footer, Sidebar } from "../../components";
import { useState } from "react";
import { useEffect } from "react";

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
                <img className="main-logo" src="images/mainlogo.jpeg" alt="메인페이지로고00" />
                <img className="x-box" src="images/x-box.png" alt="x-box" />
              </div>
              <div className="main-description" onClick={handleImageClick}>
                예약 방문시<span>&nbsp;특별 사은품 증정</span>
              </div>
            </>
          )}
          <img src="images/main00.png" alt="메인페이지로고00" />
          <img src="images/info02.png" alt="메인페이지로고00" />
          <img src="images/info03.png" alt="메인페이지로고00" />
          <img src="images/main01.png" alt="메인페이지로고01" />
          <img src="images/main02.png" alt="메인페이지로고02" />
          <img src="images/main03.png" alt="메인페이지로고03" />
          <img src="images/main04.png" alt="메인페이지로고04" />
          <img src="images/main05.png" alt="메인페이지로고05" />
          <img src="images/sub01.png" alt="메인페이지로고05" />
          <img src="images/sub02.png" alt="메인페이지로고05" />
          <img src="images/sub03.png" alt="메인페이지로고05" />
          <img src="images/sub04.png" alt="메인페이지로고05" />
        </div>
      </Styled.Body>
      <Sidebar />
      <Footer />
    </>
  );
};

export default Mainpage;
