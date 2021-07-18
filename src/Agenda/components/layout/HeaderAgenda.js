import React, {useState} from "react";
import PropTypes from 'prop-types';
import { CgDarkMode } from "react-icons/cg";
import { CgProfile } from "react-icons/cg";
import { IconContext } from "react-icons/lib";
import {
  ProfileEmailAgenda,
  EmailShownAgenda,
  NavIconPfpAgenda,
} from "./AgendaElements.js";
import { AddTask } from "../AddTask";

export const HeaderAgenda = ({ darkMode, setDarkMode }) => {
  const [shouldShowMain, setShouldShowMain] = useState(false);
  const [showQuickAddTask, setShowQuickAddTask] = useState(false);

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
                onKeyDown={() => {
                  setShowQuickAddTask(true);
                  setShouldShowMain(true);
                }}
              >
                +
              </button>
            </li>
            
            <IconContext.Provider value={{ color: "#FF7C5D" }}>
              <NavIconPfpAgenda>
                <CgProfile />
              </NavIconPfpAgenda>
            </IconContext.Provider>
          
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
