import "../node_modules/bootstrap/dist/css/bootstrap.css"
import './App.css';
import Main from "./Main";
import Navfun from "./Nanfun";

function App() {
  return (
    <header>
    <div className="container d-flex justify-content-between"> 
      <div className="d-flex ">
        <h5>AboutUs |</h5>
        <h5>My Account |</h5>
        <h5>Wishlist |</h5>
        <h5>Order Tracking</h5>
      </div>
      <div>
        <p>Get great devices up to 50% off <span>view details</span></p>
      </div>
      <div className="d-flex">
       <h5> Need Help? call us<span> 1000 9000</span> | </h5>
       <h5> 
        <select>
          <option>English</option>
          <option>Hindi</option>
          <option>Gujrati</option>
        </select>
         | </h5>
         <h5>USD |</h5>
      </div>
    </div>
    <Navfun/>
    <Main/>
    </header>
  );
}

export default App;
