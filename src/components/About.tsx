export default function About() {
  return (
    <section id="about"
      style={{
        background: "#0b0b0b",
        color: "#fff",
        padding: "100px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
        }}
      >
        {/* Left Side */}
        <div>
          <p
            style={{
              color: "#D4AF37",
              letterSpacing: "4px",
              fontWeight: "bold",
              marginBottom: "15px",
            }}
          >
            ABOUT LIMRA
          </p>

          <h2
            style={{
              fontSize: "48px",
              marginBottom: "25px",
              lineHeight: "1.2",
            }}
          >
            More Than 30 Years
            <br />
            of Trusted Travel
            <br />
            Excellence
          </h2>

          <p
            style={{
              color: "#cccccc",
              lineHeight: "1.9",
              fontSize: "17px",
              marginBottom: "25px",
            }}
          >
            Limra World Travels has been serving thousands of happy customers
            since 1995. We specialize in Hajj & Umrah packages, Domestic &
            International Tours, Flight Ticket Booking, Passport Assistance, Visa Services, Hotel
            Reservations, Study Abroad and Overseas Recruitment.
          </p>

          <p
            style={{
              color: "#cccccc",
              lineHeight: "1.9",
              fontSize: "17px",
            }}
          >
            Our mission is to provide safe, comfortable and affordable travel
            experiences while maintaining the highest level of customer
            satisfaction.
          </p>

          <button
            style={{
              marginTop: "35px",
              background: "#D4AF37",
              color: "#000",
              border: "none",
              padding: "16px 35px",
              borderRadius: "40px",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Learn More
          </button>
        </div>

        {/* Right Side */}
        <div
          style={{
            background: "#151515",
            border: "1px solid rgba(212,175,55,.3)",
            borderRadius: "20px",
            padding: "40px",
          }}
        >
          <h3
            style={{
              color: "#D4AF37",
              marginBottom: "30px",
              fontSize: "30px",
            }}
          >
            Why Choose Us?
          </h3>

          {[
            "✔ 30+ Years of Experience",
            "✔ Trusted Hajj & Umrah Experts",
            "✔ Best Flight Ticket Prices",
            "✔ Fast Visa Assistance",
            "✔ Luxury Hotel Booking",
            "✔ Domestic & International Tours",
            "✔ Study Abroad Guidance",
            "✔ Overseas Recruitment",
            "✔ 24×7 Customer Support",
          ].map((item) => (
            <p
              key={item}
              style={{
                color: "#ddd",
                fontSize: "17px",
                marginBottom: "18px",
              }}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}