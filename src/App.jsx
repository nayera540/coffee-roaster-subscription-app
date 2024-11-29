import { BrowserRouter, Routes, Route } from "react-router"
import HomePage from "./assets/pages/HomePage"
import AboutUsPage from "./assets/pages/AboutUsPage"
import PlanPage from "./assets/pages/PlanPage"

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />}/>
                <Route path="about" element={<AboutUsPage />}/>
                <Route path="plan" element={<PlanPage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
