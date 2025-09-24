import resumeData from "../data/resume";

const Resume = () => {
  return (
    <section className="px-2">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2 text-center">Alisa Palson</h1>
        <p className="text-sm text-gray-600 text-center">
          <a
            href="mailto:alisa@palson.info"
            className="text-teal-600 hover:underline"
          >
            alisa (at) palson (dot) info
          </a>{" "}
          |{" "}
          <a
            href="https://linkedin.com/in/alisamfp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 hover:underline"
          >
            LinkedIn
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/alisamfp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 hover:underline"
          >
            GitHub
          </a>{" "}
          |{" "}
        </p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold border-b border-teal-600 pb-1 mb-4">
          Summary
        </h2>
        <p>
          {resumeData.summary}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold border-b border-teal-600 pb-1 mb-4">
          Education
        </h2>
        <ul className="list-disc list-inside space-y-3 pl-2">
          {
            resumeData.education.map((edu, i) => (

              <li key={i}>
                <strong>{edu.school}</strong> — {edu.startDate} - {edu.graduationDate}
                <br />
                {edu.degree.length > 1
                  ? `Dual degrees earned: ${edu.degree.join(" & ")}`
                  : edu.degree[0]
                }
                , {edu.major} {edu.focus && `(focus: ${edu.focus})`}
              </li>

            ))
          }
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold border-b border-teal-600 pb-1 mb-4">
          Professional Experience
        </h2>

        <article className="mb-6">
          <h3 className="text-xl font-semibold">Octoblu</h3>
          <p className="italic text-sm mb-1">Oct 2014 - Jul 2017 | Tempe, AZ</p>
          <p className="mb-2">Full-Stack Software Engineer</p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Developed and maintained REST APIs and authentication flows,
              improving system security and service interoperability
            </li>
            <li>
              Collaborated in an agile environment using pair programming and
              test-driven development to ensure high-quality, maintainable code
            </li>
            <li>
              Helped establish internal style guidelines and modular CSS
              practices, increasing consistency and scalability across frontend
              projects
            </li>
            <li>
              Contributed to a wide range of full-stack projects, including
              Arduino integrations, mobile applications, and internal developer
              tools, enhancing functionality and user experience
            </li>
          </ul>
        </article>

        <article>
          <h3 className="text-xl font-semibold">A Small Orange</h3>
          <p className="italic text-sm mb-1">
            Mar 2014 - May 2014 | Austin, TX
          </p>
          <p className="mb-2">Live Technical Support (tier 1)</p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Delivered remote tech support for domains, cPanel, and DNS,
              ensuring quick resolution of client issues and enhancing customer
              satisfaction
            </li>
            <li>
              Mastered web hosting tools swiftly and resolved diverse client
              issues, contributing to improved service efficiency and client
              retention
            </li>
          </ul>
        </article>
      </section>
      <section></section>
      <h2 className="text-2xl font-semibold border-b border-teal-600 pb-1 mb-4">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Development Tools</h3>
          <ul className="list-none list-inside space-y-1">
            <li>JavaScript</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>HTML5</li>
            <li>Node.js</li>
            <li>Material UI</li>
            <li>Git/GitHub</li>
            <li>REST APIs</li>
            <li>Vite</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Design Tools</h3>
          <ul className="list-none list-inside space-y-1">
            <li>Adobe Illustrator</li>
            <li>Adobe InDesign</li>
            <li>Adobe Photoshop</li>
            <li>Figma</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Additional Skills</h3>
          <ul className="list-none list-inside space-y-1">
            <li>Accessibility Standards (WCAG)</li>
            <li>Cross-Browser Testing</li>
            <li>Microsoft Word</li>
            <li>Microsoft Excel</li>
            <li>Microsoft PowerPoint</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;
