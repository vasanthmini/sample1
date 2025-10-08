import { Fragment, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import jersey1 from "../assets/jersey1.jpg";
import jersey2 from "../assets/jersey2.jpg";
import jersey3 from "../assets/jersey3.jpg";
import jer1 from "../assets/jer1.jpg";
import jer2 from "../assets/jer2.jpg";
import jer3 from "../assets/jer3.jpg";
import jer4 from "../assets/jer4.jpg";
import jer5 from "../assets/jer5.jpg";
import jer6 from "../assets/jer6.jpg";
import jer7 from "../assets/jer7.jpg";
import jer8 from "../assets/jer8.jpg";

import "./Page.css";

function Jersey() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [filter, setFilter] = useState("All");

  const addToCart = (item) => {
    const price = Number(item.price.replace("$", ""));
    setCart([...cart, { ...item, price }]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const handleClose = () => setShowCart(false);
  const handleShow = () => setShowCart(true);

  const jerseys = [
    {
      img: jersey1,
      name: "Team Jersey",
      price: "$50",
      details: "Official team kit, breathable fabric",
      category: "Team Jersey",
    },
    {
      img: jersey2,
      name: "Training Jersey",
      price: "$40",
      details: "Comfortable, lightweight, perfect for practice",
      category: "Training Jersey",
    },
    {
      img: jersey3,
      name: "Custom Jersey",
      price: "$60",
      details: "Personalize with your team logo and number",
      category: "Custom Jersey",
    },
    {
      img: jer1,
      name: "Custom Jersey",
      price: "$60",
      details: "Personalize with your team logo and number",
      category: "Custom Jersey",
    },
    {
      img: jer2,
      name: "Custom Jersey",
      price: "$60",
      details: "Personalize with your team logo and number",
      category: "Custom Jersey",
    },
    {
      img: jer3,
      name: "Training Jersey",
      price: "$60",
      details: "Comfortable, lightweight",
      category: "Training Jersey",
    },
    {
      img: jer4,
      name: "Custom Jersey",
      price: "$60",
      details: "Personalize with your team logo and number",
      category: "Custom Jersey",
    },
    {
      img: jer5,
      name: "Training Jersey",
      price: "$60",
      details: "Comfortable, lightweight",
      category: "Training Jersey",
    },
    {
      img: jer6,
      name: "Custom Jersey",
      price: "$60",
      details: "Personalize with your team logo and number",
      category: "Custom Jersey",
    },
    {
      img: jer7,
      name: "Custom Jersey",
      price: "$60",
      details: "Personalize with your team logo and number",
      category: "Custom Jersey",
    },
    {
      img: jer8,
      name: "Custom Jersey",
      price: "$60",
      details: "Personalize with your team logo and number",
      category: "Custom Jersey",
    },
  ];

  // ✅ Filtered items based on current filter
  const filteredItems =
    filter === "All"
      ? jerseys
      : jerseys.filter((item) => item.category === filter);

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
            {["All", "Custom Jersey", "Team Jersey", "Training Jersey"].map(
              (cat) => (
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
              )
            )}
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-grow-1 p-4">
          <div className="d-flex justify-content-between my-4 px-4">
            <h1>Sports Jerseys</h1>
            <div
              style={{
                position: "relative",
                fontSize: "1.8rem",
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
            {filteredItems.map((jersey, index) => (
              <Card
                key={index}
                style={{ width: "18rem" }}
                className="text-center shadow-sm"
              >
                <Card.Img
                  variant="top"
                  src={jersey.img}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{jersey.name}</Card.Title>
                  <Card.Text className="fw-bold text-success">
                    {jersey.price}
                  </Card.Text>
                  <Card.Text className="text-muted">{jersey.details}</Card.Text>
                  <Button variant="primary" onClick={() => addToCart(jersey)}>
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>

          {/* Cart Modal */}
          <Modal show={showCart} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>🛒 Your Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {cart.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
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
              )}
              <hr />
              <h5>Total: ${totalAmount}</h5>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                variant="success"
                disabled={cart.length === 0}
                onClick={() => alert("Payment Successful!")}
              >
                Checkout
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </Fragment>
  );
}

export default Jersey;
