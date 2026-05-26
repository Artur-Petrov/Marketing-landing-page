import Header from "./layouts/header/Header.tsx";
import Hero from "./components/sections/Hero/Hero.tsx";
import Logos from "./components/sections/scroll_logos/Logos.tsx";
// import Toggle from "./components/uiKit/toggle/Toggle.tsx";
// import {useState} from "react";


function App() {
    // const [toggle, setToggle] = useState("Monthly");
  return (
    <>
        <Header/>
        <main>
            <Hero/>
            {/*<Toggle leftOption={"Monthly"} rightOption={"Yearly"} activeOption={toggle} onChange={setToggle}/>*/}

            <Logos/>
        </main>

    </>
  )
}

export default App
