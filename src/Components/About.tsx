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
      <section className="about-experience section-container">
        <h2 className="section-title">Professional Experience</h2>
        {resumeData.experience.map((job, i) => (
          <ExperienceItem key={`experience-${i}`} job={job} />
        ))}
      </section>
    ),
    []
  );

  const renderEducation = useMemo(
    () => (
      <section className="about-education section-container">
        <h2 className="section-title">Education</h2>
        {resumeData.education.map((edu, i) => (
          <EducationItem key={`education-${i}`} education={edu} />
        ))}
      </section>
    ),
    []
  );

  const renderSkills = useMemo(
    () => (
      <section className="about-skills section-container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
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
          <div className="name-pronunciation">
            <span className="name-text">The name's Alisa </span>
            <span className="pronunciation-note">
              (pronounced&nbsp;uh-lisa)
              <Button
                ariaLabel="Play pronunciation of name Alisa"
                className="pronunciation-button"
                variant="icon"
                icon={TbVolume}
                onClick={handlePronounceName}
                size="sm"
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
    </div>
  );
};

export default About;
