import {
  ShieldCheck,
  Clock3,
  BadgeDollarSign,
  Plane,
} from "lucide-react";

const features = [
  {
    icon: <ShieldCheck size={44} />,
    title: "Trusted Since 1995",
    desc: "More than 30 years of excellence in Hajj, Umrah, Domestic & International Tours with thousands of satisfied travelers.",
  },
  {
    icon: <Clock3 size={44} />,
    title: "24/7 Customer Support",
    desc: "Our dedicated travel consultants are available before, during and after your journey to assist you at every step.",
  },
  {
    icon: <BadgeDollarSign size={44} />,
    title: "Best Value Packages",
    desc: "Premium travel experiences at competitive prices with complete transparency and no hidden charges.",
  },
  {
    icon: <Plane size={44} />,
    title: "Worldwide Destinations",
    desc: "From Hajj & Umrah to luxury holidays, visas, flights and customized international tours across the globe.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-[#050505] py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-[#D4AF37] uppercase tracking-[5px] text-center font-semibold">
          Why Choose Limra World Travels
        </p>

        <h2 className="text-5xl font-bold text-center mt-4 leading-tight">
          Experience Luxury Travel
          <br />
          With Complete Confidence
        </h2>

        <p className="text-gray-400 text-center mt-6 max-w-3xl mx-auto text-lg leading-8">
          For over three decades, Limra World Travels has been helping families,
          pilgrims, students and business travelers explore the world with
          trusted service, professional guidance and exceptional customer care.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-[#141414] rounded-2xl p-8 border border-[#D4AF37]/20 hover:border-[#D4AF37] hover:-translate-y-2 transition-all duration-300 text-center shadow-lg"
            >
              <div className="w-20 h-20 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-6 text-[#D4AF37]">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-8">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}