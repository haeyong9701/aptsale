import React from "react";
import { Header, Footer, Sidebar } from "../../components";
import { Styled } from "./style";

const Subpage3 = () => {
  return (
    <>
      <Header />
      <Styled.Body>
        <div className="image-container">
          <img src="images/info01.png" alt="입지분석01" />
        </div>
      </Styled.Body>
      <Sidebar />
      <Footer />
    </>
  );
};

export default Subpage3;
