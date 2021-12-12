import React from "react";
import classes from "./Skills.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import { DiJavascript, DiMongodb, DiHeroku } from "react-icons/di";
import { FaHtml5, FaCss3, FaReact, FaNode } from "react-icons/fa";

function Skills() {
  return (
    <div className={classes.box} id="skills">
      <ScrollAnimation
        offset="0"
        animateIn="fadeInLeft"
        duration="2"
        animateOnce="true"
        initiallyVisible={true}
      >
        <span className={classes.head}>MY SKILLS</span>
        <h2 className={classes.heading}>What I Developed?</h2>
        <section className={classes.container}>
          <div className={classes.container_content}>
            <div className={classes.row}>
              <div className={classes.row_md_12}>
                <div className={classes.timeline_centered}>
                  <ScrollAnimation
                    offset="0"
                    animateIn="fadeInLeft"
                    duration="2.4"
                    animateOnce="true"
                    initiallyVisible={true}
                  >
                    <article className={classes.timeline_entry}>
                      <div
                        className={`${classes.timeline_icon} ${classes.timeline_icon_2}`}
                      >
                        <FaHtml5 />
                      </div>
                      <div className={classes.label}>
                        <span>HTML5</span>
                      </div>
                    </article>
                  </ScrollAnimation>

                  <ScrollAnimation
                    offset="0"
                    animateIn="fadeInLeft"
                    duration="2.4"
                    animateOnce="true"
                    initiallyVisible={true}
                  >
                    <article className={classes.timeline_entry}>
                      <div
                        className={`${classes.timeline_icon} ${classes.timeline_icon_2}`}
                      >
                        <FaCss3 />
                      </div>
                      <div className={classes.label}>
                        <span>CSS3</span>
                      </div>
                    </article>
                  </ScrollAnimation>

                  <ScrollAnimation
                    offset="0"
                    animateIn="fadeInLeft"
                    duration="2.4"
                    animateOnce="true"
                    initiallyVisible={true}
                  >
                    <article className={classes.timeline_entry}>
                      <div
                        className={`${classes.timeline_icon} ${classes.timeline_icon_2}`}
                      >
                        <DiJavascript />
                      </div>
                      <div className={classes.label}>
                        <span>JavaScript</span>
                      </div>
                    </article>
                  </ScrollAnimation>

                  <ScrollAnimation
                    offset="0"
                    animateIn="fadeInLeft"
                    duration="2.4"
                    animateOnce="true"
                    initiallyVisible={true}
                  >
                    <article className={classes.timeline_entry}>
                      <div
                        className={`${classes.timeline_icon} ${classes.timeline_icon_2}`}
                      >
                        <FaReact />
                      </div>
                      <div className={classes.label}>
                        <span>React</span>
                      </div>
                    </article>
                  </ScrollAnimation>

                  <ScrollAnimation
                    offset="0"
                    animateIn="fadeInLeft"
                    duration="2.4"
                    animateOnce="true"
                    initiallyVisible={true}
                  >
                    <article className={classes.timeline_entry}>
                      <div
                        className={`${classes.timeline_icon} ${classes.timeline_icon_2}`}
                      >
                        <FaNode />
                      </div>
                      <div className={classes.label}>
                        <span>NodeJs</span>
                      </div>
                    </article>
                  </ScrollAnimation>

                  <ScrollAnimation
                    offset="0"
                    animateIn="fadeInLeft"
                    duration="2.4"
                    animateOnce="true"
                    initiallyVisible={true}
                  >
                    <article className={classes.timeline_entry}>
                      <div
                        className={`${classes.timeline_icon} ${classes.timeline_icon_2}`}
                      >
                        <DiMongodb />
                      </div>
                      <div className={classes.label}>
                        <span>MongoDb</span>
                      </div>
                    </article>
                  </ScrollAnimation>

                  <ScrollAnimation
                    offset="0"
                    animateIn="fadeInLeft"
                    duration="2.4"
                    animateOnce="true"
                    initiallyVisible={true}
                  >
                    <article className={classes.timeline_entry}>
                      <div
                        className={`${classes.timeline_icon} ${classes.timeline_icon_2}`}
                      >
                        <DiHeroku />
                      </div>
                      <div className={classes.label}>
                        <span>Heroku</span>
                      </div>
                    </article>
                  </ScrollAnimation>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
}

export default Skills;
