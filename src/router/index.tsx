import { BrowserRouter, Route, Routes } from "react-router-dom"
import CharactersPage from "../pages/CharactersPage"
import HomePage from "../pages/HomePage"


export default function AppRouter() {
return (
<BrowserRouter>
<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/characters" element={<CharactersPage />} />
</Routes>
</BrowserRouter>
)
}