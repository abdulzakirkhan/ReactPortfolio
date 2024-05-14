import React from "react";
import image from "../images/image.png";

function AboutMe() {
  return (
    <section className="about-bg" id="about">
      <div className="container py-5">
        <div className="row mt-5 align-items-center g-3">
          <div className="col-md-6">
            <div className="bg-img position-relative p-5">
              <img
                src={image}
                alt="About Me"
                className="img-fluid outside-image"
              />
            </div>
          </div>
          <div className="col-md-6 p-5">
            <div className="d-flex flex-column align-items-start gap-3">
              <h1 className="text-white fw-bold">
                About<span className="text-orange"> Me</span>
              </h1>
              <div>
                <p className="text-white description">
                I'm a passionate front-end web developer dedicated to crafting exceptional digital experiences. With a keen eye for design and a knack for problem-solving, I thrive on turning ideas into reality. Let's collaborate and create something extraordinary together.
                </p>
                <p className="text-white description2">
                Experienced React developer at 92Devs with prior roles at Repla Technology (5 months) and Alright Tech (2 months). Passionate about crafting dynamic web solutions.
                </p>
              </div>
              <button type="button" className="btn btncust px-3 py-3">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutMe;
