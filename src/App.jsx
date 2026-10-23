import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import TesteNest from "./icon/TesteNest.png";
import Sabad from "./icon/Symbol.png";
import "./App.css";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Shop from "./Pages/Shop/Shop";
import Loging from "./Pages/Loging/Loging";
import Contact from "./Pages/Contact/Contact";
import Shopping from "./Pages/Shopping/Shopping";
import BestFood from "./Pages/Home/BestFood/BestFood";
import KingsBurger from "./Pages/Home/KingsBurger/KingsBurger";
import Spicy from "./Pages/Home/spicy/spicy";

function App() {
  return (
    <BrowserRouter>
      <nav className="flex items-center justify-evenly bg-white px-8 py-4 shadow-lg h-20">
        <div className="w-52 h-full">
          <img src={TesteNest} className="object-cover w-full h-full" />
        </div>

        <div className="w-fit h-fit flex items-center gap-4">
          {/* Home Dropdown */}
          <div className="dropdown dropdown-start">
            <div
              tabIndex={0}
              role="button"
              className="flex items-center gap-2 px-4 py-2 font-bold text-black cursor-pointer"
            >
              Home
              <span className="text-xs">▼</span>
            </div>

            <ul
              tabIndex={-1}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <Link to="/Home">Home 1</Link>
              </li>
              <li>
                <Link to="/BestFood">Best Food</Link>
              </li>
              <li>
                <Link to="/KingsBurger">Kings Burger</Link>
              </li>
              <li>
                <Link to="/Spicy">Spicy</Link>
              </li>
            </ul>
          </div>

          <Link
            to="/About"
            className="px-4 py-2 font-bold text-black transition hover:text-amber-900"
          >
            About Us
          </Link>

          {/* Shop Dropdown */}
          <div className="dropdown dropdown-start">
            <div
              tabIndex={0}
              role="button"
              className="flex items-center gap-2 px-4 py-2 font-bold text-black cursor-pointer"
            >
              Shop
              <span className="text-xs">▼</span>
            </div>

            <ul
              tabIndex={-1}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <Link to="/Shop">Shop 1</Link>
              </li>
            </ul>
          </div>
          <Link
            to="/Contact"
            className="px-4 py-2 font-bold text-black transition hover:text-amber-900"
          >
            Contact
          </Link>
        </div>

        <div className="w-fit h-fit flex items-center gap-4">
          <Link to="/Shopping" className="w-5 h-5 hover: ">
            <img src={Sabad} />
          </Link>
          <Link
            to="/"
            className="bg-amber-500 rounded-full px-4 py-2 font-bold text-black transition hover:text-amber-900"
          >
            Sing In
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Loging />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/BestFood" element={<BestFood />} />
        <Route path="/KingsBurger" element={<KingsBurger />} />
        <Route path="/Spicy" element={<Spicy />} />
        <Route path="/About" element={<About />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Shopping" element={<Shopping />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
