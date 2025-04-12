import React, { createContext, useContext, useState } from "react";
const themeContext = createContext();
const userContext = createContext();

function WelcomePanel() {
    const [theme, setTheme] = useState("light");
    const [user, setUser] = useState("");
    return (
      <>
        <Welcome>
          <themeContext.Provider value={theme}>
            <userContext.Provider value={{user,setUser}}>
              <Panel title={"Hello"}>
                <Loginform />
              </Panel>
            </userContext.Provider>
          </themeContext.Provider>
        </Welcome>
        <input
          type="checkbox"
          onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
        />{" "}
        {theme}
      </>
    );
  }


  function Panel({ children, title }) {
    const {user} = useContext(userContext);
    console.log(user)
  const theme = useContext(themeContext);
  const test = "panel-" + theme;
//   console.log(theme); 
  return (
    <>
      <section className={test}>
        <h1>{title} {user.fullname}</h1>
        {children}
      </section>
    </>
  );
}

function Welcome({ children }) {
    return <>{children}</>;
  }


function Loginform() {
    const {setUser} = useContext(userContext);
const[fname,setFname]=useState("")
const[lname,setLname]=useState("")
const canLogin = fname === "" || lname === "";
//   console.log(canLogin);

  return (
    <div>
        <div>
           Firstname:{" "}
           <input type="text"
           value={fname}
           onChange={(e)=>{
            setFname(e.target.value)
           }}
           />
           Lastname:{""}
           <input type="text"
           value={lname}
           onChange={(e)=>{
            setLname(e.target.value)
           }} />
        </div>
        <div>
        {/* <button>Login</button> */}
        <Button disabled={canLogin} onclick={()=>{
            setUser({
                fullname:fname + " " +lname
            })
        }}>
            Login
        </Button>
      </div>
    </div>
  )
}
function Button({ children, disabled, onclick }) {
    const theme = useContext(themeContext);
    const test = "panel-" + theme; //panel-dark
    // console.log(theme);
    return (
      <>
        <button onClick={onclick} className={test} disabled={disabled}>
          {children}
        </button>
      </>
    );
  }

export default WelcomePanel
