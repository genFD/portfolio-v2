import React from 'react';
import { Menu } from '../components';
import { useGlobalContext } from '../context/context';
import { Link } from 'react-router-dom';

const Header = () => {
  const { showMenu, hideMenu, menu } = useGlobalContext();

  return (
    <header className="px-8 pt-8 tablet:px-10 tablet:pt-16 laptop:px-40">
      <nav className="w-full h-8 flex justify-between items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="61" height="32">
          <path
            fill="#5FB4A2"
            fillRule="evenodd"
            d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"
          />
        </svg>
        {menu ? (
          <button
            onClick={hideMenu}
            className="menu-btn cursor-pointer tablet:hidden"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19">
              <path
                fill="rgb(227, 224, 247)"
                fillRule="evenodd"
                d="M17.132.661l.707.707L9.707 9.5l8.132 8.132-.707.707L9 10.207.868 18.34l-.707-.707L8.293 9.5.161 1.368.868.661 9 8.793 17.132.661z"
              />
            </svg>
          </button>
        ) : (
          <button
            onClick={showMenu}
            className="menu-btn cursor-pointer tablet:hidden"
          >
            <svg
              width="26"
              height="18"
              viewBox="0 0 26 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z"
                fill="rgb(227, 224, 247)"
              />
            </svg>
          </button>
        )}

        <ul className="hidden tablet:flex tablet:gap-x-10">
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
              Contact me
            </li>
          </Link>
        </ul>
      </nav>
      {menu && <Menu />}
    </header>
  );
};

export default Header;
