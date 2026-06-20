import React from 'react';
import '../styling/Notfound.css'
import { Link } from 'react-router-dom';


const Notfound = () => {
  return (
    <div className="notfound">
      <div className="notfound-card">
        <h1 className="error-code">404</h1>
        <h2>Oops! Page Not Found</h2>
        <p>
          The page you're looking for may have been moved, deleted, or never
          existed.
        </p>

        <Link to="/" className="mylink">
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default Notfound;