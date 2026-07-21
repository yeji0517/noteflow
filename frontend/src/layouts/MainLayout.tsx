import { Outlet } from "react-router-dom";

import TopAppBar from "../components/layout/TopAppBar";
import BottomNavigation from "../components/layout/BottomNavigation";

function MainLayout(){
    return (
        <div className="mx-auto flex min-h-screen max-w-[390px] flex-col bg-gray-50 shadow-lg">
            <TopAppBar/>

            {/*현재 페이지*/}
            <main className="flex-1 w-full max-w-md mx-auto p-4">
                <Outlet />
            </main>

            <BottomNavigation/>
        </div>
    );
}

export default MainLayout;