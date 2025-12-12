"use client";

import Link from "next/link";

export default function ShopPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 py-10 pt-[120px]">
      {/* PAGE TITLE */}
      <h1 className="text-3xl font-semibold mb-10 text-center">
        Shop All Categories
      </h1>

      {/* CATEGORY GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <CategoryCard
          id="123"
          title="Shirts"
          image="/assets/image copy.png"
        />

        <CategoryCard
          id="124"
          title="T-Shirts"
          image="/assets/image copy.png"
        />

        <CategoryCard
          id="125"
          title="Jeans"
          image="/assets/image copy.png"
        />

        <CategoryCard
          id="126"
          title="Trousers"
          image="/assets/image copy.png"
        />

        <CategoryCard
          id="127"
          title="Cargo Pants"
          image="/assets/image copy.png"
        />

        <CategoryCard
          id="128"
          title="Polos"
          image="/assets/image copy.png"
        />
      </div>
    </div>
  );
}

/* ---------- CATEGORY CARD COMPONENT ---------- */

function CategoryCard({ id, title, image }) {
  return (
    <Link href={`/product/${id}`}>
      <div className="group cursor-pointer border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
        <img src={image} alt={title} className="w-full h-56 object-cover" />
        <div className="p-4 text-center font-medium text-lg group-hover:opacity-70">
          {title}
        </div>
      </div>
    </Link>
  );
}


{/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <CategoryCard
          title="Shirts"
          image="/assets/image copy.png"
          link="/collections/shirts"
        />

        <CategoryCard
          title="T-Shirts"
          image="/assets/image copy.png"
          link="/collections/t-shirts"
        />

        <CategoryCard
          title="Jeans"
          image="/assets/image copy.png"
          link="/collections/jeans"
        />

        <CategoryCard
          title="Trousers"
          image="/assets/image copy.png"
          link="/collections/trousers"
        />

        <CategoryCard
          title="Cargo Pants"
          image="/assets/image copy.png"
          link="/collections/cargos"
        />

        <CategoryCard
          title="Polos"
          image="/assets/image copy.png"
          link="/collections/polos"
        />
      </div>
    </div> */}