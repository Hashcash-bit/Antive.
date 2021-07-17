import React, {useState} from "react";
import PropTypes from 'prop-types';
import { CgDarkMode } from "react-icons/cg";
import { CgProfile } from "react-icons/cg";
import { IconContext } from "react-icons/lib";
import { useAuth } from "../../../Signin/context/AuthContext";
import {
  ProfileEmailAgenda,
  EmailShownAgenda,
  NavIconPfpAgenda,
} from "./HeaderAgendaElements.js";
import { AddTask } from "../AddTask";

export const HeaderAgenda = ({ darkMode, setDarkMode }) => {
  const [shouldShowMain, setShouldShowMain] = useState(false);
  const [showQuickAddTask, setShowQuickAddTask] = useState(false);
  const { currentUser, logout } = useAuth();

  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          {/* <img src="/image/logo.png" alt="Agenda" /> */}
          Agenda
        </div>
        <div className="settings">
          <ul>
            <li className="settings__add">
              <button
                data-testid="quick-add-task-action"
                aria-label="Quick add task"
                type="button"
                onClick={() => {
                  setShowQuickAddTask(true);
                  setShouldShowMain(true);
                }}
              >
                +
              </button>
            </li>
            <li className="settings__darkmode">
              <button
                data-testid="dark-mode-action"
                aria-label="Darkmode on/off"
                type="button"
                onClick={() => setDarkMode(!darkMode)}
              >
                <CgDarkMode />
              </button>
            </li>

            <IconContext.Provider value={{ color: "#FF7C5D" }}>
              <NavIconPfpAgenda>
                <CgProfile />
              </NavIconPfpAgenda>
            </IconContext.Provider>
            <ProfileEmailAgenda>
              <EmailShownAgenda>{currentUser.email}</EmailShownAgenda>
            </ProfileEmailAgenda>
          </ul>
        </div>
      </nav>

      <AddTask
        showAddTaskMain={false}
        shouldShowMain={shouldShowMain}
        showQuickAddTask={showQuickAddTask}
        setShowQuickAddTask={setShowQuickAddTask}
      />
    </header>
  );
};

HeaderAgenda.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};
