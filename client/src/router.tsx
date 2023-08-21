import Layout from "./components/Layout";
import Home from "./pages/Home";
import { createBrowserRouter } from "react-router-dom";
import MyMeetings from "./pages/MyMeetings";
import NewMeeting from "./pages/NewMeeting";
import MyProfile from "./pages/MyProfile";
import Register from "./pages/Register";
import Login from "./pages/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "", element: <Home /> },
            { path: "meetings", element: <MyMeetings /> },
            { path: "meetings/new", element: <NewMeeting /> },
            { path: "profile", element: <MyProfile /> },
            { path: "register", element: <Register /> },
            { path: "login", element: <Login /> },
        ],
    },
]);

export default router;
