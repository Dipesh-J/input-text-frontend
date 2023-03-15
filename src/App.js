import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarForApp from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import { SignUp } from "./components/signUp/SignUp";
import Login from "./components/login/Login";
import { InputBox } from './components/input-box/InputBox';

function App() {
  return (
    <Router>
      <NavbarForApp />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route path="/inputbox">
          <InputBox/>
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
