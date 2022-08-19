import { Tab } from '@headlessui/react'
import React from 'react';
import {useEffect, useRef} from 'react';

//importing needed logos
import {SiJavascript, SiHtml5, SiCss3, SiPhp, SiRuby, SiReact, SiVuedotjs, SiTailwindcss, SiBootstrap, SiWordpress} from 'react-icons/si'

function Tabs( {observerOptions, setId, activeId} ) {
    const ref = useRef();

    useEffect(() => {
        const onIntersect = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setId(2);
                }
            })
        }

        const observer = new IntersectionObserver(onIntersect, observerOptions);
        observer.observe(ref.current);
    }, [setId, activeId, observerOptions])

    const tabStyle = {
        text: "text-base relative uppercase text-d-purple transition-colors duration-1000 hover:text-fuschia sm:text-xl md:text-2xl lg:text-3xl",
        before: "before:absolute before:h-0.5 before:w-full before:rounded before:bg-p-purple before:-bottom-[1px] before:left-0 ",
        after: "after:absolute after:h-0.5 after:w-full after:rounded after:bg-fuschia after:-bottom-[1px] after:left-0 after:scale-0 after:origin-center after:duration-700",
        selected: "after:scale-100 text-fuschia transition-colors duration-1000",
        unselected: "hover:after:scale-[.3]",
    }
    return (
        <Tab.Group as={"section"} id={"tabs"} className={"h-max px-[10%] flex flex-col items-center py-9 gap-5 sm:gap-8 md:gap-12"}>
            <div className={"relative w-min mb-4 sm:mb-14 md:mb-16"}>
                <h3 className={"text-5xl text-l-blue absolute -top-2 -left-[29px] text-stroke sm:text-8xl sm:-top-7 sm:-left-[59px]"}>SKILLS</h3>
                <h3 ref={ref} className={"text-2xl text-vd-blue relative z-10 tracking-[2px] sm:text-5xl"}>SKILLS</h3>
            </div>

            <Tab.List className={"w-full flex justify-between text-xs lg:w-[60%]"}>
                <Tab>{({ selected }) => (<button className={`${tabStyle.text} ${tabStyle.before} ${tabStyle.after} ${selected ? tabStyle.selected : tabStyle.unselected}`}>Langages</button>)}</Tab>

                <Tab>{({ selected }) => (<button className={`${tabStyle.text} ${tabStyle.before} ${tabStyle.after} ${selected ? tabStyle.selected : tabStyle.unselected}`}>Frameworks</button>)}</Tab>

                <Tab>{({ selected }) => (<button className={`${tabStyle.text} ${tabStyle.before} ${tabStyle.after} ${selected ? tabStyle.selected : tabStyle.unselected}`}>CMS</button>)}</Tab>
            </Tab.List>

            <Tab.Panels className={"w-full sm:pb-14 md:pb-20"}>
                <Tab.Panel className={"w-full flex justify-around items-center flex-wrap gap-y-5"}><Languages /></Tab.Panel>
                <Tab.Panel className={"w-full flex justify-around items-center flex-wrap gap-y-5"}><Frameworks /></Tab.Panel>
                <Tab.Panel className={"w-full flex justify-around items-center flex-wrap gap-y-5"}><Cms /></Tab.Panel>
            </Tab.Panels>
        </Tab.Group>
    )
}

function Languages() {
    const svgClass = { class: "fill-blue w-12 h-12 sm:w-16 sm:h-16 md:h-20 md:w-20" }

    return(
        <>
            <div className={"flex flex-col items-center w-4/12 sm:w-3/12 xl:w-1/5"}>
                <SiJavascript data-percent={"80"} className={svgClass.class} />
                <h4 className={"text-xs sm:text-base lg:mt-1.5"}>JavaScript</h4>
            </div>
            <div className={"flex flex-col items-center w-4/12 sm:w-3/12 xl:w-1/5"}>
                <SiCss3 className={svgClass.class} />
                <h4 className={"text-xs sm:text-base lg:mt-1.5"}>CSS3</h4>
            </div>
            <div className={"flex flex-col items-center w-4/12 sm:w-3/12 xl:w-1/5"}>
                <SiHtml5 className={svgClass.class} />
                <h4 className={"text-xs sm:text-base lg:mt-1.5"}>HTML5</h4>
            </div>
            <div className={"flex flex-col items-center w-4/12 sm:w-3/12 xl:w-1/5"}>
                <SiPhp className={svgClass.class} />
                <h4 className={"text-xs sm:text-base lg:mt-1.5"}>PHP</h4>
            </div>
            <div className={"flex flex-col items-center w-4/12 sm:w-3/12 xl:w-1/5"}>
                <SiRuby className={svgClass.class} />
                <h4 className={"text-xs sm:text-base lg:mt-1.5"}>Ruby</h4>
            </div>
        </>
    );
}

function Frameworks() {
    const svgClass = { class: "fill-blue w-12 h-12 sm:w-16 sm:h-16 md:h-20 md:w-20" }
    return (
        <>
            <div className={"flex flex-col items-center w-4/12 sm:w-3/12 xl:w-1/5"}>
                <SiReact className={svgClass.class} />
                <h4 className={"text-xs sm:text-base lg:mt-1.5"}>ReactJS</h4>
            </div>
            <div className={"flex flex-col items-center w-4/12 sm:w-3/12 xl:w-1/5"}>
                <SiVuedotjs className={svgClass.class} />
                <h4 className={"text-xs sm:text-base lg:mt-1.5"}>Vue.js</h4>
            </div>
            <div className={"flex flex-col items-center w-4/12 sm:w-3/12 xl:w-1/5"}>
                <SiTailwindcss className={svgClass.class} />
                <h4 className={"text-xs sm:text-base lg:mt-1.5"}>TailwindCSS</h4>
            </div>

            <div className={"flex flex-col items-center w-4/12 sm:w-3/12 xl:w-1/5"}>
                <SiBootstrap className={svgClass.class} />
                <h4 className={"text-xs sm:text-base lg:mt-1.5"}>Bootstrap</h4>
            </div>
        </>
    );
}

function Cms() {
    const svgClass = { class: "fill-blue w-12 h-12 sm:w-16 sm:h-16 md:h-20 md:w-20" }
    return (
        <>
            <div className={"flex flex-col items-center w-4/12 sm:w-3/12 lg:w-1/5"}>
                <SiWordpress className={svgClass.class} />
                <h4 className={"text-xs sm:text-base lg:mt-1.5"}>Wordpress</h4>
            </div>
        </>
    );
}

export default Tabs;
