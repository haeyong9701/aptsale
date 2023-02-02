import React from "react";
import { Styled } from "./style";
import { Header, Footer, Sidebar } from "../../components";

const Mainpage = () => {
  return (
    <>
      <Header />
      <Styled.Body>
        <div className="image-container">
          <img src="images/main01.png" alt="메인페이지로고03" />
          <img src="images/main02.png" alt="메인페이지로고03" />
          <img src="images/main03.png" alt="메인페이지로고03" />
          <img src="images/main05.png" alt="메인페이지로고05" />
          <img src="images/main06.png" alt="메인페이지로고06" />
        </div>
      </Styled.Body>
      <Sidebar />
      <Footer />
    </>
  );
};

export default Mainpage;
