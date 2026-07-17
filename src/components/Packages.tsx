export default function Packages() {
  const packages = [
    {
      icon: "🕋",
      title: "Hajj & Umrah",
      price: "Starting from ₹95,000",
      desc: "Luxury Hajj & Umrah packages with visa, flights and premium hotels.",
    },
    {
      icon: "🇦🇪",
      title: "Dubai Tour",
      price: "Starting from ₹45,000",
      desc: "Enjoy Dubai with Burj Khalifa, Desert Safari and luxury stay.",
    },
    {
      icon: "🇸🇬",
      title: "Singapore Tour",
      price: "Starting from ₹55,000",
      desc: "Explore Singapore with Sentosa Island and Universal Studios.",
    },
    {
      icon: "🇲🇾",
      title: "Malaysia Tour",
      price: "Starting from ₹50,000",
      desc: "Discover Kuala Lumpur and Genting Highlands.",
    },
    {
      icon: "🇹🇭",
      title: "Thailand Tour",
      price: "Starting from ₹40,000",
      desc: "Bangkok and Pattaya holiday packages.",
    },
    {
      icon: "🏔️",
      title: "Kashmir Tour",
      price: "Starting from ₹25,000",
      desc: "Visit Srinagar, Gulmarg and Pahalgam.",
    },
  ];

  return (
    <section
      id="packages"
      style={{
        background: "#050505",
        padding: "100px 20px",
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
          }}
        >
          OUR PACKAGES
        </p>

        <h2
          style={{
            color: "#fff",
            fontSize: "48px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          Popular Tour Packages
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "30px",
            marginTop: "60px",
          }}
        >
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              style={{
                background: "#111",
                border: "1px solid rgba(212,175,55,.25)",
                borderRadius: "20px",
                padding: "35px",
              }}
            >
              <div
                style={{
                  fontSize: "55px",
                  marginBottom: "20px",
                }}
              >
                {pkg.icon}
              </div>

              <h3
                style={{
                  color: "#D4AF37",
                  fontSize: "28px",
                  marginBottom: "15px",
                }}
              >
                {pkg.title}
              </h3>

              <p
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  marginBottom: "15px",
                }}
              >
                {pkg.price}
              </p>

              <p
                style={{
                  color: "#ccc",
                  lineHeight: "1.8",
                  marginBottom: "25px",
                }}
              >
                {pkg.desc}
              </p>

              <button
                style={{
                  background: "#D4AF37",
                  color: "#000",
                  border: "none",
                  padding: "14px 30px",
                  borderRadius: "30px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}