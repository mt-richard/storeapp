const Footer = () => {
    return ( 
        <div>
            <div className="bottom-0 bg-secondary md:flex justify-center py-16 px-10 md:px-20 lg:px-40 xl:px-60 gap-10 border-b border-gray">
                <div className="md:w-1/2">
                    <img src="./images/organic-store-white-logo.png" alt="logo" />
                    <p className="text-gray leading-8 text-left font-light py-10">
                    Maecenas mi justo, interdum at consectetur vel, tristique et arcu. Ut quis eros blandit, ultrices diam in, elementum ex. Suspendisse quis faucibus urna. Suspendisse pellentesque.
                    </p>
                </div>

                <div className="md:w-1/3">
                    <div className="pb-5">
                        <h2 className="text-2xl font-bold text-white pb-5">Quicklinks</h2>
                        <ul>
                            <li className="text-gray font-light leading-6 hover:text-primary"><a href="/">About</a></li>
                            <li className="text-gray font-light leading-6 hover:text-primary"><a href="/">Cart</a></li>
                            <li className="text-gray font-light leading-6 hover:text-primary"><a href="/">Checkout</a></li>
                            <li className="text-gray font-light leading-6 hover:text-primary"><a href="/">Contact</a></li>
                            <li className="text-gray font-light leading-6 hover:text-primary"><a href="/">Home</a></li>
                            <li className="text-gray font-light leading-6 hover:text-primary"><a href="/">My account</a></li>
                            <li className="text-gray font-light leading-6 hover:text-primary"><a href="/">Shop</a></li>
                        </ul>
                    </div>
                    <div className="pb-5">
                        <h2 className="text-2xl font-bold text-white pb-5">Site Links</h2>
                        <ul>
                            <li className="text-gray font-light leading-6 hover:text-primary"><a href="/">Privacy Policy</a></li>
                            <li className="text-gray font-light leading-6 hover:text-primary"><a href="/">Shipping Details</a></li>
                            <li className="text-gray font-light leading-6 hover:text-primary"><a href="/">Offers Coupons</a></li>
                            <li className="text-gray font-light leading-6 hover:text-primary"><a href="/">Terms & Conditions</a></li>
                        </ul>
                    </div>
                    
                </div>

                <div className="md:w-1/3">
                    <div className="pb-5">
                        <h2 className="text-2xl font-bold text-white pb-5">Download Our Mobile App</h2>
                        <p className="text-gray leading-8 text-left font-light py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam gravida sollicitudin. Praesent porta enim mi, non tincidunt libero interdum sit amet.</p>
                    </div>
                    <div className="pb-5">
                        <h2 className="text-2xl font-bold text-white pb-5">Quick Links</h2>
                        <ul className="text-primary">
                            <li className="font-light leading-6">Know More About Us</li>
                            <li className="font-light leading-6">Visit Store</li>
                            <li className="font-light leading-6">Let’s Connect</li>
                            <li className="font-light leading-6">Locate Stores</li>
                        </ul>
                    </div>
                    <div className="flex gap-10">
                        <img src="./icons/play-store.png" alt="" className="w-32"/>
                        <img src="./icons/app-store.png" alt="" className="w-32"/>
                    </div>
                    
                </div>

            </div>
            <div className="flex justify-center justify-between bg-secondary py-10 px-10 md:px-20 lg:px-40 xl:px-60">
                <p className="text-gray font-light leading-6">Copyright © 2023 | Organic Store</p>
                <div>
                    <ul className="flex gap-1 md:gap-5">
                        <li><img src="./icons/icons8-pinterest-50.png" alt="" className="w-6" /></li>
                        <li><img src="./icons/icons8-facebook-50.png" alt="" className="w-6" /></li>
                        <li><img src="./icons/icons8-instagram-50.png" alt="" className="w-6" /></li>
                        <li><img src="./icons/icons8-twitter-50.png" alt="" className="w-6" /></li>
                    </ul>
                </div>

            </div>
        </div>
     );
}
 
export default Footer;