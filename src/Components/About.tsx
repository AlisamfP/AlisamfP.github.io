import React from "react";

import {
  TbBrandAdobeIndesign,
  TbBrandAdobeIllustrator,
  TbBrandJavascript,
  TbBrandGithub,
  TbBrandReact,
  TbBrandVite,
  TbBrandTypescript,
  TbBrandFigma,
  TbBrandTailwind,
} from "react-icons/tb";

import TopActionButtons from "./TopActionButtons";

type AboutProps = {
  onNavigate: (section: "about" | "projects" | "contact") => void;
};

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const button1 = {
    name: "github",
    link: "https://github.com/alisamfp",
    text: "View my GitHub",
  };
  const button2 = {
    name: "portfolio",
    link: "",
    text: "View my Portfolio",
  };
  return (
    <div className="about-page h-full grow flex flex-col gap-4">
      <TopActionButtons
        button1={button1}
        button2={button2}
        onNavigate={onNavigate}
      />
      <section className="about-me -mt-2 md:px-2 flex flex-col md:block">
        <img
          src="./images/meow-wolf-portrait.jpg"
          alt=""
          className="w-full md:max-w-[300px] h-auto mb-4 md:mb-2 md:float-left md:mr-4 order-5 md:order-none"
        />

        <h2 className="font-bold text-3xl order-1 md:-mt-1">Hello There!</h2>
        <p className="text-2xl leading-tight order-2">
          The name's Alisa{" "}
          <span className="text-xs block lg:inline -mt-0.5">
            (pronounced&nbsp;uh-lee-suh)
          </span>
        </p>

        <p className="order-3 md:order-none pt-1">
          I’m a front-end developer and part time designer with a background in
          full-stack JavaScript and a B.S. in Graphic Information Technology. I
          specialize in building accessible, inclusive user experiences with
          modern tools like React, TypeScript, Tailwind CSS, and Material UI.
        </p>
        <p className="order-4 md:order-none">
          I'm a{" "}<a
            className="no-underline text-[#003333] border-b-2 border-transparent hover:border-[#003333]"
            href="https://www.recurse.com/"
          >
            Recurse Center
          </a>{" "}
          alum, magna cum laude graduate, and passionate advocate for open
          source, intuitive design, and community-focused technology.
        </p>
        {/* <p className="md:col-span-full lg:col-start-2">
          In my free time I love playing video games and being out in nature. If
          it’s raining, I’m outside.
        </p> */}
      </section>
      <section className="about-experience rounded-md md:p-2 flex flex-col gap-2">
        <h2 className="font-bold text-2xl">Experience</h2>
        <div className="flex flex-col gap-2">
          <p>
            I spent three years at{" "}
            <a
              className="no-underline text-[#003333] border-b-2 border-transparent hover:border-[#003333]"
              href="https://octoblu.com"
            >
              Octoblu
            </a>{" "}
            as a full-stack JavaScript engineer, building secure, scalable IoT
            systems in an agile, test-driven environment. The company was
            acquired by Citrix shortly after I joined. Our platform combined a
            proprietary drag-and-drop automation interface with an open source
            mesh communication network. I contributed across the stack, working
            on REST APIs, authentication flows, and internal developer tools.
            The team was always exploring new technologies and focused on
            continuous improvement. We started with Angular but later
            transitioned to React, where I did most of my front-end work.
          </p>
          <p>
            In 2013, I attended{" "}
            <a
              className="no-underline text-[#003333] border-b-2 border-transparent hover:border-[#003333]"
              href="https://www.recurse.com/"
            >
              Recurse Center
            </a>
            , a self-directed programming retreat that had a lasting impact on
            both my technical growth and how I collaborate with others. It
            deepened my love for learning and helped shape the way I show up in
            teams. The spirit of “never graduate” still guides how I approach my
            work and growth.
          </p>
          <p>
            I volunteer with{" "}
            <a
              className="no-underline text-[#003333] border-b-2 border-transparent hover:border-[#003333]"
              href="https://heatsynclabs.org/"
            >
              HeatSync Labs
            </a>
            , where I host community events and lead tours of our makerspace.
          </p>
        </div>
      </section>
      <section className="about-skills flex flex-col gap-2 rounded-md md:p-2">
        <h2 className="font-bold text-2xl">Skills and Technologies</h2>
        <section className="grid grd-cols-1 md:grid-cols-[2fr_1fr] items-center">
          <h3 className="col-span-full font-semibold">re: Design</h3>
          <p>
            My academic background and project work include both print and UI
            design. I’m experienced with Adobe Illustrator, InDesign, Photoshop,
            and Figma.
          </p>
          <dl className="flex flex-row md:grid md:grid-cols-3 gap-4 md:col-[2/3] justify-evenly text-3xl p-1">
            <div className="flex flex-col items-center text-center">
              <dt className="sr-only">Adobe InDesign</dt>
              <dd>
                <TbBrandAdobeIndesign aria-label="Adobe InDesign" />
              </dd>
            </div>
            <div className="flex flex-col items-center text-center">
              <dt className="sr-only">Adobe Illustrator</dt>
              <dd>
                <TbBrandAdobeIllustrator aria-label="Adobe Illustrator" />
              </dd>
            </div>
            <div className="flex flex-col items-center text-center">
              <dt className="sr-only">Figma</dt>
              <dd>
                <TbBrandFigma aria-label="Figma" />
              </dd>
            </div>
          </dl>
        </section>
        <section className="grid grd-cols-1 md:grid-cols-[2fr_1fr] items-center">
          <h3 className="col-span-full font-semibold">re: Development</h3>
          <p>
            I enjoy building responsive, accessible user interfaces with modern
            tools. I'm most comfortable working with TypeScript, React, Tailwind
            CSS, and Material UI. I also have experience with Node.js, Vite, and
            Git-based workflows.
          </p>

          <dl className="flex flex-row md:grid md:grid-cols-3 gap-4 md:col-[2/3] justify-evenly text-3xl p-1">
            <div className="flex flex-col items-center text-center">
              <dt className="sr-only">JavaScript</dt>
              <dd className="">
                <TbBrandJavascript aria-label="JavaScript" />
              </dd>
            </div>
            <div className="flex flex-col items-center text-center">
              <dt className="sr-only">TypeScript</dt>
              <dd className="">
                <TbBrandTypescript aria-label="Typescript" />
              </dd>
            </div>
            <div className="flex flex-col items-center text-center">
              <dt className="sr-only">React</dt>
              <dd>
                <TbBrandReact aria-label="React" />
              </dd>
            </div>
            <div className="flex flex-col items-center text-center">
              <dt className="sr-only">Tailwind CSS</dt>
              <dd>
                <TbBrandTailwind aria-label="Tailwind CSS" />
              </dd>
            </div>

            <div className="flex flex-col items-center text-center">
              <dt className="sr-only">Vite</dt>
              <dd>
                <TbBrandVite aria-label="Vite" />
              </dd>
            </div>
            <div className="flex flex-col items-center text-center">
              <dt className="sr-only">GitHub</dt>
              <dd>
                <TbBrandGithub aria-label="GitHub" />
              </dd>
            </div>
          </dl>
        </section>
      </section>
    </div>
  );
};

export default About;
