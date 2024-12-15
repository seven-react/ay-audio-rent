import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

// Accept renderLinks prop
const DesktopNavbar = ({ renderLinks, isStickyBlue }) => {
  return (
    <ul className="hidden lg:flex flex-row justify-between space-x-5 text-[0.85rem] font-bold">
      {renderLinks()} {/* Use renderLinks function */}
      <li>
        <Link to="/Contact">
          <button
            className={clsx(
              "py-3 px-4 rounded-[4px] text-[0.875rem] leading-[0.625rem] transition-colors duration-300",
              {
                "text-white bg-inherit hover:border-y-[1px] border-y-white":
                  isStickyBlue,
                "bg-blue-100 text-white hover:bg-[rgba(18,104,251,0.9)]":
                  !isStickyBlue,
              }
            )}
            aria-label="Navigate to Contact Us page"
          >
            Contact us
          </button>
        </Link>
      </li>
    </ul>
  );
};

export default DesktopNavbar;
