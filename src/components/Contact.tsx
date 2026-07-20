export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        background: "#050505",
        color: "#ffffff",
        padding: "110px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#D4AF37",
            letterSpacing: "5px",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          Contact Us
        </p>

        <h2
          style={{
            fontSize: "clamp(36px,5vw,54px)",
            marginTop: "18px",
            marginBottom: "20px",
          }}
        >
          Let's Plan Your Next Journey
        </h2>

        <p
          style={{
            color: "#cccccc",
            maxWidth: "700px",
            margin: "0 auto 60px",
            lineHeight: "1.9",
            fontSize: "18px",
          }}
        >
          Whether you're planning Hajj, Umrah, a family holiday, business
          travel or need visa and passport assistance, our travel experts are
          ready to help.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "30px",
          }}
        >
          <div
            style={{
              background: "#141414",
              padding: "35px",
              borderRadius: "22px",
              border: "1px solid rgba(212,175,55,.25)",
            }}
          >
            <h3 style={{ color: "#D4AF37" }}>📍 Office</h3>
            <p style={{ color: "#cccccc", lineHeight: "1.8" }}>
              Limra World Travels
              <br />
              Chennai, Tamil Nadu
              <br />
              India
            </p>
          </div>

          <div
            style={{
              background: "#141414",
              padding: "35px",
              borderRadius: "22px",
              border: "1px solid rgba(212,175,55,.25)",
            }}
          >
            <h3 style={{ color: "#D4AF37" }}>📞 Call Us</h3>
            <p style={{ color: "#cccccc", lineHeight: "1.8" }}>
              +91 98405 55649
              <br />
              Available 24/7
            </p>
          </div>

          <div
            style={{
              background: "#141414",
              padding: "35px",
              borderRadius: "22px",
              border: "1px solid rgba(212,175,55,.25)",
            }}
          >
            <h3 style={{ color: "#D4AF37" }}>📧 Email</h3>
            <p style={{ color: "#cccccc", lineHeight: "1.8" }}>
              info@limraworldtravels.com
            </p>
          </div>
        </div>

        <a
          href="https://wa.me/919840555649"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-block",
            marginTop: "60px",
            background: "#25D366",
            color: "#fff",
            padding: "18px 42px",
            borderRadius: "50px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          💬 Chat with us on WhatsApp
        </a>
      </div>
    </section>
  );
}