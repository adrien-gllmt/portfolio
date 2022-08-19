import React from "react";
import profilePic from "../assets/img/rounded-pdp.png";
import {useEffect, useRef} from "react";
import {GrDocumentDownload} from 'react-icons/gr';
import pdfCV from '../assets/CV_adrien_guillemot.pdf';

export default function AboutMe( {observerOptions, setId, activeId} ) {
    const ref = useRef();

    useEffect(() => {
        const onIntersect = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setId(1);
                }
            })
        }

        const observer = new IntersectionObserver(onIntersect, observerOptions);
        observer.observe(ref.current);
    }, [setId, activeId, observerOptions])

    return (
        <section id="about-me" className={"w-full flex flex-col items-center gap-5 py-9 px-[10%] sm:gap-10 sm:py-14 md:py-20 lg:flex-row lg:gap-20 lg:flex-wrap lg:justify-center"}>
            <div className={"relative w-max mb-4"}>
                <h3 className={"text-5xl text-l-blue absolute -top-2 -left-[35px] text-stroke sm:text-8xl sm:-top-7 sm:-left-[72px]"}>APROPOS</h3>
                <h3 ref={ref} className={"text-2xl text-vd-blue relative z-10 tracking-[2px] sm:text-5xl"}>A PROPOS</h3>
            </div>

            <div className={"w-full flex flex-col items-center justify-between gap-5 sm:gap-10 lg:flex-row lg:gap-20"}>
                <div className={"relative shrink-0"}>
                    <img src={profilePic} alt="Adrien Guillemot" className={"w-[180px] sm:w-[250px]"} />
                    <a href={pdfCV} download={"CV_adrien_guillemot"} className={"w-20 h-9 px-4 rounded-[20px] bg-yellow absolute bottom-0 left-0 flex items-center justify-between sm:w-24 sm:h-11"}>
                        <GrDocumentDownload className={"w-4 h-4 sm:w-6 sm:h-6"} />
                        <p className={"inter font-semibold sm:text-[22px]"}>CV</p>
                    </a>
                </div>
                <p className={"text-justify text-base sm:text-xl text-d-blue xl:leading-8"}>Je m'appelle Adrien Guillemot, j'ai 18 ans et j'entre cette année en 2è année de BUT MMI à l'IUT de Troyes. <br />
                Souhaitant à terme devenir développeur full-stack, je cherche aujourd'hui une alternance comme développeur front-end pour les années scolaires 2022-2024 (2 ans). Cela me permettra d'acquérir des compétences
                techniques, relationnelles et professionnelles dès maintenant. <br/>
                Je développe principalement sous ReactJS et Tailwind, mais j'ai aussi des connaissances dans d'autres langages et frameworks !</p>
            </div>
        </section>
    );
}
