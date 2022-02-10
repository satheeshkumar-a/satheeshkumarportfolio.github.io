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
              <br />
              <a
                href="https://github.com/satheeshkumar-a/chat-app"
                rel="opener noreferrer"
                target="_blank"
              >
                GitHub Link
              </a>
              <h5>TechStack Used: ReactJs,NodeJs,Express,MongoDb,SocketIo</h5>
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
              <br />
              <a
                href="https://github.com/satheeshkumar-a/GitHubFinder"
                rel="opener noreferrer"
                target="_blank"
              >
                GitHub Link
              </a>
              <h5>TechStack Used: ReactJs,axios,react-dom,react-router-dom</h5>
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
                href="https://tv2z-app.herokuapp.com/"
                rel="opener noreferrer"
                target="_blank"
              >
                Explore it
              </a>
              <br />
              <a
                href="https://github.com/satheeshkumar-a/To-Do-List"
                rel="opener noreferrer"
                target="_blank"
              >
                GitHub Link
              </a>
              <h5>TechStack Used: ReactJs,NodeJs,Express,MongoDb</h5>
            </div>
          </ScrollAnimation>
        </div>

        <div className={classes.Interest}>
          <ScrollAnimation
            offset="0"
            animateIn="fadeInLeft"
            duration="2.4"
            animateOnce="true"
            initiallyVisible={true}
          >
            <div className={classes.web}>
              <h3>Emaily</h3>
              <p>
                Emaily is an application which is lets you send surveys (via
                email) to thousands of people at one time. It allows you to
                customise the content of the email, and tracks each response to
                the surveys in the dashboard.
              </p>
              <a
                href="https://emailyfeed.herokuapp.com/"
                rel="opener noreferrer"
                target="_blank"
              >
                Explore it
              </a>
              <br />
              <a
                href="https://github.com/satheeshkumar-a/Feedback"
                rel="opener noreferrer"
                target="_blank"
              >
                GitHub Link
              </a>
              <h5>
                TechStack Used:
                ReactJs,Redux,NodeJs,Express,MongoDb,passport-google-oauth20,sendgrid,stripe
              </h5>
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
              <h3>Ecommerce</h3>
              <p>
                A website that allows people to buy and sell physical Books, and
                digital products over the internet. Through an e-commerce
                website, a business can process orders, accept payments, manage
                shipping and logistics.
              </p>
              <a
                href="https://best-bags.herokuapp.com/products/"
                rel="opener noreferrer"
                target="_blank"
              >
                Explore it
              </a>
              <br />
              <a
                href="https://github.com/satheeshkumar-a/ecommerce-book"
                rel="opener noreferrer"
                target="_blank"
              >
                GitHub Link
              </a>
              <h5>
                TechStack Used:
                ReactJs,NodeJs,Express,MongoDb,Jwt,braintree,cors,uuid
              </h5>
            </div>
          </ScrollAnimation>
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default Projects;
