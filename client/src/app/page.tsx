
import Image from "next/image";
import Working from "@/Components/Working";
import Services from "@/Components/Services";
import Testimonials from "@/Components/Testimonials";
import Footer from "@/Components/Footer";
export default function Home() {
  return (
    <div className=" relative h-[100vh] " >
      <img className=" h-[100vh] absolute z-10 w-screen " src="bgtwo.jpg" alt="photo" ></img>
      <div className="z-20 h-[100vh] flex flex-col items-center justify-center relative text-white  " >
        <h1 className=" mb-[60px] text-5xl font-bold text-center text-white pt-20" >Crack Happens. We’ll Take Care of It.</h1>
        <p className=" w-[60%] text-center text-[#f7f7fc] mt-4" >Get fast, reliable, and professional doorstep repair services for mobiles, laptops, tablets, TVs, and more. Book a certified technician to your home today — easy booking, affordable pricing, and trusted service you can rely on.</p>
        <div className=" flex justify-center items-center mt-10" >
        <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Book a Repair</button>
        <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Get your Quote</button>
        </div>
      </div>
      <div className=" h-auto" >
        
      <Services/>
      </div>
      

      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        How it works
      </h2>
      
      <Working />

      <h2 className="max-w-7xl pl-4 mx-auto text-xl mt-[30px] md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        What people say about us
      </h2>
      
      
      <Testimonials/>

      <Footer/>
    </div>
  );
}
