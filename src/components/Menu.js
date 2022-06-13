import React from 'react';

const Menu = () => {
  return (
    <article className="menu tablet:hidden bg-dark-blue w-56 h-186 absolute right-8 flex justify-center items-center mt-6">
      <ul className="flex flex-col items-center gap-y-8">
        <li className="text-body-3 text-light-grey uppercase hover:text-desaturated-cyan">
          Home
        </li>
        <li className="text-body-3 text-light-grey uppercase hover:text-desaturated-cyan">
          Portfolio
        </li>
        <li className="text-body-3 text-light-grey uppercase hover:text-desaturated-cyan">
          Contact me
        </li>
      </ul>
    </article>
  );
};

export default Menu;
