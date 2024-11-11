import styled from "styled-components";
import { Link } from "react-router-dom";

export const Styled = {
  Screen: styled.div`
    background-image: url("images/main00.png");
    background-size: cover;
    height: 100vh;

    .description {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 30px;
      height: 60vh;

      .title {
        font-size: 2.3rem;
        font-weight: 800;
        color: #001241;

        @media screen and (max-width: 800px) {
          font-size: 1.7rem;
        }
      }
      .call-title {
        font-size: 1.4rem;
        font-weight: 700;
        color: #ff5b49;

        @media screen and (max-width: 800px) {
          font-size: 1.2rem;
        }
      }
      .call-button {
        font-size: 1.4rem;
        font-weight: 600;
        color: white;
        background-color: #16dd16;
        padding: 10px 20px;
        border-radius: 10px;
        text-decoration: none;
        cursor: pointer;

        @media screen and (max-width: 800px) {
          font-size: 1.2rem;
          padding: 8px 17px;
        }
      }
    }
  `,

  MenuBar: styled.div`
    display: flex;
    justify-content: space-around;
    height: 80px;
    border-bottom: 1px solid #001241;

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
      color: #001241;
      font-weight: 600;
      font-size: 1.5rem;
      max-width: 250px;

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
