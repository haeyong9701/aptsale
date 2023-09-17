import React from "react";
import { Styled } from "./style";
import { Header, Footer, Sidebar } from "../../components";

const Mainpage = () => {
  return (
    <>
      <Header />
      <Styled.Body>
        <div className="image-container">
          <img src="images/main00.png" alt="메인페이지로고00" />
          <img src="images/main01.png" alt="메인페이지로고01" />
          <img src="images/main02.png" alt="메인페이지로고02" />
          <img src="images/info01.png" alt="메인페이지로고03" />
          <img src="images/type01.png" alt="메인페이지로고04" />
          <img src="images/locate01.png" alt="메인페이지로고05" />
          <img src="images/locate02.png" alt="메인페이지로고06" />
        </div>
      </Styled.Body>
      <Sidebar />
      <Footer />
    </>
  );
};

export default Mainpage;
