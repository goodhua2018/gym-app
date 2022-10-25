
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';

import HeaderNav from './components/HeaderNav'
import GymAtHome from './components/GymAtHome';

function App() {
  return (
    <div className="App">
      < HeaderNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gymathome' element={< GymAtHome />} />
      </Routes>

    </div>
  );
}

export default App;
