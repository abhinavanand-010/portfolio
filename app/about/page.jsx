"use client";

import { SiC, SiCplusplus, SiJava, SiPython, SiTailwindcss } from 'react-icons/si';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';


const about = {
    title: "About me",
    description: "A Computer Science student with expertise in full-stack development using React, Java, and Spring Boot. I have strong analytical skills and leadership experience in organizing coding events, and passionate about creating innovative tech solutions.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Abhinav Anand",
        },
        {
            fieldName: "Phone",
            fieldValue: "+91-6204891383",
        },
        {
            fieldName: "Email",
            fieldValue: "abhinavavi0123@gmail.com",
        },
        {
            fieldName: "Open to work",
            fieldValue: "Available",
        },
        {
            fieldName: "Languages",
            fieldValue: "Hindi, English, Kannada(basic)",
        },
        {
            fieldName: "Nationality",
            fieldValue: "Indian",
        },
    ]
};

const experience = {
    icon: '/public/resume/badge.svg',
    title: "My Certifications",
    description: "Credentials earned through dedication are the foundation of expertise.",
    items: [
        {
            company: "Infosys Springboard",
            posotion: "Kubernetes + Docker",
            duration: "May 2024",
            link: "https://drive.google.com/file/d/14-PpkvGbrFp8wjrM86Te_RtXDjhhEAJW/view?usp=sharing",
        },
        {
            company: "Network Development Group & CISCO",
            posotion: "Linux Unhatched",
            duration: "July 2024",
            link: "https://drive.google.com/file/d/1ns3zfYFQqANWGA-7XAW4A0Wwk5b7mrQ7/view?usp=sharing",
        },
        {
            company: "Network Development Group & CISCO",
            posotion: "Linux Essentials",
            duration: "July 2024",
            link: "https://drive.google.com/file/d/1bewBSo76W9Rij5p6gxFYXdF8rJADUKFA/view?usp=sharing",
        },
        {
            company: "CISCO Networking Academy",
            posotion: "Networking Basics",
            duration: "March 2024",
            link: "https://drive.google.com/file/d/1wotK_whbRP1ujKTPkZQyZctwLlvSzphH/view?usp=sharing",
        },
       
    ]
};

const education = {
    icon: '/public/resume/cap.svg',
    title: "My education",
    description: "Learning is a journey of curiosity and discipline, where each course and concept deepens the path toward professional and personal achievement.",
    items: [
        {
            institution: "KLE Technological University",
            degree: "B.E. in Computer Science & Engineering",
            duration: "2021 - 2025",
        },
        {
            institution: "Delhi Public School Ranchi",
            degree: "Senior Secondary School",
            duration: "2018 - 2020",
        },
    ]
};

const skills = {
    title: "My Skills",
    description: "Currently learning Spring Boot.",
    skillList: [
        {
            icon: <SiC />,
            name: "C",
        },
        {
            icon: <SiCplusplus />,
            name: "C++",
        },
        // {
        //     icon: <SiJava />,
        //     name: "java",
        // },
        {
            icon: <SiPython />,
            name: "python 3",
        },
        {
            icon: <FaHtml5 />,
            name: "html 5",
        },
        {
            icon: <FaCss3 />,
            name: "css 3",
        },
        {
            icon: <FaJs />,
            name: "javascript",
        },
        {
            icon: <FaReact />,
            name: "react.js",
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwind css",
        },
        {
            icon: <FaNodeJs />,
            name: "node.js",
        },

    ]
};

// const certifications = {
//     title: "Certifications",
//     description: "Here are some of my certifications.",
//     items: [
//         {
//             name: "Docker + Kuberbetes",
//             file: "/public/certificates/1-63f948cd-5a7f-4ed7-80ce-0188a9ab09d8.pdf",
//         },
//         {
//             name: "Blockchain Specialist",
//             file: "/public/certificates/1-63f948cd-5a7f-4ed7-80ce-0188a9ab09d8.pdf",
//         },
//     ]
// };

import * as Dialog from '@radix-ui/react-dialog';
import { FaTimes } from 'react-icons/fa';



import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@/components/ui/tooltip';
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion"; 

const About = () => {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <Tabs defaultValue="about" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="about">About</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="experience">Certifications</TabsTrigger>
                        
                
                    </TabsList>

                    <div className="min-h-[70vh] w-full">

                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className='flex flex-col gap-[30px]'>
                                <h3 className='text-4xl font-bold'>{about.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                                    {about.info.map((item, index) => {
                                        return (
                                            <li key={index} className='flex items-center justify-center gap-4 xl:justify-start'>
                                                <span className='text-white/60'>{item.fieldName}</span>
                                                <span className='text-xl truncate'>{item.fieldValue}</span>
                                            </li>  
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">
                                    {experience.title}
                                </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]" >
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent-default">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:text-accent-default hover:underline"> {item.company} </a>
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent-default"></span>
                                                        <p className="text-white/60 ">{item.company}</p>
                                                    </div>
                                                </li>
                                            ) 
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        <TabsContent value="education" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">
                                    {education.title}
                                </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[400px]" >
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent-default">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent-default"></span>
                                                        <p className="text-white/60 ">{item.institution}</p>
                                                    </div>
                                                </li>
                                            ) 
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                                            <div className='text-6xl transition-all duration-300 group-hover:text-accent-default'>{skill.icon}</div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className='capitalize'>{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        
                        
                        
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
};

export default About;