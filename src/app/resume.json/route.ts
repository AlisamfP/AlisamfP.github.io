import resumeData from "@/data/resume";

/** Removes [[wiki-link]] markers, leaving plain text. */
function strip(text: string): string {
  return text.replace(/\[\[(.+?)\]\]/g, "$1");
}

function firstLink(links?: Record<string, string>): string | undefined {
  return links ? Object.values(links)[0] : undefined;
}

/**
 * Serves the résumé as machine-readable JSON following the JSON Resume
 * schema (https://jsonresume.org). Single source of truth is src/data/resume.ts.
 */
export function GET() {
  const r = resumeData;

  const jsonResume = {
    $schema:
      "https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json",
    basics: {
      name: r.contactInfo.name,
      label: "Front-end Developer",
      email: r.contactInfo.email,
      url: "https://alisa.palson.info",
      summary: strip(r.summary),
      location: {
        city: "Casa Grande",
        region: "AZ",
        countryCode: "US",
      },
      profiles: [
        {
          network: "GitHub",
          username: r.contactInfo.github,
          url: `https://github.com/${r.contactInfo.github}`,
        },
        {
          network: "LinkedIn",
          username: r.contactInfo.linkedIn,
          url: `https://linkedin.com/in/${r.contactInfo.linkedIn}`,
        },
      ],
    },
    work: r.experience.map((job) => ({
      name: strip(job.company),
      position: job.role,
      location: job.location,
      url: firstLink(job.links),
      startDate: job.startDate,
      endDate: job.endDate === "present" ? undefined : job.endDate,
      highlights: job.description,
      keywords: job.technologies,
    })),
    education: r.education.map((edu) => ({
      institution: edu.school,
      studyType: edu.degree,
      area: edu.major.join(", "),
      startDate: edu.startDate,
      endDate: edu.graduationDate,
      courses: edu.achievements,
      url: firstLink(edu.links),
    })),
    skills: [
      { name: "Development", keywords: r.skills.development },
      { name: "Design", keywords: r.skills.design },
      { name: "Additional", keywords: r.skills.additional },
    ],
    meta: {
      canonical: "https://alisa.palson.info/resume.json",
      version: "v1.0.0",
    },
  };

  return Response.json(jsonResume);
}
