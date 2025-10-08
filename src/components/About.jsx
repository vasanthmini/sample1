import { Fragment } from "react";
import "./About.css";

function About() {
  return (
    <Fragment>
      <div className="about-container">
        <h1>About Sports Shop</h1>
        <p>
          Welcome to <strong>Sports MINI</strong> – your one-stop shop for all
          sports equipment, shoes, and accessories. We provide the best quality
          products at affordable prices for players of all levels.
        </p>

        <h2 className="text-dark">Our Mission</h2>
        <p>
          To encourage fitness and sports by offering top-quality gear that
          helps athletes perform their best, whether on the ground, court, or
          field.
        </p>

        <h2 className="text-dark">Why Choose Us?</h2>
        <ul>
          <li>✔ Wide range of sports equipment</li>
          <li>✔ Trusted brands and top quality</li>
          <li>✔ Affordable prices & discounts</li>
          <li>✔ Customer-first support</li>
        </ul>
      </div>
    </Fragment>
  );
}

export default About;
