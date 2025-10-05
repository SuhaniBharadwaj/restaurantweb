import React from "react";
import "./style.css";

function App() {
  return (
    <div>
      {/* Navbar */}
      <header className="header">
        <a href="#" className="logo">
          <img src="image.jpeg" alt="Foodie Logo" />
          Foodie
        </a>
        <nav className="navbar">
          <div className="bx bx-menu" id="menu-icon"></div>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#customer">Customer</a></li>
            <li><a href="#contact">Contact</a></li>
            <li className="dropdown">
              <a href="#more">More</a>
              <ul className="dropdown-menu">
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#order-now">Order Now</a></li>
                <li><a href="#offers">Offers</a></li>
                <li><a href="#calendar">Calendar</a></li>
                <li><a href="#cart">Cart Item</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>

      {/* Home Section */}
      <section className="home" id="home">
        <div className="home-container">
          <div className="home-text">
            <span>Welcome To Our</span>
            <h1>Healthy Food <br /> Collection!</h1>
            <p>What does your taste bud call for?</p>
            <a href="#menu" id="menu-button" className="btn">Our Menu</a>
          </div>
          <div className="home-img">
            <img src="image2.gif" alt="Healthy Food" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <h1>Today's Deals</h1>
        <div className="about-container carousel">
          <button className="carousel-btn prev">‹</button>
          <div className="carousel-track">
            <div className="about-box">
              <div className="box-img">
                <img src="fruit-salas.jpeg" alt="Fruit Salad" />
              </div>
              <h3>Fruit Salad</h3>
              <h2>$10.4</h2>
            </div>
            <div className="about-box">
              <div className="box-img">
                <img src="fjuice.avif" alt="Fruit Juice" />
              </div>
              <h3>Fruit Juice</h3>
              <h2>$8.4</h2>
            </div>
            <div className="about-box">
              <div className="box-img">
                <img src="gsalad.jpeg" alt="Green Salad" />
              </div>
              <h3>Green Salad</h3>
              <h2>$12.4</h2>
            </div>
            <div className="about-box">
              <div className="box-img">
                <img src="fsmoothie.jpeg" alt="Fruit Smoothie" />
              </div>
              <h3>Fruit Smoothie</h3>
              <h2>$9.4</h2>
            </div>
          </div>
          <button className="carousel-btn next">›</button>
        </div>
      </section>

      {/* Shop Section */}
      <section className="shop" id="shop">
        <div className="heading">
          <h2>Food Shop</h2>
          <p>What's your flavor explosion waiting for?</p>
        </div>
        <div className="shop-container">
          <div className="shop-box">
            <div className="shop-img">
              <img src="gsalad2.jpeg" alt="Tasty Food" />
            </div>
            <h3>Tasty Food</h3>
            <h2>$14.2</h2>
            <i className="bx bxs-cart-add"></i>
          </div>
          {/* ...other shop items... */}
        </div>
      </section>

      {/* Menu Section */}
      <section className="menu" id="menu">
        <h1>Menu</h1>
        <p>Explore our delicious offerings.</p>
        <div className="menu-container">
          <div className="menu-category">
            <h3>Appetizers</h3>
            <div className="menu-item">
              <img src="a1.webp" alt="Spring Roll" />
              <p>Spring Roll</p>
            </div>
            {/* ...other menu items... */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2023 Foodie. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

// Carousel functionality
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector('.carousel-track');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  nextBtn.addEventListener('click', () => {
    track.scrollBy({ left: 300, behavior: 'smooth' });
  });

  prevBtn.addEventListener('click', () => {
    track.scrollBy({ left: -300, behavior: 'smooth' });
  });
});

export default App;
