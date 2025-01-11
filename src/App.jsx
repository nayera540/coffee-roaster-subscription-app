import { BrowserRouter, Routes, Route } from "react-router"
import HomePage from "./assets/pages/HomePage/HomePage"
import AboutUsPage from "./assets/pages/AboutPage/AboutUsPage"
import PlanPage from "./assets/pages/PlanPage/PlanPage"
import MainLayout from "./assets/layouts/MainLayout"

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="about" element={<AboutUsPage />} />
                    <Route path="plan" element={<PlanPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
