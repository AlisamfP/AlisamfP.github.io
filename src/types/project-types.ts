export interface Project {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    heroImage: Image;
    github: string;
    projectLink: string;
    background: string;
    problem: string;
    process: string;
    results: string;
    images: Image[];
}

export interface Image {
    link: string;
    alt: string;
    description: string;
}