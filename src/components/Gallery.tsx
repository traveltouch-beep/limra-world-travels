function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
  ];

  return (
    <section
      style={{
        padding: "80px 10%",
        background: "#ffffff",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "40px",
          color: "#0B3D91",
          marginBottom: "50px",
        }}
      >
        Explore Our Destinations
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))",
          gap: "20px",
        }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Travel Destination"
            style={{
              width: "100%",
              height: "250px",
              objectFit: "cover",
              borderRadius: "15px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;