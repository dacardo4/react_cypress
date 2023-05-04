import styled from "styled-components";
const waveRight = `${process.env.REACT_APP_STORAGE_ZAIA_RESOURCES}/zaiaDecorators/curva-pequena-botton-violeta.svg`;

export const LoginDiv = styled.div`
  display: flex;
  height: 100svh;
  .login__right {
    background-color: ${({theme}) => theme.background};
    flex: 0.5;
    overflow: auto;
    background-image: url(${waveRight});
    background-repeat: no-repeat;
    background-position: bottom;
    background-position-y: 110%;
  }

  @media only screen and (max-width: 768px) {
    .login__right {
      flex: 1;
      background-position-y: 100%;
    }
  }
`;
