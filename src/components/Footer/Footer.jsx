import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
        <div id="footer">
            <footer classname="mt-5">
                <Container fluid={true}>
                    <Row className="border-top justify-content-between p-3">
                        <Col md={3} className="p-0" sm={12}>
                            <strong>Something goes Here.</strong>
                        </Col>
                        <Col className="p-0 d-flex justify-content-end md-3">
                            <strong>This site was made by Brandon Magofna.</strong>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
}

export default Footer;