import React from "react";
import { Styled } from "./style";

const Footer = () => {
  return (
    <>
      <Styled.Footer>
        <div className="title">창원 롯데캐슬 하버팰리스</div>
        <div className="sub-title">
          대표번호 : <span className="phone-number">1688-1206</span>
        </div>
      </Styled.Footer>
    </>
  );
};

export default Footer;
