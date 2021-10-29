import React from "react";

const DeliverySm= ({image,title}) => {
  return (
    <>
      <div className="lg:hidden bg-white shadow rounded-md w-24  md:w-56">
        <div className="w-full h-24   m-1">
          <img
            src={image}
            alt="food"
            className=" h-36 w-44 object-cover "
          />
        </div>
        <div >
          <h3 className="pt-12  text-sm my-1 text-center font-smbold">{title}</h3>
        </div>
      </div>
    </>
  );
};  

const DeliveryLg = ({image,title}) => {
  return (
    <>
      <div className="hidden lg:block w-full h-full px-9">
        <div className="w-full h-full">
          <img
            src={image}
            alt="food"
            className="w-full h-full object-cover rounded-md shadow-lg"
          />
        </div>
        <div>
          <h3 className="text-xl my-1 font-medium text-black">{title}</h3>
        </div>
      </div>
    </>
  );
};

const DeliveryFoodCategory = (props) =>{
  return(
    <>
    <DeliverySm {...props}  />
    <DeliveryLg {...props}/>
    </>
  )
}

export default DeliveryFoodCategory;