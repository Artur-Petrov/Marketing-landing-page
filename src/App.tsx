import Toggle from "./components/uiKit/toggle/Toggle.tsx";
import {useState} from "react";
import CustomLink from "./components/uiKit/customLink/CustomLink.tsx";

function App() {
    const [toggle, setToggle] = useState("Monthly");
  return (
    <>
        <Toggle leftOption={'Monthly'} rightOption={'Annually'} activeOption={toggle} onChange={setToggle}/>
        <CustomLink disabled={false} href={'#'}>Hello</CustomLink>
        <CustomLink disabled={true} href={'#'}>Hello</CustomLink>
        <CustomLink disabled={false} href={'#'}>Hello</CustomLink>
    </>
  )
}

export default App
