import React from "react";
import { array1 } from "./Arrays";
function MyService() {
  return (
    <section className="service-bg" id="services">
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-7">
            <h1 className="text-white">
              My <span className="text-orange">Services</span>
            </h1>
            <p className="text-white description">
              Craft captivating, user-friendly websites with expertise in HTML,
              CSS, JavaScript, and frameworks like React.js. Let's collaborate
              to bring your digital vision to life.
            </p>
          </div>
        </div>
        <div className="row py-5">
          {array1.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="card card-bg border-0 h-100 double-hover">
                <div className="card-header border-0 bg-transparent text-center mt-3">
                  <img src={item.image} className="img-fluid" width={60} />
                </div>
                <div className="card-body text-center">
                  <h2 className="text-white px-5 py-3">{item.Fname}</h2>
                  <p className="text-white description">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MyService;

// console.log(array1[0])
