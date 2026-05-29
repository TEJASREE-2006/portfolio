import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

function Navbar() {

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {

    const handleScroll = () => {

      const sections = [
        "home",
        "skills",
        "projects",
        "experience",
        "education",
        "achievements",
        "contact",
      ];

      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {

        const element = document.getElementById(section);

        if (element) {

          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }

      });

    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  const navItems = [
    "home",
    "skills",
    "projects",
    "experience",
    "education",
    "achievements",
    "contact",
  ];

  return (

    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        bg-black/70
        backdrop-blur-lg
        border-b
        border-yellow-400/10
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-4
          flex
          items-center
          justify-between
        "
      >

        {/* Logo */}
        <h1
          className="
            text-2xl
            md:text-3xl
            font-bold
            bg-gradient-to-r
            from-yellow-300
            to-yellow-500
            bg-clip-text
            text-transparent
          "
        >
          Teja Sree Chenikala
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">

          {navItems.map((item) => (

            <li key={item}>

              <a
                href={`#${item}`}
                className={`
                  capitalize
                  text-lg
                  transition-all
                  duration-300
                  relative
                  pb-1

                  ${
                    activeSection === item
                      ? "text-yellow-400"
                      : "text-gray-300 hover:text-yellow-300"
                  }
                `}
              >

                {item}

                {activeSection === item && (

                  <span
                    className="
                      absolute
                      left-0
                      bottom-0
                      w-full
                      h-[2px]
                      bg-yellow-400
                      rounded-full
                    "
                  ></span>

                )}

              </a>

            </li>

          ))}

        </ul>

        {/* Mobile Menu Icon */}
        <Menu className="md:hidden text-yellow-400 w-8 h-8" />

      </div>

    </nav>

  );
}

export default Navbar;