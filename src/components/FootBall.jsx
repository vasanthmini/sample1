import { Fragment, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import foot1 from "../assets/foot1.jpg";
import foot2 from "../assets/foot2.jpg";
import foot3 from "../assets/foot3.jpg";
import foot4 from "../assets/foot4.jpg";
import foot5 from "../assets/foot5.jpg";
import foot6 from "../assets/foot6.jpg";
import foot7 from "../assets/foot7.jpg";
import foot8 from "../assets/foot8.jpg";
import foot9 from "../assets/foot9.jpg";
import foot10 from "../assets/foot10.jpg";
import foot11 from "../assets/foot11.jpg";

import "./Page.css";

function FootBall() {
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState("All");
  const [showCart, setShowCart] = useState(false);

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

  const shoes = [
    {
      img: foot1,
      name: "Running Shoes",
      price: "$90",
      details: "Lightweight and comfortable",
      category: "Running",
    },
    {
      img: foot2,
      name: "Training Shoes",
      price: "$120",
      details: "Perfect for gym",
      category: "Training",
    },
    {
      img: foot3,
      name: "All-Terrain Shoes",
      price: "$150",
      details: "Durable for outdoor sports",
      category: "Outdoor",
    },
    {
      img: foot4,
      name: "Running Shoes",
      price: "$90",
      details: "Lightweight and comfortable",
      category: "Running",
    },
    {
      img: foot5,
      name: "Training Shoes",
      price: "$90",
      details: "Gym & training",
      category: "Training",
    },
    {
      img: foot6,
      name: "Outdoor Shoes",
      price: "$90",
      details: "For outdoor sports",
      category: "Outdoor",
    },
    {
      img: foot7,
      name: "Running Shoes",
      price: "$90",
      details: "Lightweight and comfortable",
      category: "Running",
    },
    {
      img: foot8,
      name: "Training Shoes",
      price: "$90",
      details: "Perfect for gym",
      category: "Training",
    },
    {
      img: foot9,
      name: "Outdoor Shoes",
      price: "$90",
      details: "Durable for outdoor sports",
      category: "Outdoor",
    },
    {
      img: foot10,
      name: "Running Shoes",
      price: "$90",
      details: "Lightweight and comfortable",
      category: "Running",
    },
    {
      img: foot11,
      name: "Training Shoes",
      price: "$90",
      details: "Perfect for gym",
      category: "Training",
    },
  ];

  const filteredShoes =
    filter === "All" ? shoes : shoes.filter((s) => s.category === filter);
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
            borderRight: "1px solid #ddd",
            minHeight: "100vh",
          }}
        >
          <h2>Categories</h2>
          <ul className="all" style={{ listStyle: "none", padding: 0 }}>
            {["All", "Running", "Training", "Outdoor"].map((cat) => (
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
            <h1>Football Shoes Collection</h1>
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
            {filteredShoes.map((item, index) => (
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
                  <Card.Text className="fw-bold text-success">
                    {item.price}
                  </Card.Text>
                  <Card.Text className="text-muted">{item.details}</Card.Text>
                  <Button variant="primary" onClick={() => addToCart(item)}>
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
    </Fragment>
  );
}

export default FootBall;
