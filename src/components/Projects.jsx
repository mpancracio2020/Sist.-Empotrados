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

                    Once here, we need to sweep the area. There are many methods, we can do spirals, up-down sweeps, etc...
                    [(developing...)] {"\n"}
                    
                    Now it's time to recognize faces, for this we use the Haar tool, which has a fairly low computational cost compared to other tools.Haar needs to have a "straight" face{"\n"}
                    to be able to recognize it,therefore, we implemented an algorithm that allows us to detect faces with any rotation
                    <center>
                    
                    <img align="right"  src={obama}
                       style={{ width: '200px', height: 'auto' }}
                      />
  
                    </center>
                    
                    <code>
                        <pre>{"\n"}
                        if (close_obj == True):{"\n"}
                        {"\t"}time_begin = rospy.Time.now() # start to count seconds.{"\n"}
                        {"\t"}clock = True{"\n"}
                        {"\t"}print("going back"){"\n"}
                    
                        {"\t"}while(clock == True):{"\n"}
                    
                          {"\t"}{"\t"}HAL.setV(back_vel){"\n"}
                          {"\t"}{"\t"}HAL.setW(1){"\n"}
                          {"\t"}{"\t"}time_end = rospy.Time.now() # check time now.{"\n"}
                          {"\t"}{"\t"}duration = time_end.secs - time_begin.secs # check duration time from begin.{"\n"}
                          
                          {"\t"} {"\t"}if (duration == 3):{"\n"}
                          {"\t"}{"\t"}{"\t"}clock = False{"\n"}
                        </pre>
                        </code>
                    Afterwards, it will go to the second state, where if it has not detected anything nearby, nor has it collided with the bumper, 
                    the robot will be able to advance in a spiral or straight, depending on the mode it has activated.

                         <code>
                          <pre>{"\n"}
                          if(mode == 0 and crashed == 0 and close_obj == False):{"\n"}
                
                            {"\t"}if (straight_vel &lt; 2.5):{"\n"}
                            
                            {"\t"}{"\t"}straight_vel += increment{"\n"}
                          
                          {"\t"}HAL.setV(straight_vel){"\n"}
                          {"\t"}HAL.setW(0){"\n"}
                          {"\t"}print("cleaning straight"){"\n"}
                          {"\t"}state_t = 0{"\n"}
                        
                        if (mode == 1 and crashed == 0 and close_obj == False):{"\n"}
                          {"\t"}if (straight_vel &lt; 2.5):{"\n"}
                            
                            {"\t"}{"\t"}straight_vel += increment{"\n"}
                          {"\t"}angular_vel += increment{"\n"}
                          {"\t"}HAL.setV(angular_vel){"\n"}
                          {"\t"}HAL.setW(ang){"\n"}
                          {"\t"}print("cleaning spiral"){"\n"}
                          {"\t"}state_t = 0{"\n"}
                          </pre>
                        </code>

                    This default mode is spiral, but depending on whether or not the robot has an object nearby after having to go backwards, it will
                    change to straight forward or not. If there is nothing nearby, the robot will randomly decide to move forward straight or in a spiral.

                        <code>
                            <pre>{"\n"}
                              if(close_obj == True): # if there is an object close better go straight.{"\n"}
                              {"\t"}mode = 0{"\n"}
                              
                              elif (close_obj == False): # if there is no object close do what ever. {"\n"}
                              {"\t"}mode = random.randint(0,1){"\n"}
                            </pre>
                          
                        </code>

                     In case of hitting the bumper, the robot will rotate randomly for 3 seconds {"\n"}
                        <code>
                          <pre>{"\n"}
                          if(crashed == 1 ):{"\n"}
                  
                          {"\t"}side = random.randint(0, 1){"\n"}
                          {"\t"}state_t = 1{"\n"}
                          
                          {"\t"}if (side == 0):{"\n"}
                          {"\t"}{"\t"}time_begin = rospy.Time.now() # start to count seconds.{"\n"}
                          {"\t"}{"\t"}clock = True{"\n"}
                           
                            {"\t"}{"\t"}while(clock == True):{"\n"}
                              
                              {"\t"}{"\t"}{"\t"}HAL.setV(-increment){"\n"}
                              {"\t"}{"\t"}{"\t"}print("going back and right"){"\n"}
                              {"\t"}{"\t"}{"\t"}HAL.setW(ang){"\n"}
                              
                              {"\t"}{"\t"}{"\t"}time_end = rospy.Time.now() # check time now{"\n"}
                              {"\t"}{"\t"}{"\t"}duration = time_end.secs - time_begin.secs # check duration time from begin.{"\n"}
                              
                              {"\t"}{"\t"}{"\t"}if (duration == 3):{"\n"}
                              {"\t"}{"\t"}{"\t"}{"t"}clock = False{"\n"}
                            
                            {"\t"}if (side == 1):{"\n"}
                            {"\t"}{"\t"}time_begin = rospy.Time.now() # start to count seconds.{"\n"}
                            {"\t"}{"\t"}{"\t"}clock = True{"\n"}
                           
                            {"\t"}{"\t"}while(clock == True):{"\n"}
                            
                              {"\t"}{"\t"}{"\t"}HAL.setV(-increment){"\n"}
                              {"\t"}{"\t"}{"\t"}print("going back and left"){"\n"}
                              {"\t"}{"\t"}{"\t"}HAL.setW(-ang){"\n"}
                      
                              {"\t"}{"\t"}{"\t"}time_end = rospy.Time.now() #check time now{"\n"}
                              {"\t"}{"\t"}{"\t"}duration = time_end.secs - time_begin.secs  # check duration time from begin.{"\n"}
                              {"\t"}{"\t"}{"\t"}if (duration == 3):{"\n"}
                              {"\t"}{"\t"}{"\t"}{"\t"}clock = False{"\n"}
                           </pre>     
                        </code>
                     Here is an example video: {"\n"} {"\n"}
                    <center><iframe width="560" height="315" src="https://www.youtube.com/embed/xwCpgUhGOrc?si=8J8rmt9WVKy6X2y-" 
             title="YouTube video player" frameborder="0" allow="fullscreen;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
             allowfullscreen></iframe>  </center>
                  
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
