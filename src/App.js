import React from 'react';

export default function App() {
  return (
    <>
      <nav>
        <img
          src={process.env.PUBLIC_URL + "/bcp-logo.png"}
          alt="BCP Logo"
          style={{ height: "40px", marginRight: "1rem" }}
        />
        <a href="#about">About</a>
        <a href="#schedule">Schedule</a>
        <a href="#roster">Roster</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </nav>

      <header
        style={{
          background: `url(${process.env.PUBLIC_URL + "/hero.jpg"}) center/cover no-repeat`,
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          position: "relative"
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "2rem",
            borderRadius: "8px",
            backdropFilter: "blur(2px)",
          }}
        >
          <h1 className="text-5xl font-bold">Bucks County Phillies</h1>
          <p className="text-xl">Building the Future of Baseball</p>
          <a href="#contact" className="cta-button">
            Join the Team
          </a>
        </div>
      </header>

      <section id="about">
        <h2>About Us</h2>
        <p>

          The Bucks County Phillies are a premier 15U travel baseball program based in Bucks County, Pennsylvania. 
          We are built on a foundation of player development, competitive excellence, and team-first culture.  
          Our mission is to provide young athletes with the skills, discipline, and mindset they need to succeed both on and off the
          field. Through elite coaching, structured practices, and exposure to top-tier competition, our players grow as athletes,
          leaders, and teammates.
          We compete in high-level tournaments, the USABL Fall League, and regularly train with professional instructors for speed, 
          strength, and agility. We prepare our players to excel in high school baseball and beyond, while teaching accountability, 
          hustle, and respect for the game.  Whether it’s hitting the cage at practice, competing on game day, or supporting each 
            other as a team — the Bucks County Phillies are more than a team — we’re a baseball family.
          
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
          <li>#1 Charlie Lees</li>
          <li>#2 Jax Leidy</li>
          <li>#5 Damian Mancini</li>
          <li>#8 Jake Schafer</li>
          <li>#9 Nate Williams</li>
          <li>#11 Brendan Corson</li>
          <li>#12 Peyton Jaffe</li>
          <li>#16 Sammy Kallen</li>
          <li>#17 Michael Walker</li>
          <li>#21 Lucas Perry</li>
          <li>#24 Evan Hutchison</li>
          <li>#42 Ian Sarni</li>
          <li>#55 Sammy Flansburg</li>
        </ul>
      </section>

      <section id="gallery">
        <h2>Gallery</h2>
        <p>
          Upload images to /public and integrate a real gallery here using
          Lightbox or Swiper.
        </p>
      </section>

      <section id="contact">
        <h2>Contact & Sponsorship</h2>
        <p>Coach Eric Jaffe – eric.s.jaffe@gmail.com – 215-431-9224</p>
        <form action="https://formspree.io/f/mwkgrnrz" method="POST">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
          ></textarea>
          <button type="submit" className="cta-button">
            Send Message
          </button>
        </form>
      </section>

      <footer className="text-center p-6 text-sm text-gray-600">
        © 2025 Bucks County Phillies Baseball Club
      </footer>
    </>
  );
}
