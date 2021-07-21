import React, {useState} from "react";
import PropTypes from 'prop-types';
import { CgProfile } from "react-icons/cg";
import { IconContext } from "react-icons/lib";
import {
  Searchbar
} from "./AgendaElements.js";
import { AddTask } from "../AddTask";
import { firebase } from "../../../Signin/firebase";

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

        <Searchbar>
        <input className='Searchbar' type='text' placeholder='Search Your Projects/Tasks' />
        </Searchbar>

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
