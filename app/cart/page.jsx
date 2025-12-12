"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

export default function CartPage() {
  const [cart, setCart] = useState([
    {
      id: 1,
      title: "RWDY WASHED OVERSIZED HOODIE | ASH GREY",
      color: "Ash Grey",
      size: "L",
      price: 3190,
      qty: 1,
      img: "https://assets.therowdy.club/1764134777518bluehooddie4.jpg",
    },
    {
      id: 2,
      title: "RWDY WASHED OVERSIZED HOODIE | DUSTY BLUE",
      color: "Dusty Blue",
      size: "XL",
      price: 3190,
      qty: 1,
      img: "https://assets.therowdy.club/1764052073454bluehoodie1.jpg",
    },
    {
      id: 3,
      title: "RWDY WASHED OVERSIZED HOODIE | SAND BEIGE",
      color: "Sand Beige",
      size: "M",
      price: 3190,
      qty: 1,
      img: "https://assets.therowdy.club/1764132859522browhooddie7.jpg",
    },
  ]);

  const updateQty = (id, type) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: type === "inc" ? item.qty + 1 : Math.max(1, item.qty - 1) }
          : item
      )
    );
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const taxes = Math.round(subtotal * 0.18);
  const shipping = 150;
  const total = subtotal + taxes + shipping;

  return (
    <div className="pt-32 pb-20 md:container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* CART ITEMS */}
        <div className="lg:col-span-2">
          <h1 className="text-xl font-bold mb-4">CART</h1>

          <div className="flex flex-col gap-4">
            {cart.map((item) => (
              <div key={item.id} className="border border-gray-300 rounded-lg p-3 flex gap-4">
                
                <img src={item.img} className="w-32 h-32 object-cover object-top rounded" />

                <div className="flex-grow">
                  <p className="font-semibold text-base lg:text-xl">{item.title}</p>

                  <p className="text-sm mt-2"><span className="font-semibold">Color:</span> {item.color}</p>
                  <p className="text-sm"><span className="font-semibold">Size:</span> {item.size}</p>

                  <p className="font-semibold text-base mt-3">₹ {item.price}</p>

                  {/* QUANTITY */}
                  <div className="mt-3 flex items-center gap-3">
                    <span className="text-xs font-semibold">Quantity:</span>

                    <div className="flex items-center gap-3">
                      <button
                        className="w-7 h-7 rounded-full border flex items-center justify-center hover:bg-gray-200"
                        onClick={() => updateQty(item.id, "dec")}
                      >
                        <Minus size={14} />
                      </button>

                      <span className="w-4 text-center">{item.qty}</span>

                      <button
                        className="w-7 h-7 rounded-full border flex items-center justify-center hover:bg-gray-200"
                        onClick={() => updateQty(item.id, "inc")}
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>

        {/* ORDER SUMMARY */}
          <div className="bg-gray-100 rounded-lg">
          <h2 className="font-semibold text-lg px-4 py-3">Order Summary</h2>

          <div className="bg-white mx-4 mb-4 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Price Details</h3>

            <div className="flex justify-between text-sm mb-2">
              <span className="font-medium">Sub Total</span>
              <span>₹ {subtotal}</span>
            </div>

            <div className="flex justify-between text-sm mb-2">
              <span className="font-medium">Taxes (18%)</span>
              <span>₹ {taxes}</span>
            </div>

            <div className="flex justify-between text-sm mb-2">
              <span className="font-medium">Shipping Charges</span>
              <span>₹ {shipping}</span>
            </div>

            <hr className="my-3" />

            <div className="flex justify-between text-base font-bold mb-4">
              <span>Total</span>
              <span>₹ {total}</span>
            </div>

            <button className="w-full h-11 bg-black text-white hover:bg-gray-900 transition px-8 py-2 text-sm font-medium">
              Place Order
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
