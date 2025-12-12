"use client";

import React, { useState } from "react";
import { Heart, ShoppingCart, Plus, Minus } from "lucide-react";
export const dynamic = "force-dynamic";
export const revalidate = 0;


// ------------------------- PRODUCT DATA -------------------------
const productData = {
  title: "RWDY PLAID FUSION FLANNEL SHIRT",
  price: 3290,
  coins: 32,
  sizes: [
    { label: "XS", available: true },
    { label: "S", available: true },
    { label: "M", available: true },
    { label: "L", available: true },
    { label: "XL", available: true },
    { label: "XXL", available: true },
  ],
  images: [
    {
      url: "https://assets.therowdy.club/1764142126509flannel1.jpg",
      alt: "Main view",
    },
    {
      url: "https://assets.therowdy.club/1764142125732flannel191.jpg",
      alt: "Detail 1",
    },
    {
      url: "https://assets.therowdy.club/1764142126592flannel.jpg",
      alt: "Detail 2",
    },
    {
      url: "https://assets.therowdy.club/1764142125730flannel191i.jpg",
      alt: "Detail 3",
    },
    {
      url: "https://assets.therowdy.club/1764142125727flannel11.jpg",
      alt: "Detail 4",
    },
  ],

  details: {
    theDetails: `
      The Rwdy Plaid Fusion Shirt redefines flannel with a bold blend of patterns and textures. 
      Crafted with 100% cotton denim and premium cotton-poly plaid.
    `,

    sizeAndFit: `
      Designed for a relaxed fit. Size down for fitted look.
    `,

    compositionAndCare: `
      **Clothing Care Guide**
      * Machine wash at 30ºC  
      * Do not bleach  
      * Iron at low temperature  
      * Dry clean  
    `,

    deliveryAndReturns: `
      Delivered in 7–10 working days.  
      **Note:** Sale items cannot be returned or exchanged.  
    `,
  },
};

// ----------------------------------------------------------------------
// IMAGE GALLERY
// ----------------------------------------------------------------------
const ImageGallery = ({ images }) => {
  const [activeImage, setActiveImage] = useState(images[0].url);

  return (
    <div className="flex relative">
      {/* Wishlist Icon */}
      <div className="absolute right-5 top-3 z-20 cursor-pointer">
        <Heart className="w-6 h-6 text-gray-700" />
      </div>

      {/* Thumbnails */}
      <div className="flex flex-col space-y-2 mr-3 max-h-[500px] overflow-y-auto">
        {images.map((img, index) => (
          <img
            key={index}
            src={img.url}
            alt={img.alt}
            onClick={() => setActiveImage(img.url)}
            className={`w-16 h-20 object-cover cursor-pointer border-2 rounded 
              ${activeImage === img.url ? "border-black" : "border-gray-300"}`}
          />
        ))}
      </div>

      {/* Main Image */}
      <img
        src={activeImage}
        className="w-full max-h-[500px] object-cover rounded-lg"
      />
    </div>
  );
};

// ----------------------------------------------------------------------
// SIZE SELECTOR
// ----------------------------------------------------------------------
const SizeSelector = ({ sizes, selectedSize, onSelectSize }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <label className="text-sm opacity-80 font-medium">Size</label>
        <span className="text-xs underline text-blue-500 cursor-pointer">
          SIZE CHART
        </span>
      </div>

      <div className="flex gap-3 flex-wrap">
        {sizes.map((size) => (
          <div
            key={size.label}
            onClick={() => onSelectSize(size.label)}
            className={`border-2 px-4 py-2 h-10 flex justify-center items-center uppercase text-sm rounded transition-all
              ${
                selectedSize === size.label
                  ? "border-black cursor-pointer"
                  : "border-gray-300 hover:border-black cursor-pointer"
              }`}
          >
            {size.label}
          </div>
        ))}
      </div>
    </div>
  );
};

// ----------------------------------------------------------------------
// ACCORDION
// ----------------------------------------------------------------------
const Accordion = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-3"
      >
        <span className="text-sm font-medium">{title}</span>
        {open ? <Minus size={16} /> : <Plus size={16} />}
      </button>

      {open && (
        <div
          className="text-sm opacity-80 pb-4 px-2 leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: children.replace(/\n/g, "<br/>"),
          }}
        />
      )}
    </div>
  );
};

// ----------------------------------------------------------------------
// MAIN PRODUCT PAGE
// ----------------------------------------------------------------------
export default function ProductDetailPage() {
  const [selectedSize, setSelectedSize] = useState("M");

  // BUTTON ACTIONS
  const handleAddToCart = () => alert(`Added Size ${selectedSize} to Cart`);
  const handleBuyNow = () => alert(`Buying Size ${selectedSize}`);

  return (
    <div className="pt-32 pb-20">
      <div className="md:container mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* LEFT: IMAGES */}
          <ImageGallery images={productData.images} />

          {/* RIGHT: DETAILS */}
          <div>
            <h1 className="text-2xl font-semibold">{productData.title}</h1>

            <hr className="my-4" />

            <p className="text-sm">
              You will earn <b>{productData.coins} coins</b>
            </p>

            <hr className="my-4" />

            <SizeSelector
              sizes={productData.sizes}
              selectedSize={selectedSize}
              onSelectSize={setSelectedSize}
            />

            <hr className="my-4" />

            <label className="text-sm opacity-80">Price</label>
            <p className="text-xl font-bold mt-1">₹ {productData.price}</p>
            <span className="text-xs opacity-70">Inclusive of all taxes</span>

            <hr className="my-4" />

            {/* BUTTONS ALWAYS WORKING */}
            <div className="flex gap-3">

              <button
                onClick={handleAddToCart}
                className="flex-1 h-11 text-xs text-white uppercase 
                bg-black hover:bg-gray-900 flex items-center justify-center gap-2 rounded-none"
              >
                <ShoppingCart size={16} />
                Add to Cart
              </button>

              <button
                onClick={handleBuyNow}
                className="h-11 w-40 text-xs uppercase 
                border border-black hover:bg-black hover:text-white rounded-none"
              >
                Buy Now
              </button>

            </div>

            <hr className="my-4" />

            {/* ACCORDIONS */}
            <Accordion title="The Details" defaultOpen>
              {productData.details.theDetails}
            </Accordion>

            <Accordion title="Size & Fit">
              {productData.details.sizeAndFit}
            </Accordion>

            <Accordion title="Composition & Care">
              {productData.details.compositionAndCare}
            </Accordion>

            <Accordion title="Delivery & Returns">
              {productData.details.deliveryAndReturns}
            </Accordion>

          </div>
        </div>

      </div>
    </div>
  );
}
