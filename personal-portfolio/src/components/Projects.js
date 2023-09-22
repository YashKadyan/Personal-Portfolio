import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1Tab1 from '../assets/img/proj-img1.png';
import projImg2Tab1 from '../assets/img/proj-img2.png';
import projImg3Tab1 from '../assets/img/proj-img3.png';
import projImg1Tab2 from '../assets/img/proj-img4.png';
import projImg2Tab2 from '../assets/img/proj-img5.png';
import projImg3Tab2 from '../assets/img/proj-img6.png';

import colorSharp2 from '../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects1 = [
    {
      title: 'Mentoring Web Application',
      description: 'Full Stack Web Development',
      imgUrl: projImg1Tab1,
    },
    {
      title: 'Developer Connector Website',
      description: 'Full Stack Web Development',
      imgUrl: projImg2Tab1,
    },
    {
      title: 'Career Guide',
      description: 'Full Stack Web Development',
      imgUrl: projImg3Tab1,
    },
  ];

  const projects2 = [
    {
      title: 'Student Transcript System',
      description: 'Full Stack Web Development',
      imgUrl: projImg1Tab2,
    },
    {
      title: 'Ping Pong Game',
      description: 'Gaming Application',
      imgUrl: projImg2Tab2,
    },
    {
      title: 'Blood Donation System',
      description: 'Full Stack Web Development',
      imgUrl: projImg3Tab2,
    },
  ];

  return (
    <section className='project' id='projects'>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Projects</h2>
                  <p></p>
                  <br />
                  <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                    <Nav
                      variant='pills'
                      className='nav-pills mb-5 justify-content-center align-items-center'
                      id='pills-tab'
                    >
                      <Nav.Item>
                        <Nav.Link eventKey='first'>Projects Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='second'>Projects Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='third'>Projects Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id='slideInUp'
                      className={
                        isVisible ? 'animate__animated animate__slideInUp' : ''
                      }
                    >
                      <Tab.Pane eventKey='first'>
                        <Row>
                          {projects1.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey='second'>
                        <Row>
                          {projects2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey='third'>
                        <p>
                          Willing to work with many more Exciting Real-World
                          Projects!
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className='background-image-right' src={colorSharp2} alt=''></img>
    </section>
  );
};
