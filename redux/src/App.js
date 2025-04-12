
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { dec, inc, reset } from './action'

function App() {
  const xyz = useSelector(state => state.count)
  const dispatch = useDispatch()
  return (
    <>
      <div className="App">
        {xyz}
      </div>
      <div>
        <button onClick={() => dispatch(dec())}>-</button>
        <button onClick={() => dispatch(inc())}>+</button>
        <button onClick={() => dispatch(reset())}>reset</button>
      </div>
    </>
  );
}

export default App;
