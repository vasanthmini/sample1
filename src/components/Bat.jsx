import { Fragment, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import bat1 from "../assets/bat.jpg";
import bat2 from "../assets/bat2.jpg";
import bat3 from "../assets/bat3.jpg";
import bat5 from "../assets/bat5.jpg";
import bat6 from "../assets/bat6.jpg";
import bat7 from "../assets/bat7.jpg";
import bat8 from "../assets/bat8.jpg";
import bat9 from "../assets/bat9.jpg";
import bath1 from "../assets/bath1.jpg";
import bath2 from "../assets/bath2.jpg";
import bath3 from "../assets/bath3.jpg";
import batkit1 from "../assets/batkit1.jpg";
import batkit2 from "../assets/batkit2.jpg";
import batkit3 from "../assets/batkit3.jpg";
import batkit4 from "../assets/batkit4.jpg";
import batkit5 from "../assets/batkit5.jpg";
import batstp from "../assets/batstp.jpg";
import batstp2 from "../assets/batstp2.jpg";
import batstp3 from "../assets/batstp3.jpg";

import "./Page.css";

function Bat() {
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState("All");
  const [showCart, setShowCart] = useState(false);
  const [checkout, setCheckout] = useState(false);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const handleClose = () => {
    setShowCart(false);
    setCheckout(false);
  };
  const handleShow = () => setShowCart(true);

  const batItems = [
    {
      img: bat1,
      name: "Premium Bat",
      price: 120,
      details: "High-quality bat for professional players",
      category: "Bats",
    },
    {
      img: bat2,
      name: "Lightweight Bat",
      price: 80,
      details: "Easy to handle, perfect for beginners",
      category: "Bats",
    },
    {
      img: bat3,
      name: "Durable Bat",
      price: 100,
      details: "Long-lasting bat for daily practice",
      category: "Bats",
    },
    {
      img: bat5,
      name: "Classic Bat",
      price: 95,
      details: "Balanced weight with solid grip",
      category: "Bats",
    },
    {
      img: bat6,
      name: "Heavy Power Bat",
      price: 140,
      details: "For powerful hitting in matches",
      category: "Bats",
    },
    {
      img: bat7,
      name: "Pro Bat",
      price: 160,
      details: "Endorsed by professionals",
      category: "Bats",
    },
    {
      img: bat8,
      name: "Training Bat",
      price: 70,
      details: "Perfect for coaching and training",
      category: "Bats",
    },
    {
      img: bat9,
      name: "Budget Bat",
      price: 60,
      details: "Affordable bat for beginners",
      category: "Bats",
    },
    {
      img: bath1,
      name: "Special Edition",
      price: 200,
      details: "Limited edition cricket bat",
      category: "Bats",
    },
    {
      img: bath2,
      name: "Street Bat",
      price: 40,
      details: "Casual bat for street cricket",
      category: "Bats",
    },
    {
      img: bath3,
      name: "Junior Bat",
      price: 50,
      details: "Perfect size for kids",
      category: "Bats",
    },

    {
      img: batkit1,
      name: "Kit Combo",
      price: 300,
      details: "Full kit with bat, pads, gloves",
      category: "Kits",
    },
    {
      img: batkit2,
      name: "Starter Kit",
      price: 180,
      details: "Great for beginners",
      category: "Kits",
    },
    {
      img: batkit3,
      name: "Advanced Kit",
      price: 400,
      details: "Professional cricket kit",
      category: "Kits",
    },
    {
      img: batkit4,
      name: "Team Kit",
      price: 500,
      details: "Complete kit for teams",
      category: "Kits",
    },
    {
      img: batkit5,
      name: "School Kit",
      price: 150,
      details: "For school-level players",
      category: "Kits",
    },

    {
      img: batstp,
      name: "Stump Set",
      price: 50,
      details: "Strong wooden stumps",
      category: "Stumps",
    },
    {
      img: batstp2,
      name: "Plastic Stump",
      price: 30,
      details: "For kids and practice",
      category: "Stumps",
    },
    {
      img: batstp3,
      name: "Tournament Stump",
      price: 80,
      details: "Professional stump set",
      category: "Stumps",
    },
  ];

  const filteredItems =
    filter === "All"
      ? batItems
      : batItems.filter((item) => item.category === filter);
  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <Fragment>
      <div className="d-flex">
        {/* Sidebar */}
        <div
          style={{
            width: "220px",
            background: "#f8f9fa",
            padding: "20px",
            borderRight: "1px solid #413d3dff",
            minHeight: "100vh",
          }}
        >
          <h2>Categories</h2>
          <ul className="all">
            {["All", "Bats", "Kits", "Stumps"].map((cat) => (
              <li
                className="alls"
                key={cat}
                style={{
                  cursor: "pointer",
                  margin: "10px 0",
                  fontWeight: filter === cat ? "bold" : "normal",
                }}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-grow-1 p-4">
          <div className="d-flex justify-content-between my-4 px-4">
            <h1>Cricket Essentials</h1>
            <div
              style={{
                position: "relative",
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
              onClick={handleShow}
            >
              <FontAwesomeIcon icon={faCartShopping} />
              {cart.length > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-10px",
                    right: "-10px",
                    background: "red",
                    color: "white",
                    borderRadius: "50%",
                    padding: "2px 7px",
                    fontSize: "0.8rem",
                  }}
                >
                  {cart.length}
                </span>
              )}
              {cart.length > 0 && (
                <div style={{ fontSize: "0.9rem", color: "green" }}>
                  ${totalAmount}
                </div>
              )}
            </div>
          </div>

          <div className="d-flex flex-wrap justify-content-center gap-4 mt-4">
            {filteredItems.map((item, index) => (
              <Card
                key={index}
                style={{ width: "18rem" }}
                className="text-center shadow-sm"
              >
                <Card.Img
                  variant="top"
                  src={item.img}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text className="price">Price: ${item.price}</Card.Text>
                  <Card.Text className="details">{item.details}</Card.Text>
                  <Button className="links" onClick={() => addToCart(item)}>
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Cart Modal */}
      <Modal show={showCart} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>🛒 Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : !checkout ? (
            <ul style={{ listStyle: "none", padding: 0 }}>
              {cart.map((item, i) => (
                <li key={i} className="d-flex justify-content-between mb-2">
                  <span>{item.name}</span>
                  <span>
                    ${item.price}{" "}
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => removeFromCart(i)}
                    >
                      Remove
                    </Button>
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <div>
              <h5>Confirm your payment of ${totalAmount}</h5>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {cart.map((item, i) => (
                  <li key={i} className="d-flex justify-content-between mb-2">
                    <span>{item.name}</span>
                    <span>${item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <hr />
          <h5>Total: ${totalAmount}</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {!checkout && cart.length > 0 && (
            <Button variant="success" onClick={() => setCheckout(true)}>
              Checkout
            </Button>
          )}
          {checkout && (
            <Button
              variant="success"
              onClick={() => {
                alert("Payment Successful! Thank you.");
                setCart([]);
                setCheckout(false);
                handleClose();
              }}
            >
              Confirm Payment
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}

export default Bat;
