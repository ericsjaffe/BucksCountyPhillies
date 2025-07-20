// Insert this once at the top of your file if using React 18+
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
        <h2 style={{ color: "#7BAFD4" }}>About Us</h2>
        <p>
          The Bucks County Phillies are a premier 14U travel baseball program based in Bucks County, Pennsylvania.
          We are built on a foundation of player development, competitive excellence, and team-first culture. <br /><br />
          Our mission is to provide young athletes with the skills, discipline, and mindset they need to succeed both on and off the
          field. Through elite coaching, structured practices, and exposure to top-tier competition, our players grow as athletes,
          leaders, and teammates. <br /><br />
          We compete in high-level tournaments, the USABL Fall League, and regularly train with professional instructors for speed, 
          strength, and agility. We prepare our players to excel in high school baseball and beyond, while teaching accountability, 
          hustle, and respect for the game. <br /><br />
          Whether it’s hitting the cage at practice, competing on game day, or supporting each 
          other as a team — the Bucks County Phillies are more than a team — we’re a baseball family. <br />
        </p>
      </section>


            <section id="schedule">
  <h2 style={{ color: "#7BAFD4" }}>Fall 2025 Schedule</h2>

  {/* Tournament Schedule Table */}
  <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "3rem" }}>
    <thead>
      <tr style={{ backgroundColor: "#7BAFD4", color: "#ffffff" }}>
        <th style={{ padding: "10px", textAlign: "left" }}>Tournament</th>
        <th style={{ padding: "10px", textAlign: "left" }}>Location</th>
        <th style={{ padding: "10px", textAlign: "left" }}>Dates</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ padding: "10px" }}>BCP Labor Day Classic</td>
        <td style={{ padding: "10px" }}>Morrisville, PA</td>
        <td style={{ padding: "10px" }}>Aug 28 – Sept 1</td>
      </tr>
      <tr>
        <td style={{ padding: "10px" }}>PG Super25 Central PA Super Qualifier</td>
        <td style={{ padding: "10px" }}>Palmyra, PA</td>
        <td style={{ padding: "10px" }}>Sept 5 – Sept 7</td>
      </tr>
      <tr>
        <td style={{ padding: "10px" }}>PDC Triple Crown</td>
        <td style={{ padding: "10px" }}>Newtown, PA</td>
        <td style={{ padding: "10px" }}>Sept 13 – Sept 14</td>
      </tr>
      <tr>
        <td style={{ padding: "10px" }}>PG WWBA Northeast Fall Championship</td>
        <td style={{ padding: "10px" }}>Northeast Region</td>
        <td style={{ padding: "10px" }}>Oct 3 – Oct 5</td>
      </tr>
    </tbody>
  </table>

  {/* USABL Fall League Schedule Table */}
  <h3 style={{ color: "#7BAFD4", marginBottom: "0.5rem" }}>USABL Fall 2025 Schedule</h3>
  <table style={{ width: "100%", borderCollapse: "collapse" }}>
    <thead>
      <tr style={{ backgroundColor: "#7BAFD4", color: "#ffffff" }}>
        <th style={{ padding: "10px", textAlign: "left" }}>#</th>
        <th style={{ padding: "10px", textAlign: "left" }}>Date</th>
        <th style={{ padding: "10px", textAlign: "left" }}>Opponent</th>
        <th style={{ padding: "10px", textAlign: "left" }}>Location</th>
      </tr>
    </thead>
    <tbody>
      {[
        "Sept 1",
        "Sept 8",
        "Sept 15",
        "Sept 22",
        "Sept 29",
        "Oct 6",
        "Oct 13",
        "Oct 20",
        "Oct 27",
        "Oct 31"
      ].map((date, index) => (
        <tr key={index}>
          <td style={{ padding: "10px" }}>{index + 1}</td>
          <td style={{ padding: "10px" }}>Week of {date}</td>
          <td style={{ padding: "10px" }}>TBD</td>
          <td style={{ padding: "10px" }}>TBD</td>
        </tr>
      ))}
    </tbody>
  </table>
</section>

      

     <section id="roster">
  <h2 style={{ color: "#7BAFD4" }}>Team Roster</h2>
  <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "sans-serif" }}>
    <thead>
      <tr style={{ backgroundColor: "#7BAFD4", color: "#ffffff" }}>
        <th style={{ padding: "10px", textAlign: "left" }}>#</th>
        <th style={{ padding: "10px", textAlign: "left" }}>First Name</th>
        <th style={{ padding: "10px", textAlign: "left" }}>Last Name</th>
        <th style={{ padding: "10px", textAlign: "left" }}>Graduation</th>
        <th style={{ padding: "10px", textAlign: "left" }}>Position</th>
        <th style={{ padding: "10px", textAlign: "left" }}>Hits</th>
        <th style={{ padding: "10px", textAlign: "left" }}>Throws</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>#1</td>
        <td>Charlie</td>
        <td>Lees</td>
        <td>2029</td>
        <td>INF / RHP</td>
        <td>Right</td>
        <td>Right</td>
      </tr>
      <tr>
        <td>#2</td>
        <td>Jax</td>
        <td>Leidy</td>
        <td>2029</td>
        <td>OF/LHP</td>
        <td>Left</td>
        <td>left</td>
      </tr>
      <tr>
        <td>#5</td>
        <td>Damian</td>
        <td>Mancini</td>
        <td>2029</td>
        <td>C</td>
        <td>Right</td>
        <td>Right</td>
      </tr>
      <tr>
        <td>#8</td>
        <td>Jake</td>
        <td>Schafer</td>
        <td>2029</td>
        <td>OF/LHP</td>
        <td>Left</td>
        <td>Left</td>
      </tr>
      <tr>
        <td>#9</td>
        <td>Nate</td>
        <td>Williams</td>
        <td>2029</td>
        <td>INF/RHP</td>
        <td>Right</td>
        <td>Right</td>
      </tr>
      <tr>
        <td>#11</td>
        <td>Brendan</td>
        <td>Corson</td>
        <td>2029</td>
        <td>INF/RHP</td>
        <td>Right</td>
        <td>Right</td>
      </tr>
      <tr>
        <td>#12</td>
        <td>Peyton</td>
        <td>Jaffe</td>
        <td>2029</td>
        <td>1B/RHP</td>
        <td>Right</td>
        <td>Right</td>
      </tr>
      <tr>
        <td>#16</td>
        <td>Sammy</td>
        <td>Kallen</td>
        <td>2029</td>
        <td>INF/RHP</td>
        <td>Right</td>
        <td>Right</td>
      </tr>
      <tr>
        <td>#17</td>
        <td>Michael</td>
        <td>Walker</td>
        <td>2028</td>
        <td>OF/RHP</td>
        <td>Right</td>
        <td>Right</td>
      </tr>
      <tr>
        <td>#21</td>
        <td>Lucas</td>
        <td>Perry</td>
        <td>2030</td>
        <td>INF/RHP</td>
        <td>Left</td>
        <td>Right</td>
      </tr>
      <tr>
        <td>#24</td>
        <td>Evan</td>
        <td>Hutchison</td>
        <td>2029</td>
        <td>IF/RHP</td>
        <td>Right</td>
        <td>Right</td>
      </tr>
      <tr>
        <td>#55</td>
        <td>Sammy</td>
        <td>Flansburg</td>
        <td>2029</td>
        <td>OF/C/RHP</td>
        <td>Right</td>
        <td>Right</td>
      </tr>
    </tbody>
  </table>
</section>


      <section id="gallery">
        <h2 style={{ color: "#7BAFD4" }}>Gallery</h2>
        <p>
          Upload images to /public and integrate a real gallery here using
          Lightbox or Swiper.
        </p>
      </section>

      <section id="contact">
        <h2 style={{ color: "#7BAFD4" }}>Contact & Sponsorship</h2>
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
