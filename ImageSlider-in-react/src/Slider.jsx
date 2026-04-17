import  { useState, useEffect } from "react";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";

function Slider() {
  const [index, setIndex] = useState(0);
  const data = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3  },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => {
        if (prev === data.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    },4000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    if (index === 0) {
      setIndex(data.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const nextSlide = () => {
    if (index === data.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <div>
      <h1 className="text-center text-4xl text-sky-500 mb-4">
        Image Slider
      </h1>

      <div className="w-[600px] mx-auto text-center">
        <img
          src={data[index].img}
          alt=""
          className="w-full h-[350px] object-cover rounded"
        />

        <h3 className="mt-2">{data[index].text}</h3>

        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={prevSlide}
            className="px-4 py-2 bg-sky-400 rounded"
          >
            Prev
          </button>

          <button
            onClick={nextSlide}
            className="px-4 py-2 bg-sky-400 rounded"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slider;