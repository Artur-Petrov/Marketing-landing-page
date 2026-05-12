import Header from "./layouts/header/Header.tsx";
import Hero from "./components/sections/Hero.tsx";
import Toggle from "./components/uiKit/toggle/Toggle.tsx";
import {useState} from "react";


function App() {
    const [toggle, setToggle] = useState("Monthly");
  return (
    <>
        <Header/>
        <Hero/>
        <Toggle leftOption={"Monthly"} rightOption={"Yearly"} activeOption={toggle} onChange={setToggle}/>
    </>
  )
}

export default App
