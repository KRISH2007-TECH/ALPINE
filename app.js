import React from "react";

function App() {
  return (
    <div className="container">

      {/* HEADER */}
      <header className="header">
        <h1>ALPINE</h1>
        <p>Premium Wallpapers & Textures</p>
      </header>

      {/* GALLERY */}
      <section className="gallery">
        <h2>Our Collection</h2>
        <div className="grid">
          <img src="https://source.unsplash.com/400x400/?wallpaper" alt="Wallpaper" />
          <img src="https://source.unsplash.com/400x400/?texture" alt="Texture" />
          <img src="https://source.unsplash.com/400x400/?interior-wall" alt="Interior" />
          <img src="https://source.unsplash.com/400x400/?marble-texture" alt="Marble" />
          <img src="https://source.unsplash.com/400x400/?wood-texture" alt="Wood" />
          <img src="https://source.unsplash.com/400x400/?abstract-wallpaper" alt="Abstract" />
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="company-info">
        <h2>Contact ALPINE</h2>
        <p><strong>Email:</strong> alpine.designs@gmail.com</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
      </section>

      {/* USER FORM */}
      <section className="contact-form">
        <h2>Get in Touch</h2>
        <form
          action="mailto:alpine.designs@gmail.com"
          method="post"
          encType="text/plain"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Email ID" required />
          <input type="tel" name="phone" placeholder="Phone Number" required />
          <textarea name="address" placeholder="Address" required></textarea>
          <button type="submit">Send Inquiry</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 ALPINE Wallpapers & Textures. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default App;
