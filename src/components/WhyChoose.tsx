import { ShieldCheck, Clock3, BadgeDollarSign, Plane } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck size={40} />,
    title: "Trusted Since 1995",
    desc: "Serving travelers for over 30 years with honesty and commitment."
  },
  {
    icon: <Clock3 size={40} />,
    title: "24/7 Customer Support",
    desc: "Our travel experts are always available before and during your journey."
  },
  {
    icon: <BadgeDollarSign size={40} />,
    title: "Best Price Guarantee",
    desc: "Affordable travel packages with premium quality service."
  },
  {
    icon: <Plane size={40} />,
    title: "Worldwide Destinations",
    desc: "Domestic and international tours designed for every traveler."
  }
];

export default function WhyChoose() {
  return (
    <section className="bg-black py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-[#D4AF37] uppercase tracking-[4px] text-center">
          Why Choose Us
        </p>

        <h2 className="text-4xl font-bold text-center mt-3">
          Experience Luxury Travel with Confidence
        </h2>

        <p className="text-gray-400 text-center mt-5 max-w-3xl mx-auto">
          Limra World Travels has been delivering unforgettable travel
          experiences with trusted service, expert planning, and exceptional
          customer care.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-[#161616] rounded-xl p-8 border border-[#D4AF37]/20 hover:border-[#D4AF37] transition duration-300 text-center"
            >
              <div className="text-[#D4AF37] flex justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm leading-7">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}