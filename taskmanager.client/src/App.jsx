//import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CreateTask from './pages/CreateTask';
import ListTasks from './pages/ListTasks';

function App() {
    return (
        <BrowserRouter>
        <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/CreateTask" element={<CreateTask />} />
                <Route path="/ListTasks" element={<ListTasks />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;