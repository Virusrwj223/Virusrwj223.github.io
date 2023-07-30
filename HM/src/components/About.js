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
            <h3 className="h3 mb-4">
              A computing student with a strong interest in fiancne
            </h3>
            <p className="mb-6">
              Where was I? Right, I love studying <br />
              <br />
              Back in high school, I was in the prestigious Victoria-Cedar
              Integrated Program which allowed me to bypass the GCE O Lvels and
              sit for the GCE A Levels directly for which I had attained full
              distinction 90/90RP. I had taken part in the 2019 Singapore
              Physics Olympiad and studied H3 Chemistry for my GCE A-Levels, a
              grade higher than mostof my peers.
              <br />
              <br />
              Currently, I am studying Computer Science at NUS where I am
              constantly surounded by highly motivated peers and professors!
              <br />
              <br />
              Oh yes! An interesting fact about myself is that if I had not
              studied computing, I would have probably studied fiance (yet it
              seems that one interest trumped the other). As such, many of my
              personal projects revolves around understanding fianncial markets
              better or simulating efficiency in such markets. Scroll down to
              check them out!
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
                  {inView ? <CountUp start={0} end={2} duration={1} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Major Personal <br />
                  Projects
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">
                <Link to="contact" smooth={true}>
                  Contact Me
                </Link>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
