//React stuff
import React, { useEffect, useState, Component } from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from  'react-router-dom'
//Auth Provider
import {AuthProvider} from './Signin/context/AuthContext'
//Firebase
import db, {auth} from "./Signin/firebase";
//Privater Router
import PrivateRoute from './PrivateRoute'
//Pages Or Component
import ForgotPass from './pages/forgotpass';
import Settings from './pages/settings';
import Agenda from './pages/agenda';
import Drive from './pages/drive';
import dashboardPage from './pages/dashboard';
import Home from './pages/index';
import SigninPage from './pages/signin';
import Login from './pages/login'
import PageNotFound from "./PageNotFound/PageNotFound";
// import NotesNewPages from "./pages/note";

// import db from "./Signin/firebase";
// import { auth, firebase } from "./Signin/firebase";
// import { setUser } from "./Messaging/actions/userAction";
// import SidebarHome from "./Messaging/SidebarChat/SidebarHome";
// import Chat from "./Messaging/Chat/Chat";
// import { ToastContainer } from "react-toastify";
// import { toastInfo } from "./Messaging/shared/toastInfo";
// import Hidden from "@material-ui/core/Hidden";
// import CircularProgress from "@material-ui/core/CircularProgress";
// import LinearProgress from "@material-ui/core/LinearProgress";
// import "react-toastify/dist/ReactToastify.css";



export const App = () => {
  return (
    <Router>
    <AuthProvider>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signup' component={SigninPage} exact/>
        <Route path='/login' component={Login} exact/>
        <Route path='/forgot-password' component={ForgotPass} exact/>
        <PrivateRoute path='/dashboard' component={dashboardPage} />
        <PrivateRoute path='/update-profile' component={Settings} />
        <PrivateRoute path='/agenda' component={Agenda} />
        {/* <PrivateRoute path='/notes' component={NotesNewPages} /> */}
        <PrivateRoute path='/drive' component={Drive} />
        <PrivateRoute path='/folder/:folderId' component={Drive} />
        <Route component={PageNotFound}/>
      </Switch>
      </AuthProvider>
      </Router>
  );
  
}