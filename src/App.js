import './App.css';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'
import Home from './pages/index';
import SigninPage from './pages/signin';
import {AuthProvider} from './Signin/context/AuthContext'
import login from './pages/login'
import dashboardPage from './pages/dashboard'
// import Dashboard from './Dashboard/dashboard';
// import Login from './Login/Login';
// import Form from './Signin'
// import {RemoveScrollBar} from 'react-remove-scroll-bar';

function App() {
  return (
    
    <Router>
      <AuthProvider>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signup' component={SigninPage} exact/>
        <Route path='/login' component={login} exact/>
        <Route path='/dashboard' component={dashboardPage} exact/>
      </Switch>
      </AuthProvider>
    </Router>
    
  );
}

export default App;