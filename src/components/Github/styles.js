import styled from "styled-components";
import bannerImg from "../../assets/img/banner.jpg"

export const GithubContainer = styled.div`
  height: 80vh;
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
`;

export const ContentGithub = styled.div`
   @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  animation: fadeIn 2s;
  padding-top: 2rem;
  max-width: 1200px;
  width: 100%
  display: flex;
  margin: 0 auto;

  h2 {
    text-align: center;
    color: #dfa70c;
  }
`;

export const Items = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Foto = styled.div`
  width: 100%;
  max-width: calc(250px + 4rem);
  border-radius: 50%;
  text-align: center;
  img {
    border-radius: 50%;
    width: 100%;
    max-width: 250px;
    height: 100%;
  }

  h3 {
    color: #fff;
    }
  }
  h4 {
    color: #dfa70c;
  }
  p {
    color: #fff;
  }
`;

export const List = styled.div`
  width: 100%;

  @keyframes slidein {
    from {
      margin-left: 100%;
      width: 300%
    }
    to {
      margin-left: 0%;
      width: 100%;
    }
}

  div {
    animation: slidein 2s;
    width: 90%;
    border-radius: 10px;
    background-color: rgba(238, 238, 238, 0.5);
    padding: 0.5rem 1rem;
    margin-bottom: 2rem;
    margin-left: 20px;

    a {
      color: #282c2c;
    }

    &:hover {
      background-color: rgba(238, 238, 238, 0.9);
    }
  }
`;

export const ButtonDefault = styled.button`
  background-color: transparent;
  border: none;

  a, button {
    max-width: 150px;
    width: 100%;
    border: solid 1px #eeeeee;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: #eeeeee;
    background-color: #dfa70c;
    border-radius: 40px;
    font-size: 1rem;
    padding: 12px 15px;
    margin-bottom: 1rem;
    margin-top: 2rem;
    cursor: pointer;
    transition-duration: 1s;
    text-decoration: none;

    &:hover {
      border: solid 1px #dfa70c;
      background-color: transparent;
      color: #dfa70c;
    }
  }
`;
