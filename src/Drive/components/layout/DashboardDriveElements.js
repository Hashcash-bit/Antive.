import styled from "styled-components";

export const MenuItemsBtn = styled.div`
  display: flex;
  width: 100%;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const DriveTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 6px;
  margin-left: 4.1rem;
  border-bottom: 2px solid #081225;
  width: auto;

  &:hover {
    // color: #081225;
    border-color: white;
    cursor: default;
    transition: all 0.5s ease-in-out;
  }
`;

export const DriveTextWrapper = styled.div`
  margin-top: 2rem;
`;

export const DriveIconWrapper = styled.div`
  margin-top: 2rem;
`;
