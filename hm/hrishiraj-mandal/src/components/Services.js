import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import {
  SiSolidity,
  SiPython,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiFirebase,
} from "react-icons/si";

const services = [
  {
    name: "BASA",
    description:
      "Blockchain based project that connects renters to landlords through the blockchain",
    link: "https://virusrwj223.github.io/BASA/",
    techStack: [
      <SiSolidity />,
      <SiPython />,
      <SiHtml5 />,
      <SiCss3 />,
      <SiJavascript />,
    ],
  },
  {
    name: "Hey Hitch",
    description:
      "Native app to connect people travelling to similar destinations",
    link: "https://appdistribution.firebase.dev/i/f78ff6c81cb2647a",
    techStack: [
      <SiReact />,
      <SiFirebase />,
    ],
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent mb-6">Personal Projects</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              Here are some of my personal Projects
            </h3>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              {services.map((service, index) => {
                const { name, description, link, techStack } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight mb-2">
                        {description}
                      </p>
                      <div className="flex flex-row flex-1">{techStack}</div>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href={link}
                        target="_blank"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a
                        href={link}
                        className="text-gradient text-sm"
                        target="_blank"
                      >
                        To {name}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
