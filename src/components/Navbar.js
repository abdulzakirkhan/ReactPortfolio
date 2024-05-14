import React   from "react";

const Navbar = () => {
  function isActive(path) {
    // Check if the current page URL contains the path
    return window.location.pathname.includes(path);
  }
  return (
    <header>
      <nav class="navbar navbar-expand-lg  bg-nav">
        <div class="container">
          <a class="navbar-brand text-white" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class={
                    "nav-link text-white fs-16" +
                    (isActive("#home") ? "" : " active")
                  }
                  aria-current="page"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a
                  class={
                    "nav-link text-white fs-16" +
                    (isActive("#about") ? "active" : " ")
                  }
                  href="#about"
                >
                  About
                </a>
              </li>
              <li class="nav-item">
                <a
                  class={
                    "nav-link text-white fs-16" +
                    (isActive("#services") ? " active" : "")
                  }
                  href="#services"
                >
                  Testimonials
                </a>
              </li>
              <li class="nav-item">
                <a
                  class={
                    "nav-link text-white fs-16" +
                    (isActive("#portfolio") ? " active" : "")
                  }
                  href="#portfolio"
                >
                  Portfolio
                </a>
              </li>
              <li class="nav-item">
                <a
                  class={
                    "nav-link text-white fs-16" +
                    (isActive("#resume") ? " active" : "")
                  }
                  href="#resume"
                >
                  My Experience
                </a>
              </li>
              <li class="nav-item">
                <a
                  class={
                    "nav-link text-white fs-16" +
                    (isActive("#contact") ? " active" : "")
                  }
                  href="#contact"
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
