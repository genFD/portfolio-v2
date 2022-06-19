import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <article className="menu z-50 tablet:hidden bg-dark-blue w-56 h-186 absolute right-8 flex justify-center items-center mt-6">
      <ul className="flex flex-col items-center gap-y-8">
        <Link to="/home">
          <li className="text-body-3 hover:text-desaturated-cyan cursor-pointer">
            Home
          </li>
        </Link>
        <Link to="/portfolio">
          <li className="text-body-3 hover:text-desaturated-cyan cursor-pointer">
            Portfolio
          </li>
        </Link>
        <Link to="/contact">
          <li className="text-body-3 hover:text-desaturated-cyan cursor-pointer">
            contact
          </li>
        </Link>
      </ul>
    </article>
  );
};

export default Menu;
