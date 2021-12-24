import React from 'react';
import * as ROUTES from '../../constants/routes.js';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import "../../styles/Navigation.scss";
import { LinkContainer } from 'react-router-bootstrap';

class Navigation extends React.Component {
    render() {
        return (
            <div>
                <Navbar fixed="top" className="navbar" bg="light" expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <LinkContainer className="nav-link" to={ROUTES.LANDING}>
                                    <Nav.Item>
                                        Home
                                    </Nav.Item>
                                </LinkContainer>
                                <LinkContainer className="nav-link" to={ROUTES.ABOUT}>
                                    <Nav.Item>
                                        Our Story
                                    </Nav.Item>
                                </LinkContainer>
                                <LinkContainer className="nav-link" to={ROUTES.SCHEDULE}>
                                    <Nav.Item>
                                        Schedule
                                    </Nav.Item>
                                </LinkContainer>
                                <LinkContainer className="nav-link" to={ROUTES.RSVP}>
                                    <Nav.Item>
                                        RSVP
                                    </Nav.Item>
                                </LinkContainer>
                                <LinkContainer className="nav-link" to={ROUTES.PARTY}>
                                    <Nav.Item>
                                        Wedding Party
                                    </Nav.Item>
                                </LinkContainer>
                                <LinkContainer className="nav-link" to={ROUTES.REGISTRY}>
                                    <Nav.Item>
                                        Registry
                                    </Nav.Item>
                                </LinkContainer>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;