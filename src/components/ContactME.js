import React from 'react'
import facebook from "../images/icons/facbook.png"
import picon from "../images/icons/p-icon.png"
import twitter from "../images/icons/twitter.png"
import instagram from "../images/icons/instagram.png"
import likedin from "../images/icons/linkedin.png"
import youtube from "../images/icons/youtube.png"


function ContactME() {
  return (
    <section className="contact-me card-bg" id="contact">
        <div className="container pt-5">
            <div className="row py-5">
                <div className="col-12">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="w-50 text-center">
                            <h1 className="text-white">Contact <span className="text-orange">Me</span></h1>
                            <p className="text-white description">There are many variations of passages ofLorem Ipsumavailable, but the majority havesuffered alteration in some form, by injected humour,</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row py-5 align-items-center">
                <div className="col-md-6">
                    <div className="content">
                        <ul className="list-unstyled d-flex flex-column gap-4">
                            <li className="text-white"><span className="text-orange">Address_</span>23 5 80 Road,Benedict,ne,68316 united States</li>
                            <li className="text-white"><span className="text-orange">Phone_</span>+923411718783</li>
                            <li className="text-white"><span className="text-orange">Email_</span>abdulzakir632@gmail.com</li>
                            <li className="text-white"><span className="text-orange">Website_</span>wwww.w.pk.com</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6">
                    <form className="bg-transparent">
                        <input type="email" className="form-control rounded-3 input-bg" id="exampleFormControlInput1" placeholder="name@example.com" />
                        <div className="my-4">
                            <textarea className="form-control rounded-3 input-bg" id="exampleFormControlTextarea2" rows="8" placeholder="Message"></textarea>
                        </div>
                        <button type="button" className="btn btncust py-3">Contact us</button>
                    </form>
                </div>
            </div>
            <div className="row g-3 py-3">
                <div className="col-12 d-flex justify-content-center">
                    <div className="w-75 text-center">
                        <h1 className="text-orange">AboutMe.</h1>
                        <p className="text-white description">                I'm a passionate front-end web developer dedicated to crafting exceptional digital experiences. With a keen eye for design and a knack for problem-solving, I thrive on turning ideas into reality. Let's collaborate and create something extraordinary together.
                        </p>
                    </div>
                </div>
                <div className="col-12 py-5">
                    <div className="d-flex justify-content-center align-items-center gap-3">   
                        <img src={facebook} width={24} />
                        <img src={twitter} width={24} />
                        <img src={likedin} width={24} />
                        <img src={picon} width={24} />
                        <img src={youtube} width={24} />
                        <img src={instagram} width={24} />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactME