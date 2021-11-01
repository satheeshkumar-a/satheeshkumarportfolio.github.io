import React from "react";
import classes from "./Education.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import { MdSchool } from "react-icons/md";
import { MdWork } from "react-icons/md";
// import { FaSchool } from "react-icons/fa";

function Education() {
  return (
    <div className={classes.box} id="journey">
      <ScrollAnimation
        offset="0"
        animateIn="fadeInLeft"
        duration="2"
        animateOnce="true"
        initiallyVisible={true}
      >
        <span className={classes.head}>MY JOURNEY</span>
        <h2 className={classes.heading}>What are they?</h2>
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
                        <MdWork />
                      </div>
                      <div className={classes.label}>
                        <h2>
                          ANB Systems Pvt Ltd.{" "}
                          <span>Software Tester|Sept 2020-Present</span>
                        </h2>
                        <p>
                          As a Software Tester, I have worked in an Internal
                          project (eTrack+) of an energy domain whose clients
                          are mostly US based like ComEd, PECO, ONCOR and
                          CenterPoint Energy where the platform helps the client
                          to develop and manage the Operation workflow.{" "}
                        </p>
                      </div>

                      <div className={classes.label}>
                        <h2>
                          Cognizant Technology Solution{" "}
                          <span>Programmer Analyst|Nov 2016-Sept 2020</span>
                        </h2>
                        <p>
                          As a Manual and Automation Tester, Developed framework
                          and prepared test scripts using Element locators, Web
                          Driver methods, Java programming features, TestNG
                          Annotations and maven dependencies.Possessed good
                          experience in various levels of Customer Interaction,
                          Requirements Gathering, Identifying automatable
                          components for automation and product verification.
                        </p>
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
                      <div className={classes.timeline_icon}>
                        <MdSchool />
                      </div>
                      <div className={classes.label}>
                        <h2>
                          Undergraduation In Velammal Engineering College{" "}
                          <span>Production|2012-2016</span>
                        </h2>
                        <p>
                          I completed my Bachelor of Engineering in Production
                          Department from{" "}
                          <a href="http://velammal.edu.in/">VEC</a>.{" "}
                        </p>
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

export default Education;
