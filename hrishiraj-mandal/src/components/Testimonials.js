import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import sk from "../assets/SK.png";
import vjc from "../assets/Vjc.png";
import vjct from "../personal/VJCT.pdf";
import skt from "../personal/SK-general.pdf";

const testimonials = [
  {
    testimonial:
      "Hrishiraj showcased a rare combination of technical expertise and an unyielding willingness to learn.",
    name: "Surya Ravikumar",
    designation: "VP, Data & Strategy",
    company: "Smartkarma",
    image: sk,
    link: skt,
  },
  {
    testimonial:
      "[Hrishiraj] will pour time and effort into what he feels are worthwhile causes",
    name: "Liew Hui Min",
    designation: "Form Teacher",
    company: "Victoria Junior College",
    image: vjc,
    link: vjct,
  },
];

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  link,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="group p-10 overflow-hidden border-2 border-white/50 rounded-xl"
  >
    <p className="text-white font-black text-[48px]">"</p>
    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span>
            {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} of {company}
          </p>
        </div>
        <a href={link} target="_blank">
          <img
            src={image}
            alt=""
            className="w-10 h-10 rounded-full object-cover group-hover:scale-125 transition-all duration-500"
          />
        </a>
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => {
  return (
    <section className="section" id="testimonials">
      <div className="container mx-auto">
        <div className="mt-12 bg-black-100 rounded-[20px]">
          <div className="bg-tertiary rounded-2xl min-h-[300px]">
            <motion.div
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-2"
            >
              <h2 className="h2 text-accent mb-16">Testimonials</h2>
              <p className="text-secondary text-[16px] font-semibold">
                Here are some of the comments from the wonderful people whom I
                had the opportunity to work alongside with over the years.
              </p>
            </motion.div>
          </div>
          <div className="p flex-1 flex flex-col lg:flex-row gap-x-12 gap-y-7 mb-10 lg:mb-0">
            {testimonials.map((testimonial, index) => (
              <FeedbackCard
                key={testimonial.name}
                index={index}
                {...testimonial}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
