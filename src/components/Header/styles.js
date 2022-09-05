import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 90px;
  width: 100%;
  background-color: #1e1e1e;
  display: flex;
`;

export const Container = styled.div`
  width:100%;
  margin: 0 auto;
  padding: 20px 15px;
  display: flex;
  justify-content: end;
  align-items: center;

  @media (max-width: 620px) {
    justify-content: center;
  }
`;
