import 'bootstrap/dist/css/bootstrap.css';
import './Main.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row  from 'react-bootstrap/Row'; 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import './App.css';
import { Col } from 'react-bootstrap';
import {AiFillMail, AiFillGithub} from "react-icons/ai";
import {AiFillLinkedin} from "react-icons/ai";
import {BsFillBriefcaseFill} from "react-icons/bs";
import {RiBook2Fill} from "react-icons/ri";
import './Main.css';
// openai api key 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


function App() {
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
    fontSize: "1.5rem"
  };
  const stylewidth ={
    width : "80%",
  };

  return (
    <>
    <link rel="stylesheet" media="screen and (min-device-width: 450px)" href="index.css" />
    <div className="App" >
      <Navbar collapseOnSelect expand='lg' bg='dark' variant="dark" style={mystyle}>
        <Container>
          <Navbar.Brand href="#home">Kaan Abbasoğlu</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Anasayfa</Nav.Link>
            <Nav.Link href="#education">Eğitim</Nav.Link>
            <Nav.Link href="#career">Kariyer</Nav.Link>
            <Nav.Link href="#contact">İletişim</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br/>
    <Container id="home" style={stylewidth}>
      <Image src="https://media.licdn.com/dms/image/D4D03AQF4qVwKeY9SKQ/profile-displayphoto-shrink_800_800/0/1677418327254?e=2147483647&v=beta&t=fNITaanxavAqkMWsfRbdHO-2RT7lB4ynnkdEoJpKhII">
      </Image>
        <Row className="name-underpic">
            <h3>Kaan Abbasoğlu</h3>
            <p>Computer Engineer</p>
           <a href='https://drive.google.com/file/d/12BW3DWHmX2uLbmOlONGY-OjKcsen0dNE/view?usp=share_link' target="blank" rel="noopener noreferrer">
            <Button type='submit' color='dark' >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-person" viewBox="0 0 16 16">
                <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5v2z"/>
                </svg>
                  CV
            </Button>
            </a>
        </Row>
    </Container>
    <h2 className="headline">Eğitim</h2>
    <Container id="education" className="education" style={stylewidth}>
    <Row className="educat">
        <Col className="item">
        <i className="fa fa-graduation-cap"></i>
        <h3>Lise</h3>
        <h5 >Yozgat Şehitler Fen Lisesi 2012-2016</h5>
        </Col>
    <Col className="item">
    <i className="fa fa-graduation-cap"></i>
    <h3>Üniversite</h3>
    <h5>Ankara Yıldırım Beyazit Üniversitesi 2016-2021 </h5>
    </Col>
    </Row>
    </Container>
    <h2 className="headline">Kariyer</h2>
    <section id="career" className="career">

    <article className="care">
            <RiBook2Fill size={"2rem"}/>   Staj
            <h4 >Devlet Hava Meydanları(2020)</h4>
            <ul>
                <li>Apache Tomcat</li>
                <li>Java Servlet</li>
                <li>JSP & JSF</li>
            </ul>
            <h4>Beartell(2021)</h4>
            <ul>
                <li>IoT Systems</li>
                <li>Docker Containers</li>
                <li>Linux</li>
            </ul>
    </article>
    <article className="care">
        <BsFillBriefcaseFill size={"2rem"}/>  Deneyim
        <h4>Beartell (2021-Aktif)</h4>
        <ul>
            <li>DevOps</li>
            <li>Big Data</li>
            <li>Data Engineering with Timeseries Data</li>
            <li>Software Development</li>
        </ul>
        </article>
    </section>
    <section id="contact" className="contact">
    <h2 className="headline">İletişim</h2>
    <div className="cont">
    <a href="https://github.com/Kaanabb" target="_blanck"><AiFillGithub color='black' size={'3rem'} /> </a>
    <a href="https://www.linkedin.com/in/kaan-abbasoglu-121b11206/" target="_blanck"><AiFillLinkedin color='black' size={'3rem'}  /></a>
    <a href="mailto:kabbasoglu@hotmail.com?subject=Say Hello to Kaan"  target="_blanck"><AiFillMail color='black' size={'3rem'}  /> </a>
    </div>
    </section>
    </div>
    </>
  );
}

export default App;
