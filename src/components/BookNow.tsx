import { useState } from "react";

export default function BookNow() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [packageName, setPackageName] = useState("");
  const [message, setMessage] = useState("");

  const sendWhatsApp = () => {
    const text =
      `*New Booking Enquiry*%0A%0A` +
      `👤 Name: ${name}%0A` +
      `📧 Email: ${email}%0A` +
      `📞 Phone: ${phone}%0A` +
      `✈ Package: ${packageName}%0A` +
      `📝 Message: ${message}`;

    window.open(
      `https://wa.me/919840555649?text=${text}`,
      "_blank"
    );
  };

  return (
    <section
      id="book"
      style={{
        background: "#0b0b0b",
        padding: "100px 20px",
        color: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
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
          BOOK YOUR TRIP
        </p>

        <h2
          style={{
            fontSize: "48px",
            margin: "20px 0",
          }}
        >
          Book Your Dream Journey
        </h2>

        <p
          style={{
            color: "#cccccc",
            marginBottom: "60px",
          }}
        >
          Fill the form and we'll contact you immediately.
        </p>

        <form
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
          }}
        >         
         <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              padding: "16px",
              borderRadius: "10px",
              border: "none",
              fontSize: "16px",
            }}
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: "16px",
              borderRadius: "10px",
              border: "none",
              fontSize: "16px",
            }}
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{
              padding: "16px",
              borderRadius: "10px",
              border: "none",
              fontSize: "16px",
            }}
          />

          <select
            value={packageName}
            onChange={(e) => setPackageName(e.target.value)}
            style={{
              padding: "16px",
              borderRadius: "10px",
              border: "none",
              fontSize: "16px",
            }}
          >
            <option value="">Select Package</option>
            <option>🕋 Hajj Package</option>
            <option>🕌 Umrah Package</option>
            <option>🇦🇪 Dubai Tour</option>
            <option>🇸🇬 Singapore Tour</option>
            <option>🇲🇾 Malaysia Tour</option>
            <option>🇹🇭 Thailand Tour</option>
            <option>🏔️ Kashmir Tour</option>
            <option>🏖️ Goa Tour</option>
            <option>✈️ Flight Ticket Booking</option>
            <option>🛂 Visa Assistance</option>
            <option>🏨 Hotel Booking</option>
            <option>🎓 Study Abroad</option>
          </select>          <textarea
            placeholder="Your Travel Requirements"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{
              gridColumn: "1 / -1",
              padding: "16px",
              borderRadius: "10px",
              border: "none",
              fontSize: "16px",
              resize: "vertical",
            }}
          />

          <button
            type="button"
            onClick={sendWhatsApp}
            style={{
              gridColumn: "1 / -1",
              background: "#25D366",
              color: "#fff",
              border: "none",
              padding: "18px",
              borderRadius: "40px",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            📲 Send via WhatsApp
          </button>        </form>
      </div>
    </section>
  );
}
