import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.div`
  background: #1a1a1a;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const NavLogo = styled(Link)`
  color: #ff7c5d;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.75rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  background: transparent;
`;

export const ProfileEmail = styled.div`
  margin-left: 100vh;
  float: right;
  padding: 10px 20px;
  border-radius: 20px;
  background-color: #ff7c5d;
  font-weight: bold;
  letter-spacing: 1.5px;
  position: absolute;
  right: 0;
  margin-right: 10px;
  @media screen and (max-width: 768px) {
    background-color: transparent;
  }
`;

export const NavIconPfp = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.9rem;
    background: transparent;
  }
`;

export const EmailShown = styled.p`
  display: flex;
  align-items: center;
  background: transparent;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const LogoutBtnWrapper = styled.div`
  display: flex;
  justify-content: left;
  margin-top: 100px;

  @media screean and (max-height: 480px) {
    margin-top: 70px;
  }
`;
export const LogoutRoute = styled(Link)`
  border-radius: 0px 12px 12px 0px;
  background: #632ce4;
  white-space: nowrap;
  padding: 16px 64px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #3f8cff;
  }
`;

export const SidebarNav = styled.nav`
  background: #1a1a1a;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

export const SidebarWrap = styled.div`
  width: 100%;
`;

export const SidebarLink = styled(Link)`
  display: flex;
  color: #808191;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

export const SidebarLabel = styled.span`
  margin-left: 16px;
`;

export const DropdownLink = styled(Link)`
  background: #414757;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  &:hover {
    background: #632ce4;
    cursor: pointer;
  }
`;
