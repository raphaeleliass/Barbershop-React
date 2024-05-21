import { useState } from "react";
import { ImMenu } from "react-icons/im";
import { IoMdClose } from "react-icons/io";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <header className="sticky inset-0 z-50 bg-white py-4 md:static md:py-6">
      <div className="z-50 mx-auto flex max-w-xs flex-row content-center items-center justify-between md:max-w-3xl lg:max-w-5xl">
        <a href="#" className="text-2xl font-black uppercase md:text-3xl">
          barbershop
        </a>
        <nav className={`navbar ${menuOpen ? "active" : ""}`}>
          <ul className="z-50 mt-32 flex w-full flex-col items-center gap-4 md:mt-0 md:flex-row md:justify-center md:gap-2">
            <li className="absolute right-0 top-0 md:hidden">
              <button
                className={`mr-6 mt-6 p-2 duration-500 ease-in-out ${menuOpen ? "rotate-90" : ""}`}
                onClick={toggleMenu}
              >
                <IoMdClose className="size-6" />
              </button>
            </li>
            <li className="flex">
              <a href="#" className="nav-links hidden md:flex">
                Home
              </a>
            </li>
            <li className="flex">
              <a href="#" className="nav-links md:hidden" onClick={toggleMenu}>
                Home
              </a>
            </li>
            <li className="flex">
              <a href="#main" className="nav-links hidden md:flex">
                About us
              </a>
            </li>
            <li className="flex">
              <a
                href="#main"
                className="nav-links md:hidden"
                onClick={toggleMenu}
              >
                About us
              </a>
            </li>
            <li className="flex">
              <a href="#team" className="nav-links hidden md:flex">
                Team
              </a>
            </li>
            <li className="flex">
              <a
                href="#team"
                className="nav-links md:hidden"
                onClick={toggleMenu}
              >
                Team
              </a>
            </li>
            <li className="flex">
              <a href="#gallery" className="nav-links hidden md:flex">
                Gallery
              </a>
            </li>
            <li className="flex">
              <a
                href="#gallery"
                className="nav-links md:hidden"
                onClick={toggleMenu}
              >
                Gallery
              </a>
            </li>
            <li className="flex">
              <button className="cta-button hidden md:flex">
                <a href="#contact">Contact</a>
              </button>
            </li>
            <li className="flex">
              <button className="cta-button md:hidden" onClick={toggleMenu}>
                <a href="#contact">Contact</a>
              </button>
            </li>
          </ul>
        </nav>
        <button
          className={`p-1 duration-500 ease-in-out md:hidden ${menuOpen ? "rotate-90" : ""}`}
          onClick={toggleMenu}
        >
          <ImMenu />
        </button>
      </div>
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 min-h-screen bg-black bg-opacity-70 backdrop-blur-sm md:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
}

export default Header;
