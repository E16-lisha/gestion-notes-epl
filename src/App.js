import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Accueil from './Accueil';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/accueil" element={<Accueil />} />
            </Routes>
        </Router>
    );
};

export default App;
