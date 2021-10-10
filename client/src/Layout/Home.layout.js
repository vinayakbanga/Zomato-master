import React from "react";

//components
import Navbar from "../components/Navbar";

const HomeLayout =(props)=>{
    return <>
        
    <div className="container mx-auto px-4 lg:px-20">
    <Navbar />

    {props.children}
    </div>
    </>
};
export default HomeLayout;