import React from 'react';
import portrait from '../assets/meow-wolf-portrait.jpg'
import { Button } from '@headlessui/react';

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
            <div className="flex justify-between">
                <Button className='flex items-center rounded gap-1 py-2 text-stone-900 data-hover:bg-[#006666] data-hover:text-stone-100'>
                    <TbBrandGithub className='text-3xl'/>
                    View My Github
                </Button>
                <Button className='flex items-center flex-row-reverse rounded gap-1 py-2 text-stone-900 data-hover:bg-[#006666] data-hover:text-stone-100'>
                    <TbFolderHeart className='text-3xl'/>
                    View My Portfolio
                </Button>
            </div>
            <section className='about-me grid grid-cols-2'>
                <h2>Hello There!</h2>
                <p>The name's Alisa (pronounced uh-lee-suh)</p>
                <p>currently: <span>seeking employment</span></p>
                <p>I’m a loud mouthed lover of cats, code, and creativity. I’m passionate about intuitive design, free and open source software and accessibility.</p>
                <p>In my free time I love playing video games and being out in nature. If it’s raining, I’m outside.</p>
                <img src={portrait} alt="" className="w-80 col-[1/2] row-[1/6]" />
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