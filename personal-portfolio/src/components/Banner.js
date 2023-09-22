import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import headerImg from '../assets/img/header-img.svg';
import headerImg from '../assets/img/Yash_Kadyan_Personal.jpeg';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [, setIndex] = useState(1);
  const toRotate = ['Web Developer', 'Web Designer', 'UI/UX Designer'];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  });

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <span className='tagline'>Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Yash!`}{' '}
                    <span
                      className='txt-rotate'
                      datperiod='1000'
                      data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                    >
                      <span className='wrap'>{text}</span>
                    </span>
                  </h1>
                  <p>
                    Hi Everyone! My name is Yash Kadyan. I am a Front-End Web
                    Developer based in Pune, Maharashtra, India! I have
                    developed many types of FrontEnds from well-known Web
                    Applications to E-Commerce Booking platforms. <br />
                    <br />I am passionate about cutting-edge technologies,
                    pixel-perfect and beautiful user interfaces.
                    <br />
                    <br />I believe that a person should work on developing
                    their professional skills and learning new things all the
                    time.
                  </p>
                  <a href='#connect' style={{ textDecoration: 'none' }}>
                    <button onClick={() => console.log('connect')}>
                      Let's Connect <ArrowRightCircle size={25} />
                    </button>
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__zoomIn' : ''
                  }
                >
                  <img
                    src={headerImg}
                    alt='Header Img'
                    style={{ borderRadius: '50%' }}
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
