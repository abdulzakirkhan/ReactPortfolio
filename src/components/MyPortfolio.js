import React from "react";
import image1 from "../images/portfolios-images/f-img.png";
import image2 from "../images/portfolios-images/s-img.png";
import image3 from "../images/portfolios-images/t-img.png";
import image4 from "../images/portfolios-images/four-img.png";
import image5 from "../images/portfolios-images/fifth-img.png";
import { myPortfolio } from "./Arrays";

function MyPortfolio() {
  return (
    <section className="about-bg" id="portfolio">
      <div className="container pt-5">
        <div className="row mt-5">
          <div className="col-12 d-flex justify-content-center text-center">
            <div className="w-75">
              <h1 className="text-white">
                My <span className="text-orange">{myPortfolio[0].title}</span>
              </h1>
              <p className="text-white description px-5">
                {myPortfolio[0].description}
              </p>
            </div>
          </div>
        </div>
        <div className="row g-3 mt-3 pb-5">
          <div className="col-md-6">
            <div className="card bg-transparent border-0 hover-effect">
              <div className="card-body p-0">
                <img src={image1} className="img-fluid  w-100" />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="row g-3">
              <div className="col-md-6 w-100">
                <img src={image2} className="img-fluid w-100 h-img" width={900} />
              </div>
              <div className="col-md-6 w-100">
                <img src={image3} className="img-fluid w-100 h-img" />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="row g-3">
              <div className="col-md-6 w-100">
                <img src={image4} className="img-fluid w-100 h-img" />
              </div>
              <div className="col-md-6 w-100">
                <img src={image5} className="img-fluid w-100 h-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyPortfolio;
