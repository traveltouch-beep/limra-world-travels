export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <section
      style={{
        background: "#050505",
        padding: "110px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            color: "#D4AF37",
            textAlign: "center",
            letterSpacing: "5px",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          Travel Gallery
        </p>

        <h2
          style={{
            textAlign: "center",
            color: "#ffffff",
            fontSize: "clamp(36px,5vw,54px)",
            marginTop: "18px",
            marginBottom: "20px",
          }}
        >
          Explore Beautiful Destinations
        </h2>

        <p
          style={{
            color: "#cfcfcf",
            textAlign: "center",
            maxWidth: "760px",
            margin: "0 auto 70px",
            lineHeight: "1.9",
            fontSize: "18px",
          }}
        >
          Discover breathtaking destinations, luxury holidays, Hajj & Umrah
          journeys and unforgettable travel experiences with Limra World Travels.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "30px",
          }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              style={{
                overflow: "hidden",
                borderRadius: "22px",
                border: "1px solid rgba(212,175,55,.25)",
                boxShadow: "0 12px 30px rgba(0,0,0,.35)",
              }}
            >
              <img
                src={img}
                alt={`Travel Destination ${index + 1}`}
                style={{
                  width: "100%",
                  height: "280px",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform .4s ease",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}