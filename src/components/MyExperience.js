import React from "react";
import { experienceDescription, positions } from "./Arrays";

function MyExperience() {
  return (
    <section className="service-bg" id="resume">
      <div className="container pt-5">
        <div className="row">
          <div className="col-12">
            <h1 className="text-white">
              My <span className="text-orange">Experiences</span>
            </h1>
            <p className="text-white description w-75">{experienceDescription.description}</p>
          </div>
          <div className="col-12">
            <div className="row g-3 py-5">
              {positions.map((item, index) => (
                <div className="col-md-4" key={index}>
                  <div className="card card-bg border-0 card-hover">
                    <div className="card-header border-0 bg-transparent">
                      <div className="d-flex justify-content-between align-items-center">
                      <span className="text-white d-block py-3">
                        {item.date}
                      </span>
                      <span className="text-orange">{item.company}</span>
                      </div>
                      <h1 className="text-orange">{item.jobTitle}</h1>
                      <p className="text-white">{item.tool}</p>
                    </div>
                    <div className="card-body">
                      <p className="text-white description">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
  ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyExperience;
