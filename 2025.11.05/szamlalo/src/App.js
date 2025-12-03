import './App.css';
import BlueBox from './BlueBox';
import RedBox from './RedBox';
import Counter2 from './Counter2';
import Counter1 from './Counter1';
import { useState } from 'react';

function App() {
  const [kounter1, setKounter1] = useState(0);
  const [kounter2, setKounter2] = useState(0);

  return (
    <div className="App">
      <BlueBox counter1={kounter1} />
      <Counter1 counter1={kounter1} setKounter1={setKounter1} />
      <RedBox counter2={kounter2} />
      <Counter2 setKounter2={setKounter2} />
    </div>
  );
}

export default App;
