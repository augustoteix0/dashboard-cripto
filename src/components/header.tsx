import { NavLink } from "react-router";

export function Header() {
    return(
        <div className="bg-zinc-900 p-4 h-screen">
            <div className="flex flex-col font-bold text-lg p">
                <NavLink to="/">Dashboard</NavLink>
                <NavLink to="/converter">Converter</NavLink>
                <NavLink to="/historico">Historico</NavLink>
            </div>     
        </div>
    )
}