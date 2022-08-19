import React from 'react';
import r6stats from '../assets/img/covers/r6-stats.png'
import todo from '../assets/img/covers/todo_app.png'
import pizza from '../assets/img/covers/space-pizza.png'
import { useRef, useEffect } from 'react'
import { BsGithub, BsGlobe } from "react-icons/bs"
import { BiLinkExternal } from 'react-icons/bi'
import { MdTouchApp } from 'react-icons/md'

export default function Projects( {observerOptions, setId, activeId} ) {
    const ref = useRef();

    useEffect(() => {
        const onIntersect = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setId(3);
                }
            })
        }

        const observer = new IntersectionObserver(onIntersect, observerOptions);
        observer.observe(ref.current);
    }, [setId, activeId, observerOptions])

    const tiles = {
        card: "h-[128px] sm:h-[256px] md:h-[308px] lg:h-[205px] xl:h-[307px] w-full flip-card",
        simple: "absolute w-full h-full p-2 left-0 flip-card-back flex flex-col justify-between sm:p-5 md:p-8 lg:p-5 xl:p-8",
        double: "absolute w-full h-full p-2 left-0 flip-card-back flex flex-col justify-between sm:p-10 md:p-14 lg:p-5 xl:p-14",
        title: "uppercase mb-2 sm:text-xl sm:mb-5 md:text-3xl md:mb-7 lg:text-2xl lg:mb-5 xl:text-3xl xl:mb-7",
        text: "text-[10px] text-justify sm:text-base md:text-xl lg:text-base xl:text-xl",
        div: "flex items-center justify-center gap-x-5 sm:gap-x-8",
        logo: "text-yellow w-6 h-6 sm:w-10 sm:h-10 lg:w-7 lg:h-7 xl:w-12 xl:h-12",
    }
    return (
            <section id={"projects"} className={"w-full h-max flex flex-col items-center px-[10%] py-9 bg-d-blue relative gap-5 sm:pt-14 sm:gap-14 sm:pb-16 md:gap-20 md:pt-16 md:pb-20"}>
                <svg id="separator-r" data-name="separator-r" viewBox="-21 -9 79 110" width={"130px"} height={"119px"} className={"absolute left-0 -top-[109px] fill-[#244363] rotate-180 md:scale-[2] md:left-[65px] md:-top-[159px]"}>
                    <path d="M78.81,0V110S75.74,0,0,0H78.81Z"/>
                </svg>

                <div className={"relative w-min mb-4"}>
                    <h3 className={"text-5xl text-vd-blue absolute -top-2 -left-[30px] text-stroke sm:text-8xl sm:-top-7 sm:-left-[63px]"}>PROJETS</h3>
                    <h3 ref={ref} className={"text-2xl text-p-blue relative z-10 tracking-[2px] sm:text-5xl" }>PROJETS</h3>
                </div>

                <div className={"grid grid-cols-2 w-[256px] h-max sm:w-[512px] md:w-[616px] lg:grid-cols-4 lg:w-[820px] xl:w-[1228px]"}>
                    <p className={"col-span-2 flex text-p-blue text-[8px] mb-2 gap-2 sm:text-[10px] lg:hidden"}><MdTouchApp className={"fill-p-blue h-3 w-3 sm:h-4 sm:w-4"}/> Touchez une tuile pour la découvrir !</p>
                    <div className={tiles.card}>
                        <div className="h-full w-full flip-card-inner">
                            <div className="absolute w-full h-full flip-card-front">
                                <img src={r6stats} alt="Avatar" className={"w-full h-full"} />
                            </div>
                            <div className={tiles.simple}>
                                <div>
                                    <h4 className={tiles.title}>R6stats</h4>
                                    <p className={tiles.text}>Bot discord sous Node.js, Discord.js et R6api.</p>
                                </div>
                                <div className={tiles.div}>
                                    <a href={"https://github.com/adrien-gllmt/r6-stats-bot"}><BsGithub className={tiles.logo}/></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={tiles.card}>
                        <div className="h-full w-full flip-card-inner">
                            <div className="absolute w-full h-full flip-card-front">
                                <img src={todo} alt="Avatar" className={"w-full h-full"} />
                            </div>
                            <div className={tiles.simple}>
                                <div>
                                    <h4 className={tiles.title}>Todo List</h4>
                                    <p className={tiles.text}>App réalisée sous Vue.js <br /> Still WIP</p>
                                </div>
                                <div className={tiles.div}>
                                    <a href={"https://github.com/adrien-gllmt/vue-todo-app"}><BsGithub className={tiles.logo}/></a>
                                    <a href={"https://www.adrien-guillemot.fr/todo-list"}><BsGlobe className={tiles.logo}/></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`${tiles.card} col-span-2`}>
                        <div className="h-full w-full flip-card-inner">
                            <div className="absolute w-full h-full flip-card-front">
                                <img src={pizza} alt="Avatar" className={"w-full h-full"} />
                            </div>
                            <div className={tiles.double}>
                                <div>
                                    <h4 className={tiles.title}>Space Pizza</h4>
                                    <p className={tiles.text}>Travail collaboratif autour du site d'une pizzéria fictive. <br />
                                        Le design a été co-réalisé par <a target={"_blank"} href={"https://www.linkedin.com/in/yanis-el-said-0a1968222/"} className={"text-yellow hover:text-white transition-colors duration-700"}>Yanis El Saïd <BiLinkExternal className={"inline mb-1"}/></a>. WIP</p>
                                </div>
                                <div className={tiles.div}>
                                    <a href={"#"}><BsGithub className={tiles.logo}/></a>
                                    <a href={"https://www.adrien-guillemot.fr/space-pizza"}><BsGlobe className={tiles.logo}/></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
    );
}
