import React, { useState, useEffect } from "react";
import onlinejudge from "../assets/onlinejudge.png";
import jobit from "../assets/jobit.png";
import razorpay from "../assets/razorpay.png";
import carrent from "../assets/carrent.png";
import codolio from "../assets/codolio.png";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [onlinejudge, codolio, carrent, jobit, razorpay]; // Add more slides if needed

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  // Auto slide functionality every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [slides.length]); // Dependency array ensures interval restarts when slides change

  return (
    <div
      id="default-carousel"
      className="relative w-full h-96 md:h-96 overflow-hidden rounded-lg"
      data-carousel="slide"
      style={{ maxWidth: "1000px", margin: "0 auto" }} // Adjust max-width as needed
    >
      {/* Carousel wrapper */}
      <div className="relative h-full flex">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`w-full h-full flex-shrink-0 ${
              index === currentSlide ? "block" : "hidden"
            }`}
            data-carousel-item
          >
            <img
              src={slide}
              className="block w-full h-full object-contain rounded-lg"
              style={{ objectFit: "contain " }} // Ensure images fit uniformly
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      {/* Slider controls */}
      {/* <button
        type="button"
        className="absolute top-0 left-1/4 -translate-x-2/4 -ml-10 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-1/4 -translate-x-2/4 mr-10 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button> */}
      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-gray-400"
            }`}
            aria-current={index === currentSlide}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
