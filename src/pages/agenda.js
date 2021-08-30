import React from "react";
import { ContentAgenda } from "../Agenda/components/layout/Content";
import { HeaderAgenda } from "../Agenda/components/layout/HeaderAgenda";
import { SidebarAgenda } from "../Agenda/components/layout/SidebarAgenda";
import { ProjectsProvider, SelectedProjectProvider } from "../Agenda/context";
import OfficialNav from "../OfficialNavbar/OfficialNav";
import SideNavBar from "../Sidebar&Header/SideNavbar";

const Agenda = () => {
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <div>
          {/* <SideNavBar /> */}
          <OfficialNav />
          <HeaderAgenda />
          <ContentAgenda />
        </div>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
};

export default Agenda;
