export default function Packages() {
  const packages = [
    {
      icon: "🕋",
      title: "Hajj & Umrah",
      price: "Starting from ₹95,000",
      desc: "Complete Hajj & Umrah packages including Visa, Flights, Premium Hotels, Transportation and Guided Assistance.",
    },
    {
      icon: "🇦🇪",
      title: "Dubai Tour",
      price: "Starting from ₹45,000",
      desc: "Experience Burj Khalifa, Desert Safari, Marina Cruise, Shopping and Luxury Hotels.",
    },
    {
      icon: "🇸🇬",
      title: "Singapore Tour",
      price: "Starting from ₹55,000",
      desc: "Enjoy Sentosa Island, Universal Studios, Marina Bay Sands and City Sightseeing.",
    },
    {
      icon: "🇲🇾",
      title: "Malaysia Tour",
      price: "Starting from ₹50,000",
      desc: "Discover Kuala Lumpur, Genting Highlands, Twin Towers and Amazing Attractions.",
    },
    {
      icon: "🇹🇭",
      title: "Thailand Tour",
      price: "Starting from ₹40,000",
      desc: "Visit Bangkok, Pattaya, Coral Island and Experience Thailand Nightlife.",
    },
    {
      icon: "🏔️",
      title: "Kashmir Tour",
      price: "Starting from ₹25,000",
      desc: "Explore Srinagar, Gulmarg, Pahalgam, Sonmarg and Beautiful Houseboats.",
    },
  ];

  return (
    <section
      id="packages"
      style={{
        background: "#050505",
        padding: "110px 20px",
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
          Featured Packages
        </p>

        <h2
          style={{
            color: "#fff",
            fontSize: "clamp(36px,5vw,54px)",
            marginTop: "18px",
            marginBottom: "20px",
          }}
        >
          Explore Our Most Popular Tours
        </h2>

        <p
          style={{
            color: "#bdbdbd",
            maxWidth: "760px",
            margin: "0 auto 70px",
            lineHeight: "1.9",
            fontSize: "18px",
          }}
        >
          Carefully designed travel packages for families, pilgrims,
          honeymooners and holiday lovers with premium comfort,
          affordable pricing and trusted service.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "35px",
          }}
        >
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              style={{
                background: "#121212",
                border: "1px solid rgba(212,175,55,.25)",
                borderRadius: "22px",
                padding: "40px 30px",
                transition: ".35s",
                boxShadow: "0 10px 30px rgba(0,0,0,.35)",
              }}
            >
              <div
                style={{
                  fontSize: "65px",
                  marginBottom: "25px",
                }}
              >
                {pkg.icon}
              </div>

              <h3
                style={{
                  color: "#D4AF37",
                  fontSize: "30px",
                  marginBottom: "18px",
                }}
              >
                {pkg.title}
              </h3>

              <p
                style={{
                  color: "#fff",
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                }}
              >
                {pkg.price}
              </p>

              <p
                style={{
                  color: "#cccccc",
                  lineHeight: "1.9",
                  minHeight: "120px",
                }}
              >
                {pkg.desc}
              </p>

              <button
                style={{
                  marginTop: "25px",
                  background: "#D4AF37",
                  color: "#000",
                  border: "none",
                  padding: "15px 35px",
                  borderRadius: "40px",
                  fontWeight: "bold",
                  fontSize: "16px",
                  cursor: "pointer",
                  boxShadow: "0 10px 25px rgba(212,175,55,.35)",
                }}
              >
                Book This Package
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}