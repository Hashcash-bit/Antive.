import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as BsIcons from "react-icons/bs"


export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <RiIcons.RiDashboardFill />,
  },
  {
    title: "Agenda",
    path: "/agenda",
    icon: <IoIcons.IoIosPaper />,
  },
  {
    title: "Budget",
    path: "/budget",
    icon: <FaIcons.FaMoneyCheck />,
  },
  {
    title: "LandingPage",
    path: "/Landing",
    icon: <BsIcons.BsFillPeopleFill />,
  },
  {
    title: "Your Drive",
    path: "/drive",
    icon: <FaIcons.FaSave />,
  },
  {
    title: "Job Search",
    path: "/jobsearch",
    icon: <RiIcons.RiUserSearchFill />,
  },
  {
    title: "Settings",
    path: "/update-profile",
    icon: <IoIcons.IoIosSettings />,
  },

  
];
