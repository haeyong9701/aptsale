import React from "react";
import { Styled } from "./style";

const Footer = () => {
  return (
    <>
      <Styled.Footer>
        <div className="info">
          <div>사업명: 김해 삼계 푸르지오 센트럴파크</div>
          <div>사이트 관리자: 조훈례</div>
          <div>사업지 주소: 경상남도 김해시 삼계동 1027-3번지 일원</div>
        </div>
        <div className="title">김해 삼계 푸르지오 센트럴파크</div>
        <div className="sub-title">
          대표번호 <span className="phone-number">1688 - 9427</span>
        </div>
      </Styled.Footer>
    </>
  );
};

export default Footer;
