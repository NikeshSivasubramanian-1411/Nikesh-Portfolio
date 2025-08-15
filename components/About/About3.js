const About3 = ({ sectionRef, MENULINKS }) => {
  return (
    <section
      className="w-full relative select-none py-20"
      ref={sectionRef}
      id={MENULINKS?.[1]?.ref || "about"} // corrected iid -> id
    >
      <div className="section-container flex flex-col md:flex-row items-start md:items-center gap-12">
        
        {/* Profile Photo - Bigger like before */}
        <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg flex-shrink-0 mt-20">
          <img
            src="/images/profile.jpg" // ensure the image exists in public/images/
            alt="Nikesh S"
            className="w-full h-full object-cover"
          />
        </div>

        {/* About Text */}
        <div className="flex flex-col justify-center">
          
          {/* Heading */}
          <h1 className="text-6xl font-medium text-gradient w-fit staggered-reveal">
            About Me
          </h1>

          {/* Paragraph */}
          <h2 className="text-[1.65rem] font-medium leading-relaxed text-gray-300 max-w-[65ch] w-full mt-4 staggered-reveal">
            I am a passionate and dedicated Computer Science and Engineering student with a strong foundation in cybersecurity 
            and a working knowledge of full-stack development. With hands-on experience in securing systems, understanding 
            cyber threats, and basic web development using modern technologies, I bring a problem-solving mindset and a 
            continuous learning attitude. I am eager to contribute to innovative tech-driven environments and grow as a 
            cybersecurity professional while enhancing my development skills.
          </h2>
        </div>

      </div>
    </section>
  );
};

export default About3;
