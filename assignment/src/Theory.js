import React from 'react'
import Listview from './List'
import Increament from './Incremant'

function Theory() {
    return (
        <div>
            <h1>What is React Js?</h1>
            <p>
                Ans:- React is a javaScript library for building user interfaces on the web.
                which optimizes rendering performance by minimizing DOM updates.React is created by Facebook.
            </p>
            <br />
            <h1>What is NPM in React Js? </h1>
            <p>
                Ans:- The NPM command it  used to download JavaScript packages from Node Package Manager.
            </p>
            <br />
            <h1>What is Role of Node Js in react Js? </h1>
            <p>
                Ans:- React renders UI components on the frontend, while Node. js manages server-side data communication
            </p>
            <br />
            <h1>What is CLI command In React Js?</h1>
            <p>
                Ans:- React has its own command-line interface (CLI) commands. However, these CLI commands are currently only used to create a passable version of a react application using the command line.
            </p>
            <br />
            <h1>What is Components in React Js? </h1>
            <p>
                Ans:- Components are indepandent and reusable bites of code.
            </p>
            <br />
            <h1>What is Header and Content Components in React Js? </h1>
            <p>
                Ans:-  A header is a section at the top of a page that displays site name and navigation. React is the most popular frontend library for developing component-driven user interfaces.
            </p>
            <br/>
            <h1>How to install React Js on Windows, linux Operating System? How to install NPM and How to check version of NPM? </h1>
            <p>
                Ans:- First install node js in Windows from its official site. you need to open cmd and type "NPM create-react-app and app name"
                that how NPM install. for check version you need run this command in cmd "create-react-app --version" 
            </p>
            <br/>
            <h1>How to check version of React Js? </h1>
            <p>
                Ans:- npm view react version using this command
            </p>
            <h1>How to change in components of React Js? </h1>
            <p>
                Ans:-you want the state of two components to always change together. To do it, remove state from both of them, move it to their closest common parent, and then pass it down to them via props.
            </p>
            <h1>How to Create a List View in React Js? </h1>
            <p> Ans:-
            <Listview/>
            </p>
            <h1>Create Increment decrement state change by button click? </h1>
            <p>
                Ans:- <Increament/>
            </p>
        </div>
    )
}

export default Theory
