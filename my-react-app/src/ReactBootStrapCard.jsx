import React from "react";
import { Card, Button, Container } from "react-bootstrap";

function ReactBootstrapCard() {
  return (
    <Container className="mt-4">
      <Card style={{ width: "18rem" }} className="shadow">
        <Card.Img variant="top" src="https://via.placeholder.com/150" />
        <Card.Body className="text-center">
          <Card.Title>Jane Doe</Card.Title>
          <Card.Text>Creative Designer & UI/UX Expert</Card.Text>
          <Button variant="primary">View Portfolio</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ReactBootstrapCard;