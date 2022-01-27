import styled from "styled-components";
import bannerImg from "../../../assets/img/banner.jpg"

export const BannerContainer = styled.div`
  height: 80vh;
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

  div {
    z-index: 10;
    animation: fadeIn 3s ease-in-out;
    @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
   }
  }

  h2 {
    text-transform: uppercase;
    font-size: 1.2rem;
    color: #eeeeee;
    margin: 0;
    margin-bottom: 1rem;
  }
  h2.name {
    font-size: 1.5rem;
  }

  h1 {
    text-transform: uppercase;
    font-size: 2.8rem;
    color: #dfa70c;
    margin: 0;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: #eeeeee;
    margin: 0;
    margin-bottom: 1rem;
  }

  button {
    min-width: 150px;
    border: solid 1px #dfa70c;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #eeeeee;
    background-color: transparent;
    border-radius: 40px;
    font-size: 1rem;
    padding: 10px 15px;
    margin: 0 auto;
    margin-bottom: 1rem;
    margin-top: 2rem;
    cursor: pointer;
    transition-duration: 1s;

    &:hover {
      background-color: #dfa70c;
      border: solid 1px #eeeeee;
      transition-duration: 1s;
    }
  }
`;
