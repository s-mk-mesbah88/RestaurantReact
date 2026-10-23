export default function ReservationSection() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Demo only: connect this form to your reservation backend when ready.
  };

  return (
    <section className="w-full px-4 py-8 sm:px-6 lg:px-8">
      <div className="relative mx-auto grid w-full max-w-[1300px] gap-8 overflow-hidden rounded-[28px] bg-[#F5224B] px-6 py-8 text-white sm:px-10 sm:py-10 lg:grid-cols-[0.75fr_1.65fr] lg:items-start lg:gap-10 lg:px-[60px] lg:py-[70px]">
        {/* Decorative background image placeholder */}
        <div className="pointer-events-none absolute inset-0 opacity-10">
          {/* Add your pattern/background image here */}
        </div>

        {/* Heading */}
        <div className="relative z-10">
          <h2 className="text-4xl font-extrabold uppercase leading-[1.15] tracking-tight sm:text-5xl">
            Reserve
            <br />
            <span className="underline decoration-[#FFD400] decoration-[4px] underline-offset-8">
              A Table
            </span>
          </h2>
          <p className="mt-7 text-base sm:text-lg">
            Discover our New Menu !
          </p>
        </div>

        {/* Reservation form */}
        <form
          onSubmit={handleSubmit}
          className="relative z-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6"
        >
          <input
            aria-label="Number of guests"
            type="number"
            min="1"
            max="30"
            required
            placeholder="No of Guest"
            className="h-[60px]  w-52 rounded-lg bg-white px-6 text-base font-medium text-neutral-800 outline-none placeholder:text-neutral-600 focus:ring-2 focus:ring-[#FFD400] sm:col-span-2 lg:col-span-3"
          />

          <input
            aria-label="Date"
            type="date"
            required
            className="h-[60px] w-64 rounded-lg bg-white px-5 text-base font-medium text-neutral-700 outline-none focus:ring-2 focus:ring-[#FFD400] sm:col-span-1 lg:col-span-1"
          />

          <select
            aria-label="Time"
            required
            defaultValue=""
            className="h-[60px]  rounded-lg bg-white px-5 text-base font-medium text-neutral-700 outline-none focus:ring-2 focus:ring-[#FFD400] sm:col-span-1 lg:col-span-2"
          >
            <option value="" disabled>Time</option>
            <option>12:00 PM</option>
            <option>1:00 PM</option>
            <option>2:00 PM</option>
            <option>6:00 PM</option>
            <option>7:00 PM</option>
            <option>8:00 PM</option>
            <option>9:00 PM</option>
          </select>

          <input
            aria-label="Full name"
            type="text"
            required
            placeholder="Full Name"
            autoComplete="name"
            className="h-[60px] min-w-0 rounded-lg bg-white px-6 text-base font-medium text-neutral-800 outline-none placeholder:text-neutral-600 focus:ring-2 focus:ring-[#FFD400] sm:col-span-1 lg:col-span-3"
          />

          <input
            aria-label="Phone number"
            type="tel"
            required
            placeholder="Phone No"
            autoComplete="tel"
            className="h-[60px] min-w-0 rounded-lg bg-white px-6 text-base font-medium text-neutral-800 outline-none placeholder:text-neutral-600 focus:ring-2 focus:ring-[#FFD400] sm:col-span-1 lg:col-span-3"
          />

          <div className="flex justify-start sm:col-span-2 lg:col-span-6 lg:justify-end">
            <button
              type="submit"
              className="h-[64px] min-w-[130px] rounded-xl border-[3px] border-[#FFD400] bg-[#FFD400] px-8 text-base font-extrabold text-black outline outline-2 outline-offset-2 outline-[#FFD400]/70 transition hover:bg-yellow-300 focus:ring-2 focus:ring-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
