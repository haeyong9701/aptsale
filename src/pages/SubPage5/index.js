import React from "react";
import { Header, Footer, Sidebar } from "../../components";
import { Styled } from "./style";

const Subpage5 = () => {
  return (
    <>
      <Header />
      <Styled.Body>
        <div className="image-container">
          <img src="images/main01.png" alt="메인페이지로고01" />
          <img src="images/main02.png" alt="메인페이지로고02" />
          <img src="images/main03.png" alt="메인페이지로고03" />
          <img src="images/main04.png" alt="메인페이지로고04" />
          <img src="images/main05.png" alt="메인페이지로고05" />
        </div>
      </Styled.Body>
      <Sidebar />
      <Footer />
    </>
  );
};

export default Subpage5;
