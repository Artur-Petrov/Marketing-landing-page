import Toggle from "./components/uiKit/toggle/Toggle.tsx";
import {useState} from "react";

function App() {
    const [toggle, setToggle] = useState("Monthly");
  return (
    <>
        <Toggle leftOption={'Monthly'} rightOption={'Annually'} activeOption={toggle} onChange={setToggle}/>
    </>
  )
}

export default App
