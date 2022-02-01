import { useState, useEffect } from "react";
import Link from 'next/link'
// import "@fontsource/lora";
import "../styles/css/Header.css";

export default function Header() {
  const [dropdown, setDropdown] = useState(false);
  const [hamberger, setHamberger] = useState("nav-hamberger-icon");
  const [nav, setNav] = useState("nav initial");

  const handleClick = () => {
    const defaultHamberger = "nav-hamberger-icon";
    const defaultNav = "nav";
    if (dropdown) {
      setDropdown(false);
      setHamberger(defaultHamberger + " close");
      setNav(defaultNav + " initial");
    } else {
      setDropdown(true);
      setHamberger(defaultHamberger + " open");
      setNav(defaultNav + " final");
    }
  };

  useEffect(() => {
    window.onload = () => {
      setDropdown(false);
      setHamberger("nav-hamberger-icon");
    };
  });

  return (
    <main className='head'>
      <header className='header'>
        <div className='nav-hamberger' onClick={handleClick}>
          <span className={hamberger}></span>
        </div>
        <div className='title'>
          <h1 className='select-none text-5xl'>Jaden Chant</h1>
        </div>
      </header>
      <div className={nav}>
        <ul className='nav-items'>
          <Link
            href='/'
            // draggable='false'
            // className='nav-item'
            // activeClassName='current'
          >
            <a className="nav-item">
              Home
            </a>
          </Link>
          <Link
            href='/about'
            // draggable='false'
            // className='nav-item'
            // activeClassName='current'
          >
            <a className="nav-item">
              About
            </a>
          </Link>
          <Link
            href='/portfolio'
            // draggable='false'
            // className='nav-item'
            // activeClassName='current'
          >
            <a className="nav-item">
              Portfolio
            </a>
          </Link>
          <Link
            href='/contact'
            // draggable='false'
            // className='nav-item'
            // activeClassName='current'
          >
            <a className="nav-item">
              Contact
            </a>
          </Link>
        </ul>
      </div>
    </main>
  );
};
