import styled from "styled-components";

export const ContainerMenu = styled.nav`

  ul{
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
  }

  li {
    margin-left: 10px;
    margin-right: 10px;
  }

  a {
    text-decoration: none;
    color: #7d8792;
    font-size: 1.5rem;
    cursor: pointer;
    transition-duration: 1s;

    &:hover {
      color: #ffffff;
      transition-duration: 1s;
    }
  }
  
  @media (max-width: 620px) {
    li {
      margin: 5px;
    }

    a {
      text-decoration: underline;

      &:hover {
        color: #7d8792;
      }
    }
  }
`;
