import React, { useLayoutEffect, useRef, useState } from "react";
import styles from "../../Assets/Styles/ImageSeccion.module.css";
import HereT from "../../Assets/Img/Titles/HereiswhatTB.png";

const Section = ({ Titulo, Blanco, Descripcion, Buton, img }) => {
  const [secondLineTop, setSecondLineTop] = useState(0);
  const [firstLineHeight, setFirstLineHeight] = useState(0);
  const firstLineRef = useRef(null);
  const secondLineRef = useRef(null);

  useLayoutEffect(() => {
    const firstLineHeight = firstLineRef.current.offsetHeight;
    const secondLineTop = secondLineRef.current.offsetTop;
    setFirstLineHeight(firstLineHeight);
    setSecondLineTop(secondLineTop);
  }, []);

  return (
    <section
      className={
        Blanco
          ? "flex flex-col items-center justify-center relative bg-white bg-cover bg-center h-screen"
          : "flex flex-col justify-center relative bg-[#002867] bg-cover bg-center h-full"
      }
    >
      {/* White line on x-axis to the left */}
      <div
        className={`w-px bg-[#F2F2F3] h-[34.8rem] absolute top-0 left-10 hidden sm:block md:block lg:block xl:block`}
      
      />
      <div className="absolute inset-0 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
      <div className="flex flex-wrap sm:flex-row items-center justify-center sm:items-start max-h-screen overflow-y-auto">
        <div
          ref={firstLineRef}
          className={
            Blanco
              ? "max-w-xl text-center md:text-left sm:text-left rtl:sm:text-right text-black sm:mx-auto sm:my-6 lg:mx-auto ml-7 lg:ml-12"
              : "max-w-xl text-center sm:text-left rtl:sm:text-right text-white sm:mx-auto sm:my-6 pl-4 md:ml-7 lg:ml-12 "
          }
        >
          <img src={Titulo} className=" sm:mt-12" alt="Section Image" />
          <p className="max-w-lg sm:text-xl/relaxed text-start">{Descripcion}</p>
          {Buton && (
            <div className="mt-8 flex flex-wrap gap-4 justify-center sm:justify-start">
              <a href="our-history" className="underline">
                Learn More
              </a>
              <span className="">&gt;</span>
            </div>
          )}
        </div>

        <div className="mt-8 lg:mt-16 lg:ml-auto lg:h-full">
          <img src={img} className={styles.imageShape} alt="Section Image" />
        </div>
      </div>

      {/* Second white line below the sections */}
      <div ref={secondLineRef} className="w-full  h-px bg-[#F2F2F3] mt-36 hidden sm:block md:block" />

      <div className="py-24 justify-center border-b-2 border-y-white">
        <img className="mx-auto my-auto" src={HereT} alt="Property" />
      </div>
    </section>
  );
};

export default Section;













