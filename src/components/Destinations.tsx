const destinations = [
  {
    name: "Dubai",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900",
  },
  {
    name: "Singapore",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=900",
  },
  {
    name: "Malaysia",
    image:
      "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=900",
  },
  {
    name: "Thailand",
    image:
      "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=900",
  },
  {
    name: "Kashmir",
    image:
      "https://images.unsplash.com/photo-1627894483216-2138af692e32?w=900",
  },
  {
    name: "Andaman",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900",
  },
];

export default function Destinations() {
  return (
    <section className="bg-[#0b0b0b] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-[#D4AF37] text-center uppercase tracking-[4px]">
          Explore The World
        </p>

        <h2 className="text-white text-4xl font-bold text-center mt-3">
          Popular Destinations
        </h2>

        <p className="text-gray-400 text-center mt-4 mb-14">
          Discover our most loved travel destinations around the world.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {destinations.map((place, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-xl bg-[#181818]"
            >
              <div className="overflow-hidden">

                <img
                  src={place.image}
                  alt={place.name}
                  className="h-72 w-full object-cover group-hover:scale-110 transition duration-500"
                />

              </div>

              <div className="p-6">

                <h3 className="text-white text-2xl font-bold">
                  {place.name}
                </h3>

                <button className="mt-5 bg-[#D4AF37] text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition">
                  View Packages
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}