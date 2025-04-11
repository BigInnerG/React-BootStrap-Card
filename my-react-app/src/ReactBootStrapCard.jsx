import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";


function ReactBootstrapCard() {
  return (
    <Container className="d-flex justify-content-center mt-5">
      <Card
        style={{
          width: "20rem",
          borderRadius: "20px",
          background: "linear-gradient(to bottom right, #fdfbfb, #ebedee)",
        }}
        className="shadow-lg card-hover"
      >
        <Card.Img
          variant="top"
          src="images/up-close-hat.jpg"
          alt="profile photo"
          className="rounded-circle p-3 mx-auto"
          style={{ width: "180px", height: "180px", objectFit: "cover" }}
        />
        <Card.Body className="text-center">
          <Card.Title className="fw-bold fs-4 text-primary">
            Ka'Den Brown
          </Card.Title>
          <Card.Text className="text-muted">
            Creative Designer & Front End Developer
          </Card.Text>
          <Button variant="outline-primary" size="lg" className="px-4 py-2 mt-2 custom-btn">
            View Portfolio
          </Button>

          {/* Social Icons */}
          <div className="d-flex justify-content-center gap-4 mt-4">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-decoration-none text-primary fs-4">
              <FaLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-decoration-none text-dark fs-4">
              <FaGithub />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-decoration-none text-info fs-4">
              <FaTwitter />
            </a>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ReactBootstrapCard;
