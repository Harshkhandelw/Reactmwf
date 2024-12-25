import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Home';
import Adduser from './Add';
function App() {
  return (
      <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}>  </Route>
        <Route path='/Add/:id' element={<Adduser></Adduser>}>  </Route>
      </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
