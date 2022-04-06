import React from 'react';
import * as ROUTES from '../../constants/routes.js';
import { Container, Nav, Navbar} from 'react-bootstrap';
import "../../styles/Navigation.scss";
import { HashLink as Link } from 'react-router-hash-link';

class Navigation extends React.Component {
    render() {
        return (
            <div>
                <Navbar fixed="bottom" className="navbar" bg="blur" expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto m-auto">
                                <Link className="nav-link" smooth to={ROUTES.LANDING}>
                                    Home
                                </Link>
                                <Link className="nav-link" smooth to={ROUTES.ABOUT}>
                                    Our Story
                                </Link>
                                <Link className="nav-link" smooth to={ROUTES.ACCOMODATIONS}>
                                    Accomodations
                                </Link>
                                <Link className="nav-link" smooth to={ROUTES.SCHEDULE}>
                                    Schedule
                                </Link>
                                <a className="nav-link" href={ROUTES.RSVP} target="_blank">
                                    RSVP
                                </a>
                                <Link className="nav-link" smooth to={ROUTES.PARTY}>
                                    Wedding Party
                                </Link>
                                <a className="nav-link" href={ROUTES.REGISTRY} target="_blank">
                                    Registry
                                </a>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>åå
            </div>
        );
    }
}

export default Navigation;