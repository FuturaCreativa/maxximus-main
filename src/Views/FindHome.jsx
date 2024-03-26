import React from "react";
import { FaBath, FaBed } from "react-icons/fa";
import { TbBrandWindows } from "react-icons/tb";
import Footer from "../Components/Common/Fotter";
import Vector from "../Assets/Img/Vector.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const FindHome = () => {
  const arrayCard = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
<section className="bg-[url(./Assets/Img/banner1.png)] h-screen bg-cover bg-no-repeat flex flex-col items-center justify-center">
  <div className="text-center text-white mb-8">
    <h1 className="text-4xl font-bold">Find a Home</h1>
  </div>
  <div className="w-full text-white">
    <form className="flex flex-col sm:flex-row items-center justify-center">
      <select className="outline-none select select-bordered w-5/6 max-w-sm pl-4 py-4 sm:py-8 rounded-md text-center focus:outline-none bg-[#14253E] opacity-65  mb-4 sm:mb-0 sm:rounded-s-4xl">
        <option disabled selected>
          Type of house
        </option>
        <option>Han Solo</option>
        <option>Greedo</option>
      </select>
      <select className="outline-none select select-bordered w-5/6 max-w-sm pl-4 py-4 sm:py-8 rounded-md text-center focus:outline-none bg-[#14253E] opacity-65 mb-4 sm:mb-0">
      <option disabled selected>
        Range
      </option>
      <option>Han Solo</option>
      <option>Greedo</option>
    </select>


      <div className="w-full max-w-lg flex flex-col sm:flex-row items-center">
      <input type="search" name="search" placeholder="City, Neighborhood, ZIP, Address" className="bg-[#14253E] opacity-65 w-5/6 sm:w-full pl-4 py-4 sm:py-8 sm:rounded-r-4xl focus:outline-none mb-4 sm:mb-0 rounded-full"/>  
         <button type="submit" className="w-5/6 sm:w-auto px-16 py-4 sm:py-8 rounded-l-none sm:rounded-l-4xl rounded-4xl sm:rounded-4xl bg-[#0A182E] text-white">
                    Search
                  </button>
                </div>
              </form>
            </div>
          </section>




      <section className="bg-[#0A182E] text-white h-full">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center py-20">
            Featured Properties
          </h2>
          {/* Card Component Bordered with Image, Price, Content and Details */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-20 sm:mx-auto">
            {arrayCard.map(() => {
              return (
                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mt-10 border border-white">
                <img
                    className="w-full"
                    src="https://arquitectopablorestrepo.com/wp-content/uploads/2022/03/Dise%C3%B1o-casa-familiar-el-bambu-3-800x600.jpg"
                    alt="Sunset in the mountains"
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-black">
                      $1,000,000
                    </div>
                    <p className="text-gray-700 text-base">
                      Lorem ipsum dolor
                      <br />
                      consectetur adipisicin.
                    </p>
                  </div>
                  <div className="grid grid-cols-3 py-6 px-4">
                    <div className="text-black items-center grid grid-cols-2 justify-self-center">
                      <FaBed className="text-black text-2xl" />
                      <p className="text-md">3</p>
                      Beds
                    </div>
                    <div className="text-black items-center grid grid-cols-2 justify-self-center">
                      <FaBath className="text-black text-2xl pb-1" />
                      <p className="text-md">3</p>
                      Baths
                    </div>
                    <div className="text-black items-center grid grid-cols-2 justify-self-center">
                      <TbBrandWindows className="text-black text-2xl justify-self-center" />
                      <p className="text-sm">5,821sqtf</p>
                      <p className="text-sm min-w-max pl-5">(on 0.62 acres)</p>
                    </div>
                    
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default FindHome;