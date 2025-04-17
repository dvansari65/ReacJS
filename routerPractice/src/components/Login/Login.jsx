import React from 'react'
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-2">About Page</h2>
      <p>This is a simple About page in React.</p>
      <Link to="about" className="text-blue-500 underline mt-4 inline-block">Go to Login</Link>
    </div>
  );
}
