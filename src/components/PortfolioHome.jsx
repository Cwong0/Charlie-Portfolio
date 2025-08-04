import React from "react";

export default function PortfolioHome() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <section className="max-w-4xl mx-auto grid gap-6">
        <header className="text-center">
          <h1 className="text-4xl font-bold mb-2">Charlie Li Wong-Jaramillo</h1>
          <p className="text-xl text-gray-700">Aspiring Software & Cloud Engineer</p>
        </header>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <p className="text-gray-700">
            I recently graduated with a B.S. in Computer & Electrical Engineering from Rutgers University. I am passionate about software development, cloud technologies, and solving complex real-world problems. My goal is to contribute to innovative engineering teams and grow into a skilled Software or Cloud Engineer.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-2xl font-semibold mb-2">Degree</h2>
          <p className="text-gray-700">
            Bachelor of Science in Computer and Electrical Engineering<br />
            Rutgers University, May 2024
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-2xl font-semibold mb-2">Projects</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>E-Commerce Website – Frontend with JavaScript, HTML, CSS (Product Management)</li>
            <li>IoT Gesture Device – Hardware/Software integration using microcontrollers</li>
            <li>Wireless Communications – Signal evaluation at 900MHz using Anritsu 412E</li>
            <li>VR Soccer Game – Oculus Quest 2, Unity Game Design</li>
            <li>Capstone Project – Linux/Python-based system automation for testing</li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <p className="text-gray-700">
            Email: c.wongjaramillo@gmail.com<br />
            LinkedIn: <a href="https://www.linkedin.com/in/cwj09" className="text-blue-600 underline" target="_blank">cwj09</a>
          </p>
          <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded">Download Resume</button>
        </div>
      </section>
    </main>
  );
}