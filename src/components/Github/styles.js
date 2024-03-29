import styled from "styled-components";

export const ContentGithub = styled.div`
   @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  z-index: 10;
  animation: fadeIn 2s ease-in-out;
  padding-top: 2rem;
  max-width: 1200px;
  width: 100%
  margin: 0 auto;
  display: flex;

  h2 {
    text-align: center;
    color: #dfa70c;
  }

  @media (max-width: 620px) {
    animation: none;
  }
`;

export const Items = styled.div`
  display: flex;
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

    @media (max-width: 620px) {
      margin-top: -20px;
    }
  }

  h3 {
    color: #fff;
    }
  h4 {
    color: #dfa70c;
  }
  p {
    color: #fff;
  }

  @media (max-width: 620px) {
    img {
      max-width: 150px;
    }
  }
`;

export const List = styled.div`
  width: 50vw;

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
    animation: slidein 1s;
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

    @media (max-width: 620px) {
      p {
        display: none;
      }
      margin-left: 15px;
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

    @media (max-width: 620px) {
      margin-top: 5px;
    }
  }
`;
