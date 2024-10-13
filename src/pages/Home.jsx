import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MealCard from '../components/MealCard';
import { fetchMeals } from '../features/mealsSlice';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';

const Home = () => {
    const dispatch = useDispatch();
    const { meals, status, error } = useSelector(state => state.meals);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchMeals());
        }
    }, [dispatch, status]);

    let content;

    if (status === 'loading') {
        content = <p>Loading meals...</p>;
    } else if (status === 'succeeded') {
        content = (
            <Row>
                {meals.map((meal) => (
                    <Col key={meal.id} sm={12} md={6} lg={4} className="mb-4">
                        <MealCard meal={meal} />
                    </Col>
                ))}
            </Row>
        );
    } else if (status === 'failed') {
        content = <p>{error}</p>;
    }

    return (
        <div className="items-section">
            <Container>
                {content}
            </Container>
        </div>
    );
};

export default Home;
