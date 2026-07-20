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
           Trusted Since 1995 • Premium Travel Services
          </p>

          <h1
            style={{
              fontSize: "clamp(42px,7vw,72px)",
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: "25px",
            }}
          >
         Explore The World
<br />
With Confidence
            <span style={{ color: "#D4AF37" }}>
              {" "}
              Hajj • Umrah • Holidays • Visa
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
            Experience unforgettable journeys with Limra World Travels. We specialize in Hajj & Umrah, Domestic & International Holiday Packages, Flight Ticket Booking, Visa Assistance, Passport Services, Hotel Reservations, Study Abroad Guidance, Overseas Recruitment and Corporate Travel Solutions—delivering comfortable, affordable and memorable travel experiences since 1995.
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
              Book Your Journey
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
<p
  style={{
    color: "#D4AF37",
    fontSize: "16px",
    marginBottom: "30px",
    fontWeight: "600",
  }}
>
  ★★★★★ Trusted by Thousands of Happy Travelers
</p>
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