import {NavLink} from "react-router-dom";

import {
    House,
    NotebookPen,
    SquareCheckBig,
    CalendarDays,
    Settings,
    type LucideIcon,
} from "lucide-react";

function BottomNavigation(){
    type Menu={
        name:string;
        path:string;
        icon:LucideIcon;
    };

    const menus:Menu[]=[
        {
            name:"Home",
            path:"/",
            icon:House,
        },
        {
            name:"Memo",
            path:"/memo",
            icon:NotebookPen,
        },
        {
            name:"Todo",
            path:"/todo",
            icon:SquareCheckBig,
        },
        {
            name:"Calendar",
            path:"/calendar",
            icon:CalendarDays,
        },
        {
            name:"Settings",
            path:"/settings",
            icon:Settings,
        },
    ];

    return(
        <nav className="sticky bottom-0 flex h-20 border-t bg-white">
            {menus.map((menu)=>{
                const Icon=menu.icon;

                return (
                    <NavLink
                        key={menu.name}
                        to={menu.path}
                        className={({isActive})=>
                            `flex flex-1 flex-col items-center justify-center gap-2 text-sm ${
                                isActive
                                ?"text-blue-600"
                                :"text-gray-500"
                            }`
                        }
                    >
                        <Icon size={24}/>
                        <span>{menu.name}</span>
                </NavLink>
                );
            })}
        </nav>
    );
}

export default BottomNavigation;