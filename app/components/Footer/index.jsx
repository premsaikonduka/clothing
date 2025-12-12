export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-6 px-5 md:px-0 mt-auto">
      <div className="max-w-7xl mx-auto grid gap-10 
        grid-cols-1 sm:grid-cols-2 md:grid-cols-4">

        {/* LOGO + CONTACT */}
        <div className="flex flex-col gap-6">
          {/* Logo */}
          <a href="/" className="w-48 md:w-56">
            <img src="/rwdy-logo-white.svg" alt="RWDY Logo" />
          </a>

          {/* Address */}
          <div className="flex items-center gap-3 text-xs text-gray-300">
            <span>📍</span> 
            <p>Hyderabad Telangana 500073</p>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3 text-xs text-gray-300">
            <span>📞</span>
            <p>+91 9121022335 / 36 / 37</p>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 text-xs text-gray-300">
            <span>✉️</span>
            <p>hey@rwdy.in</p>
          </div>
        </div>

        {/* SHOP LINKS */}
        <div>
          <h3 className="text-sm font-semibold uppercase mb-5">Shop</h3>
          <div className="text-sm text-gray-400 flex flex-col gap-5">

            {/* SHOP BY SEASON */}
            <div>
              <a href="/shop/shop-by-season" className="uppercase hover:text-white">
                Shop By Season
              </a>
              <div className="flex flex-col gap-1 mt-2 pl-1 text-xs">
                <a href="/shop/autumn-winter" className="hover:text-white">AUTUMN/WINTER</a>
                <a href="/shop/summer" className="hover:text-white">SUMMER</a>
              </div>
            </div>

            {/* BOTTOM WEAR */}
            <div>
              <a href="/shop/bottom-wear" className="uppercase hover:text-white">
                Bottom Wear
              </a>
              <div className="flex flex-col gap-1 mt-2 pl-1 text-xs">
                <a href="/shop/jeans" className="hover:text-white">JEANS</a>
                <a href="/shop/trousers" className="hover:text-white">TROUSERS</a>
                <a href="/shop/joggers" className="hover:text-white">JOGGERS</a>
                <a href="/shop/sweatpants" className="hover:text-white">SWEATPANTS</a>
              </div>
            </div>

            {/* TOP WEAR */}
            <div>
              <a href="/shop/top-wear" className="uppercase hover:text-white">
                Top Wear
              </a>
              <div className="flex flex-col gap-1 mt-2 pl-1 text-xs">
                {[
                  "tees",
                  "shirts",
                  "hoodies",
                  "tanks",
                  "sweatshirts",
                  "kurtas",
                  "bomber-jackets",
                  "co-ord-sets"
                ].map((item) => (
                  <a key={item} href={`/shop/${item}`} className="hover:text-white">
                    {item.toUpperCase()}
                  </a>
                ))}
              </div>
            </div>

            {/* ACCESSORIES */}
            <div>
              <a href="/shop/accessories" className="uppercase hover:text-white">
                Accessories
              </a>
              <div className="flex flex-col gap-1 mt-2 pl-1 text-xs">
                {[
                  "beanies",
                  "koffe-mugs",
                  "caps",
                  "bottles",
                  "socks",
                  "umbrellas"
                ].map((item) => (
                  <a key={item} href={`/shop/${item}`} className="hover:text-white">
                    {item.toUpperCase()}
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* COMPANY LINKS */}
        <div>
          <h3 className="text-sm font-semibold uppercase mb-5">Company</h3>

          <div className="text-sm text-gray-400 flex flex-col gap-4">
            {[
              ["About Us", "/about-us"],
              ["Terms & Conditions", "/terms-conditions"],
              ["Privacy Policy", "/privacy-policy"],
              ["Return Policy", "/return-policy"],
              ["FAQs", "/faqs"],
            ].map(([label, link]) => (
              <a key={label} href={link} className="hover:text-white">
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* SOCIAL MEDIA */}
        <div>
          <h3 className="text-sm font-semibold uppercase mb-5">Follow Us On</h3>

          <div className="flex gap-3">

            {[
              ["facebook", "https://www.facebook.com/RWDYclub"],
              ["youtube", "https://youtube.com/@RWDYclub"],
              ["instagram", "https://instagram.com/rwdyclub"],
              ["twitter", "https://twitter.com/rwdyclub"],
              ["pinterest", "https://pin.it/6W2oAld"],
            ].map(([name, url]) => (
              <a
                key={name}
                href={url}
                target="_blank"
                className="bg-gray-200 text-black w-7 h-7 rounded-full flex items-center justify-center hover:scale-105 transition"
              >
                <span className="text-lg">•</span>
              </a>
            ))}

          </div>
        </div>

      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="mt-10 text-center text-xs text-gray-400">
        © 2025 rwdy. All rights reserved.
      </div>
    </footer>
  );
}
