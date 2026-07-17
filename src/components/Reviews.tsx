function Reviews() {
  const reviews = [
    {
      name: "Mohammed Ali",
      text: "Excellent Hajj & Umrah service. Everything was perfectly arranged.",
    },
    {
      name: "Ayesha Begum",
      text: "Visa process was very smooth. Highly recommended Limra World Travels.",
    },
    {
      name: "Abdul Rahman",
      text: "Professional team and affordable tour packages. Will travel again!",
    },
  ];

  return (
    <section
      style={{
        padding: "80px 10%",
        background: "#f8f9fa",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "40px",
          color: "#0B3D91",
          marginBottom: "50px",
        }}
      >
        ⭐ Customer Reviews
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "25px",
        }}
      >
        {reviews.map((review, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "15px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ color: "#0B3D91" }}>{review.name}</h3>

            <p style={{ color: "#FFD700", fontSize: "20px" }}>
              ⭐⭐⭐⭐⭐
            </p>

            <p style={{ color: "#555", marginTop: "15px" }}>
              {review.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;