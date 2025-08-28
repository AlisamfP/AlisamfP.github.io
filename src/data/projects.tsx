import type { Project } from "../types/project-types";

export const projectData = (): Project[] =>
    [
        {
            id: "open-flow",
            title: "Open Flow",
            subtitle: "Open-source AAC Communication Card Web App",
            description:
                "Open Flow is a free, open-source communication tool for people with speech or language challenges. Originally developed as my senior project, it was inspired by my own use of physical communication cards and how often I lose them. The app offers a digital version with customizable cards and text-to-speech support. It’s built with React and TypeScript, and designed with autistic users in mind.",
            github: "https://github.com/AlisamfP/openflow",
            projectLink: "https://alisa.palson.info/OpenFlow/",
            background:
                "AAC, or Augmentative and Alternative Communication, refers to all the ways people communicate without speaking. Many who have trouble communicating use AAC tools like picture boards with images and words to help express themselves. Open Flow is a digital version of an AAC tool I personally use: communication cards. It's a web app where users can click on cards to speak phrases out loud using text-to-speech. Users can favorite commonly used cards, create their own cards, adjust voice settings, or switch to an audio off mode where the cards display full screen instead. As an autistic adult, this project is personal to me, and that perspective influenced the design's focus on comfort, clarity, and reducing sensory overload.",
            problem:
                "Many AAC apps either lean heavily towards childlike design, or are on the opposite end of the spectrum, with designs that feel clinical and are lacking any personality whatsoever. Many are also expensive, restricted by proprietary systems, or limited in functionality. This makes it hard for autistic teens and adults to find tools that feel good to use and meet their needs. I set out to create an open source, low-stimulation AAC app that feels accessible, flexible, and designed with autistic users in mind.",
            process:
                "I started by researching existing AAC devices and apps to understand what common phrases and features users need most. The research I did into autistic design best practices helped influence the soft color palette, layout conventions, and font choice. After sketching a few different wireframe options, I chose a layout and created a mockup.<br>For the initial version, submitted as my senior project, the app was built using HTML, CSS, and JavaScript, and development focused on building core functionality first before moving on to styling. To simplify functionality for dropdowns, tabs, and menus, I utilized multiple jQuery plugins and widgets. I also used localStorage to save user preferences and custom cards. I selected OpenMoji, an open source emoji set, for card icons as its open nature aligned with the project's ethos. Due to the project's short timeline, I opted for a simpler tech stack, though I always believed the app would benefit from a component based framework.<br>So, after completing the initial version, I started on version 2 which I rebuilt in React with TypeScript and Vite. I initially used Tailwind CSS to manage styling but later switched to Material UI for ease of use and to maintain consistency with familiar design patterns that create a predictable and calming experience. I also replaced ResponsiveVoice, which I had used for text-to-speech, with the built-in JavaScript Web Speech API. Throughout development, I took an iterative, modular approach, focusing on one feature at a time and making sure each part was fully functional before moving on.",
            results:
                "The Open Flow project has been a rewarding learning experience that allowed me to deepen my skills with React, TypeScript, and Material UI, as well as explore Vite as a modern build tool. The app functions well and meets the goals I set out at the start, with positive feedback from users reinforcing its accessibility and design approach. Development is ongoing as I continue to refine and expand its capabilities. I am proud of how the project reflects both my personal experience and technical growth, and I look forward to building on it in the future.",
            images: [
                {
                    link: "./images/openFlow/openflow-desktop-light-v2-hero.png",
                    alt: "screen shot of Open Flow home page with muted green accents, navigation bar at top with custom cards, settings, and about links, along with an volume icon button to toggle audio mode and a sun to toggle dark mode and indicate its in light mode. cards are shown beneath the corresponding category.",
                    description:
                        "v2 home page in light mode",
                    isHeroImage: true,
                },
                {
                    link: "./images/openFlow/openflow-desktop-custom-v2.png",
                    alt: "Screenshot of the Open Flow version 2 custom card creation page",
                    description: "v2 custom card creation page"
                },
                {
                    link: './images/openFlow/openflow-mobile-dark-v2.png',
                    alt: "screenshot showing the mobile version of the open flow web app in dark mode",
                    description: "v2 mobile dark mode"
                },
                {
                    link: "./images/openFlow/openflow-settings-desktop-v2-dark.png",
                    alt: "screenshot of the open flow version 2 settings page in dark mode",
                    description: "v2 settings dark mode"
                },
                {
                    link: "./images/openFlow/openflow-desktop-light-v1.png",
                    alt: "Screenshot of the Open Flow version 1.0 web app home page in light mode showing a grid of cards.",
                    description: "v1 home page in light mode",
                },
                {
                    link: "./images/openFlow/openflow-desktop-dark-v1.png",
                    alt: "Screenshot of the Open Flow version 1.0 web app home page in dark mode showing a grid of cards",
                    description: "v1 home page in dark mode",
                },
                {
                    link: "./images/openFlow/customCard-light-desktop.png",
                    alt: "Screenshot of the Open Flow web app custom card creation page in light mode showing a form to create a custom card with fields for text, icon, and color",
                    description:
                        "v1 Custom Card creation page in light mode",
                },
            ],
        },
        {
            id: "react-rally",
            title: "React Rally Conference Collateral",
            subtitle: "Capturing the spirit of a developer community",
            description:
                "This speculative project involved designing a cohesive set of print and digital materials for React Rally, a community-focused developer conference. I created an event program, attendee badge, table tent signage, and a web ad for future promotion. The goal was to balance a friendly, inclusive tone with professional clarity across all formats. Working primarily in Adobe InDesign, I focused on strong layout design, brand consistency, and organizing complex content in an accessible way. The project was completed on time and well-received by peers.",
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
                    link: "./images/reactRally/badge-front-and-back.jpg",
                    alt: "Two badge mockups, one of the front and one of the back. The badge  is an illustration of a mountain range with green and grey hues for the mountain, and a orange sun peaking over the edge. There are trees in the foreground. The front of the badge says React Rally 2024 near the top, with the name, job title, employer, and social media handle underneath. The back of the badge shows a qr code in the bottom right corner with a call to view the schedule above it",
                    description: "Mockup of the badge design",
                },
                {
                    link: "./images/reactRally/event-program-front-and-back.jpg",
                    alt: "Mockup of the outside of the event program, showing a booklet opened face down showing an illustrated mountain with trees in the foreground and React Rally 2024 on the right side",
                    description: "Mockup for the event program's front and back design",
                    isHeroImage: true,

                },
                {
                    link: "./images/reactRally/schedule-page-mockup.jpg",
                    alt: "Mockup of an event program against a blank white background showing an open page with dark green top and bottom borders, showing a schedule for August 12th with events next to their respective time slots and names under talk names",
                    description:
                        "Mockup of one of the days' schedule in the event program",
                },
                {
                    link: "./images/reactRally/table-tent-mockup.jpg",
                    alt: "mockup showing both sides of a table tent with one side having an illustrated mountain with bikers and the text 'Start your day enjoying nature' above and 'Join us everyday at 6am for a morning bike ride, hike, or trail run.' as text below. The other side of the table tent is mainly white with a large 'Join the Slack!' call to action, and a qr code inside of a large React icon.",
                    description: "Mockup of the table tent design",
                },
                {
                    link: "./images/reactRally/talk-summary-and-workshop-mockup.jpg",
                    alt: "Mockup of an event program against a blank white background showing an open page with light green/teal top and bottom borders and a talk summaries page on the left, and workshops page on the right",
                    description: 'Mockup of the "Talk Summaries" and "Workshops" spread',
                },
                {
                    link: "./images/reactRally/speakers-page-mockup.jpg",
                    alt: "Mockup of an event program against a blank white background showing an open page with a red border around the entire spread and images of the various speakers shown along with their name and title",
                    description: 'Mockup of the "Speakers" spread',
                },
            ],
        },
        {
            id: "pokedex",
            title: "PokeDex Web App",
            subtitle: "GOTTA CATCH EM ALL",
            description:
                "A fan-made digital Pokédex that lets users browse, search, and save Pokémon to their own team. Originally built with HTML, CSS, and jQuery, it uses the PokéAPI to pull real-time data and includes features like autocomplete search, sprite slideshows, and stat tabs. Inspired by the classic game interface, the project combines nostalgic design with smooth, modern functionality.",
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
                    link: "./images/pokedex/weedle-searchbynum-dualtype1000x850.png",
                    alt: "Screenshot of the pokedex website showing the number 13 entered into the search bar and Weedle as the pokemon in the viewer",
                    description:
                        "Screenshot highlighting search by id number functionality",
                    isHeroImage: true,
                },
                {
                    link: "./images/pokedex/remove-from-team1000x850.png",
                    alt: "Screenshot of the pokedex website showing a 'Remove From Team' dialog popup with a confirm or cancel option",
                    description: "Screenshot showing remove from team dialog box",
                },
                {
                    link: "./images/pokedex/psyduck1000x850.png",
                    alt: "Screenshot of the pokedex website showing Psyduck being searched in the search bar and also being visible in the pokedex viewer",
                    description: "Screenshot showing pokemon name search",
                },
                {
                    link: "./images/pokedex/pokedex-error-screenshot1000x850.png",
                    alt: "Screenshot of the error page showing a 404 status code in the sprite viewer, looking like the 404 is a pokemon, and the viewer showing a pokemon with the text 'Uh oh! No pokemon found.'",
                    description: "Screenshot of the error page",
                },
            ],
        },
        {
            id: "baselayer",
            title: "Baselayer Static Site Build",
            subtitle: "Contributing to a thoughtful, design-forward company",
            description:
                "Contracted to build a responsive static page from a Figma design for Nopal Build, a company focused on sustainable architecture. I wrote clean, semantic HTML and CSS that matched the design and was ready for integration into their React app. This project was a great opportunity to support a mission I care about while honing my front-end build skills.",
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
                    alt: "Screenshot of the finished baselayer webpage",
                    description: "Screenshot of the finished baselayer webpage",
                },
            ],
        },
    {
  id: "javascript-logo-animation",
  title: "JavaScript Logo Animation",
  subtitle: "Motion Graphic Project",
  description:
    "A 10-second motion graphic animation showing the creation of the JavaScript logo inside a graphic editor. Designed as a class project for GIT 314 at Arizona State University, the animation is a visual 'love letter' to the JavaScript community, blending iterative design concepts with the collaborative spirit of open source.",
  github: "https://github.com/AlisamfP/js-logo-animation", 
  projectLink: "https://alisa.palson.info/js-logo-animation/", 
  background:
    "Created for GIT 314: Multimedia Design, Planning, and Storyboarding at ASU, this project focused on motion graphics and storytelling through animation. The JavaScript logo used in the animation is an open-source design gifted to the community by JSConf. The color palette features bright yellow and dark grey, mirroring the original logo.",
  problem:
    "The goal was to produce a 10-second animation of the JavaScript logo being created in a graphic editor, visually representing the iterative and experimental nature of JavaScript development. The animation needed to be engaging, on-brand, and conceptually tied to the open-source spirit of the community.",
  process:
    "I began by conceptualizing the animation as a simulation of building the JavaScript logo in an editing program. I storyboarded the sequence: drawing a rectangle, filling it with yellow, adding the 'JS' text, and applying subtle cursor interactions to reflect user input. Assets were created in Adobe Photoshop (background) and Illustrator (cursors: pointer, crosshair, and paint bucket). The first animation pass revealed uneven timing, so I adjusted transition pacing, refined cursor click animations, and improved text alignment. The iterative adjustments mirrored JavaScript's own process of refinement and experimentation.",
  results:
    "The final animation delivers a clean, engaging visual narrative that reflects JavaScript’s culture of collaboration and iteration. Timing improvements and cursor animations enhanced the realism and flow. This project deepened my skills in motion graphics, asset creation, and animation timing. In the future, I plan to recreate this animation entirely in JavaScript to push the concept even further.",
  images: [
    {
        link: './images/jsLogo/jslogo.png',
        alt: 'Yellow square logo with black bold "JS" in its bottom right corner',
        description: "The JavaScript logo gifted to the community by JSConf"
    },
    {
        link: "./images/jsLogo/storyboard.JPG",
        alt: "photo of a paper with sketches on it",
        description: "Animation storyboard"
    },
    {
        link: './images/jsLogo/background.png',
        alt: "illustration of a generic graphic editor program",
        description: "background illustration"
    },
    {
        link: './images/jsLogo/crosshair.webp',
        alt: "crosshair logo illustration",
        description: "crosshair illustration"
    },
    {
        link: './images/jsLogo/cursor.webp',
        alt: "cursor illustration",
        description: "cursor illustration"
    },
    {
        link: './images/jsLogo/fillBucket.webp',
        alt: "fill bucket illustration",
        description: "fill bucket illustration"
    }
  ]
}

    ] as Project[];
