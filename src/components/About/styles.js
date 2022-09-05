import styled from "styled-components";

export const AboutText = styled.div`
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  z-index: 10;
  display: flex;
  padding-left: 15px;

  @media (max-width: 620px) {
    padding-left: 5px;
  }

  img {
    animation: fadeIn 3s ease-in-out;
    max-width: 500px;
    border-radius: 4px;

    @media (max-width: 1100px) {
        display: none;
      }
    }

  h2 {
    color: #dfa70c;
    text-align: center;

    @media (max-width: 620px) {
      margin-bottom: 0px;
      margin-top: 0px;
    }
  }

  p {
    color: #ededed;
    line-height: 1.5rem;
    text-align: justify;

    @media(max-width: 620px) {
      line-height: 15px;
      margin-bottom: 0;
    }
  }

  div.Text{
    display: flex;
    flex-direction: column;
    padding: 15px;
    animation: fadeIn 2s ease-in-out;
  }
`;
