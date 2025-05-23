import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/HomePage/Home';
import MaterialSuggestionBanner from './components/MaterialSuggestionBanner/MaterialSuggestionBanner';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/materialsuggestionbanner" element={<MaterialSuggestionBanner />} />
            </Routes>
        </Router>
    );
}

export default App;
