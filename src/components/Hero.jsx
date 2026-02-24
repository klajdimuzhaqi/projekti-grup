import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Hero = () => {
    return (
        <section className="bg-primary text-white py-5 mb-0">
            <Container className="text-center">
                <h1 className="display-4 fw-bold mb-4">Gjej Shtëpinë e ëndrrave tënde</h1>
                <p className="lead mb-4">Mbi 1000 pronash në të gjithë Shqipërinë. Agjensi nr.1 në imobilare.</p>
                <Button size="lg" variant="light" className="me-3">Shiko Pronat</Button>
                <Button size="lg" variant="outline-light">Na Kontakto</Button>
            </Container>
        </section>
    );
};

export default Hero;
