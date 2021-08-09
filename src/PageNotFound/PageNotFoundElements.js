import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";
import { BsArrowLeftShort, BsArrowBarLeft } from "react-icons/bs";
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";

export const ArrowForwardError = styled(BsArrowBarLeft)`
  //   margin-left: 8px;
  font-size: 20px;
  background: transparent;
  vertical-align: center;
`;
export const ArrowRightError = styled(BsArrowLeftShort)`
  //   margin-left: 8px;
  font-size: 20px;
  background: transparent;
  vertical-align: center;
`;

export const NavLogoError = styled(LinkR)`
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

export const NavbarContainerError = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
  background: transparent;
`;
