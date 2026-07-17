function Stats() {
  const stats = [
    { number: "10,000+", title: "Happy Travelers" },
    { number: "5,000+", title: "Hajj & Umrah Pilgrims" },
    { number: "50+", title: "Global Destinations" },
    { number: "15+", title: "Years of Trust" },
  ];

  return (
    <section
      style={{
        padding: "70px 20px",
        background: "#0B3D91",
        color: "white",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          maxWidth: "1200px",
          margin: "auto",
          gap: "30px",
          textAlign: "center",
        }}
      >
        {stats.map((item) => (
          <div key={item.title}>
            <h2 style={{ fontSize: "42px", color: "#FFD700" }}>
              {item.number}
            </h2>

            <p style={{ fontSize: "18px" }}>
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;