import React from 'react';
import {Row, Col } from "react-bootstrap";
import { Card, Button } from "react-bootstrap/";
// import { featuredPreview } from '../data';

function PoemCard(props) {
  
  return (
    <div>
         {/* <Row >
           <Col>
           <h2>{props.title}</h2>
           <h6>{props.year}</h6>
           <br/>
           <h5>{props.text}</h5>
           </Col>
         </Row>
      
     </div> */}

  <Card>
  <Card.Header>{props.status}</Card.Header>
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text>
      {props.text}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</div>
  );
}

export default PoemCard;