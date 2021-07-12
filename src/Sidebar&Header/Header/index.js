import React, {useState} from "react";
import { Nav, NavLink, NavBtn, NavBtnLink, NavLogo, NavIcon } from "./HeaderElements";
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

const HeaderNav = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <Nav>
      <IconContext.Provider value={{ color: '#fff' }}>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
        </IconContext.Provider>
        <NavLogo to="/">Notify</NavLogo>

        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default HeaderNav;
