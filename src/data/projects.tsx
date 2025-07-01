export interface Root {
  projects: Project[]
}

export interface Project {
  id: string
  title: string
  subtitle: string
  github: string
  projectLink: string
  background: string
  problem: string
  process: string
  results: string
  images: Image[]
}

export interface Image {
  link: string
  alt: string
  description: string
}

export const projectData = {
    "projects": [
        {
            "id": "react-rally",
            "title": "React Rally Conference Collateral",
            "subtitle": "Capturing the spirit of a developer community",
            "github": "",
            "projectLink": "",
            "background": "React Rally is a two-day developer conference held in Park City, Utah, centered around the React ecosystem. It places a strong emphasis on community, inclusivity, and creating a friendly atmosphere. The event features engaging talks from both first-time and experienced speakers, and encourages meaningful connections between attendees.",
            "problem": "The conference needed printed and digital collateral that reflected its friendly, community-driven tone while remaining clear, professional, and easy for attendees to navigate. The challenge was to balance personality with practicality across a variety of formats.",
            "process": "I started by gathering all the information needed and determining the color scheme of the project. After that I began sketching out layouts for the booklet, badge, and table tent sign. Then I started working in Adobe InDesign to lay out the event program booklet. After the booklet was done, I began working on the badge and table tent. Finally, I made the web ad for next year’s event.",
            "results": "Although this was a speculative project, it successfully met my goal of designing a complete and cohesive visual system for an event. It gave me the chance to practice organizing large amounts of content into a clear, readable, and visually engaging layout. I completed it on time, got positive feedback from peers, and was proud of how it strengthened my skills in layout and brand consistency.",
            "images": [
                {
                    "link": "/badge-front-and-back.jpg",
                    "alt": "",
                    "description": "Mockup of the badge design"
                },
                {
                    "link": "/event-program-front-and-back.jpg",
                    "alt": "",
                    "description": "Mockup for the event program's front and back design"
                },
                {
                    "link": "/schedule-page-mockup.jpg",
                    "alt": "",
                    "description": "Mockup of one of the schedule pages in the event program"
                },
                {
                    "link": "/table-tent-mockup.jpg",
                    "alt": "",
                    "description": "Mockup of the table tent design"
                },
                {
                    "link": "/talk-summary-and-workshop-mockup.jpg",
                    "alt": "",
                    "description": "Mockup of a spread in the event program showing the talk summaries and workshop description pages"
                },
                {
                
                    "link": "/speakers-page-mockup.jpg",
                    "alt": "",
                    "description": "Mockup showing the speakers page in the event program"
                }
            ]
        },
        {
            "id": "pokedex",
            "title": "PokeDex Web App",
            "subtitle": "GOTTA CATCH EM ALL",
            "github": "",
            "projectLink": "",
            "background": "Inspired by the iconic Pokédex from the Pokémon games, I set out to build a web app that lets users explore, search, and save Pokémon to their personal team. The goal was to combine nostalgic design with modern functionality, creating an interactive site that feels like a digital Pokédex brought to life.",
            "problem": "With over 1,000 Pokémon, navigating such a large dataset can be overwhelming. I needed to design a clean, user-friendly interface that made browsing and searching intuitive, while staying true to the look and feel of the original Pokédex.",
            "process": "I researched various Pokédex styles and the PokéAPI, then created mockups to guide the layout and aesthetic. I built the site structure using HTML and CSS, then integrated the API to pull real-time Pokémon data. Using jQuery, I added features like sprite slideshows, stat tabs, autocomplete search, and team-saving functionality. Much of my focus went into polishing the visuals to make the site feel dynamic and engaging.",
            "results": "The final site closely matched my original vision. Users responded positively, noting how easy and fun it was to explore and build teams. I was proud of how well it balanced design and function, and how smoothly the development stayed on track.",
            "images": [
                {
                    "link": "/weedle-searchbynum-dualtype1000x850.png",
                    "alt": "",
                    "description": "Screenshot highlighting search by id number functionality"
                },
                {
                    "link": "/remove-from-team1000x850.png",
                    "alt": "",
                    "description": "Screenshot showing remove from team dialog box"
                },
                {
                    "link": "/psyduck1000x850.png",
                    "alt": "",
                    "description": "Screenshot showing pokemon name search"
                },
                {
                    "link": "/pokedex-error-screenshot1000x850.png",
                    "alt": "",
                    "description": "Screenshot of the error page"
                }
            ]
        }
    ]
}