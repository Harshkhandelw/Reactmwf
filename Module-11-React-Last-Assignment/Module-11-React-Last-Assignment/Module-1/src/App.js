import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import { Plus,Minus } from './Reducer';
function App() {
  const a = useSelector(state=> state.x.z)
  const dispatch = useDispatch()
  function increment(){
     dispatch(Plus({y : 1}))
  }
  function decrememt(){
    dispatch(Minus({y : 1}))
  }
  return (   
    <>
    <h1 className='f1'>Hello redux</h1>
    <p className='f2'>{a}</p>
    <div className='d-flex'>
    <button onClick={increment} className='btn'>+</button>
    <button onClick={decrememt} className='btn'>-</button>
    </div>
    </>
  );
}

export default App;
