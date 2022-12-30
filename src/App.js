import './App.css';
import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoutes';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/dashboard" element={<ProtectedRoute component={Dashboard} />} />
      <Route exact path="/models" element={<ProtectedRoute component={Models} />} />
      <Route exact path="/logs" element={<ProtectedRoute component={Logs} />} />
    </Routes>
  );
}

const Home = () => <h1>HOME</h1>
const Dashboard = () => <h1>DASHBOARD</h1>
const Models = () => <h1>Models</h1>
const Logs = () => <h1>Logs</h1>

export default App;
