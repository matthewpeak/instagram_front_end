
import './App.css';
import SignUpForm from './components/SignUpForm'
import UserInterface from './components/UserInterface';
import UploadImage from './components/UploadImage'
import NavBar from './components/NavBar';
import Login from './components/LogIn';
import { Fragment } from 'react';
function App() {
  return (
  <Fragment>
    {/* <Login/> */}
   {/* <NavBar/>
   <SignUpForm/> */}
   <UserInterface/>
  {/* // <UploadImage></UploadImage> */}
  </Fragment>
  );
}

export default App;
