import Button from '@restart/ui/esm/Button';
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
                        <Nav className="me-auto fs-5">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/places">Places</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                            {user.email && <span><NavDropdown className=" ms-5 fs-5" title="Manage Orders" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/book">My Orders</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/manageallorders">Manage All Orders</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/addservice">Add a new Place</NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown></span>}
                        </Nav>
                        <Nav>

                            <Navbar.Text>
                                {user.email && <p className=" text-white fs-5 my-1">{user?.displayName}</p>}
                            </Navbar.Text>

                            {user.email && <p className=" text-white"><img style={{ height: '50px', width: "50px", marginLeft: "10px", borderRadius: "50%" }} src={user?.photoURL} alt="ProfilePhoto" /></p>}
                            <span>{user.email && <Nav.Link className="fs-4 ms-2 me-2" as={Link} to="/profile">Profile</Nav.Link>}</span>
                            <span>{user.email ? <Button onClick={logOut} className=" btn btn-primary rounded my-2 ms-2  text-white">Logout</Button> : <Button className="btn btn-primary rounded fs-5 ms-2  text-white"> <Link className="text-decoration-none text-white" to="/login">Login</Link></Button>}</span>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;