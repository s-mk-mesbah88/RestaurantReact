import bacimage from "../..//images/home/Heder/01.png";
import MenuSection from "../../Components/MenuSection/MenuSection";
import pitza from "../../images/home/Heder/pitza.png";
import woman from "../../images/home/main/grl.jpg";
import kabab from "../../images/home/main/kabab.png";
import miz from "../../images/home/main/miz.png";
import noshdani from "../../images/home/main/noshdani.png";
import cartkabab from "../../images/home/main/cartkabab.png";
import cartmiiz from "../../images/home/main/cartmiiz.png";
import coffe from "../../images/home/main/coffe.png";
import estak from "../../images/home/main/estak.png";
import pitza2 from "../../images/home/main/pitza.png";
import chiken from "../../images/home/main/chiken.png";
import coffe2 from "../../images/home/main/coffe2.png";
import kike from "../../images/home/main/kike.png";
import stak from "../../images/home/main/stak.png";
import chef1 from "../../images/home/main/chef.png";
import chef2 from "../../images/home/main/chef2.png";
import chef3 from "../../images/home/main/chef3.png";
import emza from "../../images/home/main/emza.png";
import bakmain from "../../images/home/main/bakmain.jpg";
import mobal from "../../images/home/main/mobal.png";
import motor from "../../images/home/main/motot.png";
import pol from "../../images/home/main/pol.jpg";
import restoran from "../../images/home/main/restoran.jpg";
import allpic from "../../images/home/main/allpic.jpg";

import ReservationSection from "../../Components/ReservationSection/ReservationSection";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import FeaturedDishCard from "../../Components/FeaturedDishCard/FeaturedDishCard";
import Footer from "../../Components/Footer/Footer";

function Home() {
  const cards = [
    { title: "Restaurant", position: "md:translate-y-0" },
    { title: "Coctail Bar", position: "md:translate-y-12" },
    { title: "Private Dining", position: "md:translate-y-0" },
  ];
  const experts = [
    {
      id: 1,
      image: chef3,
      specialty: "Dessert specialist",
      name: "Thomas Walim",
    },
    {
      id: 2,
      image: chef2,
      specialty: "Chef Master",
      name: "James Jhonson",
    },
    {
      id: 3,
      image: chef1,
      specialty: "Dessert specialist",
      name: "Room Minal",
    },
  ];
  return (
    <>
      <header
        style={{ backgroundImage: `url(${bacimage})` }}
        className="relative flex h-[60vh] min-h-[450px] w-full bg-cover bg-center bg-no-repeat"
      >
        {/* متن سمت چپ */}
        <div className="w-1/2 pt-[8%] mt-14">
          <h1 className="ml-[30%] w-[60%] font-['Fredoka_One'] text-[40px] font-normal leading-[1.3]">
            The Perfect Space to Enjoy Fantastic Food
          </h1>

          <p className="ml-[30%] mt-4 w-[50%] font-['Epilogue'] text-[16px] leading-[25px]">
            Festive dining at Farthings where we are strong believers in using
            the very best produce
          </p>
        </div>

        {/* کارت پیتزا */}
        <div className="relative w-1/2">
          <div className="absolute left-[8%] top-[274px] flex h-[192px] w-[399px] max-w-[90%] items-center justify-between rounded-[30px] border-[3px] border-white/30 bg-black/50 p-5 backdrop-blur-md">
            <div className="text-white">
              <span className="text-orange-700 text-[20px] font-bold">
                $90.80
              </span>
              <p className="mt-2 text-[16px]">Sicilian Pizza</p>
            </div>

            <img
              src={pitza}
              alt="Sicilian Pizza"
              className="h-[150px] w-[150px] shrink-0 object-contain"
            />
          </div>
        </div>
      </header>
      <main className="w-full min-h-screen p-2.5">
        <div className="min-h-[300px] w-2/3 m-auto px-4 py-5 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
            {/* ستون سمت چپ */}
            <div className="about-left">
              <h2 className="text-xl font-extrabold tracking-wider text-rose-500">
                ABOUT THE FOOD RESTAURANT
              </h2>
              <h3 className="w-3xs text-[40px] text-blue-900 ">
                New Ground with Dishes to be Enjoyed
              </h3>
            </div>

            {/* ستون سمت راست */}
            <div className="about-right flex flex-col gap-4">
              <p className="text-base font-medium leading-[30px] text-neutral-500">
                Nisl quam vestibulum ac quam nec odio eleme aucan ligula. Orci
                varius nat oque pena tibus et urient monte nascete ridiculus mus
                nellent esq um ac qu am nec odio rbine. Nisl quam nestibu aucan
                ligula.
              </p>

              {/* بخش مستقل پروفایل */}
              <div className="profile-section flex min-h-28 items-center gap-4">
                <div className="profile-image h-20 w-20 shrink-0 overflow-hidden rounded-full bg-neutral-800">
                  <img src={woman} className="h-full w-full object-cover" />
                </div>
                <div>
                  <p>Willimes James</p>
                  <p>Director and Chief Operations Officer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-8 md:px-6">
          <div className="mx-auto grid max-w-[800px] grid-cols-1 justify-items-center gap-6 md:grid-cols-3 md:gap-4">
            <div className="relative h-[130px] w-full max-w-[280px] overflow-hidden rounded-[28px] bg-neutral-900 p-3 md:h-[380px] md:max-w-none">
              {/* Image */}
              <div className="absolute inset-0 rounded-[28px] bg-neutral-900">
                <img
                  src={kabab}
                  alt=""
                  className="h-full w-full rounded-[28px] object-cover"
                />
              </div>

              {/* Yellow border */}
              <div className="pointer-events-none absolute inset-3 rounded-[23px] border-[4px] border-[#FFD400]" />

              {/* Title */}
              <div className="absolute inset-x-3 bottom-3 z-10 flex h-[50px] items-center justify-center rounded-b-[20px] rounded-t-[16px] bg-[#FFD400] px-2">
                <h3 className="text-center text-base font-extrabold text-black md:text-xl">
                  Restaurant
                </h3>
              </div>
            </div>
            <div className="relative mt-7 m-5 h-[130px] w-full max-w-[280px] overflow-hidden rounded-[28px] bg-neutral-900 p-3 md:h-[380px] md:max-w-none">
              {/* Image */}
              <div className="absolute inset-0 rounded-[28px] bg-neutral-900">
                <img
                  src={noshdani}
                  alt=""
                  className="h-full w-full rounded-[28px] object-cover"
                />
              </div>

              {/* Yellow border */}
              <div className="pointer-events-none absolute inset-3 rounded-[23px] border-[4px] border-[#FFD400]" />

              {/* Title */}
              <div className="absolute inset-x-3 bottom-3 z-10 flex h-[50px] items-center justify-center rounded-b-[20px] rounded-t-[16px] bg-[#FFD400] px-2">
                <h3 className="text-center text-base font-extrabold text-black md:text-xl">
                  Coctail Bar
                </h3>
              </div>
            </div>
            <div className="relative h-[130px] w-full max-w-[280px] overflow-hidden rounded-[28px] bg-neutral-900 p-3 md:h-[380px] md:max-w-none">
              {/* Image */}
              <div className="absolute inset-0 rounded-[28px] bg-neutral-900">
                <img
                  src={miz}
                  alt=""
                  className="h-full w-full rounded-[28px] object-cover"
                />
              </div>

              {/* Yellow border */}
              <div className="pointer-events-none absolute inset-3 rounded-[23px] border-[4px] border-[#FFD400]" />

              {/* Title */}
              <div className="absolute inset-x-3 bottom-3 z-10 flex h-[50px] items-center justify-center rounded-b-[20px] rounded-t-[16px] bg-[#FFD400] px-2">
                <h3 className="text-center text-base font-extrabold text-black md:text-xl">
                  Private Dining
                </h3>
              </div>
            </div>
          </div>
        </div>
        <br />
        <MenuSection />
        <br />
        <h2 className="w-fit h-fit text-5xl text-black m-auto">
          Discover Menu
        </h2>
        <div className="w-full px-4 py-6">
          <div className="mx-auto grid w-full max-w-[75%] grid-cols-1 gap-6 md:grid-cols-2">
            <div
              style={{ backgroundImage: `url(${cartkabab})` }}
              className="relative flex h-[260px] max-h-[400px] flex-col overflow-hidden rounded-[30px] bg-neutral-900 bg-cover bg-center p-6 text-white sm:h-[300px] sm:p-8"
            >
              {/* محتوا */}
              <div className="relative z-10">
                <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                  Steaks & BBQ
                </h2>

                <p className="mt-3 text-base leading-7 sm:text-lg">
                  canonical classics to obscure tiki drinks
                </p>
              </div>

              {/* قیمت */}
              <div className="absolute bottom-0 left-8 z-20 flex h-[110px] w-[110px] translate-y-0 flex-col items-center justify-center rounded-full bg-[#FFD400] text-center sm:left-12 sm:h-[140px] sm:w-[140px]">
                <span className="text-2xl font-extrabold text-[#F5224B] sm:text-3xl">
                  $120
                </span>

                <span className="text-sm font-bold text-black sm:text-base">
                  person
                </span>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url(${cartmiiz})` }}
              className="relative flex h-[260px] max-h-[400px] flex-col overflow-hidden rounded-[30px] bg-neutral-900 bg-cover bg-center p-6 text-white sm:h-[300px] sm:p-8"
            >
              {/* محتوا */}
              <div className="relative z-10">
                <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                  Cocktails
                </h2>

                <p className="mt-3 text-base leading-7 sm:text-lg">
                  canonical classics to obscure tiki drinks
                </p>
              </div>

              {/* قیمت */}
              <div className="absolute bottom-0 left-8 z-20 flex h-[110px] w-[110px] translate-y-0 flex-col items-center justify-center rounded-full bg-[#FFD400] text-center sm:left-12 sm:h-[140px] sm:w-[140px]">
                <span className="text-2xl font-extrabold text-[#F5224B] sm:text-3xl">
                  $120
                </span>

                <span className="text-sm font-bold text-black sm:text-base">
                  person
                </span>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <ReservationSection />
        <br />
        <div>
          <h2 className="text-black font-['Fredoka_One'] text-[60px] font-normal leading-[72px] tracking-[0%] text-center align-middle">
            Featured Dishes
          </h2>
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper h-[50vh]"
          >
            <SwiperSlide>
              <div className="flex justify-center bg-white p-5">
                <FeaturedDishCard
                  image={pitza2}
                  oldPrice="14.85"
                  price="10.85"
                />
                <FeaturedDishCard
                  image={coffe}
                  oldPrice="14.85"
                  price="10.85"
                />
                <FeaturedDishCard
                  image={estak}
                  oldPrice="14.85"
                  price="10.85"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center bg-white p-5">
                <FeaturedDishCard
                  image={coffe}
                  oldPrice="14.85"
                  price="10.85"
                />
                <FeaturedDishCard
                  image={chiken}
                  oldPrice="14.85"
                  price="10.85"
                />
                <FeaturedDishCard
                  image={estak}
                  oldPrice="14.85"
                  price="10.85"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center bg-white p-5">
                <FeaturedDishCard
                  image={estak}
                  oldPrice="14.85"
                  price="10.85"
                />
                <FeaturedDishCard
                  image={pitza2}
                  oldPrice="14.85"
                  price="10.85"
                />
                <FeaturedDishCard
                  image={chiken}
                  oldPrice="14.85"
                  price="10.85"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center bg-white p-5">
                <FeaturedDishCard
                  image={estak}
                  oldPrice="14.85"
                  price="10.85"
                />
                <FeaturedDishCard
                  image={pitza2}
                  oldPrice="14.85"
                  price="10.85"
                />
                <FeaturedDishCard
                  image={coffe}
                  oldPrice="14.85"
                  price="10.85"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <br />
        <div className="mt-14 relative w-full overflow-hidden  text-black">
          <div className="relative mx-auto min-h-[620px] max-w-[1230px] px-4 md:px-0">
            {/* عنوان */}
            <h2 className="pt-5 text-center text-[18px] font-extrabold tracking-[2px] text-[#F5224B] md:absolute md:left-0 md:top-0 md:pt-0 md:text-left">
              TESTIMONIALS &amp; REVIEWS
            </h2>
            <h2 className="pt-7 w-96 font-['Fredoka_One'] text-[60px] font-normal leading-[72px] tracking-[0%] align-middle">
              Our Customar Feedbacks
            </h2>

            {/* کادر نظر مشتری */}
            <div className="relative mt-10 min-h-[300px] w-full rounded-[30px] border-[5px] border-[#FFD400] p-7 md:absolute md:left-0 md:top-[240px] md:mt-0 md:h-[318px] md:w-[610px] md:p-[50px]">
              <p className="font-['Epilogue'] text-[18px] leading-[1.65] text-[#777777] md:text-[23px]">
                A good restaurant is like a vacation; it transports you, and it
                becomes a lot more than just about the food. All great deeds and
                all great thoughts
              </p>

              {/* دایره زرد */}
              <div className="absolute bottom-[10px] right-[10px] h-[75px] w-[75px] rounded-full bg-[#FFD400]" />
            </div>

            {/* تصاویر سمت راست */}
            <div className="relative mt-8 grid grid-cols-2 gap-4 pb-8 md:absolute md:inset-0 md:mt-0 md:block md:pb-0">
              {/* تصویر غذا با لایه صورتی */}
              <div className="w-80 h-80 relative aspect-square overflow-hidden rounded-[30px] md:absolute md:left-[54%] md:top-[242px] md:h-[294px] md:w-[294px]">
                <img
                  src={stak}
                  alt="Restaurant food"
                  className="h-72 w-72 object-contain"
                />
                <div className="absolute inset-0 bg-[#F5224B]/80" />
              </div>

              {/* تصویر قهوه */}
              <div className="w-80 h-80 relative aspect-square overflow-hidden rounded-[30px] md:absolute md:right-[38px] md:top-[15px] md:h-[292px] md:w-[292px]">
                <img
                  src={coffe2}
                  alt="Coffee"
                  className="h-72 w-72 object-contain"
                />
              </div>

              {/* تصویر دسر */}
              <div className="w-80 h-80 relative col-span-2 ml-auto aspect-square  overflow-hidden rounded-[30px] md:absolute md:-right-[82px] md:top-[328px] md:ml-0 md:h-[294px] md:w-[292px]">
                <img
                  src={kike}
                  alt="Dessert"
                  className="h-72 w-72 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="w-full bg-white px-4 py-12">
          {/* عنوان */}
          <h2 className="mb-12 text-center font-['Fredoka_One'] text-4xl font-normal text-black sm:text-5xl lg:text-[60px]">
            Meet Our Experts
          </h2>

          {/* کارت‌ها */}
          <div className="mx-auto grid w-full max-w-[1230px] grid-cols-1 justify-items-center gap-x-6 gap-y-8 sm:grid-cols-2 xl:grid-cols-3">
            {experts.map((expert) => (
              <div
                key={expert.id}
                className="relative h-[770px] w-full max-w-[410px]"
              >
                {/* عکس آشپز */}
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="absolute left-1/2 top-0 z-0 h-[420px] w-full -translate-x-1/2 object-contain object-top"
                />

                {/* دایره سفید */}
                <div className="absolute left-1/2 top-[365px] z-10 aspect-square w-[94%] -translate-x-1/2 rounded-full border-[6px] border-[#E5E5E5] bg-white">
                  <div className="flex flex-col items-center pt-[90px] text-center">
                    {/* تخصص */}
                    <p className="text-base font-bold text-[#F5224B] sm:text-[18px]">
                      {expert.specialty}
                    </p>

                    {/* نام */}
                    <h3 className="mt-1 max-w-full px-2 font-['Fredoka_One'] text-2xl font-normal text-black sm:text-[28px] lg:text-[32px]">
                      {expert.name}
                    </h3>

                    {/* دایره‌های پایین */}
                    <div className="mt-2.5 flex gap-3">
                      <div className="h-[25px] w-[25px] shrink-0 rounded-full bg-[#F3F6FC]" />
                      <div className="h-[25px] w-[25px] shrink-0 rounded-full bg-[#F3F6FC]" />
                      <div className="h-[25px] w-[25px] shrink-0 rounded-full bg-[#F3F6FC]" />
                    </div>

                    {/* امضا */}
                    <img
                      src={emza}
                      alt="Signature"
                      className="mt-5 h-5 w-[140px] object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div
          style={{ backgroundImage: `url(${bakmain})` }}
          className="relative min-h-[600px] w-full overflow-hidden bg-[#F5F6FC] bg-cover bg-center bg-no-repeat"
        >
          <div className="p-8 relative mx-auto min-h-[600px] max-w-[1300px]">
            {/* متن سمت چپ */}
            <div className="relative z-10 w-full px-6 pt-12 sm:px-10 md:w-[53%] md:px-0 md:pt-[115px]">
              <p className="font-['Epilogue'] text-[16px] font-bold tracking-[1.5px] text-[#F5224B] sm:text-[18px]">
                BEST APP FOR FOODS ORDERING
              </p>

              <h2 className="mt-4 max-w-[620px] font-['Fredoka_One'] text-[36px] font-normal leading-[1.2] text-black sm:text-[44px] lg:text-[50px]">
                Manage Your Restaurant Anytime! Anywhere!
              </h2>

              {/* مزایا */}
              <div className="mt-6 flex flex-col gap-3 font-['Epilogue'] text-[16px] text-[#626262] sm:text-[18px]">
                <p className="flex items-center gap-3">
                  <span className="h-[18px] w-[18px] shrink-0 rounded-full bg-[#FFD400] p-[5px]">
                    <span className="block h-full w-full rounded-full bg-white" />
                  </span>
                  Higher Reach - Minimal Effort
                </p>

                <p className="flex items-center gap-3">
                  <span className="h-[18px] w-[18px] shrink-0 rounded-full bg-[#FFD400] p-[5px]">
                    <span className="block h-full w-full rounded-full bg-white" />
                  </span>
                  Showcase your Brand
                </p>

                <p className="flex items-center gap-3">
                  <span className="h-[18px] w-[18px] shrink-0 rounded-full bg-[#FFD400] p-[5px]">
                    <span className="block h-full w-full rounded-full bg-white" />
                  </span>
                  Exclusive offers &amp; discounts
                </p>
              </div>

              {/* دکمه‌ها */}
              <div className="mt-10 flex flex-wrap gap-4">
                <button className="flex h-[60px] min-w-[200px] items-center justify-center gap-3 rounded-xl bg-[#F5224B] px-6 font-['Fredoka_One'] text-[17px] text-white transition hover:bg-[#dc173e]">
                  <span className="text-2xl">▷</span>
                  Google Play
                </button>

                <button className="flex h-[60px] min-w-[185px] items-center justify-center gap-3 rounded-xl bg-black px-6 font-['Fredoka_One'] text-[17px] text-white transition hover:bg-neutral-800">
                  <span className="text-2xl">●</span>
                  App Store
                </button>
              </div>
            </div>

            {/* جای خالی تصویر موتور */}
            <div
              aria-label="جای تصویر موتور"
              className="absolute bottom-[55px] left-[49%] z-10 hidden h-[190px] w-[230px] md:block"
            >
              <img src={motor} className="w-full h-full object-contain" />
            </div>

            {/* جای خالی تصویر موبایل */}
            <div
              aria-label="جای تصویر موبایل"
              className="absolute right-[22%] top-[110px] z-10 hidden h-[410px] w-[190px] md:block"
            >
              <img src={mobal} className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="mx-auto w-[80%] py-10 text-white">
          <h2 className="mb-8 font-['Fredoka_One'] text-4xl text-white sm:text-5xl">
            Recent News
          </h2>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {/* کارت اول */}
            <div className="flex flex-col items-start gap-6 sm:flex-row">
              <div className="aspect-square w-full max-w-[270px] shrink-0 overflow-hidden rounded-[38px]">
                <img
                  src={pol}
                  alt="Restaurant news"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col items-start pt-2 sm:pt-10">
                <span className="rounded-lg bg-[#FFD400] px-3 py-1.5 text-sm font-bold text-black">
                  April 6, 2023
                </span>
                <p className="text-black text-2xl">Creamy Chicken Alfredo</p>
                <div className="mt-24 h-[56px] w-[56px] overflow-hidden  rounded-full bg-gray-300 float-left">
                  <img src={woman} className="h-full w-full object-cover" />
                </div>
                <p className="text-black float-left w-fit">Willimes Thomas</p>
              </div>
            </div>

            {/* کارت دوم */}
            <div className="flex flex-col items-start gap-6 sm:flex-row">
              <div className="aspect-square w-full max-w-[270px] shrink-0 overflow-hidden rounded-[38px]">
                <img
                  src={restoran}
                  alt="Restaurant interior"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col items-start pt-2 sm:pt-14">
                <span className="rounded-lg bg-[#FFD400] px-3 py-1.5 text-sm font-bold text-black">
                  April 6, 2023
                </span>
                <p className="text-black text-2xl">Air Fryer Salmon</p>
                <div className="mt-20 h-[56px] w-[56px] overflow-hidden  rounded-full bg-gray-300 float-left">
                  <img src={woman} className="h-full w-full object-cover" />
                </div>
                <p className="text-black float-left w-fit">Willimes Thomas</p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div
          style={{ backgroundImage: `url(${allpic})` }}
          className="relative isolate flex aspect-[1920/600] min-h-[350px] w-full items-center justify-center overflow-hidden bg-[#F5F6FC] bg-contain bg-center bg-no-repeat"
        >
          {/* لایه سفید روی عکس */}
          <div className="absolute inset-0 -z-10 bg-white/50" />

          {/* محتوای وسط */}
          <div className="flex flex-col items-center px-4 text-center">
            <div className="flex h-[80px] w-[80px] items-center justify-center rounded-full bg-[#F5224B] text-white">
              <a
                href="https://www.instagram.com/shawonetc3/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-[100px] w-[100px] items-center justify-center rounded-full bg-[#F5224B] text-white transition hover:scale-105"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-[48px] w-[48px]"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>
            </div>

            <h2 className="mt-8 font-['Fredoka_One'] text-3xl text-black sm:text-5xl">
              Follow @shawonetc3
            </h2>

            <p className="mt-4 font-['Epilogue'] text-sm text-[#555] sm:text-lg">
              Join our community to inspire your desires
            </p>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Home;
