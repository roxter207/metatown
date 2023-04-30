"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Metatown" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Metatown</span> it is
        a virtual world or metaverse that combines elements of
        of today, using only{" "}
        <span className="font-extrabold text-white">gaming, social
        media, and e-commerce </span>
        to create a unique and immersive experience for
        its users. In Metatown, users can create avatars and interact with other
        users in a virtual environment, build and customize their own virtual
        spaces, and participate in various activities such as games, events, and
        shopping,{" "}
        <span className="font-extrabold text-white">
          madness of the metatown
        </span>{" "}
        of today, using only devices you can
        easily explore the metaverse world you want, turn your creativity into
        money. Let's{" "}
        <span className="font-extrabold text-white">explore</span> the madness
        of the metatown by scrolling down
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
