import React from "react";
import { Header, Footer, Sidebar } from "../../components";
import { Styled } from "./style";

const Subpage5 = () => {
  return (
    <>
      <Header />
      <Styled.Body>
        <div className="image-container">
          <img src="images/info03.png" alt="메인페이지로고01" />
        </div>
      </Styled.Body>
      <Sidebar />
      <Footer />
    </>
  );
};

export default Subpage5;
