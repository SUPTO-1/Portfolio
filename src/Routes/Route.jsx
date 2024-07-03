import { createBrowserRouter } from "react-router-dom";
import Loader from "../Loader/Loader";

const routes = createBrowserRouter([
    {
        path:'/',
        element:<Loader></Loader>
    },

])
export default routes;