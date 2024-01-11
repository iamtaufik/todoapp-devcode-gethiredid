import React from 'react';

const Navbar = () => {
  return (
    <header data-cy='header-background' className="container py-7 bg-primary min-w-full">
      <nav>
        <ul>
          <li>
            <span data-cy="header-title" className="font-extrabold text-white text-xl">TODO LIST APP</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
