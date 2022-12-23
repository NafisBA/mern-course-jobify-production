import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components/index.js'
import { Link, Navigate } from 'react-router-dom'
import {useAppContext} from '../context/appContext'
import React from 'react'
const Landing = () => {
  const {user } = useAppContext()
  return (
    <React.Fragment>
      {user && <Navigate to='/' />}
  <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>Tracking</span> app
          </h1>
          <p>
            I'm baby plaid lomo neutra shabby chic taiyaki paleo street art.
            Celiac flannel trust fund, hell of big mood pork belly small batch
            pabst succulents.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
</React.Fragment>

  
  );
};

export default Landing;
