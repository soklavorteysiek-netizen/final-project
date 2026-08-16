import { useState } from "react";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Menu", "#menu"],
  ["Testimonials", "#testimonials"],
  ["Gallery", "#gallery"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header>
      <nav className="navbar">
        <a href="#home" className="nav-logo" onClick={closeMenu}>
          <h2 className="logo-text">☕ Coffee</h2>
        </a>

        <ul className={`nav-menu ${open ? "mobile-open" : ""}`}>
          <button
            id="menu-close-button"
            className="fas fa-times"
            aria-label="Close menu"
            onClick={closeMenu}
          />
          {links.map(([label, href]) => (
            <li className="nav-item" key={label}>
              <a href={href} className="nav-link" onClick={closeMenu}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          id="menu-open-button"
          className="fas fa-bars"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        />
      </nav>
    </header>
  );
}
