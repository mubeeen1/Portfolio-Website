"use client"
import React, {useTransition, useState} from 'react'
import Image from 'next/image';
import TabButton from "./TabButton";
const AboutSection = () => {

    const [tab, setTab]  = useState("skills");
 const [isPending , startTransition]= useTransition();
 const handleTabChange = (id)=>{
    startTransition(()=>{
        setTab(id);
    })
 }
 const TAB_DATA =[
    {
        title: "Skills",
        id: "skills", 
        content : (
            <ul className="list-disc pl-2">
                <li>Node.js</li>
                <li>Express</li>
                <li>JavaScript</li>
                <li>MongoDB</li>
                <li>React</li>
                <li>BootStrap/Tailwind</li>
            </ul>
        )  
    },
    {
        title: "Education",
        id: "education", 
        content : (
            <ul className="list-disc pl-2">
                <li>Complete Web Development BootCamp by Dr. Angela Yu</li>
                <li>Bhauddin Zakriya University Multan</li>
            </ul>
        )  
    },
    {
        title: "Certification",
        id: "certification", 
        content : (
            <ul className="list-disc pl-2">
                <li>Aws Cloud Practitioner </li>
            </ul>
        )  
    }
 ]
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 items-center gap-8 px-4 py-8  xl:gap-16 sm:py-16 xl:px-16">
      <Image src="/images/about-image.png" width={500} height={500} alt="About image" />
      <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
        <p className="text-base lg:text-lg text-justify"> I'm a full stack developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript , React , Node.js, Express, MongoDB, HTML, CSS, and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amaizing applications. </p>
      </div>
      <div className="flex flex-row justify-start mt-8 ">
<TabButton selectTab={()=> handleTabChange("skills")} active={tab=== "skills"}>
Skills
</TabButton>
<TabButton selectTab={()=> handleTabChange("education")} active={tab=== "education"}>
Education
</TabButton>
<TabButton selectTab={()=> handleTabChange("certification")} active={tab=== "certification"}>
Certification
</TabButton>
      </div>
      <div className="mt-8">{TAB_DATA.find((t)=>t.id === tab).content}</div>
      </div>
    </section>
  )
}

export default AboutSection
