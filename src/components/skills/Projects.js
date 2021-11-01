import React from "react";
import classes from "./Projects.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

function Projects() {
  return (
    <div className={classes.box} id="projects">
      <ScrollAnimation
        offset="0"
        animateIn="fadeInLeft"
        duration="2.4"
        animateOnce="true"
        initiallyVisible={true}
      >
        <span className={classes.head}>PROJECTS</span>
        <h2 className={classes.heading}>WHAT I DID?</h2>
        <div className={classes.Interest}>
          <ScrollAnimation
            offset="0"
            animateIn="fadeInLeft"
            duration="2.4"
            animateOnce="true"
            initiallyVisible={true}
          >
            <div className={classes.web}>
              <h3>Chat App</h3>
              <p>
                This instant Chatting app allows users to exchange of text and
                location between two users or multiple users within a group.
              </p>
              <a
                href="https://chat-app-nodepractice.herokuapp.com/"
                rel="opener noreferrer"
                target="_blank"
              >
                Explore it
              </a>
            </div>
          </ScrollAnimation>

          <ScrollAnimation
            offset="0"
            animateIn="fadeInLeft"
            duration="2.4"
            animateOnce="true"
            initiallyVisible={true}
          >
            <div className={classes.app}>
              <h3>GitHub Finder </h3>
              <p>
                Github search is an app that easily allows its users to search
                through github. It allows one to search for user accounts then
                view their details such as people they follow and the day they
                joined Github. You can also view their repositories and their
                description.
              </p>
              <a
                href="https://githubprofilefind.netlify.app"
                rel="opener noreferrer"
                target="_blank"
              >
                Explore it
              </a>
            </div>
          </ScrollAnimation>

          <ScrollAnimation
            offset="0"
            animateIn="fadeInLeft"
            duration="2.4"
            animateOnce="true"
            initiallyVisible={true}
          >
            <div className={classes.other}>
              <h3>To-Do List</h3>
              <p>
                TodoList website gives you the confidence that everything’s
                organized and accounted for, so you can make progress on the
                things that are important to you.
              </p>
              <a
                href="https://2do-list-app.netlify.app"
                rel="opener noreferrer"
                target="_blank"
              >
                Explore it
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default Projects;
