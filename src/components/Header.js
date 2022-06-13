import React from 'react';
import { Menu } from '../components';
import { useGlobalContext } from '../context/context';

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
                fill="#EAEAEB"
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
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="13">
              <g fill="#EAEAEB" fillRule="evenodd">
                <path d="M0 0h24v1H0zM0 6h24v1H0zM0 12h24v1H0z" />
              </g>
            </svg>
          </button>
        )}

        <ul className="hidden tablet:flex tablet:gap-x-10">
          <li className="text-body-3 text-light-grey uppercase hover:text-desaturated-cyan cursor-pointer">
            Home
          </li>
          <li className="text-body-3 text-light-grey uppercase hover:text-desaturated-cyan cursor-pointer">
            Portfolio
          </li>
          <li className="text-body-3 text-light-grey uppercase hover:text-desaturated-cyan cursor-pointer">
            Contact me
          </li>
        </ul>
      </nav>
      {menu && <Menu />}
    </header>
  );
};

export default Header;
