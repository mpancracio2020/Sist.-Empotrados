import React from "react";
import Accordion from '../Accordion';
import { useAppContext } from "../appContext";
import { useSelector } from "react-redux";
import {
  selectData,
  selectError,
  selectIsLoading,
} from "../pages/allProjectsSlice";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
// Data
import { filteredProjects } from "../data";
// Icons
import { Icon } from "@iconify/react";
// Components
import { Button, Col, Container, Row } from "react-bootstrap";
import { Title, Loading } from "./globalStyledComponents";
import StyledCard from "./StyledCard";


var obama = require('../images/obama.png')
var espiral = require('../images/espiral.jpg')
var laserD = require('../images/laser_def.png')
export default function Projects() {
  const [mainProjects, setMainProjects] = React.useState([]);
  const { theme } = useAppContext();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const data = useSelector(selectData);

  React.useEffect(
    function () {
      const tempData = [];
      data.forEach((el, i) => (tempData[i] = Object.create(el)));
      if (data.length !== 0 && filteredProjects.length !== 0) {
        const tempArray = tempData.filter((obj) =>
          filteredProjects.includes(obj.name)
        );
        tempArray.length !== 0
          ? setMainProjects([...tempArray])
          : setMainProjects([...tempData.slice(0, 3)]);
      } else {
        setMainProjects([...tempData.slice(0, 3)]);
      }
    },
    [data]
  );

   const accordionData = [
    {
      title: 'Section 1',
      content: `This practice consists of developing an iterative pseudo-navigation algorithm.
                        I have used the bumper and laser sensor to avoid collisions. The laser will predominate in the measurements, 
                        but it may be the case that in some turns it does not sense a corner and that is where the bumper comes into play.`
    }
  ];

  return (
    <Element name={"Projects"} id="projects">
      <section className="section">
        <Container>
          <Container className="d-flex">
            <Title>
              <h2>Projects</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          {isLoading && (
            <Container className="d-flex">
              <Loading />
            </Container>
          )}
          {error && <h2 className="text-center">{error}</h2>}
          
          {!error && data.length === 0 && (
            <h2 className="text-center">
              Oops, you do not have any GitHub projects yet...
            </h2>
          )}
         
          {
          }

          {/* P2 - RESCUE PEOPLE -*/}
           <div>
            <h1>Rescue People <Icon icon="gis:drone" className="display-4" /></h1>
            <div className="accordion">
              {accordionData.map(({ title, content }) => (
                <Accordion title={'More content..'} 
                  content={
                  <p>This practice encompasses the task of rescuing survivors. For this we need a drone. We will use your GPS and camera to perform the task. {"\n"}
                    First of all, you have to know an estimate of the position of the survivors. Which is (x,y) in my case. 
                    <br>
                    </br>

                    Once here, we need to sweep the area. There are many methods, we can do spirals, up-down sweeps, etc...
                    I have implemented a spiral, controlled by speed on the incremental x axis and a constant yaw value{"\n"}
                    
                    
                    {"\n"}
                    Now it's time to recognize faces, for this we use the Haar tool, which has a fairly low computational cost compared to other tools.{"\n"}
                    Haar needs to have a "straight" face{"\n"}
                    to be able to recognize it,therefore, we implemented an algorithm that allows us to detect faces with any rotation

                   
                    At this point, you just need not to repeat faces, comparing the position in which you detect a face, once you store 6 different faces, 
                    {"\n"}
                    return to the base and land using HAL.landed()

                    {"\n"}
                    {"\n"}
                    {"\n"}
                    Here is an example video: {"\n"} {"\n"}
                    <center><iframe width="560" height="315" src="https://www.youtube.com/embed/GbOMlcvZUxs?si=nZPCvAFe2eF66ALc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></center>
                    
                  </p>

                                  } />
              ))}
            </div>
          </div>
          {/* P2 -END*/}
          
        </Container>
      </section>
    </Element>
  );
}
