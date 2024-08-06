import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFlip, Pagination, Navigation, Autoplay } from "swiper/modules"; // Make sure to import Autoplay

const Education = () => {
  const educationData = [
    {
      period: "2020-2024",
      degree: "B.Sc. in CSE",
      institution: "International Islamic University Chittagong",
      cgpa: "CGPA: 3.61"
    },
    {
      period: "2017-2019",
      degree: "HSC in Science",
      institution: "Agrani Model School and College",
      cgpa: "GPA: 3.75"
    },
    {
      period: "2015-2017",
      degree: "SSC in Science",
      institution: "Gazipur Police Lines School",
      cgpa: "GPA: 5.00"
    }
  ];

  return (
    <>
      <h2 id="education" className="text-4xl text-center text-[#8a54f8] font-bold my-10 mb-20">
        My Education
      </h2>
      <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={{ clickable: true }}
        navigation={false}
        modules={[EffectFlip, Pagination, Navigation, Autoplay]} // Include Autoplay module
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper relative"
      >
        {educationData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="font-poppins p-8 bg-gradient-to-r from-[#321962] to-[#8a54f8] md:w-2/4 md:mx-auto rounded-lg text-left text-white shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-lg md:text-2xl mb-2">{item.period}</h2>
              <h3 className="text-xl md:text-3xl font-bold mb-2">{item.degree}</h3>
              <p className="text-sm md:text-lg mb-4">{item.institution}</p>
              <p className="text-sm md:text-xl mb-2">{item.cgpa}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-pagination-custom {
          position: absolute;
          bottom: 10px;
          width: 100%;
          text-align: center;
          z-index: 10;
        }
        .swiper-pagination-bullet {
          background: #8a54f8;
        }
        .swiper-button-next,
        .swiper-button-prev {
          display: none;
        }
      `}</style>
    </>
  );
};

export default Education;
