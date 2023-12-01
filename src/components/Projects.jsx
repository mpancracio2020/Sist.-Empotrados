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
//import { Divider } from 'rsuite'; 
//import 'rsuite/dist/styles/rsuite-default.css';
//import { Grid, Divider as MuiDivider } from "@material-ui/core";
//import Divider from "./Divider";

//export default Divider;

var obama = require('../images/obama.png')
var diagrama = require('../images/diagrama_vm.png')
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

          {/* P2 - VENDING MACHINE -*/}
          
           

          <div>
            <h1>Vending Machine <Icon icon="game-icons:vending-machine" className="display-4" /></h1>
            <div className="accordion">
              {accordionData.map(({ title, content }) => (
                <Accordion title={'More content..'} 
                  content={
                  <p>
                    In this practice I implement a solution to a vending machine. Using a state machine we get the following result {"\n"}

                    <p></p>
                    <center>
                      <img src={diagrama} width={350} height={350} alt='Large Pizza' />
                    </center>
                    <p></p>
                

                    We
                  
                  </p>

                    <Subtitle>
                      <h2>Projects</h2>
                      <div className="underline"></div>
                    </Subtitle>

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
