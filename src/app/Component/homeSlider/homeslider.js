"use client";
import { BookOpen, Dumbbell, Gamepad2, Laptop, Shirt, Sofa } from "lucide-react"; // category icon
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const categories = [
  { name: "Electronics", icon: Laptop },
  { name: "Fashion", icon: Shirt },
  { name: "Books", icon: BookOpen },
  { name: "Toys", icon: Gamepad2 },
  { name: "Sports", icon: Dumbbell },
  { name: "Furniture", icon: Sofa },
];

const Homeslider = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-10">
      <div className="md:col-span-2">
        <h2 className="text-xl font-bold mb-4">Category List</h2>
        <div className="grid grid-cols-1 gap-3">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-3 bg-gray-100 rounded-xl shadow hover:bg-blue-100 cursor-pointer transition"
            >
              <cat.icon className="w-5 h-5 text-blue-600" />
              <span className="font-medium">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="md:col-span-7">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full h-[450px] rounded-2xl"
        >
          <SwiperSlide>
            <img
              src="/poster.jpg"
              className="w-full h-full object-cover rounded-2xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/poster.jpg"
              className="w-full h-full object-cover rounded-2xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/poster.jpg"
              className="w-full h-full object-cover rounded-2xl"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="md:col-span-3">
        <h2 className="text-xl font-bold mb-4">Offer with Card Box</h2>
        <div className="grid grid-cols-1 gap-4">
          {[1, 2].map((offer) => (
            <div
              key={offer}
              className="p-4 bg-white rounded-2xl shadow hover:shadow-lg transition"
            >
              <img
                src="/poster.jpg"
                alt="offer"
                className="w-full h-28 object-cover rounded-xl mb-3"
              />
              <h3 className="text-base font-semibold mb-2">
                Special Offer {offer}
              </h3>
              <p className="text-gray-600 text-sm">
                Grab this amazing offer before it ends.
              </p>
              <button className="mt-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homeslider;
