import resumeData from "../data/resume";
import StyledLink from "./StyledLink";
import ListItem from "./ListItem";

const Resume = () => {
  return (
    <div itemScope itemType="https://schema.org/Person" className="px-2">
      <h1 itemProp="name">Alisa Palson</h1>
      <p className="flex justify-between text-sm text-gray-600 text-center py-2.5">
        <StyledLink
          itemProp="email"
          text="Email"
          href="mailto:alisa@palson.info"
        />{" "}
        |{" "}
        <StyledLink
          itemProp="sameAs"
          text="LinkedIn"
          href="https://linkedin.com/in/alisamfp"
        />{" "}
        |{" "}
        <StyledLink
          itemProp="sameAs"
          text="Github"
          href="https://github.com/alisamfp"
        />
      </p>

      <section className="mb-4" id="summary">
        <h2 className="text-2xl font-semibold border-b border-teal-600 pb-1 mb-4">
          Summary
        </h2>
        <p>{resumeData.summary}</p>
      </section>

      <section className="mb-4" id="education">
        <h2 className="text-2xl font-semibold border-b border-teal-600 pb-1 mb-4">
          Education
        </h2>
        {resumeData.education.map((edu, i) => (
          <article
            itemProp="hasCredential"
            itemScope
            itemType="https://schema.org/EducationalOccupationalCredential"
            className="pb-2 grid grid-cols-[1fr_max-content]"
            key={i}
          >
            <h3 className="text-lg leading-tight pr-2">
              <span itemProp="credentialCategory">{edu.degree}</span>&nbsp;in{" "}
              <span itemProp="name" className="inline-block">
                {edu.major.length > 1 ? edu.major.join(" & ") : edu.major[0]}
              </span>
            </h3>
            <div>
              <time itemProp="startDate" dateTime={edu.startDate}>
                {edu.startDate}
              </time>{" "}
              -{" "}
              <time itemProp="endDate" dateTime={edu.graduationDate}>
                {edu.graduationDate}
              </time>
            </div>

            <span
              itemProp="recognizedBy"
              itemScope
              itemType="https://schema.org/CollegeOrUniversity"
            >
              <span itemProp="name">{edu.school}</span>
            </span>
          </article>
        ))}
      </section>

      <section id="experience" className="mb-4">
        <h2 className="text-2xl font-semibold border-b border-teal-600 pb-1 mb-4">
          Professional Experience
        </h2>

        {resumeData.experience.map((job, i) => (
          <article key={i} itemScope itemType="http://schema.org/OrganizationRole" className="pb-2">
            <div className="grid grid-cols-2 justify-between align-baseline">
              <h3 itemProp="roleName" className="text-xl font-semibold">{job.role}</h3>
              <p className="justify-self-end text-base italic">
                <time itemProp="startDate" dateTime={job.startDate}>{job.startDate}</time>
                {" "}-{" "}
                <time itemProp="endDate" dateTime={job.endDate}>{job.endDate}</time>
              </p>
            </div>
            <div itemProp="memberOf" className="-mt-0.5">
              <span itemProp="name">{job.company}</span>,{" "}
              <span itemProp="location">{job.location}</span>
            </div>

            <ul className="list-inside grid grid-cols-[max-content_1fr] gap-2 pb-2">
              {job.description.map((description, i) => (
                <ListItem key={i} text={description} />
              ))}
            </ul>

          </article>
        ))}

      </section>

      <section id="skills">
        <h2 className="text-2xl font-semibold border-b border-teal-600 pb-1 mb-4">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div id="skills-dev" className="row-span-2">
            <h3 className="text-lg font-semibold">Development Tools</h3>
            <ul className="list-inside grid grid-cols-[max-content_1fr] gap-2 pb-2">
              {resumeData.skills.development.map((skill, i) => (
                <ListItem key={i} text={skill} />
              ))}
            </ul>
          </div>
          <div id="skills-design">
            <h3 className="text-lg font-semibold">Design Tools</h3>
            <ul className="list-inside grid grid-cols-[max-content_1fr] gap-2 pb-2">
              {resumeData.skills.design.map((skill, i) => (
                <ListItem key={i} text={skill} />
              ))}
            </ul>
          </div>
          <div id="skills-additional">
            <h3 className="text-lg font-semibold">Additional Skills</h3>
            <ul className="list-inside grid grid-cols-[max-content_1fr] gap-2 pb-2">
              {resumeData.skills.additional.map((skill, i) => (
                <ListItem key={i} text={skill} />
              ))}
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Resume;
