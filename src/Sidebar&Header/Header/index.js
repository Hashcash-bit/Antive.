import "./HeaderComponent.css";
import { BiCog, BiCaretDown } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useAuth } from "../../Signin/context/AuthContext";
import React, { useState, useEffect, useRef } from "react";

function HeaderComponent() {
  return (
    <NavbarComponent>
      <NavItem icon={<BiCaretDown />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </NavbarComponent>
  );
}

function NavbarComponent(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);
  const { currentUser } = useAuth();

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <div className="menu">
        <DropdownItem>{currentUser.email}</DropdownItem>
        <Link to="/update-profile">
          <DropdownItem leftIcon={<BiCog />}>Settings</DropdownItem>
        </Link>
      </div>
    </div>
  );
}

export default HeaderComponent;
