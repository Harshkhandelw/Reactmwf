import logo from './logo.svg';
import './App.css';

function App() {
  function Text(){
    let para = document.getElementById('Para')
    para.innerText =  `
    import React, { useState, useEffect } from 'react';
 
 function MyComponent() {
   const [count, setCount] = useState(0);
 
   useEffect(() => {
     // Runs after the component mounts and updates
     document.title = You clicked &{count} times;
 
     return () => {
       // Cleanup: runs before the component unmounts and before executing the next effect
       console.log('Cleanup');
     };
   }, [count]); // Only re-run the effect if count changes
 
   return (
     <div>
       <p>You clicked {count} times</p>
       <button onClick={() => setCount(count + 1)}>Click me</button>
     </div>
   );
 }
 
    `
  }
  Text();
 
  return (
    <>
      <h2>Q. Explain Life cycle in Class Component and functional component with Hooks</h2>
      <h3>
        Ans:-
      </h3>
      <p>
        In React, the lifecycle of a component refers to the different phases it goes through from its creation to its destruction. Understanding these phases is crucial for managing state, side effects, and ensuring efficient rendering.
      </p>
      <h3>Class Component Lifecycle</h3>
      <p>
        Class components in React have several lifecycle methods that you can override to run code at particular times in the process.
      </p>
      <ol>
        <li><span className='Font-1'>Mounting</span><span> When a component is being created and inserted into the DOM.</span>
          <ul>
            <li>static getDerivedStateFromProps(props, state): Sync state with props. Rarely used.
            </li>
            <li>componentDidMount(): Invoked once the component is inserted into the DOM. Ideal for fetching data.</li>
          </ul>
        </li>
        <li><span className='Font-1'>Updating</span><span>  When a component's state or props change.</span>
          <ul>
            <li>shouldComponentUpdate(nextProps, nextState): Determines if the component should re-render. Useful for performance optimization.
            </li>
            <li>render(): Renders the component. Pure function, should not cause side effects.</li>
            <li>componentDidUpdate(prevProps, prevState, snapshot): Invoked immediately after updating. Perfect for performing DOM operations or making network requests.</li>
          </ul>
        </li>
        <li><span className='Font-1'>Unmounting:</span><span>  When a component is being removed from the DOM</span>
          <ul>
            <li>componentWillUnmount(): Cleanup tasks such as invalidating timers, canceling network requests, or cleaning up subscriptions.
            </li>
          </ul>
        </li>
      </ol>
      <h3>
        Functional Component Lifecycle with Hooks:-
      </h3>
      <p>
        Functional components use hooks to manage state and side effects. The primary hooks related to lifecycle management are useState, useEffect, and useRef.
      </p>
      <ol>
        <li><span className='Font-1'>Mounting and Updating</span>
          <ul>
            <li>useState(): Manages state within a functional component.
            </li>
            <li>useEffect(callback, [dependencies]): Runs side effects. It combines componentDidMount, componentDidUpdate, and componentWillUnmount</li>
          </ul>
        </li>

        <li><span className='Font-1'>Unmounting:</span>
          <ul>
            <li>Cleanup within useEffect: The cleanup function returned from useEffect mimics componentWillUnmount.</li>
          </ul>
        </li>
      </ol>
      <h2>
        For Eg:-
      </h2>
      <p id='Para'>
          
      </p>
    </>
  );
}

export default App;