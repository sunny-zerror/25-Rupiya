import React from "react";
const About = () => {
    return (
        <>
            <div className=" text-center space-y-10 pt-32 ">
                <p className="font-thin uppercase pp_neue text-sm">About us</p>
                <p className="text-4xl ">25 Rupiya<span className="bg-pattern inline-flex w-16  p-3  mx-1"><svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="30" cy="30" r="30" fill="#FECC33"></circle> </svg></span>Productions is a <span className="bg-pattern"> small team      of</span> <br />
                    directors,  <span className="bg-pattern inline-flex w-16  p-3  mx-1"><svg viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M27 27L0 54V0L27 27Z" fill="#21935b"></path> <path d="M54 27L27 54V0L54 27Z" fill="#21935b"></path> </svg></span>editors, and AI tinkerers.   Founded in 2023, <br />we blend Bollywood-style visuals with modern AI <span className="bg-pattern inline-flex p-2">✨</span> creativity <br /> to <span className="bg-pattern"> create</span> powerful content <span className="bg-pattern inline-flex  p-2">🎬</span> without massive budgets.</p>
            </div>
        </>
    );
}

export default About