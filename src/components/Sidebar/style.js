import styled from "styled-components";

export const Styled = {
  Bar: styled.div`
    position: fixed;
    bottom: 40%;
    right: 2%;
    width: 150px;
    height: 240px;
    font-size: 1.5rem;
    font-weight: 600;
    background-color: red;

    @media screen and (max-width: 770px) {
      display: flex;
      width: 300px;
      height: 80px;
      bottom: 0%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .icon {
      text-align: center;
    }

    .message {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 150px;
      height: 120px;
      background-color: #f88313;
    }

    .call {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 150px;
      height: 120px;
      background-color: #7e2ad8;
    }

    a {
      text-decoration: none;
      color: white;
    }
  `,
};
