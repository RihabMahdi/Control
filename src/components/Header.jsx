import React from 'react';
import { useSelector } from 'react-redux';
import { Navbar, Nav, Badge } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { BsCartFill } from "react-icons/bs";

const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <Navbar expand="lg" className='header d-flex bg-light'>
      <LinkContainer to="/">
        <Navbar.Brand className='logo mx-5 text-dark'>MealS</Navbar.Brand>
      </LinkContainer>
      <Nav className="ml-auto d-flex justify-content-end">
        <LinkContainer to="/cart">
          <Nav.Link className="d-flex align-items-center">
            <BsCartFill size={30} className='text-dark mw-3' />{' '}
            {totalQuantity > 0 && (
              <Badge pill bg="success" className="ms-1">
                {totalQuantity}
              </Badge>
            )}
          </Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
};

export default Header;
