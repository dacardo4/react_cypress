import styled from "styled-components";

export const RegisterDiv = styled.div`
  display: flex;
  height: 100svh;
  .register__right {
    flex: 0.5;
    .footer {
      position: relative;
      bottom: 0;
      width: 100%;
    }
  }

  @media only screen and (max-width: 768px) {
    .register__right {
      flex: 1;
      background-position-y: 100%;
    }
  }
`;

export const RegisterFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
