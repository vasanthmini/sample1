import { Fragment } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../assets/sportsLife.jpg";
import image2 from "../assets/sports.jpg";
import image3 from "../assets/alls.jpg";
import bat1 from "../assets/bat.jpg";
import bat2 from "../assets/bat2.jpg";
import bat3 from "../assets/bat3.jpg";
import bat4 from "../assets/batlogo.jpg";
import gym1 from "../assets/gym.jpg";
import gym2 from "../assets/gym2.jpg";
import gym3 from "../assets/gym3.jpg";
import jersey1 from "../assets/jersey1.jpg";
import jersey2 from "../assets/jersey2.jpg";
import jersey3 from "../assets/jersey3.jpg";
import shoes1 from "../assets/shoes.jpg";
import shoes2 from "../assets/shoes2.jpg";
import shoes3 from "../assets/shoes3.jpg";
import foot2 from "../assets/foot2.jpg";
import foot3 from "../assets/foot3.jpg";
import foot5 from "../assets/foot5.jpg";
import About from "./About";
import Contact from "./Contact";


import "./Welcome.css";

function Welcome() {
  return (
    <Fragment>
      <div className="welcome">
        <div className="name">
          <h1>Best Prices</h1>
          <h2>Exclusive Sports Discounts</h2>
          <h3>Grab the latest offers today!</h3>

          {/* Sports Equipments Carousel */}
          <div>
            <h3>Featured Sports Gear</h3>
            <div className="boot">
              <Carousel>
                <Carousel.Item>
                  <img src={image1} alt="Sports Life" />
                  <Carousel.Caption>
                    <h3>Top Sports Collection</h3>
                    <p>High-quality gear for every athlete.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={image2} alt="Sports" />
                  <Carousel.Caption>
                    <h3>Exclusive Deals</h3>
                    <p>Discounts on premium sports items.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={image3} alt="All Sports" />
                  <Carousel.Caption>
                    <h3>New Arrivals</h3>
                    <p>Check out the latest sports collections.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>

          {/* Gym */}
          <div>
            <h3>
              {" "}
              <Link className="linkss " to="/home/Gym">
                Gym Essentials
              </Link>
            </h3>
            <div className="boot">
              <Carousel>
                <Carousel.Item>
                  <img src={gym1} alt="Gym Equipment" />
                  <Carousel.Caption>
                    <h3>Home Gym</h3>
                    <p>Everything you need for home workouts.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={gym2} alt="Gym Gear" />
                  <Carousel.Caption>
                    <h3>Fitness Accessories</h3>
                    <p>Enhance your training sessions.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={gym3} alt="Gym Equipment" />
                  <Carousel.Caption>
                    <h3>Professional Gear</h3>
                    <p>High-quality gym essentials for athletes.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>

          {/*FootBall */}
          <div>
            <h3>
              {" "}
              <Link className="linkss " to="/home/FootBall">
                FootBAll
              </Link>
            </h3>
            <div className="boot">
              <Carousel>
                <Carousel.Item>
                  <img src={foot2} alt="Bat Logo" />
                  <Carousel.Caption>
                    <h3>Brand Logos</h3>
                    <p>Top cricket brands you trust.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={foot3} alt="Bat" />
                  <Carousel.Caption>
                    <h3>Premium Bats</h3>
                    <p>For professional and amateur players.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={foot5} alt="Bat" />
                  <Carousel.Caption>
                    <h3>Lightweight Bats</h3>
                    <p>Easy handling and excellent performance.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={bat3} alt="Bat" />
                  <Carousel.Caption>
                    <h3>Durable Bats</h3>
                    <p>Long-lasting cricket gear for daily play.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>

          {/* Bat */}
          <div>
            <h3>
              {" "}
              <Link className="linkss " to="/home/bat">
                Cricket Bats
              </Link>
            </h3>
            <div className="boot">
              <Carousel>
                <Carousel.Item>
                  <img src={bat4} alt="Bat Logo" />
                  <Carousel.Caption>
                    <h3>Brand Logos</h3>
                    <p>Top cricket brands you trust.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={bat1} alt="Bat" />
                  <Carousel.Caption>
                    <h3>Premium Bats</h3>
                    <p>For professional and amateur players.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={bat2} alt="Bat" />
                  <Carousel.Caption>
                    <h3>Lightweight Bats</h3>
                    <p>Easy handling and excellent performance.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={bat3} alt="Bat" />
                  <Carousel.Caption>
                    <h3>Durable Bats</h3>
                    <p>Long-lasting cricket gear for daily play.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>

          {/* Jerseys */}
          <div>
            <h3>
              {" "}
              <Link className="linkss" to="/home/Jersey">
                Sports jersey
              </Link>
            </h3>
            <div className="boot">
              <Carousel>
                <Carousel.Item>
                  <img src={jersey1} alt="Jersey" />
                  <Carousel.Caption>
                    <h3>Team Jerseys</h3>
                    <p>Official kits from top teams.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={jersey2} alt="Jersey" />
                  <Carousel.Caption>
                    <h3>Training Jerseys</h3>
                    <p>Comfortable and breathable fabrics.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={jersey3} alt="Jersey" />
                  <Carousel.Caption>
                    <h3>Custom Jerseys</h3>
                    <p>Personalize your team uniforms.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>

          {/* Shoes */}
          <div>
            <h3>
              <Link className="linkss" to="/home/shoes">
                Sports Shoes
              </Link>
            </h3>
            <div className="boot">
              <Carousel>
                <Carousel.Item>
                  <img src={shoes1} alt="Sports Shoes" />
                  <Carousel.Caption>
                    <h3>Running Shoes</h3>
                    <p>Lightweight and comfortable for daily runs.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={shoes2} alt="Sports Shoes" />
                  <Carousel.Caption>
                    <h3>Training Shoes</h3>
                    <p>Perfect for gym and training sessions.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={shoes3} alt="Sports Shoes" />
                  <Carousel.Caption>
                    <h3>All-Terrain Shoes</h3>
                    <p>Durable shoes for outdoor sports.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
        <div className="p-3">
          <About />
        </div>

        <div className="p-4">
          <Contact />
        </div>
      </div>
    </Fragment>
  );
}

export default Welcome;
