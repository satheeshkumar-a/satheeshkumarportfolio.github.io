import React from "react";
import classes from "./About.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

function About() {
  return (
    <div className={classes.box} id="about">
      <ScrollAnimation
        offset="0"
        animateIn="fadeInLeft"
        duration="2.4"
        animateOnce="true"
        initiallyVisible={true}
      >
        <span className={classes.head}>ABOUT ME</span>
        <h2 className={classes.heading}>Who Am I?</h2>
        <div className={classes.About}>
          <p>
            {" "}
            Passionate MERN stack Developer Seeking for an Opportunity to work
            in Challenging environment 😃{" "}
          </p>
          <p className={classes.br}>
            I love exploring new technologies and being a practitioner with
            these Skillsets HTML, CSS, Javascript, ReactJs, NodeJs. I have also
            good Knowledge on NoSQL(MongoDb), SQL,NPM packages. I would like to
            stay on top of latest trends.
          </p>
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default About;
