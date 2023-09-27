import React from "react";
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
          <h2> Basic Vacuum Cleaner <Icon icon="solar:smart-vacuum-cleaner-outline" /> </h2> 
          <div>This practice consists of developing an iterative pseudo-navigation algorithm.
          I have used the bumper and laser sensor to avoid collisions. The laser will predominate in the measurements, 
          but it may be the case that in some turns it does not sense a corner and that is where the bumper comes into play.
            
              <code class="python"><pre>
                {"\n"}def parse_laser_data(laser_data, close_obj): {"\n"}
                  {"\t"}laser = [] {"\n"}
                  {"\t"}for i in range(45,135):{"\n"}
                        {"\t"}{"\t"}dist = laser_data.values[i]{"\n"}
                        {"\t"}{"\t"}angle = math.radians(i){"\n"}
                        {"\t"}{"\t"}laser += [(dist, angle)]{"\n"}
                        {"\t"}{"\t"}print("distancia: ", dist){"\n"}
                        {"\t"}{"\t"}if (dist 	&#60; 0,3):{"\n"}
                          {"\t"}{"\t"}{"\t"}close_obj = True{"\n"}
                  {"\t"}return close_obj{"\n"}
               
                </pre></code>
        </div>

        <div>Before moving, the robot will check if there is any object nearby with the laser. If there is, 
          the robot will go backwards for 3 seconds. This would be his first state.

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
        
        </div>

          <div>
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
            
          </div>

          <div>
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

            
          </div>

          <div>
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
          </div>

      
            Here is an example video: {"\n"}

            <html>
            <iframe data="https://youtu.be/xwCpgUhGOrc"
             width="560" height="315"></iframe>
           </html>
          {/*mainProjects.length !== 0 && (
            <>
              <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
                {mainProjects.map(function ({
                  id,
                  image,
                  name,
                  description,
                  html_url,
                  homepage,
                }) {
                  return (
                    <Col key={id}>
                      <StyledCard
                        image={image}
                        name={name}
                        description={description}
                        url={html_url}
                        demo={homepage}
                      />
                    </Col>
                  );
                })}
              </Row>
              {data.length > 3 && (
                <Container className="text-center mt-5">
                  <Link to="/All-Projects">
                    <Button
                      size="lg"
                      variant={
                        theme === "light" ? "outline-dark" : "outline-light"
                      }
                    >
                      All <Icon icon="solar:smart-vacuum-cleaner-outline" /> Projects
                    </Button>
                  </Link>
                </Container>
              )}
            </>
          )*/}
        </Container>
      </section>
    </Element>
  );
}
