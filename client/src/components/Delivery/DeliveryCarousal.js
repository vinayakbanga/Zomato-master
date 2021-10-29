import React from "react";
import Slider from "react-slick";

//component
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import DeliveryFoodCategory from "./DeliveryFoodCategory";
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';
const DeliveryCarousal = () =>{

  const categories = [  
     {
       image:  
         "https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png",
       title: "biryani",  
     },
     {
       image:
         "https://b.zmtcdn.com/data/pictures/8/19505498/f11eba001141dd126ea122688677e7ee_o2_featured_v2.jpg?output-format=webp",
       title: "Dosama",
     },
     {
       image:
         "https://b.zmtcdn.com/data/homepage_dish_data/4/742929dcb631403d7c1c1efad2ca2700.png",
       title: "Chicken",
     },
     {
       image:
         "https://b.zmtcdn.com/data/dish_images/aebeb88b78a4a83ea9e727f234899bed1602781186.png",
       title: "Chaat",
     },
     {
       image:
         "https://b.zmtcdn.com/data/dish_images/770ba11e5159e6740d68f71f1b838a261612463246.png",
       title: "Cake",
     },
     {
       image:
         "https://b.zmtcdn.com/data/homepage_dish_data/4/eb2ef145c0fcad44dbb4ed26aad1527d.png",
       title: "Rolls",
     },
     {
       image:
         "https://b.zmtcdn.com/data/o2_assets/1251357e34c4293f762072ecdd7816a31632716606.png",
       title: "Noodels",
     },
   ];
   const settings = {
     arrows: true,
     infinite: true,
     speed: 500,
     slidesToShow: 4,
     slidesToScroll: 2,
     nextArrow: (
        <div>
          <div className='next-slick-arrow bg-black  bg-opacity-50 backdrop-filter text-sm rounded-full  absolute'>
            <BiChevronRight/>
          </div>
        </div>
      ),
      prevArrow: (
        <div>
          <div className='prev-slick-arrow bg-black bg-opacity-50 backdrop-filter rounded-full  text-sm absolute'>
            <BiChevronLeft/>
          </div>
        </div>
      ),
     responsive:[
       {
         breakpoint: 1299,
         settings:{
           slidesToShow:5,
           nextArrow: (
            <div>
              <div className='next-slick-arrow bg-black  bg-opacity-50 backdrop-filter text-sm rounded-full  absolute'>
                <BiChevronRight/>
              </div>
            </div>
          ),
          prevArrow: (
            <div>
              <div className='prev-slick-arrow bg-black bg-opacity-50 backdrop-filter rounded-full  text-sm absolute'>
                <BiChevronLeft/>
              </div>
            </div>
          )
         },
       },
     ],
   };



  return (  
    <>
    <h1 className="text-4xl pb-4 mb-12 mx-8 sm:text-sm sm:mb-2 text-bold text-left">
        Inspiration for your first order
      </h1>
      <div className="flex flex-col m-2 p-2 w-full h-full  gap-24">
            <div className="lg:hidden flex gap-1 lg:gap-0 flex-wrap justify-center">
             {categories.map((food) => (
             <DeliveryFoodCategory {...food} /> ))}
            </div>

           <div className="hidden lg:block">
             <Slider {...settings}>
             {categories.map((food) => (
             <DeliveryFoodCategory {...food} />))}
             </Slider>
           </div>

      <div className="hidden lg:block">
        <Slider {...settings}>
          {categories.map((food) => (
            <DeliveryFoodCategory {...food} />
          ))}
        </Slider>
      </div>

      <div className="hidden lg:block">
        <Slider {...settings}>
          {categories.map((food) => (
            <DeliveryFoodCategory {...food} />
          ))}
        </Slider>
      </div>
      </div>
     
    </>
  );
};

export default DeliveryCarousal;