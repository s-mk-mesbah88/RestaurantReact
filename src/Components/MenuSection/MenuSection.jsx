import { useState } from "react";
import chiken from "../../images/home/main/chiken.png";

const categories = [
  { name: "Dessert", icon: "🍩" },
  { name: "Steak", icon: "🍖" },
  { name: "Coffee", icon: "☕" },
  { name: "Burger", icon: "🍔" },
];

const menus = {
  Dessert: [
    {
      name: "Chocolate Cake",
      description: "chocolate, cream, fresh berries",
      price: "$9.00",
    },
    {
      name: "Classic Cheesecake",
      description: "cream cheese, vanilla, biscuit",
      price: "$16.00",
    },
    {
      name: "Ice Cream",
      description: "vanilla, chocolate, caramel",
      price: "$12.00",
    },
    {
      name: "Fresh Donuts",
      description: "sugar, chocolate glaze",
      price: "$8.00",
    },
  ],
  Steak: [
    {
      name: "BBQ",
      description: "radish, black sesame seeds, coriander",
      price: "$9.00",
    },
    {
      name: "BBQ baby back ribs",
      description: "sticky Asian glaze, charred lime, chilli cashews",
      price: "$16.00",
    },
    {
      name: "Half smoked chicken",
      description: "miso butter glaze, charred lime wedge, sake bbq",
      price: "$34.00",
    },
    {
      name: "Dusted chicken wings",
      description: "tossed in Korean hot sauce, pickled radish",
      price: "$40.00",
    },
  ],
  Coffee: [
    {
      name: "Espresso",
      description: "rich aroma, freshly roasted beans",
      price: "$5.00",
    },
    {
      name: "Cappuccino",
      description: "espresso, steamed milk, foam",
      price: "$7.00",
    },
    {
      name: "Latte",
      description: "smooth coffee, creamy milk",
      price: "$8.00",
    },
    { name: "Mocha", description: "chocolate, espresso, milk", price: "$9.00" },
  ],
  Burger: [
    {
      name: "Classic Burger",
      description: "beef, lettuce, tomato, special sauce",
      price: "$12.00",
    },
    {
      name: "Cheese Burger",
      description: "beef, cheddar, pickles",
      price: "$14.00",
    },
    {
      name: "Double Burger",
      description: "double beef, cheese, house sauce",
      price: "$18.00",
    },
    {
      name: "Chicken Burger",
      description: "crispy chicken, lettuce, mayo",
      price: "$13.00",
    },
  ],
};

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("Dessert");

  return (
    <section className="w-full  px-4 py-12 text-black">
      <div className="mx-auto w-full max-w-[80%] max-lg:max-w-[92%] max-md:max-w-full">
        {/* Categories */}
        <div className="mb-14 flex flex-wrap justify-center gap-4 md:gap-5">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`relative flex h-[150px] w-[150px] flex-col items-center justify-center gap-3 rounded-[22px] border-[5px] transition-all duration-200
                ${
                  activeCategory === category.name
                    ? "border-[#F5224B] bg-[#F5224B] text-white"
                    : "border-neutral-200 bg-white text-black hover:border-[#F5224B]"
                }`}
            >
              <span className="text-[48px]" aria-hidden="true">
                {category.icon}
              </span>

              <span className="text-xl font-extrabold">{category.name}</span>

              {activeCategory === category.name && (
                <span className="absolute -bottom-[18px] left-1/2 h-0 w-0 -translate-x-1/2 border-x-[24px] border-t-[18px] border-x-transparent border-t-[#F5224B]" />
              )}
            </button>
          ))}
        </div>

        {/* Menu card */}
        <div className="relative mt-10 rounded-[30px] bg-[#F4F7FD] px-6 py-8 md:px-10 md:py-12 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-10">
            {/* Image placeholder */}
            <div className="relative z-10 mx-auto flex aspect-square w-full max-w-[360px] items-center justify-center rounded-full bg-neutral-200 md:-ml-20 lg:-ml-24">
              {/* عکس بشقاب خودت را اینجا قرار بده */}              
              <img
                src={chiken}
                alt="Food"
                className="h-full w-full rounded-full object-contain"
              />
             
            </div>

            {/* Menu items */}
            <div className="min-w-0">
              <h2 className="mb-6 text-3xl font-extrabold md:text-4xl">
                {activeCategory === "Steak" ? "BBQ" : activeCategory}
              </h2>

              <div>
                {menus[activeCategory].map((item, index) => (
                  <div
                    key={item.name}
                    className={`py-4 ${
                      index !== menus[activeCategory].length - 1
                        ? "border-b-2 border-dashed border-neutral-800"
                        : ""
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-base font-extrabold md:text-xl">
                        {item.name}
                      </h3>

                      <span className="shrink-0 text-base font-extrabold text-[#F5224B] md:text-xl">
                        {item.price}
                      </span>
                    </div>

                    <p className="mt-2 text-sm leading-6 text-neutral-600 md:text-base">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

