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

    @media screen and (max-width: 700px) {
      .main-logo-box {
        margin-left: 50px;
        width: 300px;
        height: 500px;
      }

      .x-box {
        right: 35px;
        width: 13%;
        height: 13%;
      }
    }
  `,
};
