"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import LoginModal from "../Login/Index"; // IMPORTANT

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false); // MODAL CONTROL

  const menuItems = [
    {
      title: "Shop By Season",
      submenu: [
        { label: "AUTUMN/WINTER", href: "/shop/autumn-winter" },
        { label: "SUMMER", href: "/shop/summer" }
      ],
    },
    {
      title: "Bottom Wear",
      submenu: [
        { label: "JEANS", href: "/shop/jeans" },
        { label: "TROUSERS", href: "/shop/trousers" },
        { label: "JOGGERS", href: "/shop/joggers" },
        { label: "SWEATPANTS", href: "/shop/sweatpants" },
      ],
    },
    {
      title: "Top Wear",
      submenu: [
        { label: "TEES", href: "/shop/tees" },
        { label: "SHIRTS", href: "/shop/shirts" },
        { label: "HOODIES", href: "/shop/hoodies" },
        { label: "TANKS", href: "/shop/tanks" },
        { label: "SWEATSHIRTS", href: "/shop/sweatshirts" },
        { label: "KURTAS", href: "/shop/kurtas" },
        { label: "BOMBER JACKETS", href: "/shop/bomber-jackets" },
        { label: "CO-ORD SETS", href: "/shop/co-ord-sets" },
      ],
    },
    {
      title: "Accessories",
      submenu: [
        { label: "BEANIES", href: "/shop/beanies" },
        { label: "KOFFE MUGS", href: "/shop/koffe-mugs" },
        { label: "CAPS", href: "/shop/caps" },
        { label: "BOTTLES", href: "/shop/bottles" },
        { label: "SOCKS", href: "/shop/socks" },
        { label: "UMBRELLAS", href: "/shop/umbrellas" },
      ],
    },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center p-4 lg:p-6">

          {/* Desktop Menu */}
          <nav className="hidden xl:flex gap-10 flex-1">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                <a href="/shop" className="uppercase text-sm font-light">
                  {item.title}
                </a>

                <div className="absolute hidden group-hover:block bg-[#E8E7E4] mt-3 shadow-lg w-40">
                  {item.submenu.map((sub, i) => (
                    <a
                      key={i}
                      href={sub.href}
                      className="block py-3 px-4 text-sm font-light hover:font-normal"
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          {/* LOGO */}
          <div className="flex justify-center flex-1 xl:flex-none">
            <h1 className="text-3xl font-bold tracking-wider">RWDY</h1>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-5 flex-1 justify-end">

            {/* Desktop Buttons */}
            <div className="hidden xl:flex gap-10 items-center">
              <a href="/cart" className="uppercase text-sm font-light">Cart</a>

              <span
                className="uppercase text-sm font-light cursor-pointer"
                onClick={() => setShowLogin(true)}
              >
                Login
              </span>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="xl:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="bg-[#f5f5f5] p-5 flex flex-col gap-4 text-center xl:hidden">
            {menuItems.map((item, index) => (
              <a key={index} href="/shop" className="uppercase text-sm font-light">
                {item.title}
              </a>
            ))}

            <hr className="border-gray-300" />

            <a href="/cart" className="uppercase text-sm font-light">Cart</a>

            <span
              onClick={() => {
                setShowLogin(true);
                setMobileOpen(false);
              }}
              className="uppercase text-sm font-light cursor-pointer"
            >
              Login
            </span>
          </div>
        )}
      </header>

      {/* LOGIN MODAL */}
      <LoginModal open={showLogin} onClose={() => setShowLogin(false)} />
    </>
  );
}
