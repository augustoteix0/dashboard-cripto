import { NavLink } from "react-router";

export function Header() {
    return(
        <div className="sticky top-0 h-screen w-64 bg-zinc-900 border-r border-zinc-800 p-6 shrink-0">
            <div className="flex flex-col font-bold text-lg p">
                <NavLink to="/">Dashboard</NavLink>
                <NavLink to="/converter">Converter</NavLink>
            </div>     
        </div>
    )
}