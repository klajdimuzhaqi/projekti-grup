import React from 'react';
import { Card, Button, Badge, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => {
    return (
        <Card className="h-100 shadow-sm hover-shadow">
            <div className="position-relative overflow-hidden">
                <Card.Img
                    variant="top"
                    src={property.image}
                    alt={property.title}
                    style={{ height: '220px', objectFit: 'cover' }}
                />
                <div className="position-absolute top-0 start-0 m-3">
                    <Badge bg="success" className="fs-6 px-2 py-1">{property.status}</Badge>
                </div>
                <div className="position-absolute bottom-0 start-0 w-100 p-3 bg-gradient">
                    <small className="text-white">{property.bedrooms} Dhoma | {property.bathrooms} Banjo</small>
                </div>
            </div>
            <Card.Body d-flex flex-column p-4>
                <div>
                    <h5 className="card-title fw-bold mb-2">{property.title}</h5>
                    <p className="text-muted small mb-2">
                        📍 {property.location} | {property.size} m²
                    </p>
                    <p className="card-text flex-grow-1 mb-3 lh-sm">{property.description}</p>
                </div>
                <div className="d-flex justify-content-between align-items-end mt-auto">
                    <h4 className="text-primary fw-bold mb-0">{property.price.toLocaleString()} €</h4>
                    <Button as={Link} to={`/property/${property.id}`} variant="outline-primary" size="sm">
                        Shiko Detajet →
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default PropertyCard;
