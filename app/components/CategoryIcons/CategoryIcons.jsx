"use client";

export default function CategoryIcons() {
  const categories = [
    {
      name: "Shirts",
      img: "//celio.in/cdn/shop/files/SHIRTS_a7178d70-11d0-45b7-aa01-f70a70a5fa4a_compact.png?v=1732261710",
      link: "/collections/shirts",
    },
    {
      name: "T-Shirts",
      img: "//celio.in/cdn/shop/files/tshirt_vector_compact.png?v=1745314469",
      link: "/collections/t-shirts",
    },
    {
      name: "Pants",
      img: "//celio.in/cdn/shop/files/pants_compact.png?v=1743595551",
      link: "/collections/trousers",
    },
    {
      name: "Jeans",
      img: "//celio.in/cdn/shop/files/JEANS_e4b817d4-877f-4454-8bdd-01057cbc8c2f_compact.png?v=1732261709",
      link: "/collections/jeans",
    },
    {
      name: "Cargo",
      img: "//celio.in/cdn/shop/files/3596655940008_1_compact.png?v=1745587396",
      link: "/collections/cargos",
    },
    {
      name: "Polo",
      img: "//celio.in/cdn/shop/files/polo_ecc39f81-b8da-42f7-ab81-a747bd5452f9_compact.png?v=1743595551",
      link: "/collections/polos",
    },
  ];

  return (
    <div className="bg-white py-10 text-black">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">

          {categories.map((item) => (
            <li key={item.name} className="text-center">

              <a href={item.link}>
                {/* Circle background */}
                <div className="w-full flex justify-center">
                  <div className="w-28 h-28 bg-gray-100 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-gray-200">

                    {/* Zoom effect image */}
                    <img
                      loading="lazy"
                      src={item.img}
                      alt={item.name}
                      className="w-16 h-16 object-contain transition-all duration-300 transform hover:scale-110"
                    />
                  </div>
                </div>

                <h4 className="text-sm mt-3 font-medium">{item.name}</h4>
              </a>

            </li>
          ))}

        </ul>
      </div>
    </div>
  );
}
