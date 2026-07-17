import {
  Plane,
  Train,
  Bus,
  Hotel,
  Globe2,
  GraduationCap,
  Briefcase,
  Building2,
  Handshake,
  PlaneTakeoff,
  ShieldCheck,
  BookOpen,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <PlaneTakeoff size={42} color="#D4AF37" />,
      title: "Hajj & Umrah",
      desc: "Complete Hajj & Umrah packages including visa, flights, hotels and guided assistance.",
    },
    {
      icon: <Plane size={42} color="#D4AF37" />,
      title: "Flight Tickets",
      desc: "Domestic & International flight bookings at competitive prices.",
    },
    {
      icon: <Train size={42} color="#D4AF37" />,
      title: "Train Ticket Booking",
      desc: "Fast and reliable railway ticket booking across India.",
    },
    {
      icon: <Bus size={42} color="#D4AF37" />,
      title: "Bus Ticket Booking",
      desc: "Luxury and budget bus booking for all major destinations.",
    },
    {
      icon: <Hotel size={42} color="#D4AF37" />,
      title: "Hotel Booking",
      desc: "Affordable and luxury hotel reservations worldwide.",
    },
    {
      icon: <BookOpen size={42} color="#D4AF37" />,
      title: "Passport Services",
      desc: "New Passport, Renewal and Tatkal Passport assistance.",
    },
    {
      icon: <Globe2 size={42} color="#D4AF37" />,
      title: "Visa Assistance",
      desc: "Tourist, Business, Student and Visit Visa processing.",
    },
    {
      icon: <GraduationCap size={42} color="#D4AF37" />,
      title: "Study Abroad",
      desc: "Admissions, Student Visa and Overseas Education Consultancy.",
    },
    {
      icon: <Briefcase size={42} color="#D4AF37" />,
      title: "Overseas Recruitment",
      desc: "International job opportunities with complete recruitment support.",
    },
    {
      icon: <Building2 size={42} color="#D4AF37" />,
      title: "Corporate Travel",
      desc: "Business travel management and corporate ticketing solutions.",
    },
    {
      icon: <Handshake size={42} color="#D4AF37" />,
      title: "B2B Travel Solutions",
      desc: "Travel support for travel agents, companies and business partners.",
    },
    {
      icon: <ShieldCheck size={42} color="#D4AF37" />,
      title: "Travel Insurance",
      desc: "Comprehensive domestic and international travel insurance.",
    },
  ];

  return (
    <section
      id="services"
      style={{
        background: "#070707",
        padding: "100px 20px",
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
            letterSpacing: "4px",
            fontWeight: "bold",
          }}
        >
          OUR SERVICES
        </p>

        <h2
          style={{
            color: "#ffffff",
            fontSize: "48px",
            margin: "20px 0",
          }}
        >
          One Roof For All Your Travel Needs
        </h2>

        <p
          style={{
            color: "#cccccc",
            maxWidth: "850px",
            margin: "0 auto 70px",
            lineHeight: "1.8",
          }}
        >
          Limra World Travels offers complete travel, passport, visa,
          education, recruitment and ticketing services under one roof.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
          }}
        >
          {services.map((service) => (
            <div
              key={service.title}
              style={{
                background: "#111111",
                border: "1px solid rgba(212,175,55,.25)",
                borderRadius: "20px",
                padding: "35px",
                textAlign: "center",
                transition: "0.3s",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  margin: "0 auto 25px",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "rgba(212,175,55,.08)",
                  border: "2px solid rgba(212,175,55,.2)",
                }}
              >
                {service.icon}
              </div>

              <h3
                style={{
                  color: "#D4AF37",
                  marginBottom: "15px",
                  fontSize: "24px",
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  color: "#cccccc",
                  lineHeight: "1.8",
                }}
              >
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
