import { Outlet } from "react-router"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import ScrollTopButton from "../components/ScrollTopButton/ScrollTopButton"

function MainLayout() {
    return (
        <>
            <div className="lg:container w-full px-[1rem] relative">
                <ScrollTopButton />
                <Header />
                    <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default MainLayout
