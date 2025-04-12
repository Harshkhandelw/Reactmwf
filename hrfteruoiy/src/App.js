import logo from './logo.svg';
import './App.css';
import { BrowserRouter, NavLink, Route,Routes } from 'react-router-dom';
import About from './About';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavLink to={'/'} style={(active)=>({
          "color" :active? "green" : "red"
        })}>Home</NavLink >
          <NavLink to={'/about'} style={(active)=>({
          "color" :active? "green" : "red"
        })}>About</NavLink >
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/about' element={<About />}></Route>
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
