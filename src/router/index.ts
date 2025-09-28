import App from "../App";
import Home from "../pages/Home";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter ([
    {
        path: "/",
        Component: App,
        children: [
            {
                path: "/",
                Component: Home
            }
        ]
    }
])

export default router;