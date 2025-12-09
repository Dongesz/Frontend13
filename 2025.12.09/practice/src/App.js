import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Books from './Pages/Books';
import { useState } from 'react';


function App() {
  const [color, setcolor] = useState("#ffffff")
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/books' element={<Books color={color} setcolor={setcolor} />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
