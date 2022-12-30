import './App.css';
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ProtectedRoute from './components/ProtectedRoutes';


import Signup from './pages/auth/Signup';
import Signin from './pages/auth/Signin';

const Home = () => <h1>HOME</h1>
const Dashboard = () => <h1>DASHBOARD</h1>
const Models = () => <h1>Models</h1>
const Logs = () => <h1>Logs</h1>

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route exact path="/" element={<Signup />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/dashboard" element={<ProtectedRoute component={Dashboard} />} />
        <Route exact path="/models" element={<ProtectedRoute component={Models} />} />
        <Route exact path="/logs" element={<ProtectedRoute component={Logs} />} />
      </Routes>
    </>
  );
}

export default App;
