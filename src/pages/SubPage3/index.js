import React from "react";
import { Header, Footer, Sidebar } from "../../components";
import { Styled } from "./style";

const Subpage3 = () => {
  return (
    <>
      <Header />
      <Styled.Body>
        <div className="image-container">
          <img src="images/locate01.png" alt="메인페이지로고04" />
          <img src="images/locate02.png" alt="메인페이지로고04" />
          <img src="images/locate03.png" alt="메인페이지로고04" />
          <img src="images/locate04.png" alt="메인페이지로고04" />
        </div>
      </Styled.Body>
      <Sidebar />
      <Footer />
    </>
  );
};

export default Subpage3;
