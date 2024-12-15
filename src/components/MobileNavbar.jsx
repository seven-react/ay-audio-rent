import React from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@svg/close.svg?react";
import clsx from "clsx";

const MobileNavbar = ({ isSideMenuOpen, setMenu, renderLinks }) => {
  return (
    <div
      className={clsx(
        "fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 transition-transform transform",
        isSideMenuOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      <section className="bg-blue flex-col absolute right-0 top-0 h-screen p-8 z-50 w-56 flex">
        <CloseIcon
          onClick={() => setMenu(false)}
          className="text-3xl cursor-pointer mb-8 self-end"
          aria-label="Close Menu"
          aria-expanded={!isSideMenuOpen}
        />
        <ul className="flex flex-col space-y-4">{renderLinks()}</ul>
      </section>
    </div>
  );
};

export default MobileNavbar;
