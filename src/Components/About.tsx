import React, { useCallback, useMemo } from "react";

import { TbVolume } from "react-icons/tb";

import TopActionButtons from "./TopActionButtons";
import type { Section } from "../types/section-types";
import resumeData from "../data/resume";
import Button from "./Button";
import { EducationItem, ExperienceItem, SkillsGroup } from "./Resume";

import "./About.css"

type AboutProps = {
  onNavigate: (section: Section) => void;
};

const NAV_BUTTONS = {
  github: {
    type: "github" as const,
    link: "https://github.com/alisamfp",
    text: "View my GitHub",
  },
  portfolio: {
    type: "portfolio" as const,
    link: "",
    text: "View my Portfolio",
  },
};

const PRONOUNCIATION_TEXT = "Uh Lisa";

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const navigationButtons = useMemo(() => NAV_BUTTONS, []);

  const handlePronounceName = useCallback(() => {
    try {
      if (!("speechSynthesis" in window)) {
        console.warn("Speech synthesis not supported in this browser");
        return;
      }
      console.log("pronouncing....");
      const utterance = new SpeechSynthesisUtterance(PRONOUNCIATION_TEXT);
      speechSynthesis.speak(utterance);
    } catch (error) {
      console.error("Speech synthesis error: ", error);
    }
  }, []);

  const renderExperience = useMemo(
    () => (
      <section className="about-experience rounded-md md:p-2 flex flex-col gap-2">
        <h2 className="font-bold text-2xl">Professional Experience</h2>
        {resumeData.experience.map((job, i) => (
          <ExperienceItem key={`experience-${i}`} job={job} />
        ))}
      </section>
    ),
    []
  );

  const renderEducation = useMemo(
    () => (
      <section className="about-education rounded-md md:p-2 flex flex-col gap-2">
        <h2 className="font-bold text-2xl">Education</h2>
        {resumeData.education.map((edu, i) => (
          <EducationItem key={`education-${i}`} education={edu} />
        ))}
      </section>
    ),
    []
  );

  const renderSkills = useMemo(
    () => (
      <section className="about-skills flex flex-col gap-2 rounded-md md:p-2">
        <h2 className="font-bold text-2xl">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <SkillsGroup
            id="skills-dev"
            title="re: Development"
            skills={resumeData.skills.development}
            className="row-span-2"
          />
          <SkillsGroup
            id="skills-design"
            title="re: Design"
            skills={resumeData.skills.design}
          />
          <SkillsGroup
            id="skills-additional"
            title="re: Misc"
            skills={resumeData.skills.additional}
          />
        </div>
      </section>
    ),
    []
  );

  return (
    <div className="about-page">
      <TopActionButtons
        button1={navigationButtons.github}
        button2={navigationButtons.portfolio}
        onNavigate={onNavigate}
      />
      <section className="about-me-section">
        <img
          src="./images/meow-wolf-portrait.jpg"
          alt="Portrait of Alisa Palson at Meow Wolf"
          className="profile-image"
          loading="lazy"
        />

        <div className="intro-content">
          <h2 className="greeting">Hello There!</h2>
          <div className="name-pronounciation">
            <span className="name-text">The name's Alisa </span>
            <span className="pronounciation-note">
              (pronounced&nbsp;uh-lisa)
              <Button
                ariaLabel="Play pronounciation of name Alisa"
                className="-mt-0.5"
                variant="icon"
                icon={TbVolume}
                text="Play pronounciation"
                onClick={handlePronounceName}
                iconSize="text-lg"
              />
            </span>
          </div>
        </div>

        <p className="summary-text">
          {resumeData.summary}
        </p>
      </section>
      {renderExperience}
      {renderEducation}
      {renderSkills}

{/* <section className="about-skills flex flex-col gap-2 rounded-md md:p-2">
        <h2 className="font-bold text-2xl">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div id="skills-dev" className="row-span-2">
            <h3 className="text-lg font-semibold">re: Development</h3>
            <ul
              className="list-inside grid grid-cols-1 sm:grid-cols-2 gap-2 pb-2"
              itemProp="skills"
            >
              {resumeData.skills.development.map((skill, i) => (
                <ListItem key={i} text={skill} />
              ))}
            </ul>
          </div>
          <div id="skills-design">
            <h3 className="text-lg font-semibold">re: Design</h3>
            <ul className="list-inside pb-2">
              {resumeData.skills.design.map((skill, i) => (
                <ListItem key={i} text={skill} />
              ))}
            </ul>
          </div>
          <div id="skills-additional">
            <h3 className="text-lg font-semibold">re: Misc</h3>
            <ul className="list-inside pb-2">
              {resumeData.skills.additional.map((skill, i) => (
                <ListItem key={i} text={skill} />
              ))}
            </ul>
          </div>
        </div>
      </section> */}

    </div>
  );
};

export default About;
