import { Plane, Phone, MessageCircle } from "lucide-react";

export default function Hero() {
  const scrollToPackages = () => {
    document.getElementById("packages")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToBook = () => {
    document.getElementById("book")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,.65), rgba(0,0,0,.75)), url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1920&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        color: "#fff",
        padding: "120px 20px 80px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <div
          style={{
            maxWidth: "700px",
          }}
        >
          <p
            style={{
              color: "#D4AF37",
              letterSpacing: "4px",
              fontWeight: 700,
              marginBottom: "20px",
              textTransform: "uppercase",
            }}
          >
            Limra World Travels
          </p>

          <h1
            style={{
              fontSize: "clamp(42px,7vw,72px)",
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: "25px",
            }}
          >
            Your Trusted Partner For
            <span style={{ color: "#D4AF37" }}>
              {" "}
              Hajj, Umrah & International Travel
            </span>
          </h1>

          <p
            style={{
              fontSize: "20px",
              color: "#dddddd",
              lineHeight: "1.8",
              marginBottom: "45px",
              maxWidth: "650px",
            }}
          >
            We provide Hajj & Umrah Packages, International & Domestic Tours,
            Flight Tickets, Visa Assistance, Passport Services, Hotel Booking,
            Study Abroad, Overseas Recruitment and Corporate Travel Solutions.
          </p>
                    <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              marginBottom: "50px",
            }}
          >
            <button
              onClick={scrollToBook}
              style={{
                background: "#D4AF37",
                color: "#000",
                border: "none",
                padding: "18px 36px",
                borderRadius: "50px",
                fontSize: "18px",
                fontWeight: "bold",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Plane size={20} />
              Book Your Trip
            </button>

            <button
              onClick={scrollToPackages}
              style={{
                background: "transparent",
                color: "#fff",
                border: "2px solid #D4AF37",
                padding: "18px 36px",
                borderRadius: "50px",
                fontSize: "18px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Explore Packages
            </button>
          </div>

          <div
            style={{
              display: "flex",
              gap: "40px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <Phone color="#D4AF37" size={24} />

              <div>
                <div style={{ color: "#cccccc", fontSize: "14px" }}>
                  Call Us
                </div>

                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  +91 98405 55649
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <MessageCircle color="#D4AF37" size={24} />

              <div>
                <div style={{ color: "#cccccc", fontSize: "14px" }}>
                  WhatsApp
                </div>

                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Instant Booking Support
                </div>
              </div>
            </div>
          </div>
                  </div>
      </div>
    </section>
  );
}