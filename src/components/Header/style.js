import styled from "styled-components";
import { Link } from "react-router-dom";

export const Styled = {
  Header: styled.div`
    display: flex;
    justify-content: center;
    min-height: 150px;
    background-color: #1a5153;

    .header-container {
      width: 1070px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    .title > img {
      width: 95%;
      height: 95%;
    }

    .title-sub {
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 260px;
      width: 80vw;
      height: 12vh;
      border-radius: 7px;
      background-color: #1a5153;
      border: 2px solid white;
      font-size: 2rem;
      @media screen and (max-width: 900px) {
        font-size: 4.5vw;
        margin: 0px 20px;
      }
      @media screen and (max-width: 300px) {
        width: 100vw;
      }
    }

    a {
      text-decoration: none;
      color: white;
      text-align: center;
    }
  `,

  MenuBar: styled.div`
    display: flex;
    justify-content: space-around;
    height: 55px;
    background-color: #1a5153;
    border-top: 2px solid white;

    .menu-container {
      width: 1070px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    .menu {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      color: white;
      font-weight: 500;
      font-size: 1.5rem;
      max-width: 250px;
      /* width: 16vw; */
      /* height: 55px; */
      /* transition: all 0.4s; */

      :hover {
        color: #c8c8c8;
        /* transition: all 0.4s; */
      }
      @media screen and (max-width: 800px) {
        font-size: 1rem;
      }
    }
  `,

  Link: styled(Link)`
    text-decoration: none;

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
    }
  `,
};
