import { Route, Routes } from "react-router";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Converter } from "./pages/Converter";
import { Layout } from "./layout";

export function Router() {
    return(
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path="/" element={<Dashboard/>} />
                <Route path="/converter" element={<Converter/>} />
            </Route>
        </Routes>
    )
}