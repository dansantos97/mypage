import styled, { createGlobalStyle } from "styled-components";
import bannerImg from "./assets/img/banner.jpg";

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #1e1e1e;
  }

  *{
    box-sizing: border-box;
  }

`;

export const Container = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${bannerImg});
  background-position: center;
  background-size: cover;
  text-align: center;
  position: relative;

  &:after{
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(46, 46, 46, 0.8);
  }
`;

export default GlobalStyle;
