import { Outlet, useLocation } from "react-router-dom";

import TopAppBar from "../components/layout/TopAppBar";
import BottomNavigation from "../components/layout/BottomNavigation";
import FloatingActionButton from "../components/home/FloatingActionButton";


function MainLayout() {

    const location=useLocation();

    const showFab = [
        "/",
        "/memo",
        "/todo",
    ].includes(location.pathname);

    return (
        <div
            className="
                relative
                mx-auto
                flex
                h-[100dvh]
                max-w-[390px]
                flex-col
                overflow-hidden
                bg-gray-50
                shadow-xl
            "
        >
            <TopAppBar />

            <main className="flex-1 overflow-y-auto">
                <Outlet />
            </main>

            {showFab && <FloatingActionButton />}

            <BottomNavigation />
        </div>
    );
}

export default MainLayout;