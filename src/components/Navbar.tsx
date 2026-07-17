import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setOpen(false);
  };

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "Packages", id: "packages" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        background: "#000",
        borderBottom: "2px solid #D4AF37",
        zIndex: 999,
      }}
    >
      <div
        style={{
          maxWidth: "1300px",
          margin: "auto",
          padding: "12px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <div
          onClick={() => scrollToSection("home")}
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
         <h2
  style={{
    color: "#D4AF37",
    fontSize: "28px",
    fontWeight: "bold",
    margin: 0,
  }}
>
  LIMRA WORLD TRAVELS
</h2>
        </div>

        {/* Desktop Menu */}
        <ul
          className="desktop-menu"
          style={{
            display: "flex",
            listStyle: "none",
            gap: "35px",
            margin: 0,
            padding: 0,
            color: "#fff",
            alignItems: "center",
          }}
        >
          {menuItems.map((item) => (
            <li
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              style={{
                cursor: "pointer",
                fontWeight: 600,
                transition: ".3s",
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Book Button */}
        <button
          onClick={() => scrollToSection("book")}
          style={{
            background: "#D4AF37",
            color: "#000",
            border: "none",
            padding: "12px 28px",
            borderRadius: "30px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          Book Now
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            display: "none",
            background: "transparent",
            border: "none",
            color: "#fff",
          }}
          className="mobile-btn"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          style={{
            background: "#111",
            padding: "20px",
          }}
        >
          {menuItems.map((item) => (
            <p
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              style={{
                color: "#fff",
                padding: "15px 0",
                borderBottom: "1px solid #333",
                cursor: "pointer",
                margin: 0,
              }}
            >
              {item.name}
            </p>
          ))}

          <button
            onClick={() => scrollToSection("book")}
            style={{
              marginTop: "20px",
              width: "100%",
              background: "#D4AF37",
              color: "#000",
              border: "none",
              padding: "14px",
              borderRadius: "30px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
}