import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandUpwork } from "react-icons/tb"

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>vgajera109@gmail.com</h3>

        </Col>
        <Col md="4" className="footer-copywright">
          <h3>+91 9081021559</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/vivekgajera109"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.upwork.com/freelancers/~01ee966e0cd94af14e"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <TbBrandUpwork />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/vivek-gajera-2b5769248/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/gajera_vivek_143?igsh=dzYydXRucm9weXpq"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
