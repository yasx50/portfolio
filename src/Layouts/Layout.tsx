import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import MUIProvider from "../theme/ThemeProvider" // Import our MUI provider

const Layout = () => {
    return (
        <MUIProvider>
            <main className="mx-auto relative h-full">
                <Navbar />
                <Outlet />
            </main>
        </MUIProvider>
    )
}

export default Layout