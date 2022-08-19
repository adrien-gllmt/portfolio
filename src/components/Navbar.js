import React from 'react';
import logo from '../assets/img/favicon_blanc.png';
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

export default function Navbar( {handleToggle, isNavOpen, selectedItem, setId, activeId}) {
    return (
        <header className={`h-12 w-full bg-d-blue flex items-center justify-between px-5 fixed z-50 sm:h-16 md:h-20 md:px-[10%] ${isNavOpen ? 'after:absolute after:w-full after:h-[100vh] after:top-0 after:left-0 after:backdrop-blur-sm' : ''}`}>
            <a href={"#landing"}><img src={logo} alt="Logo AG" className={`w-8 sm:w-11`} /></a>
            <button onClick={handleToggle} className={"z-20 md:hidden"}>{isNavOpen ? <MdClose className={"fill-p-blue w-10 h-10 sm:w-14 sm:h-14"} /> : <FiMenu className={"stroke-p-blue w-10 h-10 sm:w-14 sm:h-14"} />}</button>
            <nav className={`z-10 flex flex-col justify-center items-center text-l-blue bg-vd-blue w-4/6 h-screen absolute right-0 top-0 md:flex-row md:justify-end md:relative md:h-full md:w-full md:bg-d-blue ${isNavOpen ? "transition-transform duration-300 md:transform-none" : "translate-x-[100%] transition-transform duration-300 md:transform-none"}`}>
                <Menu handleToggle={handleToggle} selectedItem={selectedItem} setId={setId} activeId={activeId} />
            </nav>
        </header>
    );
}

function Menu( {handleToggle, setId, activeId} ) {

    const navStyles = {
        a: "relative hover:text-def-blue transition-colors duration-500",
        li: "relative w-[85px] text-p-blue uppercase sm:text-xl md:w-max",
        before: "before:transition-transform before:duration-500 before:absolute before:h-3 before:w-3 before:rounded-[50%] before:top-[25%] before:-left-6 before:bg-blue sm:before:top-[25%] sm:before:-left-8 sm:before:h-3 sm:before:w-3 md:before:-bottom-4 md:before:top-auto md:before:left-[43%]"
    }
    const data =[{id: 0, ref: "landing", path: "#landing", content:"Accueil"},{id: 1, ref: "about", path: "#about-me", content:"Présentation"},{id: 2, ref: "tabs", path: "#tabs", content:"Compétences"},{id: 3, ref: "projects", path: "#projects", content:"Portfolio"}];

    return(
            <ul className={"flex flex-col justify-between h-[300px] md:flex-row md:w-[85%] md:h-full md:items-center lg:w-[70%] xl:w-[55%]"}>
                {data.map(d => (
                    <li key={d.id} data-item={d.ref} className={`${navStyles.li} ${activeId === d.id ? 'before:scale-100' : 'before:scale-0'} ${navStyles.before}`} onClick={(e) => { setId(d.id); handleToggle();}}>
                        <a href={d.path} className={`${navStyles.a}`}>{d.content}</a>
                    </li>
                ))}
            </ul>
        );
}
