import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";
import Home from "./Home";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AddNewUser from "./AddNewUser";

function App() {
  const xyz = useSelector((state) => state.x);
  console.log(xyz);
  return (
    <div className="App">
      
     <BrowserRouter>
     <Link to="/">Home</Link>
     <Routes>
      <Route path="/" element={ <Home />}></Route>
      <Route path="/add-user" element={ <AddNewUser />}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
