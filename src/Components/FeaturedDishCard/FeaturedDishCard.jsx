function FeaturedDishCard({ image, oldPrice = "14.85", price = "10.85" }) {
  return (
    <div className="ml-2.5 relative h-[350px] w-[350px] max-w-full overflow-hidden rounded-[32px] border-[5px] border-[#FFD400] bg-white">
      {/* Sale */}
      <div className="absolute left-[10px] top-[10px] z-30 flex h-[65px] w-[65px] items-center justify-center rounded-full bg-[#FFD400] text-[18px] font-extrabold text-black">
        SALE
      </div>

      {/* شکل قرمز پشت غذا */}
      <div className="absolute left-1/2 top-[100px] h-[90px] w-[285px] max-w-[95%] -translate-x-1/2 rounded-full bg-[#F5224B]" />

      {/* تصویر غذا */}
      <img
        src={image}
        alt="Featured dish"
        className="rounded-[50%] overflow-hidden absolute left-1/2 top-[22px] z-10 h-[200px] w-[200px] -translate-x-1/2 object-contain"
      />

      {/* قیمت */}
      <div className="absolute bottom-[27px] left-[28px] flex items-center gap-1">
        <span className="text-[13px] font-bold text-gray-400 line-through">
          ${oldPrice}
        </span>

        <span className="text-[26px] font-extrabold text-[#F5224B]">
          ${price}
        </span>
      </div>

      {/* دکمه سبد خرید */}
      <button
        aria-label="Add to cart"
        className="absolute bottom-[12px] right-[12px] flex h-[50px] w-[50px] items-center justify-center rounded-[10px] bg-[#FFD400] transition hover:bg-yellow-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="23"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 8h14l1 12H4L5 8Z" />
          <path d="M9 8V6a3 3 0 0 1 6 0v2" />
        </svg>
      </button>
    </div>
  );
}

export default FeaturedDishCard;
