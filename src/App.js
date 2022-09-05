import logo from './logo.svg';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Need from './components/Need';
import LoggedIn from './components/LoggedIn';
import OTP from './components/OTP';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
   <div>
    <Routes>
    <Route exact path="/" element={<SignIn/>}></Route>
      <Route exact path="/SignIn" element={<SignIn/>}></Route>
      <Route exact path="/SignUp" element={<SignUp/>}></Route>
      <Route exact path="/OTP" element={<OTP/>}></Route>
      <Route exact path="/Need" element={<Need/>}></Route>
      <Route exact path="/LoggedIn" element={<LoggedIn/>}></Route>
      </Routes>
   </div>
   </Router>
  );
}

export default App;
