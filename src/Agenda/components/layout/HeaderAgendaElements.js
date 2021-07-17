import styled from "styled-components";

export const ProfileEmailAgenda = styled.div`
  //   margin-left: 100vh;
  //   float: right;
  //   padding: 10px 20px;
  //   border-radius: 20px;
  //   background-color: #ff7c5d;
  font-weight: bold;
  letter-spacing: 1.5px;
  margin-top: 7px;
  margin-right: 20px;
  position: absolute;
  right: 0;
  @media screen and (max-width: 1287px) {
    background-color: transparent;
  }
`;

export const NavIconPfpAgenda = styled.div`
  display: none;

  @media screen and (max-width: 1287px) {
    display: block;
    top: -1px;
    position: absolute;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.25rem;
    background: transparent;
  }

  @media screen and (max-width: 1040px) {
    display: none;
  }
`;

export const EmailShownAgenda = styled.p`
  display: flex;
  align-items: center;
  background: transparent;
  font-size: 15px;
  @media screen and (max-width: 1287px) {
    display: none;
  }
`;
