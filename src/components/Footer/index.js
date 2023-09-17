import React from "react";
import { Styled } from "./style";

const Footer = () => {
  return (
    <>
      <Styled.Footer>
        <div className="title">더샵 신문그리니티</div>
        <div className="sub-title">
          대표번호 <span className="phone-number">1688 - 9427</span>
        </div>
      </Styled.Footer>
    </>
  );
};

export default Footer;
