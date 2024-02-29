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
      position: fixed;
      width: 400px;
      cursor: pointer;
    }

    .main-logo {
      width: 100%;
      object-fit: cover;
    }

    .x-box {
      position: absolute;
      top: 0;
      right: 0;
      width: 35px;
      height: 35px;
    }

    .main-image {
      padding: 15px 0px;
      max-width: 1070px;
      width: 100vw;
      object-fit: cover;
    }

    .main-description {
      position: absolute;
      left: 0;
      bottom: 140px;
      color: white;
      font-weight: 600;
      cursor: pointer;
      font-size: 1.8rem;
      background-color: #001241;
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
        margin-top: 30px;
        width: 300px;
      }

      .main-description {
        width: 300px;
        bottom: 110px;
      }

      .x-box {
        width: 28px;
        height: 28px;
      }

      @media screen and (max-width: 375px) {
        .main-logo-box {
          margin-top: 0px;
          width: 250px;
        }

        .main-description {
          width: 250px;
          bottom: 90px;
          font-size: 1.6rem;
        }
      }
    }
  `,
};
