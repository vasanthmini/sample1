import { Fragment, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import shoes1 from "../assets/shoes.jpg";
import shoes2 from "../assets/shoes2.jpg";
import shoes3 from "../assets/shoes3.jpg";
import shoes5 from "../assets/shoes5.jpg";
import shoes6 from "../assets/shoes6.jpg";
import shoes7 from "../assets/shoes7.jpg";
import shoes8 from "../assets/shoes8.jpg";
import shoes9 from "../assets/shoes9.jpg";
import shoes10 from "../assets/shoes10.jpg";
import shoes11 from "../assets/shoes11.jpg";
import shoes12 from "../assets/shoes12.jpg";
import shoes13 from "../assets/shoes13.jpg";
import shoes14 from "../assets/shoes14.jpg";

import "./Page.css";

function Shoes() {
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
      img: shoes1,
      name: "Running Shoes",
      price: "$90",
      details: "Lightweight and comfortable for daily runs",
      category: "Running",
    },
    {
      img: shoes2,
      name: "Training Shoes",
      price: "$120",
      details: "Perfect for gym and training sessions",
      category: "Training",
    },
    {
      img: shoes3,
      name: "All-Terrain Shoes",
      price: "$150",
      details: "Durable shoes for outdoor sports",
      category: "Outdoor",
    },
    {
      img: shoes5,
      name: "Running Shoes",
      price: "$90",
      details: "Lightweight and comfortable for daily runs",
      category: "Running",
    },
    {
      img: shoes6,
      name: "Running Shoes",
      price: "$90",
      details: "Lightweight and comfortable for daily runs",
      category: "Outdoor",
    },
    {
      img: shoes7,
      name: "Running Shoes",
      price: "$90",
      details: "Lightweight and comfortable for daily runs",
      category: "Outdoor",
    },
    {
      img: shoes8,
      name: "Running Shoes",
      price: "$90",
      details: "Lightweight and comfortable for daily runs",
      category: "Outdoor",
    },
    {
      img: shoes9,
      name: "Running Shoes",
      price: "$90",
      details: "Lightweight and comfortable for daily runs",
      category: "Training",
    },
    {
      img: shoes10,
      name: "Running Shoes",
      price: "$90",
      details: "Lightweight and comfortable for daily runs",
      category: "Running",
    },
    {
      img: shoes11,
      name: "Running Shoes",
      price: "$90",
      details: "Lightweight and comfortable for daily runs",
      category: "Training",
    },
    {
      img: shoes12,
      name: "Running Shoes",
      price: "$90",
      details: "Lightweight and comfortable for daily runs",
      category: "Running",
    },
    {
      img: shoes13,
      name: "Running Shoes",
      price: "$90",
      details: "Lightweight and comfortable for daily runs",
      category: "Training",
    },
    {
      img: shoes14,
      name: "Running Shoes",
      price: "$90",
      details: "Lightweight and comfortable for daily runs",
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
          <h4>Categories</h4>
          <ul className="all" style={{ listStyle: "none", padding: 0 }}>
            {["All", "Running", "Training", "Outdoor"].map((cat) => (
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
            <h1>Sports Shoes Collection</h1>
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

          <div className="d-flex flex-wrap justify-content-center gap-4">
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

export default Shoes;
