import './App.css';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'
import Home from './pages/index';
import SigninPage from './pages/signin';
import {AuthProvider} from './Signin/context/AuthContext'
import login from './pages/login'
import dashboardPage from './pages/dashboard'
import PrivateRoute from './PrivateRoute'
import ForgotPass from './pages/forgotpass'
import Settings from './pages/settings'
import Agenda from './pages/agenda'
import NoteTaking from './Notes/index'
import {HeaderAgenda} from './Agenda/components/layout/HeaderAgenda'
// import Dashboard from './Dashboard/dashboard';
// import Login from './Login/Login';
// import Form from './Signin'
// import {RemoveScrollBar} from 'react-remove-scroll-bar';
// import UpdateProfile from './UpdateProfile/index';

export const App = () => {
  return (
    <Router>
      <AuthProvider>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signup' component={SigninPage} exact/>
        <Route path='/login' component={login} exact/>
        <PrivateRoute path='/dashboard' component={dashboardPage} exact/>
        <PrivateRoute path='/update-profile' component={Settings} exact/>
        <PrivateRoute path='/agenda' component={Agenda} exact/>
        <PrivateRoute path='/notes' component={NoteTaking} exact/>
        <Route path='/forgot-password' component={ForgotPass} exact/>
      </Switch>
      </AuthProvider>
    </Router>
    
  );
}