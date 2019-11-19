import React from 'react';
import {Col, Container, Jumbotron, Row} from 'react-bootstrap';

const Hero = (props) => {
    return (
        <Jumbotron>
            <Container>
                <Row>
                    <Col>
                        {props.title && <h1>{props.title}</h1>}
                        {props.subTitle && <h1>{props.subTitle}</h1>}
                        {props.text && <h1>{props.text}</h1>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
};

export default Hero;
