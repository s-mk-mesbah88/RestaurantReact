import bac from "../../../images/BestFood/bac.jpg";
import food1 from "../../../images/BestFood/food1.jpg";
import food2 from "../../../images/BestFood/food2.png";

function BestFood() {
  return (
    <header style={{ backgroundImage: `url(${bac})` }} 
    className="relative h-[55vh] w-full overflow-hidden font-sans">
      <div className="mx-auto grid h-full max-w-[1500px] grid-cols-2 items-center gap-6 px-6 lg:gap-12 lg:px-12">
        {/* Reservation section */}
        <div className="relative z-10 mx-auto w-full max-w-[550px]">
          <h1 className="text-2xl font-black leading-tight tracking-tight text-black sm:text-3xl lg:text-5xl">
            Best Food for
            <span className="mt-1 block w-fit rounded-full bg-[#ffce08] px-3 pb-1 lg:px-4">
              Best Restaurants
            </span>
          </h1>

          <p className="mb-4 mt-2 text-[10px] font-extrabold tracking-[1px] text-[#595959] sm:mb-6 sm:mt-3 sm:text-xs lg:mb-8 lg:text-base">
            ARRIVING FROM PARIS IN 1986
          </p>

          <form
            className="flex flex-col gap-2 sm:gap-3 lg:gap-5"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Reservation submitted!");
            }}
          >
            <input
              type="number"
              min="1"
              placeholder="No of Guest"
              aria-label="Number of guests"
              required
              className="h-9 w-full rounded-md border-2 text-black border-[#e4e4e4] bg-white px-3 text-xs font-bold outline-none transition focus:border-[#ff2850] sm:h-11 sm:px-5 lg:h-14 lg:border-[3px] lg:px-7 lg:text-sm"
            />

            <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-7">
              <input
                type="date"
                aria-label="Date"
                required
                className="h-9 min-w-0 w-full rounded-md border-2 border-[#e4e4e4] bg-white px-1 text-[10px] font-bold text-[#595959] outline-none focus:border-[#ff2850] sm:h-11 sm:px-2 sm:text-xs lg:h-14 lg:border-[3px] lg:px-4 lg:text-sm"
              />

              <input
                type="time"
                aria-label="Time"
                required
                className="h-9 min-w-0 w-full rounded-md border-2 border-[#e4e4e4] bg-white px-1 text-[10px] font-bold text-[#595959] outline-none focus:border-[#ff2850] sm:h-11 sm:px-2 sm:text-xs lg:h-14 lg:border-[3px] lg:px-4 lg:text-sm"
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-fit rounded-lg border-2 border-[#ff2850] bg-[#ff2850] px-4 py-2 text-xs font-extrabold text-white outline outline-1 outline-[#ff2850] outline-offset-2 transition hover:-translate-y-0.5 hover:bg-[#e9153e] sm:px-5 sm:py-3 sm:text-sm lg:mt-3 lg:rounded-xl lg:border-[3px] lg:px-7 lg:py-4 lg:text-base"
            >
              Reserve a Table
            </button>
          </form>
        </div>

        {/* Food gallery */}
        <div className="relative h-full min-w-0">
          {/* Pink background */}
          {/* <div className="absolute -bottom-1 -right-12 h-[55%] w-[115%] rounded-l-[45%] bg-[#fa2050] sm:-right-16 lg:-right-24" /> */}

          {/* First food image */}
          <img
            src={food1}
            alt="Roasted vegetables and steak"
            className="absolute left-[5%] top-[8%] z-10 h-[60%] w-[36%] rounded-[999px] object-cover"
          />

          {/* Second food image */}
          <img
            src={food2}
            alt="Grilled meat in a skillet"
            className="absolute right-[20%] top-[27%] z-10 h-[60%] w-[36%] rounded-[999px] object-cover"
          />

          {/* Free delivery */}
          <div className="absolute right-0 top-[5%] z-20 flex items-center gap-2 rounded-full bg-white p-2 shadow-[0_5px_30px_rgba(0,0,0,0.08)] sm:gap-3 sm:px-4 sm:py-3 lg:right-[2%]">
            <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#ffce08] text-base sm:h-10 sm:w-10 lg:h-14 lg:w-14 lg:text-2xl">
              🚚
            </div>

            <p className="text-[9px] font-black leading-tight text-black sm:text-xs lg:text-base">
              Free Delivery 7
              <br />
              Days a Week
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default BestFood;
