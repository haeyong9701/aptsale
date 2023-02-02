import React from "react";
import { Header, Footer, Sidebar } from "../../components";
import { Styled } from "./style";

const Subpage5 = () => {
  return (
    <>
      <Header />
      <Styled.Body>
        <div className="image-container">
          <img src="images/type01.png" alt="타입형01" />
          <img src="images/type02.png" alt="타입형02" />
          <img src="images/type03.png" alt="타입형03" />
          <img src="images/type04.png" alt="타입형04" />
          <img src="images/type05.png" alt="타입형05" />
          <img src="images/type06.png" alt="타입형06" />
        </div>
      </Styled.Body>
      <Sidebar />
      <Footer />
    </>
  );
};

export default Subpage5;
