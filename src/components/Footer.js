import React from 'react';
import {SiReact, SiTailwindcss} from 'react-icons/si'

class Footer extends React.Component {
    render() {
        return (
            <footer className={"flex items-center justify-center px-[10%] py-[10px] bg-[#202020] text-yellow sm:py-5"}>
                <p className={"text-[.7rem] flex sm:text-base"}>&copy; 2022, Adrien Guillemot | Powered by <SiReact className={"mx-1 mt-0.5 w-3 h-3 sm:w-5 sm:h-5 sm:mx-2 sm:mt-1"}/> <SiTailwindcss className={"w-3 h-3 mt-0.5 sm:w-5 sm:h-5 sm:mt-1"}/></p>
            </footer>
        );
    }
}

export default Footer
