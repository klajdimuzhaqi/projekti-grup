import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm, location, price);
    };

    return (
        <div className="bg-light py-5">
            <div className="container">
                <h2 className="text-center mb-4">Gjej Pronën e Duhur</h2>
                <Form onSubmit={handleSubmit} className="row g-3">
                    <Col md={5}>
                        <Form.Control
                            type="text"
                            placeholder="Kërko shtëpi, apartament, vilë..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </Col>
                    <Col md={3}>
                        <Form.Select value={location} onChange={(e) => setLocation(e.target.value)}>
                            <option value="">Çdo Qytet</option>
                            <option value="Tirana">Tirana</option>
                            <option value="Durres">Durrës</option>
                            <option value="Vlora">Vlorë</option>
                            <option value="Shkoder">Shkodër</option>
                            <option value="Fier">Fier</option>
                        </Form.Select>
                    </Col>
                    <Col md={2}>
                        <Form.Select value={price} onChange={(e) => setPrice(e.target.value)}>
                            <option value="">Çdo Çmim</option>
                            <option value="under-100k">Nën 100k €</option>
                            <option value="100k-300k">100k - 300k €</option>
                            <option value="over-300k">Mbi 300k €</option>
                        </Form.Select>
                    </Col>
                    <Col md={2}>
                        <Button type="submit" variant="primary" className="w-100">
                            🔍 Kërko
                        </Button>
                    </Col>
                </Form>
            </div>
        </div>
    );
};

export default SearchBar;
