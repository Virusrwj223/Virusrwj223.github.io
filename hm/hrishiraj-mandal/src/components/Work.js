import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { fadeIn } from "../variants";
import sk from "../assets/SK.png";
import army from "../assets/Army.png";

const experiences = [
  {
    title: "Data Analyst Intern",
    company_name: "Smartkarma",
    icon: sk,
    iconBg: "#383E56",
    date: "Feb 2023 - Jul 2023",
    points: [
      "Automating data retrieval for market analysis using Python and API processes",
      "Unlocking valuable insights for Product, UX, Product teams using SQl, Excel, Looker Studio and GA4",
      "Increasing Webinar Visibility and Engagement using Python, platform APIs, Sendgrid and Zapier",
      "Empowering the Research Team with Efficient Web Scraping",
      "Streamlining CXO Office Reporting using Python, SQL and Hubspot API",
    ],
  },
  {
    title: "Ground Engineer",
    company_name: "Singapore Armed Forces",
    icon: army,
    iconBg: "#E6DEDD",
    date: "Feb 2021 - Jan 2023",
    points: [
      "Repair and maintencance of vehicles",
      "Awarded Best Soldier in March 2022",
    ],
  },
];

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1"
        >
          <h2 className="h2 text-accent mb-6">Professional Expereinces</h2>
          <p className="p max-w-[455px] mb-16">
            Here are some of my professional expereinces where I have placed
            theory to work, understood what I wanted to do and most importantly
            learned #adulting
          </p>
        </motion.div>

        <div className="mt-20 flex flex-col">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Work;
