import React from 'react';
import { AiOutlineMail } from "react-icons/ai"
import { BiMailSend } from "react-icons/bi"

export default function Contact() {
        return (
            <section id={"contact"} className={"flex flex-col items-center justify-center gap-5 px-[10%] py-9 border-t-[2px] border-b-[2px] border-yellow sm:pt-14 sm:pb-12 sm:border-t-[4px] sm:border-b-[4px] sm:gap-0 md:pt-16 md:pb-14"}>
                <div className={"relative w-min mb-4 sm:mb-14 md:mb-16"}>
                    <h3 className={"text-5xl text-subtitle text-l-blue absolute -top-2 -left-[36px] text-stroke sm:text-8xl sm:-top-7 sm:-left-[73px]"}>CONTACT</h3>
                    <h3 className={"text-2xl text-subtitle text-vd-blue relative z-10 tracking-[2px] sm:text-5xl"}>CONTACT</h3>
                </div>
                <div className={"flex flex-col gap-2 items-center sm:gap-5 md:gap-8 w-full"}>
                    <p className={"flex items-center gap-3 text-d-blue sm:text-xl md:text-2xl"}><AiOutlineMail className={"w-5 h-5 mt-0.5 sm:mt-1.5 md:w-7 md:h-7 fill-def-blue"}/>contact.aguillemot@gmail.com</p>

                    <form action={"mailto:contact.aguillemot@gmail.com"} method={"post"} encType={"text/plain"} className={"flex flex-wrap items-center justify-center w-full gap-2 max-w-[700px] xl:max-w-[900px]"}>
                        <div className={"flex justify-center sm:justify-between items-center flex-wrap gap-2 w-full sm:justify-between"}>
                            <fieldset className={"w-full border-[1px] border-blue rounded-md px-2 pb-2 pt-1 max-w-[250px] md:min-w-[293px] xl:min-w-[300px] xl:max-w-[440px]"}>
                                <legend className={"text-sm text-blue"}>Votre nom</legend>

                                <label className={"w-full flex justify-center items-center"}>
                                    <input type="text" name="name" placeholder={"John Doe"} className={"w-full text-sm text-d-blue sm:text-base xl:text-xl"} required="required"/>
                                </label>
                            </fieldset>

                            <fieldset className={"w-full border-[1px] invalid:border-[red] border-blue rounded-md px-2 pb-2 pt-1 group max-w-[250px] md:min-w-[293px] xl:min-w-[300px] xl:max-w-[440px]"}>
                                <legend className={"text-sm text-blue group-invalid:text-[red]"}>Votre email</legend>

                                <label className={"w-full flex flex-col justify-center items-center"}>
                                    <input type="email" name="email" placeholder={"john.doe@example.com"} className={"peer group-invalid:text-[red] w-full text-sm text-d-blue invalid:ring-[red] invalid:focus:ring-[red] sm:text-base xl:text-xl"} required="required"/>
                                </label>
                            </fieldset>
                        </div>
                        <fieldset className={"w-full border-[1px] border-blue rounded-md px-2 pb-2 pt-1"}>
                            <legend className={"text-sm text-blue"}>Votre message</legend>

                            <label className={"w-full"}>
                                <textarea name="comments" placeholder={"Votre message..."} className={"w-full text-sm text-d-blue h-20 resize-y sm:text-base lg:h-32 xl:text-xl"} required="required"></textarea>
                            </label>
                        </fieldset>

                        <button type="submit" name="submit" className={"group text-sm text-vd-blue mt-1 py-1 px-2 rounded-md ring-blue ring-1 focus:ring-1 w-max flex items-center gap-2 sm:text-base xl:text-xl"}><BiMailSend className={"group-hover:animate-bounce"}/>ENVOYER</button>
                    </form>

                </div>
            </section>
        );
}
