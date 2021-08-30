import React, { useRef, useState, useEffect } from "react";

import axios from "axios";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";

import { useAuth } from "../../Signin/context/AuthContext";

import { auth } from "../../Signin/firebase";
import SideNavBar from "../../Sidebar&Header/SideNavbar";
import OfficialNav from "../../OfficialNavbar/OfficialNav";

export default function Chats() {
  const didMountRef = useRef(false);
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const { currentUser } = useAuth();

  async function getFile(url) {
    let response = await fetch(url);
    let data = await response.blob();
    return new File([data], "test.jpg", { type: "image/jpeg" });
  }

  useEffect(() => {
    if (!currentUser || currentUser === null) {
      history.push("/");
      return;
    }

    var axiosnew = require("axios");
    var data = {
      username: currentUser.email,
      secret: currentUser.uid,
    };

    var config = {
      method: "post",
      url: "https://api.chatengine.io/users/",
      headers: {
        "PRIVATE-KEY": "6efea3f7-0e00-47bd-a720-ebf19039cfc9",
      },
      data: data,
    };

    axiosnew(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

    // Get-or-Create should be in a Firebase Function
    axios
      .get("https://api.chatengine.io/users/me/", {
        headers: {
          "project-id": "d3236bb5-7cde-475b-88c0-e5b434f93ac2",
          "user-name": currentUser.email,
          "user-secret": currentUser.uid,
        },
      })

      .then(() => setLoading(false))

      .catch((e) => {
        let formdata = new FormData();
        formdata.append("username", currentUser.email);
        formdata.append("secret", currentUser.uid);

        getFile(currentUser.photoURL).then((avatar) => {
          formdata.append("avatar", avatar, avatar.name);

          axios
            .post("https://api.chatengine.io/users/", formdata, {
              headers: {
                "private-key": "6efea3f7-0e00-47bd-a720-ebf19039cfc9",
              },
            })
            .then(() => setLoading(false))
            .catch((e) => console.log("e", e.response));
        });
      });
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  }, [currentUser.email, history]);

  // if (!user || loading) return <div />

  return (
    <>
      <OfficialNav />
      <div className="chats-page">
        {/* <SideNavBar /> */}

        <ChatEngine
          height="calc(100vh - 66px)"
          projectID="d3236bb5-7cde-475b-88c0-e5b434f93ac2"
          userName={currentUser.email}
          userSecret={currentUser.uid}
        />
      </div>
    </>
  );
}
