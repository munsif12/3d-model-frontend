import './App.css';
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


import Signup from './pages/auth/Signup';
import Signin from './pages/auth/Signin';

function App() {
  return (
    <div className='App'>
      <ToastContainer />
      <Routes>
        <Route exact path="/" element={<Signup />} />
        <Route exact path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
