import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";


export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "Agenda",
    path: "/agenda",
    icon: <IoIcons.IoIosPaper />,
  },
  {
    title: "Budget",
    path: "/products",
    icon: <FaIcons.FaCartPlus />,
  },
  {
    title: "CommunityTab",
    path: "/CommunityTab",
    icon: <IoIcons.IoMdPeople />,
  },
  {
    title: "Your Drive",
    path: "/drive",
    icon: <FaIcons.FaEnvelopeOpenText />,
  },
  {
    title: "Settings",
    path: "/update-profile",
    icon: <IoIcons.IoIosSettings />,
  },

  
];
