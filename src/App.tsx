import Navbar from "./components/Navbar.tsx";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from "./components/About.tsx";
import Projects from "./components/Projects.tsx";
import "./App.css";

function App() {

    return (
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<About/>}/>
                    <Route path='/projects' element={<Projects />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;