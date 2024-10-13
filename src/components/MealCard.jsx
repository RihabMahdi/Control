import React, { useState } from 'react';
import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../features/cartSlice';
import '../App.css';

const MealCard = ({ meal }) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addItemToCart({ ...meal, quantity: Number(quantity) }));
    };

    return (
        <Card className="meal-card shadow-sm d-flex flex-column">
            <Card.Title className="meal-card-title text-center fs-3 mt-2 text-bold ">{meal.name}</Card.Title>
            <hr />
            <Row className="g-0">
                <Col md={6}>
                    <Card.Img
                        variant="top"
                        src={meal.image}
                        alt={meal.name}
                        style={{ height: '350px', objectFit: 'cover', marginTop: "-1rem" }}
                    />
                </Col>
                <Col md={6} className="d-flex flex-column">
                    <Card.Body className="flex-grow-1">
                        <Card.Text className=' fs-5'><strong>Price:</strong> ${meal.price.toFixed(2)}</Card.Text>
                        <Card.Text className="meal-card-description">{meal.description}</Card.Text>
                    </Card.Body>
                    <div className="meal-card-button-container">
                        <div className='d-flex'>
                            <Form.Group controlId="quantity" className="mx-2">
                                <Form.Label><strong>Quantity:</strong></Form.Label>

                            </Form.Group>
                            <Form.Control
                                className='mx-2'
                                as="select"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                            >
                                {[...Array(10).keys()].map((x) => (
                                    <option key={x + 1} value={x + 1}>
                                        {x + 1}
                                    </option>
                                ))}
                            </Form.Control>
                        </div>

                        <Button className="meal-card-btn-custom" onClick={handleAddToCart}>
                            Add to Cart
                        </Button>
                    </div>
                </Col>
            </Row>
        </Card>
    );
};

export default MealCard;
