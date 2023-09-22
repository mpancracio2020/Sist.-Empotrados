// Skills icons - https://icon-sets.iconify.design/
import * as React from 'react';
import { Icon } from "@iconify/react";

// Navbar Logo image (uncomment below and import your image)
// import newLogo from "./images/yourFileName"

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/Y7938X.jpg";
  import HeroDark from "./images/dt.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "mpancracio2020";

// Navbar Logo image
export const navLogo = undefined;

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="ph:link-bold" />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "This is my personal blog about the practices of the Mobile Robotics subject. I will upload my progress in each practice, my solutions and my own experience.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="file-icons:c" className="display-4" />,
    name: "C++",
  },
  
  {
    id: 2,
    skill: <Icon icon="teenyicons:c-outline" className="display-4" />,
    name: "C",
  },
  {
    id: 3,
    skill: <Icon icon="akar-icons:python-fill" className="display-4" />,
    name: "Python",
  },
  {
    id: 4,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 5,
    skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
    name: "GitHub",
  },
  {
    id: 6,
    skill: <Icon icon="logos:ros" className="display-4" />,
    name: "ROS",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["practice-1", "practice-2","practice-3"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "practice-1",
    image: "./images/vacuum.png",
  },
  {
    name: "practice-2",
    image: "./images/vacuum.png",
  },
  {
    name: "practice-3",
    image: "./images/vacuum.png",
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/mleypodv";
