
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';

import HeaderNav from './components/HeaderNav'
import GymAtHome from './components/GymAtHome';
import SignUp from './components/SignUp';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      < HeaderNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gymathome' element={< GymAtHome />} />
        <Route path='/signup' element={< SignUp />} />
        <Route path='/login' element={< Login />} />

      </Routes>

    </div>
  );
}

export default App;
