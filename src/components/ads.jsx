const Ads = () => {
    return ( 
        <div className="relative w-full md:h-[450px] h-96 rounded bg-gray-600 hover:bg-gray-900 p-5 mb-3">
            <div className="flex flex-col justify-center items-center py-5">
                <h2 className="text-white font-bold text-4xl homeh1 text-center py-1">Deal Of The Day 15% </h2>
                <h2 className="text-white font-bold text-4xl homeh1 text-center py-1">Off On All !</h2>
                <h2 className="text-white font-bold text-4xl homeh1 text-center py-1">Vegetables!</h2>
            </div>
            <div>
                <p className="py-2 md:py-5 text-center text-gray-300 font-light text-[20px]">I am text block. Click edit button to change this tex em ips.</p>
            </div>
            <div className="flex justify-center">
                <button className="absolute bottom-5 bg-primary px-10 py-2 md:py-3 uppercase text-white rounded flex gap-5" type="button"><img src="./icons/icons8-cart-64.png" alt="icon" className="w-5"></img> Shop Now</button>
            </div>
        </div>
     );
}
 
export default Ads;