import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {incNumber, decNumber} from "./action/index"

function App() {
  const myState = useSelector((state) => state.incdec);
  const dispatch = useDispatch();
  return (
    <>
    <div className='body'>
      <h1>Simple Redux App</h1>
      <div className="main">
        <button className="dec" onClick={()=>dispatch(decNumber())}>-</button>
        <div className='display'>{myState}</div>
        <button className="inc" onClick={()=>dispatch(incNumber())}>+</button>
      </div>
    </div>

    </>
  );
}

export default App;
