import { Outlet } from "react-router"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

function MainLayout() {
    return (
        <>
            <div className="lg:container w-full px-[1rem]">
                <Header />
                    <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default MainLayout
