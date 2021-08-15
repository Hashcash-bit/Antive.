import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    width: 100vw;
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; 
    font-weight: 300;
    background: #FAFAFA;
    overflow-x: hidden;
    font-family: 'Montserrat', sans-serif;

    a {
      color: inherit;
      text-decoration: none;
    }

    @media (max-width: 450px) {
      background: #fafafa;
    }
  }
`;

export const ParentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  position: relative;
`;

export const LoaderContainer = styled(ParentContainer)`
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

export default GlobalStyle;
