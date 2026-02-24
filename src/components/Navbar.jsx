import React, { useState, useEffect } from 'react';
import { Navbar as BsNavbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import mockProperties from '../data/mockProperties';

const Navbar = () => {
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const navItems = [
        { to: '/', label: 'Kreu', icon: '🏠' },
        { href: '#properties', label: 'Pronat', icon: '🏘️' },
        { href: '#contact', label: 'Kontakti', icon: '📞' },
        { href: '#about', label: 'Rreth Nesh', icon: 'ℹ️' }
    ];

    return (
        <>
            <BsNavbar bg="dark" variant="dark" expand="lg" className="py-3 shadow-lg" sticky="top">
                <Container>
                    <BsNavbar.Brand as={Link} to="/" className="fs-3 fw-bold">
                        🏠 RealEstate AL
                    </BsNavbar.Brand>

                    <BsNavbar.Toggle aria-controls="navbar-nav" onClick={() => setShowOffcanvas(true)} />

                    <BsNavbar.Collapse id="navbar-nav" className="justify-content-end">
                        <Nav>
                            {navItems.map((item) => (
                                <Nav.Link key={item.label} as={item.to ? Link : 'a'} href={item.href} to={item.to}>
                                    <span className="me-2">{item.icon}</span>
                                    {item.label}
                                </Nav.Link>
                            ))}
                        </Nav>
                    </BsNavbar.Collapse>
                </Container>
            </BsNavbar>

            <Offcanvas show={showOffcanvas} onHide={() => setShowOffcanvas(false)} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>RealEstate AL</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {navItems.map((item) => (
                        <Nav.Link
                            key={item.label}
                            as={item.to ? Link : 'a'}
                            href={item.href}
                            to={item.to}
                            onClick={() => setShowOffcanvas(false)}
                            className="d-block py-3 border-bottom"
                        >
                            <span className="me-2">{item.icon}</span>
                            {item.label}
                        </Nav.Link>
                    ))}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Navbar;
