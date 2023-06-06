import React from 'react';
import { Link } from 'react-router-dom';

export default function Logotype() {
  return (
    <div className=" flex justify-center items-center w-1/4 max-sm:w-full h-full cursor-pointer">
      <div>
        <Link to={`/`}>
          <img
            src={`${process.env.REACT_APP_API_URL_FILES}/logotype.png`}
            alt="Logo"
            className="w-60 max-sm:w-full"
          />
          {/* <img src={'/1.jpg'} alt="Logo" className="w-60 max-sm:w-full" /> */}
        </Link>
      </div>
    </div>
  );
}
