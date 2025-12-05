import { BrowserRouter, Route, Routes } from "react-router-dom"
import CharactersPage from "../pages/CharactersPage"
import HomePage from "../pages/HomePage"
import FilmographyPage from "../pages/FilmographyPage"
import HousesPage from "../pages/HousesPage"

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/characters" element={<CharactersPage />} />
                <Route path="/houses" element={<HousesPage />} />
                <Route path="/filmography" element={<FilmographyPage />} />
            </Routes>
        </BrowserRouter>
    )
}