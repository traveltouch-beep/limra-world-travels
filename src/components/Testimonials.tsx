export default function Testimonials() {
  const reviews = [
    {
      name: "Ahmed Khan",
      place: "Hajj Pilgrim",
      review:
        "Excellent service from Limra World Travels. Everything was well organized and stress-free.",
    },
    {
      name: "Fathima Begum",
      place: "Dubai Tour",
      review:
        "Amazing experience! The hotels, flights, and sightseeing were perfectly arranged.",
    },
    {
      name: "Mohammed Ali",
      place: "Singapore Tour",
      review:
        "Professional staff and great support throughout our journey. Highly recommended!",
    },
  ];

  return (
    <section
      style={{
        background: "#0b0b0b",
        padding: "100px 20px",
        color: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#D4AF37",
            letterSpacing: "4px",
            fontWeight: "bold",
            marginBottom: "15px",
          }}
        >
          TESTIMONIALS
        </p>

        <h2
          style={{
            fontSize: "48px",
            marginBottom: "60px",
          }}
        >
          What Our Customers Say
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
          }}
        >
          {reviews.map((item) => (
            <div
              key={item.name}
              style={{
                background: "#151515",
                border: "1px solid rgba(212,175,55,.25)",
                borderRadius: "20px",
                padding: "35px",
              }}
            >
              <div
                style={{
                  color: "#D4AF37",
                  fontSize: "22px",
                  marginBottom: "15px",
                }}
              >
                ⭐⭐⭐⭐⭐
              </div>

              <p
                style={{
                  color: "#cccccc",
                  lineHeight: "1.8",
                  fontStyle: "italic",
                  marginBottom: "25px",
                }}
              >
                "{item.review}"
              </p>

              <h3
                style={{
                  color: "#ffffff",
                  marginBottom: "8px",
                }}
              >
                {item.name}
              </h3>

              <p
                style={{
                  color: "#D4AF37",
                }}
              >
                {item.place}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}