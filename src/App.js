import './App.css';
import NavbarMain from './Components/Home/Navbar/NavbarMain';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import AddService from './Components/Dashboard/AddService/AddService';
import MakeAdmin from './Components/Dashboard/MakeAdmin/MakeAdmin';
import Review from './Components/Dashboard/Review/Review';
import Order from './Components/Dashboard/Order/Order';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
export const userContext = createContext()

function App() {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    image:''
  })
  return (
    <div>
      <userContext.Provider value={[userDetails, setUserDetails]} >
        <Router>
          <NavbarMain></NavbarMain>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/logIn">
              <Login></Login>
            </Route>

            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/addService">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/makeAdmin">
              <MakeAdmin></MakeAdmin>
            </PrivateRoute>
            <PrivateRoute path="/review">
              <Review></Review>
            </PrivateRoute>
            <PrivateRoute path="/order">
              <Order></Order>
            </PrivateRoute>
          </Switch>
        </Router>
      </userContext.Provider>
    </div>
  );
}

export default App;
