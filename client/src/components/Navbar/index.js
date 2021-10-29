import React from "react";
import { FaPizzaSlice } from "react-icons/fa";
import {TiLocation } from "react-icons/ti"
const NavSm = () =>{
  return (
<>
  <div className=" flex items-center justify-between  p-3   shadow-md w-full  md:hidden">
         <div className="w-36 p-1 m-1">
                <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" 
                     alt="logo"
                     className= "w-full h-full"/>  
          </div>      
     <div className="flex items-center p-3   gap-3">
              <button className=" bg-zomato-400 text-white py-2 px-3 rounded-full w-45">
                      Use App
              </button>
               <span className="border p-2 text-xl border-blue-300 text-blue-400 rounded-full bg-blue-50">
                    <FaPizzaSlice/>  
               </span>
     </div>  
  </div>
</>
)}  ;
const NavMd = () =>{
 return (
<>
   <div className="px-20  items-center justify-between w-full hidden lg:hidden md:flex ">
         <div className="w-28">
                <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" 
                     alt="logo"
                     className= "w-full h-full"
                />  
          </div>      
         <div className="flex items-center gap-8 mx-3  text-xl text-gray-500">
              <a href="#"> Login </a>
              <a href="#"> Sign up </a>
         </div>  
   </div>
</>
);
}

const NavLg = () => {
   return (  
       <>
  <div className="px-20  gap-4 items-center justify-between w-full hidden lg:flex ">
         <div className="w-36">
                <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" 
                     alt="logo"
                     className= "w-full h-full"/>  
          </div> 
          <div className=" container border-1  flex w-3/5 rounded-2xl shadow-lg">
               <div className="flex w-full " >
               <TiLocation className=" w-9 justify-center align-center m-5  h-8 text-red-400 "/>
                  <select className="p-6 h-full w-full text-lg text-gray-400 focus:outline-none  " >   
                         
                           <option className="" value="volvo">Ywca, 1, Ashoka Rd, Hanu</option>
                           <option value="saab">Saab</option>
                           <option value="opel">Opel</option>
                           <option value="audi">Audi</option>
                        </select>
                </div>
                 <div className=" flex items-center bg-white w-full h-full p-6  ">
        <input type="search" className="w-full focus:outline-none text-lg text-gray-500" placeholder="Search for restaurant, cuisine or a dish" />
       </div>
          </div> 

         <div className="flex items-center gap-5 text-xl text-gray-500">
              <a href="#"> Login </a>
              <a href="#"> Sign up </a>
              
         </div>  
  </div>
       </>
   )
} 
const Navbar = () => {
 return (  

     <> 
        <nav className="p-4  flex bg-white  items-center">
          <NavSm/> 
            <NavMd/>
            <NavLg/> 
   </nav>
     </>    
 )  
};
export default Navbar;