import React from 'react';

export default function App() {
  return (
    <>
      <nav>
        <a href="#about">About</a>
        <a href="#schedule">Schedule</a>
        <a href="#roster">Roster</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </nav>

      <header
        style={{
          background: `url(${process.env.PUBLIC_URL + '/hero.jpg'}) center/cover no-repeat`,
          height: '80vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <h1 className="text-5xl font-bold">Bucks County Phillies</h1>
        <p className="text-xl">Building the Future of Baseball</p>
        <a href="#contact" className="cta-button">Join the Team</a>
      </header>

      <section id="about">
        <h2>About Us</h2>
        <p>
          We are a competitive 15U travel baseball team based in Bucks County, PA.
          Focused on development, leadership, and teamwork, we compete in top-tier tournaments
          and leagues throughout the season.
        </p>
      </section>

      <section id="schedule">
        <h2>Fall 2025 Schedule</h2>
        <ul>
          <li>Weekly Team Practices</li>
          <li>USABL Fall League – 10 Games</li>
          <li>4–5 Elite Tournaments</li>
          <li>Weekly Speed, Strength & Agility Training</li>
        </ul>
      </section>

      <section id="roster">
        <h2>Team Roster</h2>
        <ul>
          <li>#3 Peyton Jaffe – OF/P</li>
          <li>#7 Ian Sarni – P/IF</li>
          <li>#12 Brendan Corson – P</li>
          <li>#23 Evan Hutchison – IF</li>
          <li>#14 Michael Walker – P</li>
          <li>#11 Damian Mancini – C</li>
          <li>#27 Ashton Ford – OF</li>
          <li>#9 Dom Fantano – IF</li>
        </ul>
      </section>

      <section id="gallery">
        <h2>Gallery</h2>
        <p>Upload images to /public and integrate a real gallery here using Lightbox or Swiper.</p>
      </section>

      <section id="contact">
        <h2>Contact & Sponsorship</h2>
        <p>Coach Eric Jaffe – eric.s.jaffe@gmail.com – 215-431-9224</p>
        <form action="https://formspree.io/f/mwkgrnrz" method="POST">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
          <button type="submit" className="cta-button">Send Message</button>
        </form>
      </section>

      <footer className="text-center p-6 text-sm text-gray-600">
        © 2025 Bucks County Phillies Baseball Club
      </footer>
    </>
  );
}
