import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/HomePage/Home';
import MaterialSuggestionBanner from './components/MaterialSuggestionBanner/MaterialSuggestionBanner';
import SlidingImageCarousel from './components/SlidingImageCarousel/SlidingImageCarousel';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/materialsuggestionbanner" element={<MaterialSuggestionBanner />} />
                <Route path="/slidingimagecarousel" element={<SlidingImageCarousel />} />
            </Routes>
        </Router>
    );
}

export default App;
