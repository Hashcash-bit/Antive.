//React Shit
import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";

//All the svg files
import logoNav from "./assets/logo.svg";
import Home from "./assets/home-solid.svg";
import Team from "./assets/social.svg";
import Calender from "./assets/sceduled.svg";
import Projects from "./assets/starred.svg";
import Documents from "./assets/draft.svg";
import PowerOff from "./assets/power-off-solid.svg";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useAuth } from "../Signin/context/AuthContext";
import NewLogo from './assets/newlogo.png'

//Icons
import { FiLogOut } from "react-icons/fi";
import { IconContext } from "react-icons/lib";
import { ErrorMSG } from "../Sidebar&Header/SideNavbar/SideElements";
import { RiDashboardFill } from "react-icons/ri";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";


const Container = styled.div`
  position: fixed;
  .active {
    border-right: 4px solid white;
    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
`;

const Button = styled.button`
  background-color: black;
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &::before,
  &::after {
    content: "";
    background-color: white;
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
  }
  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const SidebarContainer = styled.div`
  background-color: black;
  width: 3.5rem;
  height: 80vh;
  margin-top: 1rem;
  border-radius: 0 30px 30px 0;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const Logo = styled.div`
  width: 2rem;
  img {
    width: 100%;
    height: auto;
  }
`;

const SlickBar = styled.ul`
  color: white;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  padding: 2rem 0;
  position: absolute;
  top: 6rem;
  left: 0;
  width: ${(props) => (props.clicked ? "12rem" : "3.5rem")};
  transition: all 0.5s ease;
  border-radius: 0 30px 30px 0;
`;

const Item = styled(NavLink)`
  text-decoration: none;
  color: white;
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;
  display: flex;
  padding-left: 1rem;
  &:hover {
    border-right: 4px solid white;
    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
  img {
    width: 1.2rem;
    height: auto;
    filter: invert(92%) sepia(4%) saturate(1033%) hue-rotate(169deg)
      brightness(78%) contrast(85%);
  }
`;

const Text = styled.span`
  width: ${(props) => (props.clicked ? "100%" : "0")};
  overflow: hidden;
  margin-left: ${(props) => (props.clicked ? "1.5rem" : "0")};
  transition: all 0.3s ease;
`;

const Profile = styled.div`
  width: ${(props) => (props.clicked ? "16rem" : "3rem")};
  height: 3rem;
  padding: 0.5rem 1rem;
  /* border: 2px solid var(--white); */
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${(props) => (props.clicked ? "9rem" : "0")};
  background-color: black;
  color: white;
  transition: all 0.3s ease;
  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      border: 2px solid white;
      padding: 2px;
    }
  }
`;

const Details = styled.div`
  display: ${(props) => (props.clicked ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.div`
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h4 {
    display: inline-block;
  }
  a {
    font-size: 0.8rem;
    text-decoration: none;
    color: grey;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Logout = styled.button`
  border: none;
  width: 2rem;
  height: 2rem;
  background-color: transparent;
  font-size: 20px;
  // gap: 10px;

    &:hover {
      border: none;
      cursor: pointer;
      padding: 0;
      opacity: 0.5;
    }
  }
`;

const OfficialNav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [profileClick, setprofileClick] = useState(false);
  const handleProfileClick = () => setprofileClick(!profileClick);
  const { logout } = useAuth();
  const { currentUser } = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();

  
  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
      window.location.reload(false);
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <Container>
      <Button clicked={click} onClick={() => handleClick()}>
        Click
      </Button>
      <SidebarContainer>
        <Logo>
          <img src={NewLogo} alt="logo" />
        </Logo>
        <SlickBar clicked={click}>
          <Item
            onClick={() => setClick(false)}
            exact
            activeClassName="active"
            to="/dashboard"
          >
            {/* <img src={Home} alt="Home" /> */}
            <RiDashboardFill />
            <Text clicked={click}>Dashboard</Text>
          </Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/agenda"
          >
            {/* <img src={Team} alt="Team" /> */}
            <IoIcons.IoIosPaper />
            <Text clicked={click}>Agenda</Text>
          </Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/budget"
          >
            {/* <img src={Calender} alt="Calender" /> */}
            <FaIcons.FaMoneyCheck />
            <Text clicked={click}>Budget</Text>
          </Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/drive"
          >
            {/* <img src={Documents} alt="Documents" /> */}
            <FaIcons.FaSave />
            <Text clicked={click}>Drive</Text>
          </Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/update-profile"
          >
            {/* <img src={Projects} alt="Projects" /> */}
            <IoIcons.IoIosSettings />
            <Text clicked={click}>Settings</Text>
          </Item>
        </SlickBar>

        <Profile clicked={profileClick}>
          <img
            onClick={() => handleProfileClick()}
            src="https://picsum.photos/200"
            alt="Profile"
          />
          <Details clicked={profileClick}>
            <Name>
              <h4>{currentUser.displayName || currentUser.email.substring(0, currentUser.email.lastIndexOf("@"))}</h4>
              {/* <Link to="/update-profile">
              <a>update&nbsp;profile</a>
              </ Link> */}
            </Name>

            <Logout onClick={handleLogout}>
              <IconContext.Provider value={{ color: "#fff" }}>
                {/* <img src={PowerOff} alt="logout" /> */}
                <FiLogOut />
              </IconContext.Provider>
            </Logout>
          </Details>
        </Profile>
      </SidebarContainer>
      <ErrorMSG>
          {error && <div className="errordashboard">{error}</div>}
      </ErrorMSG>
    </Container>
  );
};

export default OfficialNav;
