"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";  // Import EmailJS

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "+91-6204891383",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "abhinavavi0123@gmail.com",
    },
];

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_uh7yfa9", // Replace with your EmailJS Service ID
            "template_qtmgpss", // Replace with your EmailJS Template ID
            form.current,
            "KDtv7g3JxwbLP8Skd"     // Replace with your EmailJS User ID (or public key)
        )
        .then((result) => {
            console.log(result.text);
            alert("Message sent successfully!");
        })
        .catch((error) => {
            console.error(error.text);
            alert("Failed to send message. Please try again later.");
        });
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent-default">Let's work together</h3>
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <Input name="firstname" type="text" placeholder="Firstname" />
                                <Input name="lastname" type="text" placeholder="Lastname" />
                                <Input name="email" type="email" placeholder="E-mail address" />
                                <Input name="phone" type="tel" placeholder="Phone number" />
                            </div>
                            <Textarea name="message" className="h-[200px]" placeholder="Place your message here" />
                            <Button type="submit" className="max-w-40">Send message</Button>
                        </form>
                    </div>
                    <div className="flex items-center flex-1 order-1 mb-8 xl:justify-end xl:order-none xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent-default rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-xl">{item.description}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
