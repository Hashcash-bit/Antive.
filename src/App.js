import React, { useEffect, useState } from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from  'react-router-dom'
import Home from './pages/index';
import SigninPage from './pages/signin';
import {AuthProvider} from './Signin/context/AuthContext'
import Login from './pages/login'
import dashboardPage from './pages/dashboard'
import PrivateRoute from './PrivateRoute'
import ForgotPass from './pages/forgotpass'
import Settings from './pages/settings'
import Agenda from './pages/agenda'
import NoteTaking from './Notes/index'
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
        <PrivateRoute path='/dashboard' component={dashboardPage} exact/>
        <PrivateRoute path='/update-profile' component={Settings} exact/>
        <PrivateRoute path='/agenda' component={Agenda} exact/>
        <PrivateRoute path='/notes' component={NoteTaking} exact/>
        {/* <PrivateRoute path='/message' component={MessagingFunction} exact/> */}
      </Switch>
      </AuthProvider>
      </Router>
  );
}