import { Routes, Route,Navigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import Main from "./Main";
import Welcome from "./Welcome";
import Shoes from "./Shoes";
import Bat from "./Bat";
import Gym from "./Gym";
import Jersey from "./Jersey";
import FootBall from "./FootBall";
import About from "./About";
import Contact from "./Contact";
import Demo from "./Demo";



function Portal() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Home layout route */}
      <Route path="/Home" element={<Home />}>
        <Route path="Welcome" element={<Welcome />} />
        <Route path="Shoes" element={<Shoes />} />
        <Route path="Bat" element={<Bat />} />
        <Route path="Gym" element={<Gym />} />{" "}
        <Route path="Jersey" element={<Jersey />} />
        <Route path="FootBall" element={<FootBall />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Demo" element={<Demo />} />
        <Route path="Main" element={<Main />} />
      </Route>
    </Routes>
  );
}

export default Portal;
