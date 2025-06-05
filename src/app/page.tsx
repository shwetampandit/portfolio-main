"use client";

import { DATA } from "@/app/data";
// import {
  // AboutMe,
  // Experience,
//   Footer,
//   Header,
//   Navbar,
//   Projects,
//   Skills,
//   Education
// } from "@/components/sections";
import { AboutMe } from "@/components/sections/about-me";
import { Experience } from "@/components/sections/experience";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { Navbar } from "@/components/sections/navbar";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Education } from "@/components/sections/education";

export default function Page() {
  return (
    <div className="bg-background text-foreground mx-auto px-4 w-full lg:w-2/3 xl:w-1/2 pt-6 sm:pt-12">
      <Navbar />

      <main className="min-h-lvh px-4">
        <Header data={DATA.HEADER} />
        <AboutMe data={DATA.ABOUT_ME} />
        <Experience data={DATA.EXPERIENCE} />
        <Projects data={DATA.PROJECTS} all={DATA.ALL_PROJECTS} />
        <Education data={DATA.EDUCATION} />
        <Skills data={DATA.SKILLS} />
        <Footer />
      </main>
    </div>
  );
}
