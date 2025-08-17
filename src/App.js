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
        <a href="#ldc">Labor Day Classic</a> 
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

          <a
            href="#contact"
            className="cta-button"
            style={{
              backgroundColor: "#7BAFD4", // Carolina Blue
              color: "#ffffff",
              padding: "10px 20px",
              borderRadius: "6px",
              fontWeight: "bold",
              textDecoration: "none",
              display: "inline-block"
            }}
            >
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
        <td style={{ padding: "10px" }}>USABL Oktoberfest</td>
        <td style={{ padding: "10px" }}>Central, NJ</td>
        <td style={{ padding: "10px" }}>Sept 27 – Sept 28</td>
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

{/* ===== Labor Day Classic — Full Tournament Table with Logos ===== */}
<h3 id="ldc-table" style={{ color: "#7BAFD4", marginTop: "2rem", marginBottom: "0.5rem" }}>
  Labor Day Classic – Tournament Schedule
</h3>

<table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "2rem" }}>
  <thead>
    <tr style={{ backgroundColor: "#7BAFD4", color: "#ffffff" }}>
      <th style={{ padding: "10px", textAlign: "left" }}>Day / Date</th>
      <th style={{ padding: "10px", textAlign: "left" }}>Time</th>
      <th style={{ padding: "10px", textAlign: "left" }}>Matchup / Event</th>
      <th style={{ padding: "10px", textAlign: "left" }}>Round</th>
    </tr>
  </thead>
  <tbody>
    {/* Thursday */}
    <tr style={{ backgroundColor: "#f8fafc" }}>
      <td style={{ padding: "10px" }} rowSpan={2}>Thu, Aug 28<br/><span style={{ fontSize: 12, color: "#64748b" }}>Pool Play</span></td>
      <td style={{ padding: "10px" }}>6:00 PM</td>
      <td style={{ padding: "10px", display: "flex", alignItems: "center", gap: "8px" }}>
        <img src={`${process.env.PUBLIC_URL}/logos/ghost.jpg`} alt="Ghost PA" style={{ width: "22px" }}/>
        Ghost PA vs.
        <img src={`${process.env.PUBLIC_URL}/logos/centercourt.jpg`} alt="Centercourt" style={{ width: "22px" }}/>
        Centercourt Baseball
      </td>
      <td style={{ padding: "10px" }}>Pool</td>
    </tr>
    <tr style={{ backgroundColor: "#f8fafc" }}>
      <td style={{ padding: "10px" }}>8:15 PM</td>
      <td style={{ padding: "10px", display: "flex", alignItems: "center", gap: "8px" }}>
        <img src={`${process.env.PUBLIC_URL}/logos/wildbc.jpg`} alt="Wild BC" style={{ width: "22px" }}/>
        Wild BC vs.
        <img src={`${process.env.PUBLIC_URL}/logos/newegypt.jpg`} alt="New Egypt" style={{ width: "22px" }}/>
        New Egypt Warriors
      </td>
      <td style={{ padding: "10px" }}>Pool</td>
    </tr>

    {/* Friday */}
    <tr>
      <td style={{ padding: "10px" }} rowSpan={2}>Fri, Aug 29<br/><span style={{ fontSize: 12, color: "#64748b" }}>Pool Play</span></td>
      <td style={{ padding: "10px" }}>6:00 PM</td>
      <td style={{ padding: "10px", display: "flex", alignItems: "center", gap: "8px" }}>
        <img src={`${process.env.PUBLIC_URL}/logos/bcp.jpg`} alt="BCP" style={{ width: "22px" }}/>
        Bucks County Phillies vs.
        <img src={`${process.env.PUBLIC_URL}/logos/yardley.jpg`} alt="Yardley" style={{ width: "22px" }}/>
        Yardley/Makefield Riversharks
      </td>
      <td style={{ padding: "10px" }}>Pool</td>
    </tr>
   
    <tr>
  <td style={{ padding: "10px" }}>8:00 PM</td>
  <td style={{ padding: "10px", display: "flex", alignItems: "center", gap: "8px" }}>
    <img 
      src={`${process.env.PUBLIC_URL}/logos/yards.jpg`} 
      alt="The Yards at Full Depth" 
      style={{ width: "26px", borderRadius: "4px" }}
    />
    The Yards At Full Depth Home Run Derby
  </td>
  <td style={{ padding: "10px" }}>Event</td>
</tr>


    {/* Saturday */}
    <tr style={{ backgroundColor: "#f8fafc" }}>
      <td style={{ padding: "10px" }} rowSpan={4}>Sat, Aug 30<br/><span style={{ fontSize: 12, color: "#64748b" }}>Pool Play</span></td>
      <td style={{ padding: "10px" }}>10:00 AM</td>
      <td style={{ padding: "10px", display: "flex", alignItems: "center", gap: "8px" }}>
        <img src={`${process.env.PUBLIC_URL}/logos/ghost.jpg`} alt="Ghost PA" style={{ width: "22px" }}/>
        Ghost PA vs.
        <img src={`${process.env.PUBLIC_URL}/logos/manto.jpg`} alt="Manto" style={{ width: "22px" }}/>
        Manto PDC
      </td>
      <td style={{ padding: "10px" }}>Pool</td>
    </tr>
    <tr style={{ backgroundColor: "#f8fafc" }}>
      <td style={{ padding: "10px" }}>12:15 PM</td>
      <td style={{ padding: "10px", display: "flex", alignItems: "center", gap: "8px" }}>
        <img src={`${process.env.PUBLIC_URL}/logos/centercourt.jpg`} alt="Centercourt" style={{ width: "22px" }}/>
        Centercourt Baseball vs.
        <img src={`${process.env.PUBLIC_URL}/logos/manto.jpg`} alt="Manto" style={{ width: "22px" }}/>
        Manto PDC
      </td>
      <td style={{ padding: "10px" }}>Pool</td>
    </tr>
    <tr style={{ backgroundColor: "#f8fafc" }}>
      <td style={{ padding: "10px" }}>2:30 PM</td>
      <td style={{ padding: "10px", display: "flex", alignItems: "center", gap: "8px" }}>
        <img src={`${process.env.PUBLIC_URL}/logos/yardley.jpg`} alt="Yardley" style={{ width: "22px" }}/>
        Yardley Riversharks vs.
        <img src={`${process.env.PUBLIC_URL}/logos/wildbc.jpg`} alt="Wild BC" style={{ width: "22px" }}/>
        Wild BC
      </td>
      <td style={{ padding: "10px" }}>Pool</td>
    </tr>
    <tr style={{ backgroundColor: "#f8fafc" }}>
      <td style={{ padding: "10px" }}>4:45 PM</td>
      <td style={{ padding: "10px", display: "flex", alignItems: "center", gap: "8px" }}>
        <img src={`${process.env.PUBLIC_URL}/logos/newegypt.jpg`} alt="New Egypt" style={{ width: "22px" }}/>
        New Egypt Warriors vs.
        <img src={`${process.env.PUBLIC_URL}/logos/bcp.jpg`} alt="BCP" style={{ width: "22px" }}/>
        Bucks County Phillies
      </td>
      <td style={{ padding: "10px" }}>Pool</td>
    </tr>

    {/* Sunday */}
    <tr>
      <td style={{ padding: "10px" }} rowSpan={6}>Sun, Aug 31<br/><span style={{ fontSize: 12, color: "#64748b" }}>Elimination</span></td>
      <td style={{ padding: "10px" }}>9:00 AM</td>
      <td style={{ padding: "10px" }}>Quarterfinal A: #2 Seed vs. #7 Seed</td>
      <td style={{ padding: "10px" }}>Quarterfinal</td>
    </tr>
    <tr>
      <td style={{ padding: "10px" }}>11:15 AM</td>
      <td style={{ padding: "10px" }}>Quarterfinal B: #3 Seed vs. #6 Seed</td>
      <td style={{ padding: "10px" }}>Quarterfinal</td>
    </tr>
    <tr>
      <td style={{ padding: "10px" }}>1:30 PM</td>
      <td style={{ padding: "10px" }}>Quarterfinal C: #4 Seed vs. #5 Seed</td>
      <td style={{ padding: "10px" }}>Quarterfinal</td>
    </tr>
    <tr>
      <td style={{ padding: "10px" }}>3:45 PM</td>
      <td style={{ padding: "10px" }}>Semifinal 1: #1 Seed vs. Winner Quarterfinal C</td>
      <td style={{ padding: "10px" }}>Semifinal</td>
    </tr>
    <tr>
      <td style={{ padding: "10px" }}>6:00 PM</td>
      <td style={{ padding: "10px" }}>Semifinal 2: Winner QF A vs. Winner QF B</td>
      <td style={{ padding: "10px" }}>Semifinal</td>
    </tr>
    <tr>
      <td style={{ padding: "10px" }}>8:15 PM</td>
      <td style={{ padding: "10px" }}>Championship Game</td>
      <td style={{ padding: "10px" }}>Final</td>
    </tr>
  </tbody>
</table>


{/* Optional: quick back link */}
<div style={{ marginTop: "-0.5rem", marginBottom: "2rem" }}>
  <a href="#schedule" style={{ color: "#7BAFD4", textDecoration: "none", fontWeight: 600 }}>Back to Schedule ↑</a>
</div>

      
 <section id="roster">
  <h2 style={{ color: "#7BAFD4" }}>Team Roster</h2>
  <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "sans-serif" }}>
    <thead>
      <tr style={{ backgroundColor: "#7BAFD4", color: "#ffffff" }}>
        <th style={{ padding: "10px" }}>#</th>
        <th style={{ padding: "10px" }}>Photo</th>
        <th style={{ padding: "10px" }}>First Name</th>
        <th style={{ padding: "10px" }}>Last Name</th>
        <th style={{ padding: "10px" }}>Graduation</th>
        <th style={{ padding: "10px" }}>Position</th>
        <th style={{ padding: "10px" }}>Hits</th>
        <th style={{ padding: "10px" }}>Throws</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>#1</td>
        <td><img src={`${process.env.PUBLIC_URL}/players/charlie-lees.jpg`} alt="Charlie Lees" style={{ width: "120px", borderRadius: "4px" }} /></td>
        <td>Charlie</td>
        <td>Lees</td>
        <td>2029</td>
        <td>INF / RHP</td>
        <td>Right</td>
        <td>Right</td>
      </tr>
      <tr>
        <td>#2</td>
        <td><img src={`${process.env.PUBLIC_URL}/players/jax-leidy.jpg`} alt="Jax Leidy" style={{ width: "120px", borderRadius: "4px" }} /></td>
        <td>Jax</td>
        <td>Leidy</td>
        <td>2029</td>
        <td>OF/LHP</td>
        <td>Left</td>
        <td>left</td>
      </tr>
      <tr>
        <td>#5</td>
        <td><img src={`${process.env.PUBLIC_URL}/players/damian-mancini.jpg`} alt="Damian Mancini" style={{ width: "120px", borderRadius: "4px" }} /></td>
        <td>Damian</td>
        <td>Mancini</td>
        <td>2029</td>
        <td>C</td>
        <td>Right</td>
        <td>Right</td>
      </tr>
      <tr>
        <td>#8</td>
        <td><img src={`${process.env.PUBLIC_URL}/players/jake-schafer.jpg`} alt="Jake Schafer" style={{ width: "120px", borderRadius: "4px" }} /></td>
        <td>Jake</td>
        <td>Schafer</td>
        <td>2029</td>
        <td>OF/LHP</td>
        <td>Left</td>
        <td>Left</td>
      </tr>
      <tr>
        <td>#9</td>
        <td><img src={`${process.env.PUBLIC_URL}/players/nate-williams.jpg`} alt="Nate Williams" style={{ width: "120px", borderRadius: "4px" }} /></td>
        <td>Nate</td>
        <td>Williams</td>
        <td>2029</td>
        <td>INF/RHP</td>
        <td>Right</td>
        <td>Right</td>
      </tr>
      <tr>
        <td>#11</td>
        <td><img src={`${process.env.PUBLIC_URL}/players/brendan-corson.jpg`} alt="Brendan Corson" style={{ width: "120px", borderRadius: "4px" }} /></td>
        <td>Brendan</td>
        <td>Corson</td>
        <td>2029</td>
        <td>INF/RHP</td>
        <td>Right</td>
        <td>Right</td>
      </tr>
      <tr>
        <td>#12</td>
        <td><img src={`${process.env.PUBLIC_URL}/players/peyton-jaffe.jpg`} alt="Peyton Jaffe" style={{ width: "120px", borderRadius: "4px" }} /></td>
        <td>Peyton</td>
        <td>Jaffe</td>
        <td>2029</td>
        <td>1B/RHP</td>
        <td>Right</td>
        <td>Right</td>
      </tr>
      <tr>
        <td>#16</td>
        <td><img src={`${process.env.PUBLIC_URL}/players/sammy-kallen.jpg`} alt="Sammy Kallen" style={{ width: "120px", borderRadius: "4px" }} /></td>
        <td>Sammy</td>
        <td>Kallen</td>
        <td>2029</td>
        <td>INF/RHP</td>
        <td>Left</td>
        <td>Right</td>
      </tr>
      <tr>
        <td>#17</td>
        <td><img src={`${process.env.PUBLIC_URL}/players/michael-walker.jpg`} alt="Michael Walker" style={{ width: "120px", borderRadius: "4px" }} /></td>
        <td>Michael</td>
        <td>Walker</td>
        <td>2028</td>
        <td>OF/RHP</td>
        <td>Right</td>
        <td>Right</td>
      </tr>
      <tr>
        <td>#21</td>
        <td><img src={`${process.env.PUBLIC_URL}/players/lucas-perry.jpg`} alt="Lucas Perry" style={{ width: "120px", borderRadius: "4px" }} /></td>
        <td>Lucas</td>
        <td>Perry</td>
        <td>2030</td>
        <td>INF/RHP</td>
        <td>Left</td>
        <td>Right</td>
      </tr>
      <tr>
        <td>#24</td>
        <td><img src={`${process.env.PUBLIC_URL}/players/evan-hutchison.jpg`} alt="Evan Hutchison" style={{ width: "120px", borderRadius: "4px" }} /></td>
        <td>Evan</td>
        <td>Hutchison</td>
        <td>2029</td>
        <td>IF/RHP</td>
        <td>Right</td>
        <td>Right</td>
      </tr>

       <tr>
        <td>#42</td>
        <td><img src={`${process.env.PUBLIC_URL}/players/ian-sarni.jpg`} alt="Ian Sarni" style={{ width: "120px", borderRadius: "4px" }} /></td>
        <td>Ian</td>
        <td>Sarni</td>
        <td>2029</td>
        <td>1B/RHP</td>
        <td>Left</td>
        <td>Right</td>
      </tr>
      
      <tr>
        <td>#55</td>
        <td><img src={`${process.env.PUBLIC_URL}/players/sammy-flansburg.jpg`} alt="Sammy Flansburg" style={{ width: "120px", borderRadius: "4px" }} /></td>
        <td>Sam</td>
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
  <p>Click below to view our full photo gallery hosted on Amazon Photos.</p>
  <a
    href="https://www.amazon.com/photos/shared/NwIy-6hERR2a46AVv9UxZA.JcrB7l7xa4ErUXvliUAbSc"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      backgroundColor: "#7BAFD4",
      color: "#fff",
      padding: "12px 20px",
      borderRadius: "8px",
      textDecoration: "none",
      fontWeight: "bold",
      marginTop: "1rem"
    }}
  >
    View Full Gallery
  </a>
</section>


<section id="contact">
  <h2 style={{ color: "#7BAFD4" }}>Contact & Sponsorship</h2>
  <p>Coach Eric Jaffe – buckscountyphillies@gmail.com – 215-431-9224</p>
  <form
    action="https://formspree.io/f/mldlgpvj"
    method="POST"
    style={{ maxWidth: "500px", marginTop: "1rem" }}
  >
    {/* Optional override to specify recipient */}
    <input type="hidden" name="_to" value="buckscountyphillies@gmail.com" />

    <input
      type="text"
      name="name"
      placeholder="Your Name"
      required
      style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
    />
    <input
      type="email"
      name="email"
      placeholder="Your Email"
      required
      style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
    />
    <textarea
      name="message"
      placeholder="Your Message"
      rows="4"
      required
      style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
    ></textarea>
    
<button
  type="submit"
  className="cta-button"
  style={{
    backgroundColor: "#7BAFD4", // Carolina Blue
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold"
  }}
>
  Send Message
</button>

      
  </form>
</section>


      <footer className="text-center p-6 text-sm text-gray-600">

              <section style={{ backgroundColor: "#1e1e1e", color: "#fff", padding: "3rem 2rem", fontFamily: "sans-serif" }}>
  <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "2rem", maxWidth: "1200px", margin: "0 auto" }}>

    {/* Logo and Social */}
    <div style={{ flex: "1 1 200px" }}>
      <img
        src={process.env.PUBLIC_URL + "/bcp-logo.png"}
        alt="BCP Logo"
        style={{ height: "60px", marginBottom: "1rem" }}
      />
      <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <i className="fab fa-twitter" style={{ color: "#7BAFD4", fontSize: "1.5rem" }}></i>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <i className="fab fa-facebook" style={{ color: "#7BAFD4", fontSize: "1.5rem" }}></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <i className="fab fa-instagram" style={{ color: "#7BAFD4", fontSize: "1.5rem" }}></i>
        </a>
      </div>
    </div>

    {/* Main Links */}
    <div style={{ flex: "1 1 200px" }}>
      <h3 style={{ marginBottom: "1rem", fontWeight: "bold", color: "#7BAFD4" }}>Main Links</h3>
      <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
        <li><a href="#about" style={{ color: "#fff", textDecoration: "none" }}>About</a></li>
        <li><a href="#schedule" style={{ color: "#fff", textDecoration: "none" }}>Schedule</a></li>
        <li><a href="#roster" style={{ color: "#fff", textDecoration: "none" }}>Roster</a></li>
        <li><a href="#gallery" style={{ color: "#fff", textDecoration: "none" }}>Gallery</a></li>
        <li><a href="#contact" style={{ color: "#fff", textDecoration: "none" }}>Contact</a></li>
      </ul>
    </div>

    {/* Contact Info */}
    <div style={{ flex: "1 1 250px" }}>
      <h3 style={{ marginBottom: "1rem", fontWeight: "bold", color: "#7BAFD4" }}>Contact</h3>
      <p style={{ marginBottom: "0.5rem" }}>
        <i className="fas fa-map-marker-alt" style={{ color: "#7BAFD4", marginRight: "0.5rem" }}></i> Eric Jaffe </p>
        
      <p style={{ marginBottom: "0.5rem" }}>
        <i className="fas fa-map-marker-alt" style={{ color: "#7BAFD4", marginRight: "0.5rem" }}></i> General Manager </p>
      
      <p style={{ marginBottom: "0.5rem" }}>
        <i className="fas fa-phone" style={{ color: "#7BAFD4", marginRight: "0.5rem" }}></i> 215-431-9224
      </p>
      <p style={{ marginBottom: "0.5rem" }}>
        <i className="fas fa-envelope" style={{ color: "#7BAFD4", marginRight: "0.5rem" }}></i> 
        <a href="mailto:buckscountyphillies@gmail.com" style={{ color: "#fff" }}>buckscountyphillies@gmail.com</a>
      </p>
    </div>

  </div>
</section>

  © 2025 Bucks County Phillies Baseball.  All Rights Reserved
</footer>
    </>
  );
}
