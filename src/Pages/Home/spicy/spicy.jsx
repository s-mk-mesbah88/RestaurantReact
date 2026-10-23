import bac from "../../../images/spicy/bac.jpg";
import hamberger from "../../../images/spicy/hamberger.png";
import text from "../../../images/spicy/text.png";

function Spicy() {
  return (
    <header
      style={{ backgroundImage: `url(${bac})` }}
      className="relative flex h-[60vh] min-h-[450px] w-full bg-cover bg-center bg-no-repeat">
      <div className="relative h-full w-full max-w-[232px] overflow-hidden px-[21px] py-7 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_70%,rgba(255,0,0,0.18),transparent_45%),linear-gradient(135deg,rgba(120,0,0,0.2),transparent)]" />

        <div className="relative z-10">
          <p className="mb-2 text-[10px] font-bold text-yellow-300">
            Crispy, Every Bite Taste
          </p>

          <h1 className="font-[Impact,sans-serif] text-[48px] font-black uppercase leading-[0.91] tracking-[-1.0px]">
            Hot Spicy
            <br />
            Chiken
            <br />
            Burger
          </h1>

          <div className="mt-5 flex items-center gap-3">
            <span className="text-[14px] font-bold">Limited Offer /</span>
            <span className="text-[28px] font-black leading-none">$5</span>
          </div>

          <button className="mt-5 flex h-[33px] w-[106px] items-center justify-center gap-2 rounded-md bg-[#ff2450] text-[10px] font-bold transition hover:bg-[#ff4267] active:scale-95">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 6h13l3 7h2" />
              <path d="M5 6l-1 9h14" />
              <circle cx="7" cy="19" r="1.5" />
              <circle cx="17" cy="19" r="1.5" />
              <path d="M10 9h3M9 12h5" />
            </svg>
            Order Now
          </button>
        </div>
      </div>
    </header>
  );
}

export default Spicy;
