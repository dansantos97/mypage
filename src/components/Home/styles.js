import styled from "styled-components";

export const HomeText = styled.div`
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  z-index: 10;
  animation: fadeIn 2s ease-in-out;

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
`;
