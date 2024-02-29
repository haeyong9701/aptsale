import React from "react";
import { Styled } from "./style";

const Header = () => {
  return (
    <>
      <Styled.Header>
        <div className="header-container">
          <Styled.Link to="/">
            <div className="title">
              <img src="images/logo1.png" alt="더샵신문그리니티" />
            </div>
          </Styled.Link>
          <div className="title-sub">
            <a href="tel:16889427">
              <div className="title-sub-name">대표 문의</div>
              <div>1688-9427</div>
            </a>
          </div>
        </div>
      </Styled.Header>

      <Styled.MenuBar>
        <div className="menu-container">
          {/* <Styled.Link to="//">
            <div className="menu">사업안내</div>
          </Styled.Link> */}
          <Styled.Link to="/sub2">
            <div className="menu">단지안내</div>
          </Styled.Link>
          <Styled.Link to="/sub3">
            <div className="menu">입지분석</div>
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
