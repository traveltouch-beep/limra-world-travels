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
      icon: <PlaneTakeoff size={44} color="#D4AF37" />,
      title: "Hajj & Umrah",
      desc: "Complete Hajj & Umrah packages including Visa, Flights, Premium Hotels, Transportation and Guided Assistance.",
    },
    {
      icon: <Plane size={44} color="#D4AF37" />,
      title: "Flight Tickets",
      desc: "Domestic & International flight bookings at the best available fares.",
    },
    {
      icon: <Train size={44} color="#D4AF37" />,
      title: "Train Tickets",
      desc: "Fast, reliable and hassle-free railway ticket booking across India.",
    },
    {
      icon: <Bus size={44} color="#D4AF37" />,
      title: "Bus Booking",
      desc: "Luxury and budget bus reservations for major destinations.",
    },
    {
      icon: <Hotel size={44} color="#D4AF37" />,
      title: "Hotel Booking",
      desc: "Comfortable budget and luxury hotel reservations worldwide.",
    },
    {
      icon: <BookOpen size={44} color="#D4AF37" />,
      title: "Passport Services",
      desc: "New Passport, Renewal, Tatkal Passport and documentation assistance.",
    },
    {
      icon: <Globe2 size={44} color="#D4AF37" />,
      title: "Visa Assistance",
      desc: "Tourist, Business, Student, Employment and Visit Visa processing.",
    },
    {
      icon: <GraduationCap size={44} color="#D4AF37" />,
      title: "Study Abroad",
      desc: "Admissions, Student Visa, University Guidance and Overseas Education.",
    },
    {
      icon: <Briefcase size={44} color="#D4AF37" />,
      title: "Overseas Recruitment",
      desc: "International employment opportunities with complete recruitment support.",
    },
    {
      icon: <Building2 size={44} color="#D4AF37" />,
      title: "Corporate Travel",
      desc: "Professional business travel management and corporate ticketing solutions.",
    },
    {
      icon: <Handshake size={44} color="#D4AF37" />,
      title: "B2B Travel Solutions",
      desc: "Travel support and booking solutions for travel agencies and businesses.",
    },
    {
      icon: <ShieldCheck size={44} color="#D4AF37" />,
      title: "Travel Insurance",
      desc: "Comprehensive domestic and international travel insurance protection.",
    },
  ];

  return (
    <section
      id="services"
      style={{
        background: "#050505",
        padding: "110px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1320px",
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
          Our Premium Services
        </p>

        <h2
          style={{
            color: "#ffffff",
            fontSize: "clamp(36px,5vw,54px)",
            marginTop: "18px",
            marginBottom: "20px",
          }}
        >
          Everything You Need
          <br />
          For A Perfect Journey
        </h2>

        <p
          style={{
            color: "#cfcfcf",
            maxWidth: "850px",
            margin: "0 auto 70px",
            lineHeight: "1.9",
            fontSize: "18px",
          }}
        >
          From Hajj & Umrah to Holiday Packages, Flight Tickets, Passport &
          Visa Services, Study Abroad, Overseas Recruitment and Corporate
          Travel, Limra World Travels offers complete travel solutions under one
          roof.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))",
            gap: "30px",
          }}
        >
          {services.map((service) => (
            <div
              key={service.title}
              style={{
                background: "#121212",
                border: "1px solid rgba(212,175,55,.25)",
                borderRadius: "22px",
                padding: "38px 30px",
                textAlign: "center",
                boxShadow: "0 10px 30px rgba(0,0,0,.35)",
                transition: ".35s",
              }}
            >
              <div
                style={{
                  width: "90px",
                  height: "90px",
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
                  marginBottom: "18px",
                  fontSize: "26px",
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  color: "#cccccc",
                  lineHeight: "1.9",
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