"use client";
import { easeIn, motion } from "framer-motion";
import React, {useState} from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import {BsArrowUpRight, BsGithub, } from "react-icons/bs";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@/components/ui/tooltip';
import Link from "next/link";
import Image from "next/image";
import WorkSilderButtons from "@/components/WorkSilderButtons";

const projects = [
    {
        num: '01',
        category: 'Bone Fracture Detection',
        title: "project-1",
        description: "Detecting bone fractures from X-ray images using MobileNetV3 and comparing results with ResNet.",
        stack: [{name: "python"}, {name:"machine learning"}, {name:"MobileNetV3"}, {name:"Resnet-18"}],
        image: '/projects/fracture.png',
        live: "",
        github: "https://github.com/abhinavanand-010/bone-fracture-detection-ML",
    },
    {
        num: '02',
        category: 'Block Vaccinator',
        title: "project-2",
        description: "A blockchain based project to store vaccination data on distributed blocks.",
        stack: [{name: "react.js"}, {name:"solidity"}, {name:"blockchain"}, {name:"go-ethereum"}],
        image: '/projects/blockvaccinator.png',
        live: "",
        github: "https://github.com/abhinavanand-010/Vaccine-Blockchain",
    },
    {
        num: '03',
        category: 'E-Waste Ecofinder',
        title: "project-3",
        description: "Locating facilities for e-waste, providing tracking through maps, and email service with java backend.",
        stack: [{name: "react.js"},{name:"tailwindcss"}, {name:"java"}, {name:"spring-boot"}],
        image: '/projects/ewaste.png',
        live: "",
        github: "https://github.com/abhinavanand-010/e-waste-java-spring-final",
    },
    {
        num: '04',
        category: 'PuzzLabyrinth',
        title: "project-4",
        description: "A fun project created for learning and applying all concepts of Object Oriented Programming(OOP).",
        stack: [{name: "C++"},{name:"interfaces"}, {name:"OOP"}],
        image: '/projects/puzzle.png',
        live: "",
        github: "https://github.com/abhinavanand-010/PuzzLabyrinth",
    },
];

const Projects = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    };
    
    return (
        <motion.section initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
        }} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            <div className="font-extrabold leading-none text-transparent text-8xl text-outline">{project.num}</div>
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent-default transition-all duration-500 capitalize">{project.category}</h2>
                            <p className="text-white/60">{project.description}</p>
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => {
                                    return (
                                        <li key={index} className="text-xl text-accent-default">{item.name}</li>
                                    );
                                })}
                            </ul>
                            
                            <div className="border border-white/20"></div>
                            <div className="flex items-center gap-4">
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-3xl text-white group-hover:text-accent-default" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>GitHub</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange} >
                            {projects.map((project, index) => {
                                return(
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                            <div className="absolute top-0 bottom-0 z-10 w-full h-full bg-black/10"></div>
                                            <div className="relative w-full h-full">
                                                <Image src={project.image} fill className="object-cover" alt="" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                            <WorkSilderButtons containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent-default hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Projects;