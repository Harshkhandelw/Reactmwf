import View from './View';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Home';
import Edit from './Data';
function App() {
  return (
  <> 
     <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/Add/:Id' element={<Edit></Edit>}></Route>
          <Route path='/Update/:Id' element={<Edit></Edit>}></Route>
          <Route path='/View/:id' element={<View></View>}></Route>
        </Routes>
        </BrowserRouter>
     </div>
  </>
  );
}

export default App;
