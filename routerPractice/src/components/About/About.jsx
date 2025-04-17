import React from 'react'
import { NavLink} from 'react-router-dom';

export default function About() {
  return (
    <div className="p-4">
      <h2  className="text-2xl font-bold mb-2">About Page</h2>
      <p className="mb-4">i like to play cricket ...</p>
      
      <NavLink 
        to="login" 
        className={({isActive})=>
        `text-blue-600 hover:underline ${isActive?"text-white-500":"text-blue-200"}`
        }
      >
        Go to Login
      </NavLink>
    </div>
  );
}
