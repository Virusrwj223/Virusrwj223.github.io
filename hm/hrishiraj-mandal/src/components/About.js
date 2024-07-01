import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";
import avatar from "../assets/coding-man.png";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-coding bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About Me</h2>
            <h3 className="h3 mb-4">VIRTUALISING THE WORLD A STEP EVERYDAY</h3>
            <p className="mb-6">
              Where was I? Right, computing <br />
              <br />
              Currently, I am studying Computer Science at NUS where I am
              constantly surounded by highly motivated peers and professors! My interests 
              are in abstracts topics namely cloud systems, parallel processes and cybersecurity, 
              the underlying processes needed in this new age-AI.
              <br />
              <br />
              My insterests in such abstract matter began back in high school when 
              I was in the prestigious Victoria-Cedar Integrated Program that allowed 
              me to sit for the GCE A Levels directly for which I had attained full
              distinction 90/90RP. I had taken part in the 2019 Singapore
              Physics Olympiad and studied H3 Chemistry for my GCE A-Levels, a
              grade higher than most of my peers.
              <br />
              <br />
              Oh yes! My learning interests goes beyond just textbook material.
              I have this sort of Ok-Raj(OKR) where I evaluate how I had done
              over the past 3 months and plan my goals for the next 3 months.
              This model had allowed me to master many skills over the years
              such as achieving First Dan (Black Belt Grade 1) for Taekwondo as
              well as ABRSM Grade 6 Piano. As they say, routine is the enemy! 
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient">
                  {inView ? <CountUp start={0} end={6} duration={4} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Months of <br />
                  Internship Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient">
                  {inView ? <CountUp start={0} end={3} duration={1} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Major Personal <br />
                  Projects
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient">
                  {inView ? <CountUp start={0} end={1} duration={1} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Hackathon <br />
                  Winner
                </div>
              </div>
            </div>
            {/* <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">
                <Link to="contact" smooth={true}>
                  Contact Me
                </Link>
              </button>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
