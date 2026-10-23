function Footer() {
  return (
    <footer className="min-h-[65vh] w-full bg-[#F5F7FC] px-5 py-12 text-black sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1300px]">
        {/* بخش اصلی فوتر */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.7fr_0.8fr_1.2fr] lg:gap-10">
          {/* کارت اطلاعات رستوران */}
          <div className="flex min-h-[365px] flex-col rounded-[30px] bg-[#F5224B] px-7 py-7 text-white sm:px-9">
            {/* لوگو */}
            <div className="mb-14">
              <h2 className="font-['Fredoka_One'] text-2xl font-normal">
                TasteNest
              </h2>

              <p className="ml-1 text-[9px]">Fast Food Restaurant</p>
            </div>

            {/* ساعت کاری */}
            <div className="font-['Fredoka_One'] text-sm leading-7">
              <p>Tuesday - Saturday: 12:00pm - 23:00pm</p>

              <p className="mt-2 underline underline-offset-2">
                Closed on Sunday
              </p>
            </div>

            {/* امتیاز */}
            <p className="mt-auto pt-8 font-['Fredoka_One'] text-sm">
              5 star rated on TripAdvisor
            </p>
          </div>

          {/* لینک‌های About */}
          <div>
            <h3 className="mb-10 w-fit border-b-[5px] border-[#FFD400] pb-1 font-['Fredoka_One'] text-2xl">
              About
            </h3>

            <ul className="space-y-4 text-[15px]">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-[#F5224B]"
                >
                  <span className="text-xl text-neutral-500">›</span>
                  Fredoka One
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-[#F5224B]"
                >
                  <span className="text-xl text-neutral-500">›</span>
                  Special Dish
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-[#F5224B]"
                >
                  <span className="text-xl text-neutral-500">›</span>
                  Reservation
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-[#F5224B]"
                >
                  <span className="text-xl text-neutral-500">›</span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* لینک‌های Menu */}
          <div>
            <h3 className="mb-10 w-fit border-b-[5px] border-[#FFD400] pb-1 font-['Fredoka_One'] text-2xl">
              Menu
            </h3>

            <ul className="space-y-4 text-[15px]">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-[#F5224B]"
                >
                  <span className="text-xl text-neutral-500">›</span>
                  Steaks
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-[#F5224B]"
                >
                  <span className="text-xl text-neutral-500">›</span>
                  Burgers
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-[#F5224B]"
                >
                  <span className="text-xl text-neutral-500">›</span>
                  Coctails
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-[#F5224B]"
                >
                  <span className="text-xl text-neutral-500">›</span>
                  Bar B Q
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-[#F5224B]"
                >
                  <span className="text-xl text-neutral-500">›</span>
                  Desserts
                </a>
              </li>
            </ul>
          </div>

          {/* خبرنامه */}
          <div>
            <h3 className="mb-10 w-fit border-b-[5px] border-[#FFD400] pb-1 font-['Fredoka_One'] text-2xl">
              Newsletter
            </h3>

            <p className="mb-5 text-[15px] leading-6">
              Get recent news and updates.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col items-start gap-6"
            >
              <input
                type="email"
                placeholder="Email Address"
                className="h-[63px] w-full rounded-xl border border-[#D8D8D8] bg-white px-5 text-sm outline-none placeholder:text-[#BDBDBD] focus:border-[#F5224B]"
              />

              <button
                type="submit"
                className="h-[60px] w-[160px] rounded-xl border-2 border-[#F5224B] bg-[#F5224B] font-['Fredoka_One'] text-base text-white shadow-[4px_4px_0_#F5224B] transition hover:bg-[#DF173E]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* خط زرد */}
        <div className="mt-16 h-[10px] w-full bg-[#FFD400]" />

        {/* بخش پایینی */}
        <div className="flex flex-col items-center justify-between gap-6 py-8 text-center sm:flex-row sm:text-left">
          <p className="font-['Fredoka_One'] text-sm">
            <span className="text-[#F5224B]">© 2025 TesteNest</span>

            <span className="mx-2">|</span>

            <span>All shawonetc3 Themes</span>
          </p>

          {/* شبکه‌های اجتماعی */}
          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-4 font-['Fredoka_One'] text-sm sm:gap-x-8">
            <a href="#" className="underline hover:text-[#F5224B]">
              Facebook
            </a>

            <a href="#" className="underline hover:text-[#F5224B]">
              Instagram
            </a>

            <a href="#" className="underline hover:text-[#F5224B]">
              Twitter
            </a>

            <a href="#" className="underline hover:text-[#F5224B]">
              Youtube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
