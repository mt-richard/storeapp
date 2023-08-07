import Category from "../components/category";
import Product from "../components/product";

const Home = () => {
    return ( 
        <div>
            {/* home banner */}
            <div className="md:flex md:gap-10 xl:gap-20 justify-center items-center  pt-32 pb-10 md:pt-52 px-10 md:px-10 lg:px-40 xl:px-80">
                <div className="md:w-1/2">
                    <img src="./images/organic-products-hero.png" alt="imagebanner"  className="w-full"/>
                </div>
                <div className="content py-10 md:w-1/2">
                    <img src="./images/logo-leaf-new.png" alt="leaflogo"  />
                    <div className="py-5 w">
                        <h4 className="font-semibold py-5">Best Quality Products</h4>
                        <h1 className="homeh1 font-black text-6xl py-5">Join The Organic Movement!</h1>
                        <p className="font-light text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    <button className="bg-primary px-10 py-3 uppercase text-white rounded flex gap-5" type="button"><img src="./icons/icons8-cart-64.png" alt="icon" className="w-5"></img> Shop Now</button>
                </div>
            </div>

            {/* dark menu */}
            <div className="md:grid grid-cols-2 lg:flex md:gap-10 justify-center items-center py-10 px-10 md:px-5 lg:px-10 xl:px-40 bg-test">
                <div className="md:w-[100%] lg:w-1/4 xl:w-96 mb-2 md:mb-0 flex gap-5 bg-gray1 px-5 py-5 md:py-10 rounded">
                    <div>
                        <img src="./icons/icons8-shipping-50.png" alt="Logo" />
                    </div>
                    <div>
                        <h2 className="text-white font-bold pb-3">Free Shipping</h2>
                        <p className="font-light text-gray-300">Above $5 Only</p>
                    </div>
                </div>

                <div className="md:w-[100%] lg:w-1/4 xl:w-96 mb-2 md:mb-0 flex gap-5 bg-gray1 px-5 py-5 md:py-10 rounded">
                    <div>
                        <img src="./icons/icons8-contacts-48.png" alt="Logo" />
                    </div>
                    <div>
                        <h2 className="text-white font-bold pb-3">Certified Organic</h2>
                        <p className="font-light text-gray-300">100% Guarantee</p>
                    </div>
                </div>

                <div className="md:w-[100%] lg:w-1/4 xl:w-96 mb-2 md:mb-0 flex gap-5 bg-gray1 px-5 py-5 md:py-10 rounded">
                    <div>
                        <img src="./icons/icons8-saving-64.png" alt="Logo" />
                    </div>
                    <div>
                        <h2 className="text-white font-bold pb-3">Huge Savings</h2>
                        <p className="font-light text-gray-300">At Lowest Price</p>
                    </div>
                </div>

                <div className="md:w-[100%] lg:w-1/4 xl:w-96 mb-2 md:mb-0 flex gap-5 bg-gray1 px-5 py-5 md:py-10 rounded">
                    <div>
                        <img src="./icons/icons8-recycle-48.png" alt="Logo" className="" />
                    </div>
                    <div>
                        <h2 className="text-white font-bold pb-3">Easy Returns</h2>
                        <p className="font-light text-gray-300">No Questions Asked</p>
                    </div>
                </div>
            </div>

            {/* Best Selling Products */}
            <div className="items-center py-10 px-10 md:px-5 lg:px-10 xl:px-60 bg-white">
                <div className="flex justify-center ">
                         <h2 className="font-black text-4xl">Best selling products</h2>
                </div>
                <div className="flex justify-center py-10">
                    <img src="./images/logo-leaf-new.png" alt="" />
                </div>
                <div className="products md:flex md:gap-5 lg:gap-7 xl:gap-10">
                    <Product image={"./images/coffee-asorted-300x300.jpg"} category={"Groceries"} title={"Assorted Coffee"} price={"£35.00"}/>
                    <Product image={"./images/sanitizer-300x300.jpg"} category={"Groceries"} title={"Hand Sanitizer"} price={"£14.00"}/>
                    <Product image={"./images/red-chillies-300x300.jpg"} category={"Groceries"} title={"Handpicked Red Chillies"} price={"£19.00"}/>
                    <Product image={"./images/edible-oil-300x300.jpg"} category={"Groceries"} title={"Natural Extracted Edible Oil"} price={"£25.00"} open={true}/>

                </div>
            </div>

            {/* get Discount */}
            <div className="relative z-1 bg-gray-200 py-10 lg:px-20 xl:px-60">
                <div className="absolute flex justify-center bg-white w-full top-0 left-0 py-3 ">
                    <div className="absolute  absolute top-0">
                        <img src="./images/basil-leaf.png" alt="" className="w-36"/>
                    </div>
                </div>
                
                <div className="flex justify-center ">
                    <div className="md:flex xl:gap-10 w-full px-5 pb-5 pt-20">
                        <Category title={"Farm Fresh Fruits"} desc={"Ut sollicitudin quam vel purus tempus, vel eleifend felis varius."} image={"./images/lemon-1.jpg"}/>
                        <Category title={"Fresh Vegetables"} desc={"Aliquam porta justo nibh, id laoreet sapien sodales vitae justo."} image={'./images/cabbage.jpeg'}/>
                        <Category title={"Orhanic Legume"} desc={"Phasellus sed urna mattis, viverra libero sed, aliquam est."} image={'./images/legume.jpeg'}/>
                    </div>
                </div>

                
            </div>
            <div className="w-full bg-test py-10 md:flex justify-between md:px-10 lg:px-40 xl:px-60">
                    <div className="flex  justify-center mb-4 md:mb-0">
                        <h3 className="text-2xl md:text-4xl text-white font-black">Get 25% Off On Your First Purchase!</h3>
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-primary px-10 py-3 uppercase text-white rounded flex gap-5" type="button"><img src="./icons/icons8-cart-64.png" alt="icon" className="w-5"></img> Shop Now</button>
                    </div>
                    
                </div>
                <div className="bg-white flex justify-center py-10">
                    <h2 className="text-2xl font-bold">Try It For Free. No Registration Needed.</h2>

                </div>

        </div>
     );
}
 
export default Home;