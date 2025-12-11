import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Legends from './Pages/Legends';
import Navbar from './Components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
      </div>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/legends' element={<Legends />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
