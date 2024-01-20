import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderDraw from "./components/header/header";
import Heroes from "./components/hero/Hero";
import Footer from "./components/footer/Footer";
import Films from "./components/filmslib/libery/films";
import FilmPage from "./components/filmslib/libery/FilmPage";

import Devfile from "./api/devfile";



function App() {
    return (
        <div className="App">
            <Router>
                <HeaderDraw />
                <Routes>
                    <Route path="/" element={<Heroes />} />
                    <Route path="/films" element={<Films />} />
                    <Route path="/dev" element={<Devfile />} />
                    <Route path="/film/:filmId" element={<FilmPage />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;