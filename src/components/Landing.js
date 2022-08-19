import React from 'react';
import {useEffect, useRef} from "react";

//needed logos
import { BsGithub, BsLinkedin, BsTwitter  } from "react-icons/bs"

export default function Landing({landingObserverOptions, setId, activeId}) {
    const ref = useRef();

    useEffect(() => {
        const onIntersect = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setId(0);
                }
            })
        }

        const observer = new IntersectionObserver(onIntersect, landingObserverOptions);
        observer.observe(ref.current);
    }, [setId, activeId, landingObserverOptions])

    return (
        <section ref={ref} id="landing" className={"h-max flex flex-col justify-between items-center gap-10 px-[10%] pt-20 pb-[25px] bg-d-blue relative sm:pt-24 md:pt-32 md:gap-20 md:pb-11 lg:pt-36 lg:gap-24"}>
            <div className={"w-full"}>
                <h1 className={"text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-p-blue"}>ADRIEN <br/>GUILLEMOT</h1>
                <h2 className={"text-xl sm:text-2xl md:text-4xl lg:text-5xl text-blue"}>junior web developper</h2>
            </div>
            <div className={"w-full flex justify-around"}>
                <a target={"_blank"} rel={"noreferrer"} href={"https://github.com/adrien-gllmt"}><BsGithub className={"fill-yellow w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 hover:scale-110 duration-500"} /></a>
                <a target={"_blank"} rel={"noreferrer"} href={"https://www.linkedin.com/in/aguillemot/"}><BsLinkedin className={"fill-yellow w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 hover:scale-110 duration-500"} /></a>
                <a target={"_blank"} rel={"noreferrer"} href={"https://twitter.com/adrien_gllmt"}><BsTwitter className={"fill-yellow w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 hover:scale-110 duration-500"} /></a>
            </div>
            <svg id="separator" data-name="separator" viewBox="-21 -9 79 110" className={"w-[130px] h-[119px] absolute right-0 -bottom-[109px] fill-d-blue md:scale-[2] md:right-[65px] md:-bottom-[159px]"}>
                <path d="M78.81,0V110S75.74,0,0,0H78.81Z"/>
            </svg>
        </section>
    );
}
