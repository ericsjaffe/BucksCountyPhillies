import React from "react";

export default function App() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <header className="bg-gradient-to-r from-blue-400 to-red-500 p-6 text-white shadow">
        <h1 className="text-4xl font-bold">Bucks County Phillies</h1>
        <p className="text-lg">15U Travel Baseball Team</p>
      </header>

      <section className="p-6 grid gap-6 md:grid-cols-2">
        <div className="border rounded-lg p-4 shadow">
          <h2 className="text-2xl font-semibold mb-2">About Us</h2>
          <p>
            The Bucks County Phillies are a competitive 15U travel baseball team focused on
            development, discipline, and team culture. Our players train hard, play harder,
            and support one another on and off the field.
          </p>
        </div>

        <div className="border rounded-lg p-4 shadow">
          <h2 className="text-2xl font-semibold mb-2">Fall Schedule</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Weekly Practices</li>
            <li>USABL Fall League – 10 Games</li>
            <li>4–5 Elite Tournaments</li>
            <li>Speed & Agility Training</li>
          </ul>
        </div>

        <div className="md:col-span-2 border rounded-lg p-4 shadow">
          <h2 className="text-2xl font-semibold mb-2">Team Roster</h2>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <li>#3 Peyton Jaffe – OF/P</li>
            <li>#7 Ian Sarni – P/IF</li>
            <li>#12 Brendan Corson – P</li>
            <li>#23 Evan Hutchison – IF</li>
            <li>#14 Michael Walker – P</li>
            <li>#11 Damian Mancini – C</li>
            <li>#27 Ashton Ford – OF</li>
            <li>#9 Dom Fantano – IF</li>
          </ul>
        </div>

        <div className="md:col-span-2 border rounded-lg p-4 text-center shadow">
          <h2 className="text-2xl font-semibold mb-4">Interested in Sponsoring or Joining?</h2>
          <p className="mb-4">
            Contact Coach Eric Jaffe at <a className="text-blue-600" href="mailto:eric.s.jaffe@gmail.com">eric.s.jaffe@gmail.com</a> or 215-431-9224.
          </p>
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">Team Tryout Signup</button>
        </div>
      </section>

      <footer className="bg-gray-100 text-center p-4 mt-6 text-sm text-gray-600">
        © 2025 Bucks County Phillies Baseball Club
      </footer>
    </main>
  );
}
