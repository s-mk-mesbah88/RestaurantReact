import bak from "../../../images/KingsBurger/bac.png";
import hamberger from "../../../images/KingsBurger/food.png";
import price from "../../../images/KingsBurger/20.png";

function KingsBurger() {
  return (
    <header
      style={{ backgroundImage: `url(${bak})` }}
      className="relative flex h-[60vh] min-h-[450px] w-full bg-cover bg-center bg-no-repeat"
    >
      <div className="w-2/4 float-left">
        <div className="w-fit h-fit m-auto mt-28">
          <p className="text-base font-extrabold leading-tight text-[#fa2850] sm:text-lg lg:text-xl">
            Fastest Delivery & Easy Pickup
          </p>

          <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-[#ffce08] sm:text-5xl lg:text-[64px]">
            Kings Burger
          </h1>

          <p className="mt-5 max-w-[450px] text-sm font-medium leading-[1.4] text-white sm:text-base lg:text-lg">
            Good food starts with good ingredients. We only bring you the best.
          </p>
          <div className="mt-11 inline-flex items-center gap-12">
            <div className="rounded-[15px] border-[3px] border-[#ff1744] p-[2px]">
              <button className="flex h-[55px] w-[191px] items-center justify-center rounded-[11px] bg-[#ff1744] px-5 text-[17px] font-bold text-white transition-colors hover:bg-[#e9133d]">
                View Our Menu
              </button>
            </div>

            <div className="flex items-center">
              <div className="flex items-center gap-[3px]">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg
                    key={i}
                    viewBox="0 0 24 24"
                    className="h-[17px] w-[17px] fill-yellow-400"
                  >
                    <path d="M12 2.5 14.9 8.4 21.4 9.3 16.7 13.9 17.8 20.4 12 17.3 6.2 20.4 7.3 13.9 2.6 9.3 9.1 8.4Z" />
                  </svg>
                ))}
              </div>

              <span className="ml-8 text-base font-bold text-white">4.8</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/4 float-left">
        <div className="w-8/12 h-8/12 m-a mt-20">
          <img src={hamberger} className="w-full h-full float-left" />
          <img
            src={price}
            className="float-left w-[160px] h-[160px] mt-[-30%] "
          />
        </div>
      </div>
    </header>
  );
}

export default KingsBurger;
