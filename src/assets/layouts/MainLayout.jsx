import { Outlet } from "react-router"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

function MainLayout() {
    return (
        <>
            <div className="md:container w-full px-[1rem]">
                <Header />
                <main>
                    <Outlet />
                </main>
            </div>
            <Footer />
        </>
    )
}

export default MainLayout
