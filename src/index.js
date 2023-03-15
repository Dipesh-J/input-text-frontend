import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { InputBox} from './components/input-box/InputBox';
// import Login from './components/login/Login';
// import { SignUp } from './components/signUp/SignUp';
// import NavbarForApp from './components/navbar/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <NavbarForApp/> */}
    {/* <SignUp/> */}
    {/* <Login/> */}
    <App />
    {/* <InputBox /> */}
  </React.StrictMode>
);
