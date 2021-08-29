//React Shit
import React, { useState } from "react";

//Styles
import "./dashboard.css";
import { CSSReset } from "@chakra-ui/css-reset";
import { HorLine, HorLine2 } from "./DriveElements";

//Components
import DriveDashPage from "./pages/DriveDashPage";
import TaskDashPage from "./pages/TaskDashPage";
import BudgetDashPage from "./pages/BudgetDashPage";

export default function Dashboard() {
  return (
    <>
      <div className="DashboardContainer">
        <div className="LeftSection">
          <div className="TopContainer">
            <div className="BudgetContainer">
              <h1 className="BudgetTitleText">Budget</h1>
              <BudgetDashPage />
            </div>
          </div>
          <HorLine />
          <div className="BottomContainer">
            <div className="DriveContainer">
              {/* <h2>This is where the files will be!</h2> */}
              <DriveDashPage />
            </div>
          </div>
          <HorLine2 />
        </div>
        <div className='HorLine2' />
        <div className="RightSection">
          <div className="AgendaText">
            <h1 className="AgendaTitleText">Agenda</h1>
          </div>
          <div className="RightContainer">
            <div className="InboxContainer">
              <TaskDashPage />
            </div>
          </div>
        </div>
      </div>
    </>
    // <>
    //   <div className="DashboardContainer">
    //     <div className="TopSection">
    //       <div className="TopContainer">
    //         <div className="BudgetContainer">
    //           <h1 className="BudgetTitleText">Budget</h1>
    //           <BudgetDashPage />
    //         </div>
    //       </div>
    //       <div className="RightContainer">
    //         <div className="InboxContainer">
    //           {/* <h1 className="AgendaTitleText">Agenda</h1> */}
    //           <TaskDashPage />
    //         </div>
    //       </div>
    //     </div>
    //     <div className="BottomContainer">
    //       <div className="DriveContainer">
    //         {/* <h2>This is where the files will be!</h2> */}
    //         <DriveDashPage />
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
}
