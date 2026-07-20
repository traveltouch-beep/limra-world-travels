export default function Testimonials() {
  const reviews = [
    {
      name: "Ahmed Khan",
      place: "Hajj Pilgrim",
      review:
        "Our Hajj journey was perfectly organized. From visa processing to accommodation, every detail was handled professionally. Highly recommended.",
    },
    {
      name: "Fathima Begum",
      place: "Dubai Holiday Package",
      review:
        "Limra World Travels made our Dubai vacation unforgettable. Excellent hotels, smooth airport transfers and wonderful customer support.",
    },
    {
      name: "Mohammed Ali",
      place: "Singapore Tour",
      review:
        "Professional staff, affordable pricing and excellent travel arrangements. We will definitely book our next family holiday with Limra World Travels.",
    },
  ];

  return (
    <section
      style={{
        background: "#050505",
        padding: "110px 20px",
        color: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: "1300px",
          margin: "auto",
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
          Testimonials
        </p>

        <h2
          style={{
            fontSize: "clamp(36px,5vw,54px)",
            marginTop: "18px",
            marginBottom: "20px",
          }}
        >
          Trusted By Thousands Of Happy Travellers
        </h2>

        <p
          style={{
            color: "#cccccc",
            maxWidth: "750px",
            margin: "0 auto 70px",
            lineHeight: "1.9",
            fontSize: "18px",
          }}
        >
          Customer satisfaction has always been our greatest achievement.
          Here's what some of our happy travellers say about their experience
          with Limra World Travels.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "35px",
          }}
        >
          {reviews.map((item) => (
            <div
              key={item.name}
              style={{
                background: "#141414",
                border: "1px solid rgba(212,175,55,.25)",
                borderRadius: "24px",
                padding: "40px 30px",
                boxShadow: "0 12px 30px rgba(0,0,0,.35)",
              }}
            >
              <div
                style={{
                  fontSize: "24px",
                  marginBottom: "20px",
                  color: "#D4AF37",
                }}
              >
                ⭐⭐⭐⭐⭐
              </div>

              <p
                style={{
                  color: "#d5d5d5",
                  lineHeight: "1.9",
                  fontStyle: "italic",
                  fontSize: "17px",
                  marginBottom: "30px",
                }}
              >
                "{item.review}"
              </p>

              <div
                style={{
                  width: "70px",
                  height: "70px",
                  margin: "0 auto 18px",
                  borderRadius: "50%",
                  background: "#D4AF37",
                  color: "#000",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "bold",
                  fontSize: "26px",
                }}
              >
                {item.name.charAt(0)}
              </div>

              <h3
                style={{
                  fontSize: "24px",
                  marginBottom: "8px",
                }}
              >
                {item.name}
              </h3>

              <p
                style={{
                  color: "#D4AF37",
                  fontSize: "17px",
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