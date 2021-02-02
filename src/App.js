
import { useState } from 'react';
import './App.css';
import {Msg} from './msg';
function App() {
  let [count,setCounter] = useState(0);
  let [isEvening, setEvening] = useState(false);
  return (
    <div className={`test ${isEvening ? 'evening' : ''}`}>
      <Msg counter={count} eveningCheck={isEvening} />
        <button onClick={()=>setCounter(++count)} >Update counter</button>
        <button onClick={()=>setEvening(!isEvening)} >Update Day</button>
    </div>
  );
}
export default App;
