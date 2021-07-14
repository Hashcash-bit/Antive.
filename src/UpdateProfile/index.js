import React from "react";
import {LeftFormUP} from './UpdateElemets'
import "./updateprofile.css";
import UpdatePf from "./updatePf";
import updatePFsvg from "./image/updatePF.svg";
import { Link } from "react-router-dom";

export default function UpdateProfile() {
  return (
    <div className="UpdatePage">
      <div className="form-containerU">
        {/* <LeftFormUP> */}
          <div className="form-content-leftU">
            <Link to="/dashboard">
              <span className="logobtnU">Notify.</span>
            </Link>
            <p className="subtextoneU">Online Student Management Tool</p>
            <img className="form-imgU" src={updatePFsvg} alt="update" />
          </div>
        {/* </LeftFormUP> */}
        <UpdatePf />
      </div>
    </div>
  );
}
