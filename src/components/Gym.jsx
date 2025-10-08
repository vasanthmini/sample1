import { Fragment, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import gym1 from "../assets/gym.jpg";
import gym2 from "../assets/gym2.jpg";
import gym3 from "../assets/gym3.jpg";
import dumb1 from "../assets/dumb1.jpg";
import dumb2 from "../assets/dumb2.jpg";
import dumb3 from "../assets/dumb3.jpg";
import dumb4 from "../assets/dumb4.jpg";
import dumb5 from "../assets/dumb5.jpg";
import dumb6 from "../assets/dumb6.jpg";
import dumb7 from "../assets/dumb7.jpg";
import dumb8 from "../assets/dumb8.jpg";
import dumb9 from "../assets/dumb9.jpg";
import dumb10 from "../assets/dumb10.jpg";
import dm1 from "../assets/dm1.jpg";
import dm2 from "../assets/dm2.jpg";
import dm3 from "../assets/dm3.jpg";
import dm4 from "../assets/dm4.jpg";
import dm5 from "../assets/dm5.jpg";
import dm6 from "../assets/dm6.jpg";
import dm7 from "../assets/dm7.jpg";
import dm8 from "../assets/dm8.jpg";
import dm9 from "../assets/dm9.jpg";
import dm10 from "../assets/dm10.jpg";

import "./Page.css";

function Gym() {
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

  const gymItems = [
    {
      img: gym1,
      name: "Home Gym Kit",
      price: 250,
      details: "All-in-one gym setup",
      category: "Kits",
    },
    {
      img: gym2,
      name: "Fitness Accessories",
      price: 75,
      details: "Premium accessories",
      category: "Accessories",
    },
    {
      img: gym3,
      name: "Professional Gear",
      price: 400,
      details: "For athletes",
      category: "Gear",
    },
    {
      img: dumb1,
      name: "Dumbbell Set 1",
      price: 100,
      details: "Adjustable dumbbells",
      category: "Dumbbells",
    },
    {
      img: dumb2,
      name: "Dumbbell Set 2",
      price: 120,
      details: "Strong steel",
      category: "Dumbbells",
    },
    {
      img: dumb3,
      name: "Dumbbell Set 3",
      price: 150,
      details: "Rubber grip",
      category: "Dumbbells",
    },
    {
      img: dumb4,
      name: "Dumbbell Set 4",
      price: 180,
      details: "Professional use",
      category: "Dumbbells",
    },
    {
      img: dumb5,
      name: "Dumbbell Set 5",
      price: 200,
      details: "Premium quality",
      category: "Dumbbells",
    },
    {
      img: dumb6,
      name: "Dumbbell Set 6",
      price: 220,
      details: "Heavy duty",
      category: "Dumbbells",
    },
    {
      img: dumb7,
      name: "Dumbbell Set 7",
      price: 240,
      details: "Gym use",
      category: "Dumbbells",
    },
    {
      img: dumb8,
      name: "Dumbbell Set 8",
      price: 260,
      details: "Long lasting",
      category: "Dumbbells",
    },
    {
      img: dumb9,
      name: "Dumbbell Set 9",
      price: 280,
      details: "High strength",
      category: "Dumbbells",
    },
    {
      img: dumb10,
      name: "Dumbbell Set 10",
      price: 300,
      details: "Top quality",
      category: "Dumbbells",
    },
    {
      img: dm1,
      name: "Barbell 1",
      price: 150,
      details: "Solid grip barbell",
      category: "Barbells",
    },
    {
      img: dm2,
      name: "Barbell 2",
      price: 170,
      details: "Strong steel",
      category: "Barbells",
    },
    {
      img: dm3,
      name: "Barbell 3",
      price: 190,
      details: "Rubber ends",
      category: "Barbells",
    },
    {
      img: dm4,
      name: "Barbell 4",
      price: 210,
      details: "Heavy lifting",
      category: "Barbells",
    },
    {
      img: dm5,
      name: "Barbell 5",
      price: 230,
      details: "Professional use",
      category: "Barbells",
    },
    {
      img: dm6,
      name: "Barbell 6",
      price: 250,
      details: "Durable steel",
      category: "Barbells",
    },
    {
      img: dm7,
      name: "Barbell 7",
      price: 270,
      details: "Gym barbell",
      category: "Barbells",
    },
    {
      img: dm8,
      name: "Barbell 8",
      price: 290,
      details: "Rubber coated",
      category: "Barbells",
    },
    {
      img: dm9,
      name: "Barbell 9",
      price: 310,
      details: "Heavy barbell",
      category: "Barbells",
    },
    {
      img: dm10,
      name: "Barbell 10",
      price: 330,
      details: "Top strength",
      category: "Barbells",
    },
  ];

  const filteredItems =
    filter === "All"
      ? gymItems
      : gymItems.filter((item) => item.category === filter);
      
  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <Fragment>
      <div className="d-flex ">
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
            {[
              "All",
              "Kits",
              "Accessories",
              "Dumbbells",
              "Barbells",
              "Gear",
            ].map((cat) => (
              <li className="alls"
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
            <h1>Gym Essentials</h1>
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

export default Gym;
