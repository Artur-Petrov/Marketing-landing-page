import {createRoot} from 'react-dom/client'
import './global.css'
import './styles/reset.css'
import {RouterProvider} from "react-router-dom";
import {routes} from "./Router.tsx";

createRoot(document.getElementById('root')!)
    .render(<RouterProvider router={routes}/>)