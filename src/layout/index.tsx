import { Outlet } from "react-router";
import { Header } from "../components/header";

export function Layout() {
    return (
        <div className="flex min-h-screen w-full ">
            <Header />
            <Outlet />
        </div>
    )
}