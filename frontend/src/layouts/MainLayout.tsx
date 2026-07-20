import { Outlet } from "react-router-dom";

function MainLayout(){
    return (
        <div className="flex min-h-screen flex-col">
            {/*Top App Bar*/}
            <header className="h-14 border-b flex items-center px-4">
                NoteFlow
            </header>

            {/*현재 페이지*/}
            <main className="flex-1">
                <Outlet />
            </main>

            {/*Bottom Navigation*/}
            <footer className="h-16 border-t flex items-center justify-center">
                Bottom Navigation
            </footer>
        </div>
    );
}

export default MainLayout;