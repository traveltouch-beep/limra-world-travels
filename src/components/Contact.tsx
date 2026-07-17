function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "60px 20px",
        background: "#0B3D91",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "36px",
          marginBottom: "20px",
        }}
      >
        Contact Us
      </h2>

      <p style={{ fontSize: "18px" }}>
        Limra World Travels
      </p>

      <p>📍 Chennai, Tamil Nadu, India</p>

      <p>
        📞 +91 9840555649
      </p>

      <p>
        📧 info@limraworldtravels.com
      </p>

      <div style={{ marginTop: "30px" }}>
        <a
          href="https://wa.me/919840555649"
          target="_blank"
          rel="noreferrer"
          style={{
            background: "#25D366",
            color: "#fff",
            padding: "12px 25px",
            borderRadius: "25px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          💬 Chat on WhatsApp
        </a>
      </div>
    </section>
  );
}

export default Contact;