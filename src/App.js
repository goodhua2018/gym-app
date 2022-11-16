
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GymAtHome from './pages/GymAtHome';
import SignUp from './components/SignUp';
import Login from './components/Login';
import MyPlan from './pages/MyPlan';
import Map from './pages/Map';
import Videos from './pages/Videos';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gymathome' element={< GymAtHome />} />
        <Route path='/signup' element={< SignUp />} />
        <Route path='/login' element={< Login />} />
        <Route path='/myplan' element={< MyPlan />} />
        <Route path='/gym' element={< Map />} />
        <Route path='/video' element={< Videos />} />
      </Routes>
    </div>
  );
}

export default App;
