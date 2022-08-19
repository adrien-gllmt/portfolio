import React from 'react';
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import AboutMe from "./components/AboutMe";
import Tabs from './components/Skills'
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState } from 'react';

function App( {root} ) {
    const [isNavOpen, setNavbarOpen] = useState(false);
    const [activeId, setId] = useState(0);

    const landingObserverOptions = {
        root: null,
        rootMargin: "0px 0px -30% 0px",
        threshold: 1
    }

    const observerOptions = {
        root: null,
        rootMargin: "-5% 0px -50% 0px",
        threshold: 1
    };

    const handleToggle = () => {
        if(window.innerWidth < 768) {
            setNavbarOpen(!isNavOpen);
        }
    }
    isNavOpen ? root.classList.add('overflow-hidden') : root.classList.remove('overflow-hidden');


    return (
        <div id={"app"}>
            <Navbar handleToggle={handleToggle} isNavOpen={isNavOpen} setId={setId} activeId={activeId} />
            <Landing landingObserverOptions={landingObserverOptions} setId={setId} activeId={activeId} />
            <AboutMe observerOptions={observerOptions} setId={setId} activeId={activeId} />
            <Tabs observerOptions={observerOptions} setId={setId} activeId={activeId} />
            <Projects observerOptions={observerOptions} setId={setId} activeId={activeId} />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
