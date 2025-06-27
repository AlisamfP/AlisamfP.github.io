import React from 'react';
import { 
    TbBrandGithub, 
    TbFolderHeart, 
    TbBrandAdobeIndesign, 
    TbBrandAdobeIllustrator, 
    TbBrandJavascript,
    TbBrandHtml5,
    TbBrandCss3,
    TbBrandReact,
    TbBrandVite
} from "react-icons/tb";


const About: React.FC = () => {
    return (
        <div className="about-page">
            <div>
                <button>
                    <TbBrandGithub />
                    View My Github
                </button>
                <button>
                    <TbFolderHeart />
                    View My Portfolio
                </button>
            </div>
            <section className='about-me'>
                <h2>Hello There!</h2>
                <p>The name's Alisa (pronounced uh-lee-suh)</p>
                <p>currently: <span>seeking employment</span></p>
                <p>I’m a loud mouthed lover of cats, code, and creativity. I’m passionate about intuitive design, free and open source software and accessibility.</p>
                <p>In my free time I love playing video games and being out in nature. If it’s raining, I’m outside.</p>
            </section>
            <section className='about-experience'>
                <h2>Experience</h2>
                <p>I previously worked at <a href="https://octoblu.com">Octoblu</a> as a software engineer for 3 years writing full stack JavaScript. Prior to that I have experience as a senior game advisor at GameStop an on-air personality with Geekssocciated Press and volunteering with HeatSync Labs.</p>
                <p>In 2013 I was accepted into Recurse Center for their Summer batch.</p>
            </section>
            <section className='about-skills'>
                <h2>Skills and Technologies</h2>
                <section>
                    <h3>re: Design</h3>
                    <p>I’m proficient in the Adobe suite of products, especially InDesign and Illustrator.</p>
                    <span>
                        <TbBrandAdobeIndesign />
                        <TbBrandAdobeIllustrator />

                    </span>
                </section>
                <section>
                    <h3>re: Development</h3>
                    <p>I prefer front-end and work with HTML, CSS, and JavaScript. This website was made with React, Vite.</p>
                    <span>
                        <TbBrandJavascript />
                        <TbBrandHtml5 />
                        <TbBrandCss3 />
                        <TbBrandReact/>
                        <TbBrandVite />
                    </span>
                </section>
            </section>
        </div>
    );
};

export default About;