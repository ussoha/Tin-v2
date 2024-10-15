import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./styles/styles.scss";
import Header from "./components/Header";
import CarouselItem from "./components/Carousel";
import CardList from "./components/CardList";
import CartModal from "./components/CartModal"; // Renamed ModalItem to CartModal

const App = () => {
  const [showCart, setShowCart] = useState(false); // Cart modal state
  const [cart, setCart] = useState([]); // Cart state
  const [count, setCount] = useState(0); // Cart item count

  // Function to show the cart modal (called from Header)
  const handleShowCartModal = () => {
    setShowCart(true); // Show the cart modal
  };

  // Function to close the cart modal
  const handleCloseCart = () => setShowCart(false);

  // Function to add an item to the cart
  const handleAddToCart = (item, quantity) => {
    // Check if the item is already in the cart
    const existingItem = cart.find((cartItem) => cartItem.title === item.title);

    if (existingItem) {
      // Update quantity for existing item
      const updatedCart = cart.map((cartItem) =>
        cartItem.title === item.title
          ? { ...cartItem, quantity: cartItem.quantity + quantity }
          : cartItem
      );
      setCart(updatedCart);
    } else {
      // Add new item to the cart
      const newItem = { ...item, quantity };
      setCart([...cart, newItem]);
    }

    // Update total item count in the cart
    setCount((prevCount) => prevCount + quantity);
  };

  // Function to update the quantity of a cart item
  const updateCart = (index, newQuantity) => {
    const updatedCart = [...cart];
    if (newQuantity === 0) {
      updatedCart.splice(index, 1); // Remove item if quantity is 0
    } else {
      updatedCart[index].quantity = newQuantity; // Update the quantity
    }
    setCart(updatedCart);

    // Update the cart count (sum of all item quantities)
    const newCount = updatedCart.reduce((acc, item) => acc + item.quantity, 0);
    setCount(newCount);
  };

  return (
    <Container fluid className="app-container ">
      {/* Pass handleShowCartModal and count to Header for cart display */}
      <Header handleShow={handleShowCartModal} count={count} />

      {/* Carousel Section */}
      <div className="carousel-section ">
        <CarouselItem />
      </div>

      {/* Display CardList and pass handleAddToCart to handle purchases */}
      <Row className="justify-content-center card-list-section">
        {/* Tiêu đề "Our Menu" */}
        <h2 className="menu-title text-center mt-5 mb-4">Our Menu</h2>
        <CardList
          apiUrl="https://api-demo-4gqb.onrender.com/products"
          handleAddToCart={handleAddToCart}
        />
      </Row>

      {/* CartModal to show cart data */}
      <CartModal
        show={showCart}
        handleClose={handleCloseCart}
        cart={cart} // Pass the cart for display
        updateCart={updateCart} // Pass updateCart function to CartModal
      />
    </Container>
  );
};

export default App;
