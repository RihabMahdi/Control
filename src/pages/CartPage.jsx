import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart, clearCart } from '../features/cartSlice';
import { Container, Row, Col, Button, ListGroup, Image } from 'react-bootstrap';
import '../App.css';


const CartPage = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const dispatch = useDispatch();

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleRemove = (id) => {
        dispatch(removeItemFromCart(id));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <Container className="my-5">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ListGroup>
                        {cartItems.map((item) => (
                            <ListGroup.Item key={item.id} className="mb-3">
                                <Row>
                                    <Col md={3}>
                                        <Image src={item.image} alt={item.name} fluid rounded />
                                    </Col>

                                    <Col md={6}>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h5 className="cart-item-title">{item.name}</h5>
                                            <p><strong>Price:</strong> ${item.price.toFixed(2)}</p>
                                        </div>
                                        <p className="cart-item-description">{item.description}</p>
                                    </Col>

                                    <Col md={3} className="cart-item-actions">
                                        <p><strong>Quantity:</strong> {item.quantity}</p>
                                        <Button
                                            variant="danger"
                                            onClick={() => handleRemove(item.id)}
                                            className="btn-custom"
                                        >
                                            Remove
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>

                    <h4 className="my-4">Total Items: {totalQuantity}</h4>
                    <h4 className="my-4">Total Price: ${totalPrice.toFixed(2)}</h4>

                    <Button variant="warning" className="btn-custom" onClick={handleClearCart}>Clear Cart</Button>
                </>
            )}
        </Container>
    );
};

export default CartPage;
