import React,{Component} from 'react';
import Home from './Components/Home';
import LoginOwner from './Components/LoginOwner'
import ForgotPassword from './Components/ForgotPassword'
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginStudent from './Components/LoginStudent';
import SignupStudent from './Components/SignupStudent';
import SignupOwner from './Components/SignupOwner';
import Landing from './Components/Landing';
import AddProduct from './Components/AddProduct';
import ShowProduct from './Components/ShowProduct';
import EditProduct from './Components/EditProduct';
import StudentLanding from './Components/StudentLanding';
import ShowProductStudent from './Components/ShowProductStudent';
import Contact from './Components/Contact';
import ContactStudent from './Components/ContactStudent';
import ConfirmRoom from './Components/ConfirmRoom';
import Paypal from './Components/Paypal';
import ForgotPasswordStudent from './Components/ForgotPasswordStudent'
import PrivateRoute from "./Components/PrivateRoute";
import UpdateProfileOwner from "./Components/UpdateProfileOwner";
import UpdateProfileStudent from "./Components/UpdateProfileStudent";

class App extends Component{
  
  render(){
  return (
    <div>
      <Router>
      <AuthProvider>
      <Switch>
          <Route  path="/" component={Home} exact />{""}
          <PrivateRoute path="/update-profile-owner" component={UpdateProfileOwner} />
          <PrivateRoute path="/update-profile-student" component={UpdateProfileStudent} />
          <Route  path="/LoginOwner" component={LoginOwner} exact />{""}
          <Route  path="/LoginStudent" component={LoginStudent} exact />{""}
          <Route  path="/SignupStudent" component={SignupStudent} exact />{""}
          <Route  path="/SignupOwner" component={SignupOwner} exact />{""}
          <Route  path="/Landing" component={Landing} exact />{""}
          <Route  path="/AddProduct" component={AddProduct} exact />{""}
          <Route path="/show/:id" component={ShowProduct} />
          <Route path="/edit/:id" component={EditProduct} />
          <Route path="/StudentLanding" component={StudentLanding}/>
          <Route path="/ShowProductStudent/:id" component={ShowProductStudent} />
          <Route path="/Contact" component={Contact}/>
          <Route path="/ContactStudent" component={ContactStudent}/>
          <Route path="/ConfirmRoom/:id" component={ConfirmRoom}/>
          <Route path="/Paypal/:id" component={Paypal}/>
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/forgot-password-student" component={ForgotPasswordStudent} />
      </Switch>{" "}
      </AuthProvider>
    </Router>
    </div>
  );
}}

export default App;
