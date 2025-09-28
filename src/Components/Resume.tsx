import resumeData from "../data/resume";
import ListItem from "./ListItem";

import "./About.css"

interface ExperienceItemProps {
  job: (typeof resumeData.experience)[0];
}
interface EducationItemProps {
  education: typeof resumeData.education[0];
}

interface SkillsGroupProps {
  id: string;
  title: string;
  skills: string[];
  className?: string;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({ job }) => (
  <article
    itemScope
    itemProp="hasOccupation"
    itemType="http://schema.org/OrganizationRole"
    className="experience-item"
  >
    <div className="experience-header">
      <h3 itemProp="roleName" className="job-title">
        {job.role}
      </h3>
      <p className="date-range">
        <time itemProp="startDate" dateTime={job.startDate}>
          {job.startDate}
        </time>{" "}
        -{" "}
        <time itemProp="endDate" dateTime={job.endDate}>
          {job.endDate}
        </time>
      </p>
    </div>
    <div
      itemProp="memberOf"
      itemScope
      itemType="https://schema.org/Organization"
      className="company-info"
    >
      <span itemProp="name">{job.company}</span>,{" "}
      <span itemProp="location">{job.location}</span>
    </div>

    <ul className="job-description">
      {job.description.map((description, i) => (
        <ListItem key={i} text={description} />
      ))}
    </ul>
  </article>
);

export const EducationItem: React.FC<EducationItemProps> = ({ education }) => {
  const educationLevel = education.degree.charAt(0).toUpperCase() === "B" ? "bachelor degree" : "associate degree";
  const majorText = education.major.length > 1 ? education.major.join(" & ") : education.major[0];

  return (
    <article
      itemProp="hasCredential"
      itemScope
      itemType="https://schema.org/EducationalOccupationalCredential"
      className="education-item"
    >
      <h3 className="degree-title">
        <meta itemProp="credentialCategory" content="degree" />
        <meta itemProp="educationalLevel" content={educationLevel} />
        <span itemProp="name">
          {education.degree}&nbsp;in {majorText}
        </span>
      </h3>
      <div className="education-dates">
        <time dateTime={education.startDate}>
          {education.startDate}
        </time>
        {" "}-{" "}
        <time dateTime={education.graduationDate}>
          {education.graduationDate}
        </time>
      </div>

      <span
        itemProp="recognizedBy"
        itemScope
        itemType="https://schema.org/CollegeOrUniversity"
      >
        <span itemProp="name">{education.school}</span>
      </span>
    </article>
  )
};

export const SkillsGroup: React.FC<SkillsGroupProps> = ({ id, title, skills, className = "" }) => (
  <div id={`skills-group ${className}`}>
    <h3 className="skills-title">{title}</h3>
    <ul className="skills-list" itemProp="skills">
      {skills.map((skill, i) => (
        <ListItem key={`${id}-skill-${i}`} text={skill} />
      ))}
    </ul>
  </div>
)


