import React from "react";
import { Styled } from "./style";

const Header = () => {
  return (
    <>
      <Styled.Link to="/">
        <Styled.Header>
          <div className="header-container">
            <div className="title">
              <img src="images/lottecastle.png" alt="김해진영삼정그린코아" />
            </div>
            <div className="title-sub">모델하우스 1688-1206</div>
          </div>
        </Styled.Header>
      </Styled.Link>

      <Styled.MenuBar>
        <div className="menu-container">
          {/* <Styled.Link to="//">
            <div className="menu">사업안내</div>
          </Styled.Link> */}
          <Styled.Link to="/sub2">
            <div className="menu">브랜드</div>
          </Styled.Link>
          <Styled.Link to="/sub3">
            <div className="menu">위치정보</div>
          </Styled.Link>
          {/* <Styled.Link to="/sub4">
            <div className="menu">청약일정</div>
          </Styled.Link> */}
          <Styled.Link to="/sub5">
            <div className="menu">타입안내</div>
          </Styled.Link>
        </div>
      </Styled.MenuBar>
    </>
  );
};

export default Header;
