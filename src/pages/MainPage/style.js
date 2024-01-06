import styled from "styled-components";

export const Styled = {
  Body: styled.div`
    display: flex;
    justify-content: center;
    min-height: 100vh;

    .image-container {
      display: flex;
      flex-direction: column;
    }

    .main-logo-box {
      cursor: pointer;
      display: flex;
      position: fixed;
      width: 400px;
      height: 600px;
      top: 10px;
    }

    .main-logo {
      width: 100%;
      object-fit: cover;
    }

    .x-box {
      position: relative;
      right: 33px;
      width: 10%;
      height: 10%;
    }

    img {
      padding: 15px 0px;
      max-width: 1070px;
      width: 100vw;
      object-fit: cover;
    }

    .main-description {
      position: fixed;
      bottom: 400px;
      color: white;
      font-weight: 600;
      cursor: pointer;
      font-size: 1.8rem;
      background-color: #5e5f97;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 400px;
      height: 50px;
      z-index: 1;
    }

    .main-description span {
      color: #fcf82c;
    }

    @media screen and (max-width: 700px) {
      .main-logo-box {
        margin-left: 50px;
        width: 300px;
        height: 500px;
      }

      .main-description {
        margin-left: 50px;
        width: 300px;
        bottom: 450px;
        font-size: 1.5rem;
      }

      .x-box {
        right: 35px;
        width: 13%;
        height: 13%;
      }
    }
  `,
};
