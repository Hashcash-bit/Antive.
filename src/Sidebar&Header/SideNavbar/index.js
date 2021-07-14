import React, { useState } from "react";
import {
  Nav,
  NavIcon,
  SidebarNav,
  SidebarWrap,
  NavLogo,
  ProfileEmail,
  EmailShown,
  NavIconPfp,
  LogoutBtnWrapper,
  LogoutRoute,
  ErrorMSG
} from "./SideElements";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SideMenu";
import { IconContext } from "react-icons/lib";
import { useAuth } from "../../Signin/context/AuthContext";
import { useHistory } from "react-router-dom";
import "./SideNavBar.css";

const SideNavBar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <Nav>
        <IconContext.Provider value={{ color: "#fff" }}>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
        </IconContext.Provider>
        <NavLogo to="/dashboard">Notify.</NavLogo>
        <ErrorMSG>
          {error && <div className="errordashboard">{error}</div>}
        </ErrorMSG>
        <IconContext.Provider value={{ color: "#FF7C5D" }}>
          <NavIconPfp>
            <CgProfile />
          </NavIconPfp>
        </IconContext.Provider>
        <ProfileEmail>
          <EmailShown>{currentUser.email}</EmailShown>
        </ProfileEmail>
      </Nav>
      <IconContext.Provider value={{ color: "#fff" }}>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
            <LogoutBtnWrapper>
              <LogoutRoute onClick={handleLogout}>
                <logoutIcon>
                  <BiLogOut />
                </logoutIcon>
                Log Out
              </LogoutRoute>
            </LogoutBtnWrapper>
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default SideNavBar;
