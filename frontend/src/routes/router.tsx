import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Memo from "../pages/Memo";
import Todo from "../pages/Todo";
import Calendar from "../pages/Calendar";
import Settings from "../pages/Settings";
import NoteEditor from "../pages/NoteEditor";
import TodoEditor from "../pages/TodoEditor";

const router=createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,

        children:[
            {
                index:true,
                element:<Home/>,
            },
            {
                path:"memo",
                element:<Memo/>,
            },
            {
                path:"memo/new",
                element:<NoteEditor/>,
            },
            {
                path:"todo",
                element:<Todo/>,
            },
            {
                path:"todo/new",
                element:<TodoEditor/>,
            },
            {
                path:"calendar",
                element:<Calendar/>,
            },
            {
                path:"settings",
                element:<Settings/>,
            },
        ],
    },
]);

export default router;