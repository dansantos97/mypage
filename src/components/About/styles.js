import styled from "styled-components";
import bannerImg from "../../assets/img/banner.jpg"

export const AboutContainer = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${bannerImg});
  background-position: center;
  background-size: cover;
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

  div {
    z-index: 10;
  }

  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  div {
    display: flex;
    padding-left: 15px;
    img {
      animation: fadeIn 3s ease-in-out;
      max-width: 500px;
      border-radius: 4px;
      @media (max-width: 1100px) {
        display: none;
      }
    }
  }

  h2 {
    color: #dfa70c;
    text-align: center;
  }

  p {
    color: #ededed;
    line-height: 1.5rem;
    text-align: justify;
  }

  div.Text{
    display: flex;
    flex-direction: column;
    padding: 15px;
    animation: fadeIn 3s ease-in-out;
  }
`;
