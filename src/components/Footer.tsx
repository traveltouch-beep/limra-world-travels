export default function Footer() {
  return (
    <footer
      style={{
        background: "#050505",
        color: "#fff",
        padding: "70px 20px 30px",
        borderTop: "1px solid rgba(212,175,55,.2)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "40px",
        }}
      >
        {/* Company */}
        <div>
          <h2
            style={{
              color: "#D4AF37",
              marginBottom: "20px",
            }}
          >
            Limra World Travels
          </h2>

          <p
            style={{
              color: "#cccccc",
              lineHeight: "1.8",
            }}
          >
            Trusted travel partner since 1995 providing Hajj & Umrah,
            Flight Tickets, Tours, Visa Services, Hotel Booking,
            Study Abroad and Overseas Recruitment.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3
            style={{
              color: "#D4AF37",
              marginBottom: "20px",
            }}
          >
            Quick Links
          </h3>        <ul
          style={{
            listStyle: "none",
            padding: 0,
            color: "#cccccc",
            lineHeight: "2",
          }}
        >
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Packages</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* Services */}
      <div>
        <h3
          style={{
            color: "#D4AF37",
            marginBottom: "20px",
          }}
        >
          Our Services
        </h3>

        <ul
          style={{
            listStyle: "none",
            padding: 0,
            color: "#cccccc",
            lineHeight: "2",
          }}
        >
          <li>Hajj & Umrah</li>
          <li>Flight Booking</li>
          <li>Visa Assistance</li>
          <li>Hotel Booking</li>
          <li>Tour Packages</li>
          <li>Study Abroad</li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h3
          style={{
            color: "#D4AF37",
            marginBottom: "20px",
          }}
        >
          Contact
        </h3>        <p style={{ color: "#cccccc", lineHeight: "2" }}>
          📍 Chennai, Tamil Nadu
        </p>

        <p style={{ color: "#cccccc", lineHeight: "2" }}>
          📞 +91 98405 55649
        </p>

        <p style={{ color: "#cccccc", lineHeight: "2" }}>
          ✉️ info@limraworldtravels.com
        </p>

        <p style={{ color: "#cccccc", lineHeight: "2" }}>
          🕒 Mon – Sat : 9:00 AM – 8:00 PM
        </p>
      </div>
    </div>

    <hr
      style={{
        border: "none",
        borderTop: "1px solid rgba(255,255,255,.1)",
        margin: "50px 0 25px",
      }}
    />

    <p
      style={{
        textAlign: "center",
        color: "#999",
        fontSize: "15px",
      }}
    >
      © 2026 Limra World Travels. All Rights Reserved.
    </p>
  </footer>
);
}