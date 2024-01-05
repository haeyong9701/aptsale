import React from "react";
import { Styled } from "./style";

const Footer = () => {
  return (
    <>
      <Styled.Footer>
        <div className="title">김해 삼계 푸르지오 센트럴파크</div>
        <div className="sub-title">
          대표번호 <span className="phone-number">1688 - 9427</span>
        </div>
      </Styled.Footer>
    </>
  );
};

export default Footer;
