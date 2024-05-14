import React from 'react'
import image from "../images/profile.png"
function Home() {
  return (
    <section className="bg-grd" id="home">
        <div className="container pt-5">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-6">
                        <h6 className="text-orange">Hello, Welcome</h6>
                        <h1 className="text-white">I am Abdul <span className="text-orange">Zakir</span> </h1>
                        <button type="button" className="btn btncust">Contact Me</button>
                </div>
                <div className="col-md-6">
                    <div className="py-5 px-5 mx-4">
                        <img src={image} className="img-fluid home-img" alt='lol' width={400} />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Home;