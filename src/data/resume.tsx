type LinkMap = Record<string, string>

interface ContactInfo {
    name: string;
    email: string;
    location: string;
    openToRelocation: boolean;
    linkedIn: string;
    github: string;
}

interface Experience {
    company: string;
    role: string;
    location?: string;
    startDate: string;
    endDate?: string;
    description: string[];
    technologies?: string[];
    links?: LinkMap;
}

interface Education {
    school: string;
    degree: string;
    major: string[];
    focus?: string;
    startDate: string;
    graduationDate: string;
    achievements?: string[];
}

interface ProfessionalDevelopment {
    company: string;
    role: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string[];
    links?: LinkMap;
}

interface skillsets {
    development: string[];
    design: string[];
    additional: string[];
}

interface ResumeData {
    contactInfo: ContactInfo;
    skills: skillsets;
    summary: string;
    summaryLinks: LinkMap;
    education: Education[];
    experience: Experience[];
    professionalDevelopment: ProfessionalDevelopment[];
}

const resumeData: ResumeData = {
    contactInfo: {
        name: "Alisa Palson",
        email: "alisa@palson.info",
        location: "Casa Grande, AZ",
        openToRelocation: true,
        linkedIn: "alisamfp",
        github: "alisamfp"
    },
    skills: {
        development: ["Liquid", "React", "JavaScript", "TypeScript", "CSS3", "Tailwind CSS", "Node", "Material UI", "Git", "Semantic HTML"],
        design: ["Adobe InDesign", "Adobe Illustrator", "Figma"],
        additional: ["Accessibility (a11y/WCAG)", "Cross-Browser Testing", "Agile/Scrum"]
    },
    summary: "Front-end developer with deep experience in JavaScript, React, and TypeScript, building dynamic and maintainable web applications. Currently, working as lead web developer at Magnolia Development, specializing in Shopify theme development, custom sections, and store migrations. I combine strong technical skills with a foundation in UI and visual design to create flexible, user-friendly digital experiences. I am a [[Recurse Center]] alum, magna cum laude graduate, and volunteer with [[HeatSync Labs]], committed to accessibility, open source, and inclusive digital products.",
    summaryLinks: {
        "HeatSync Labs": "https://heatsynclabs.org",
        "Recurse Center": "https://www.recurse.com/"
    },
    education: [
        {
            school: "Arizona State University",
            degree: "Bachelor of Science",
            major: ["Graphic Information Technology"],
            focus: "Full-Stack Web Development",
            startDate: "2022",
            graduationDate: "2025",
            achievements: ["Magna Cum Laude"]
        },
        {
            school: "South Mountain Community College",
            degree: "Associate",
            major: ["Arts", "General Studies"],
            startDate: "2010",
            graduationDate: "2018"
        }
    ],
    experience: [
        {
            company: "[[Magnolia Development]]",
            role: "Lead Web Developer",
            location: "Remote",
            startDate: "2025",
            endDate: "present",
            description: [
                "Led Shopify theme architecture and core feature development, owning implementation, version control, and production deployments in a collaborative consulting environment.",
                "Migrated a heavily customized Shopify 1.0 theme to Shopify 2.0, rebuilding functionality to align with modern best practices and consolidating duplicate device-specific sections into responsive, performance-focused components.",
                "Developed 15+ custom sections and reusable snippets, including a subscription-integrated product purchase system using the Stay.ai API and a dynamic sale countdown powered by Shopify metaobjects.",
            ],
            technologies: ["Shopify", "Liquid", "API integration", "Theme Architecture", "JavaScript", "Responsive Web Design"],
            links: {
                "Magnolia Development": "https://magnoliadevelopment.io/"
            }
        },
        {
            company: "Octoblu",
            role: "Software Engineer",
            location: "Tempe, AZ",
            startDate: "2014",
            endDate: "2017",
            description: [
                "Developed and maintained REST APIs and authentication flows, improving system security and service interoperability",
                "Collaborated in an agile environment using pair programming and test-driven development to ensure high-quality, maintainable code",
                "Helped establish internal style guidelines and modular CSS practices, increasing consistency and scalability across frontend projects",
                "Contributed to a wide range of full-stack projects, including Arduino integrations, mobile applications, and internal developer tools, enhancing functionality and user experience"
            ],
            technologies: ["JavaScript", "React", "Node.js", "AWS", "MongoDB", "Angular", "IoT", "Docker", "Kubernetes", "Mocha"]
        },
        {
            company: "A Small Orange",
            role: "Tech Support - Web Hosting",
            location: "Remote",
            startDate: "2014",
            endDate: "2014",
            description: [
                "Delivered remote tech support for domains, cPanel, and DNS, ensuring quick resolution of client issues and enhancing customer satisfaction",
                "Mastered web hosting tools swiftly and resolved diverse client issues, contributing to improved service efficiency and client retention."
            ],
            technologies: ["DNS", "cPanel/WHM", "Email Protocols", "Network diagnostics", "Domain management", "WordPress", "Kayako"]
        },

    ],
    professionalDevelopment: [
        {
            company: "[[Recurse Center]]",
            role: "Software Engineering Resident",
            location: "New York, NY",
            startDate: "2013",
            endDate: "2013",
            description: [
                "Selected for a competitive programming residency (70 accepted from 700+ applicants worldwide)",
                "Explored game development and backend JavaScript with Node.js, building foundational development skills",
                "Gained practical understanding of making and handling HTML requests (AJAX) and working with web APIs",
                "Focused on rapid learning, experimentation, and collaboration within a peer-driven environment"

            ],
            links: {
                "Recurse Center": "https://www.recurse.com",
            }

        }
    ]
};

export default resumeData;