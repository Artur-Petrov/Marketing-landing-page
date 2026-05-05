import Toggle from "./components/uiKit/toggle/Toggle.tsx";
import {useState} from "react";
import CustomLink from "./components/uiKit/customLink/CustomLink.tsx";
import IconButton from "./components/uiKit/iconButton/IconButton.tsx";


function App() {
    const [toggle, setToggle] = useState("Monthly");
  return (
    <>
        <Toggle leftOption={'Monthly'} rightOption={'Annually'} activeOption={toggle} onChange={setToggle}/>
        <CustomLink disabled={false} href={'#'}>Hello</CustomLink>
        <CustomLink disabled={true} href={'#'}>Hello</CustomLink>
        <CustomLink disabled={false} href={'#'}>Hello</CustomLink>


        <IconButton >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.75 4.44446H16.25V5.83335H3.75V4.44446ZM3.75 9.30557H16.25V10.6945H3.75V9.30557ZM3.75 14.1667H16.25V15.5556H3.75V14.1667Z" fill="currentColor"/>
            </svg>
        </IconButton>

        <IconButton disabled={true}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.75 4.44446H16.25V5.83335H3.75V4.44446ZM3.75 9.30557H16.25V10.6945H3.75V9.30557ZM3.75 14.1667H16.25V15.5556H3.75V14.1667Z" fill="currentColor"/>
            </svg>
        </IconButton>
    </>
  )
}

export default App
