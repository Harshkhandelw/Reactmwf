import logo from './logo.svg';
import './App.css';
import React from 'react';
import AnimatioCompo from './AnimatioCompo';

// import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Home123 = React.lazy(()=>import('./Home'))


function App() {
  return (
    <div className="App">
<BrowserRouter>
<Routes>
  <Route path='/' element={<React.Suspense fallback={<>
         <AnimatioCompo/>
        </>}>
        <Home123></Home123>
      </React.Suspense>}></Route>
</Routes>
</BrowserRouter>

      {/* { <Home/> }
      { <React.Suspense fallback={<>"compo" sdf *^& 9798 IMAGE TAG</>}>
        <Home123></Home123>
      </React.Suspense> }
        { <React.Suspense fallback={<>
          <img src='https://i.pinimg.com/originals/d0/57/cd/d057cd033dd03114c745059d679ac2e4.gif' height={100}></img>
        </>}>
        <Home123></Home123>
      </React.Suspense> } */}

       {/* <React.Suspense fallback={<>
         <AnimatioCompo/>
        </>}>
        <Home123></Home123>
      </React.Suspense> */}

    
    </div>
  );
}

export default App;
