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
var esquematico = require('../images/esquematico_bb.png')
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

            
                    <center>
                      <img src={diagrama} width={350} height={350} alt='Large Pizza' />
                    </center>

          
                    <center>
                     State diagram {"\n"}
                    </center>
                  <pre>
                     The functionality can be summarized as follows: {"\n"}
                  {"\n"}
                  {"\n"}
                  {"\t"}-The start state will be the initial one and will show "charging" on the display while LED1 (blue) flashes. {"\n"}
                  {"\t"}-The services state will be waiting for a client close to the machine while showing "waiting for client", once a client is detected it will show the temperature and humidity for 5 seconds, {"\n"}
                  {"\t"}then it will show the coffees that the machine has and their prices, the client must move the joystick to change coffee and press it to prepare it. All this while you are close, if you move away the machine will show "waiting for customer" {"\n"}
                  {"\t"}Meanwhile, the client can also reset the services status by pressing the button for 2-3sec.{"\n"}
                  {"\t"}-The admin state is accessed by pressing the button for at least 5 seconds. Once inside, we can display the temperature, distance to the machine, initial program counter and finally modify prices. To access each of these functionalities it is necessary to press the joystick button {"\n"}
                  {"\t"} and to return to the administrator menu, move the joystick to the left.{"\n"}
                  {"\t"}To use the change price functionality the following is necessary:{"\n"}

                        {"\t"}{"\t"}-First unlock the scroll between cafes by moving the joystick to the right.{"\n"}
                        {"\t"}{"\t"}-Second, to select the coffee to modify the price you must press the joystick.{"\n"}
                        {"\t"}{"\t"}-Third increases or decreases the value of the item with the joystick (up/down).{"\n"}
                        {"\t"}{"\t"}-Fourth, to exit the modification mode you must either move the joystick to the left (exit without saving), or press the joystick, {"\n"}
                        {"\t"}{"\t"}thus causing the changes to be saved and later you can either continue viewing the coffees to be modified or exit to the administrator menu moving the joystick to the left{"\n"}
                    

                    For the hardware implementation I have used: an LCD display, 2 LEDs, dht11 temperature and humidity sensor, potentiometer, joystick, button, and ultrasonic sensor {"\n"}
                    {"\n"}
                    {"\n"}
                    </pre>
                     <center>
                      <img src={esquematico} width={550} height={350} alt='Large Pizza' />
                    </center>



                      Here is an example video: {"\n"} {"\n"}
                    <center><iframe width="560" height="315" src="https://www.youtube.com/embed/eYn4rW6QfYA?si=kzYI9oo-ECcg0u2F" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> </center>
                  
                  
                 
                  
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
