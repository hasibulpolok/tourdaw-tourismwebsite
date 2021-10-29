import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../context/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <div>
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/home" className="text-primary">
                        TourDaw

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/places">Places</Nav.Link>
                            <Nav.Link as={Link} to="/booking">Booking</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>

                            <Navbar.Text>
                                {user.email && <p className=" text-white">{user?.displayName}</p>}



                            </Navbar.Text>
                            {user.email && <p className=" text-white"><img style={{height:'50px',width:"50px",marginLeft:"10px", borderRadius:"50%"}} src={user?.photoURL} alt="ProfilePhoto" /></p>}
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            <Nav.Link as={Link} to="/register">
                                Register
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;