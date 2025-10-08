import { Fragment } from "react";
import './Home.css';
import Header from "./Header";
import Footer from "./Footer";

import { Outlet } from "react-router-dom";





function Home()    {
  
  return(
    <Fragment>
 <div className="home-container"> 
  <Header />
  
    <div className="main-content">
<Outlet/>
      <div className="footer">

    <Footer />
      </div>

    </div>

    </div>     
    </Fragment>
  )

}


export default Home;