import React from 'react';
import BgImg from "../../Assets/Img/MissionBg.png"

const SectionOur2 = ({ Titulo, Descripcion, SubTitulo, SubDescripcion }) => {
  return (
    <div className="relative my-0 min-h-screen flex items-center justify-center lg:h-[65rem]">
      <div className="absolute inset-0 bg-center bg-cover" />
      <img className='absolute object-cover w-full h-full' src={BgImg}></img>
      <div className="absolute inset-0 bg-[#08172F] opacity-70" />
      <div className="absolute inset-0 flex items-center justify-center text-center text-white">
        <div className="container mx-auto px-6">
          <div className="lg:flex justify-between items-center">
            <div className="lg:w-6/12 p-4 md:p-7 mx-auto">
              <div className="flex flex-col items-center justify-center mb-6 sm:mb-12">
                <img src={Titulo} className="mx-auto my-auto" alt="Section Image"/>
                <p className="text-ls lg:text-xl font-Poppins  mb-4">{Descripcion}</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img src={SubTitulo} className="mx-auto my-auto" alt="Section Image"/>
                <p className="text-ls lg:text-xl font-Poppins  mb-4">{SubDescripcion}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionOur2;












