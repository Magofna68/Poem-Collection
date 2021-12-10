import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Hero(props) {
    return (
        <Container fluid={true} className="bg-transparent jumbotron-fluid p-2">
            <Row className="justify-content-center py-4">
                <Col md={8} s={12}>
                    {props.title && <h1 className="display-1 bolder">{props.title}</h1>}
                    {props.subTitle && <h6 className="display-6 font-weight-lighter">{props.subTitle}</h6>}
                    {props.text && <h3 className="lead font-weight-bolder">{props.text}</h3>}
                </Col>
            </Row>
        </Container>
    );
}

export default Hero;