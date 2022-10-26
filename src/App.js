
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import HeaderNav from './components/HeaderNav';
import GymAtHome from './components/GymAtHome';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Detail from './components/Detail';
import MyPlan from './components/MyPlan';

function App() {
  return (
    <div className="App">
      < HeaderNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gymathome' element={< GymAtHome />} />
        <Route path='/gymathome/detail' element={< Detail />} />
        <Route path='/signup' element={< SignUp />} />
        <Route path='/login' element={< Login />} />
        <Route path='/myplan' element={< MyPlan />} />


      </Routes>

    </div>
  );
}

export default App;
