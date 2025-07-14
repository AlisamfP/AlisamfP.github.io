export interface Root {
    projects: Project[];
}

export interface Project {
    id: string;
    title: string;
    subtitle: string;
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

export const projectData = {
    projects: [
        {
            id: "react-rally",
            title: "React Rally Conference Collateral",
            subtitle: "Capturing the spirit of a developer community",
            github: "",
            projectLink:
                "https://indd.adobe.com/view/e1d0711c-0a2c-4f40-8c1a-08e5b57c4af8",
            background:
                "React Rally is a two-day developer conference held in Park City, Utah, centered around the React ecosystem. It places a strong emphasis on community, inclusivity, and creating a friendly atmosphere. The event features engaging talks from both first-time and experienced speakers, and encourages meaningful connections between attendees.",
            problem:
                "The conference needed printed and digital collateral that reflected its friendly, community-driven tone while remaining clear, professional, and easy for attendees to navigate. The challenge was to balance personality with practicality across a variety of formats.",
            process:
                "I started by gathering all the information needed and determining the color scheme of the project. After that I began sketching out layouts for the booklet, badge, and table tent sign. Then I started working in Adobe InDesign to lay out the event program booklet. After the booklet was done, I began working on the badge and table tent. Finally, I made the web ad for next year’s event.",
            results:
                "Although this was a speculative project, it successfully met my goal of designing a complete and cohesive visual system for an event. It gave me the chance to practice organizing large amounts of content into a clear, readable, and visually engaging layout. I completed it on time, got positive feedback from peers, and was proud of how it strengthened my skills in layout and brand consistency.",
            images: [
                {
                    link: "./images/badge-front-and-back.jpg",
                    alt: "Two badge mockups, one of the front and one of the back. The badge  is an illustration of a mountain range with green and grey hues for the mountain, and a orange sun peaking over the edge. There are trees in the foreground. The front of the badge says React Rally 2024 near the top, with the name, job title, employer, and social media handle underneath. The back of the badge shows a qr code in the bottom right corner with a call to view the schedule above it",
                    description: "Mockup of the badge design",
                },
                {
                    link: "./images/event-program-front-and-back.jpg",
                    alt: "Mockup of the outside of the event program, showing a booklet opened face down showing an illustrated mountain with trees in the foreground and React Rally 2024 on the right side",
                    description: "Mockup for the event program's front and back design",
                },
                {
                    link: "./images/schedule-page-mockup.jpg",
                    alt: "Mockup of an event program against a blank white background showing an open page with dark green top and bottom borders, showing a schedule for August 12th with events next to their respective time slots and names under talk names",
                    description:
                        "Mockup of one of the days' schedule in the event program",
                },
                {
                    link: "./images/table-tent-mockup.jpg",
                    alt: "",
                    description: "Mockup of the table tent design",
                },
                {
                    link: "./images/talk-summary-and-workshop-mockup.jpg",
                    alt: "",
                    description:
                        'Mockup of the "Talk Summaries" and "Workshops" spread',
                },
                {
                    link: "./images/speakers-page-mockup.jpg",
                    alt: "",
                    description: 'Mockup of the "Speakers" spread',
                },
            ],
        },
        {
            id: "pokedex",
            title: "PokeDex Web App",
            subtitle: "GOTTA CATCH EM ALL",
            github: "https://github.com/AlisamfP/pokedex",
            projectLink: "http://alisa.palson.info/pokedex/",
            background:
                "Inspired by the iconic Pokédex from the Pokémon games, I set out to build a web app that lets users explore, search, and save Pokémon to their personal team. The goal was to combine nostalgic design with modern functionality, creating an interactive site that feels like a digital Pokédex brought to life.",
            problem:
                "With over 1,000 Pokémon, navigating such a large dataset can be overwhelming. I needed to design a clean, user-friendly interface that made browsing and searching intuitive, while staying true to the look and feel of the original Pokédex.",
            process:
                "I researched various Pokédex styles and the <a href='https://pokeapi.co/' target='_blank'>PokéAPI</a>, then created mockups to guide the layout and aesthetic. I built the site structure using HTML and CSS, then integrated the API to pull real-time Pokémon data. Using jQuery, I added features like sprite slideshows, stat tabs, autocomplete search, and team-saving functionality. Much of my focus went into polishing the visuals to make the site feel dynamic and engaging.",
            results:
                "This was such a fun project. The final site closely matched my original vision. Users responded positively, noting how easy and fun it was to explore and build teams. I was proud of how well it balanced design and function, and how smoothly the development stayed on track.",
            images: [
                {
                    link: "./images/weedle-searchbynum-dualtype1000x850.png",
                    alt: "",
                    description: "Screenshot highlighting search by id number functionality",
                },
                {
                    link: "./images/remove-from-team1000x850.png",
                    alt: "",
                    description: "Screenshot showing remove from team dialog box",
                },
                {
                    link: "./images/psyduck1000x850.png",
                    alt: "",
                    description: "Screenshot showing pokemon name search",
                },
                {
                    link: "./images/pokedex-error-screenshot1000x850.png",
                    alt: "",
                    description: "Screenshot of the error page",
                },
            ],
        },
        {
            id: "baselayer",
            title: "Baselayer Static Site Build",
            subtitle: "Contributing to a thoughtful, design-forward company",
            github: "https://github.com/AlisamfP/baselayer",
            projectLink: "https://alisa.palson.info/baselayer",
            background:
                "This project came through a small contract with <a href='https://nopal.build/' taget='_blank'>Nopal Build</a>, a company focused on sustainable building practices. I was brought on to turn a Figma file into a working HTML/CSS page. Even though it was just a single static page, I was excited to help out. Nopal’s focus on sustainability and thoughtful design really resonates with me. I’m always drawn to projects that try to make the world (and the web) a little better, and this was one of them.",
            problem:
                "The team at Nopal Build needed a static webpage built from a Figma design that could later be integrated into their React application as individual components. Because it would become part of a larger layout, the page didn’t include global elements like a header or footer, just the core content structure. The goal was to create clean, modular HTML and CSS that closely matched the design while being easy for the development team to reuse and extend within their component-based system.",
            process:
                "I started by breaking the layout into sections and figuring out how to handle spacing and hierarchy based on the visual design. I used semantic HTML and vanilla CSS to keep the code clean and easy to integrate. Along the way, I made sure things looked good on different screen sizes, and added a few small touches to keep the site feeling smooth and polished. I also kept accessibility in mind as I built it out.",
            results:
                "The final site matches the overall intent of the design and works well across devices. I learned a lot about interpreting design files and navigating the gray areas between visual design and code. It was a great chance to practice working from a real-world handoff and contribute to a project that aligns with my values.",
            images: [
                {
                    link: "./images/baselayer-screenshot.png",
                    alt: "",
                    description: "Screenshot of the finished baselayer webpage",
                },
            ],
        },
    ],
};
