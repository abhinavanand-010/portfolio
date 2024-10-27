"use client";

import Photo from "@/components/Photo";
import Social from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  
  const cvLink = "https://drive.google.com/your-cv-link";
  
  const handleDownloadClick = () => {
    window.open(cvLink, "_blank");
  };
  
  return <section className="h-full">
    <div className="container h-full mx-auto">
      <div className="flex flex-col items-center justify-between xl:flex-row xl:pt-8 xl:pb-24">
        <div className="order-2 text-center xl:text-left xl:order-none">
          <span className="text-xl">Computer Science enthusiast</span>
          <h1 className="mb-6 h1">
            Hello I am <br /><span className="text-accent-default">Abhinav Anand</span>
          </h1>
          <p className="max-w-[500px] mb-9 text-white/80">
          love turning ideas into reality through code. crafting clean, efficient, and user-friendly web experiences is my passion.
          </p>
          <div className="flex flex-col items-center gap-8 xl:flex-row">
          <Button
            variant="outline"
            size="lg"
            className="flex items-center gap-2 uppercase"
            onClick={handleDownloadClick} // Added onClick event
          >
            <span>Download CV</span>
            <FiDownload className="text-xl" />
          </Button>

            <div className="mb-8 xl:mb-0">
              <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent-default rounded-full flex justify-center items-center text-accent-default text-base hover:bg-accent-default hover:text-primary hover:transition-all duration-500"/>
            </div>
          </div>
        </div>
        <div className="mb-8 oder-1 xl:order-none xl:mb-0">
          <Photo />
        </div>
      </div>
    </div>
    <Stats />
  </section>
};

export default Home;