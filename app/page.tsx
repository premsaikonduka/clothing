export default function HomeBanner() {
  return (
    <div className="w-full mx-auto mb-10 pt-[120px]"> 
      {/* ⬆⬆⬆ Added padding to push banner below fixed navbar */}

      {/* VIDEO BANNER */}
      <div className="max-w-[90vw] 2xl:max-w-[1600px] mx-auto my-5 md:my-10">
        <div className="relative w-full h-auto">

          {/* Desktop Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover hidden md:block rounded-xl"
          >
            <source
              src="https://assets.therowdy.club/uniform-unafraid/desktop.mp4"
              type="video/mp4"
            />
          </video>

          {/* Mobile Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover block md:hidden rounded-xl"
          >
            <source
              src="https://assets.therowdy.club/uniform-unafraid/mobile.mp4"
              type="video/mp4"
            />
          </video>

          {/* SHOP NOW BUTTON */}
          <a href="/shop">
            <button
              className="absolute -bottom-4 -right-2 xl:-right-4 bg-black text-white 
                px-10 py-3 text-lg md:text-xl font-medium rounded-md
                transition-all hover:scale-[1.02]"
            >
              SHOP NOW
            </button>
          </a>
        </div>
      </div>

      {/* BELOW BUTTON ROW */}
      <div className="flex justify-between max-w-[90vw] mx-auto mb-5 xl:mt-12">

        {/* Shop By Season */}
        <div>
          <a href="/shop/shop-by-season">
            <button
              className="px-10 py-3 bg-black text-white text-xs md:text-base
              rounded-md transition-all hover:scale-[1.02]"
            >
              Shop By Season
            </button>
          </a>

          <p className="text-red-600 text-base mt-4">Drop is live!</p>
        </div>

        {/* Right Side Image */}
        <div>
          {/* Mobile Image */}
          <img
            src="/assets/image.png"
            alt="Reclaim Indian Supremacy"
            className="max-w-[70%] ml-auto mt-10 md:hidden"
          />

          {/* Desktop Image */}
          <img
            src="/assets/image.png"
            alt="Reclaim Indian Supremacy"
            className="max-w-[70%] ml-auto hidden md:block mt-6 lg:mt-2 -mr-5"
          />
        </div>
      </div>
    </div>
  );
}
