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
        development: ["JavaScript", "TypeScript", "React", "Tailwind CSS", "Semantic HTML", "CSS3", "Node", "Material UI", "Git"],
        design: ["Adobe InDesign", "Adobe Illustrator", "Figma"],
        additional: ["Accessibility (a11y/WCAG)", "Cross-Browser Testing", "Agile/Scrum"]
    },
    summary: "Front-end developer with a background in full-stack JavaScript and a B.S. in Graphic Information Technology. Recurse Center alum and magna cum laude graduate, dedicated to creating meaningful user experiences and supporting open source initiatives. Skilled in React, TypeScript, and Tailwind CSS with a strong foundation in graphic and UI design. Passionate about contributing to collaborative teams and building inclusive digital experiences.",
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
            company: "Recurse Center",
            role: "Software Engineering Resident",
            location: "New York, NY",
            startDate: "2013",
            endDate: "2013",
            description: [
                "Selected for a competitive programming residency (70 accepted from 700+ applicants worldwide)",
                "Explored game development and backend JavaScript with Node.js, building foundational development skills",
                "Gained practical understanding of making and handling HTML requests (AJAX) and working with web APIs",
                "Focused on rapid learning, experimentation, and collaboration within a peer-driven environment"

            ]

        }
    ]
};

export default resumeData;