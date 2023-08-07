import { useSelector, useDispatch } from "react-redux";
import { openNav,closeNav } from "../redux/reducers/navSlice";
import React, { useEffect } from 'react';


const Header = () => {
    const dispatch = useDispatch()
    const {isOpen} = useSelector((state) => state.nav)

    const handleNav =()=>{
        dispatch(openNav())
    }
    const handleNavClose =()=>{
        dispatch(closeNav())
    }

    useEffect(() => {
        const handleScroll = (e) => {
          if (isOpen) {
            e.preventDefault();
          }
        };
    
        if (isOpen) {
          window.addEventListener('scroll', handleScroll);
        } else {
          window.removeEventListener('scroll', handleScroll);
        }
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [isOpen]);
      

    return ( 
        <div>
            <div className="fixed z-10 flex w-full md:px-10 py-3 bg-white shadow ">
                <div className="md:flex md:gap-5 lg:gap-10 xl:gap-10 items-center px-5">
                    <img src='./images/organic-store-logo5.svg' alt="Logo"/>
                </div>

                <div className="w-full flex md:flex justify-between gap-5 items-center font-light">
                    <div>
                        <ul className="hidden md:flex md:gap-5 lg:gap-10 xl:gap-10 font-light justify-center">
                            <li className="hover:text-primary"><a href="/everything">Everything</a></li>
                            <li className="hover:text-primary"><a href="/groceries">Groceries</a></li>
                            <li className="hover:text-primary"><a href="/juice">Juice</a></li>
                        </ul>
                    </div>
                    <div className="flex justify-between items-center md:mb-0 mb-6">
                        <ul className=" md:flex gap-5">
                                <li className="hidden md:block hover:text-primary"><a href="/about">About</a></li>
                                <li className="hidden md:block hover:text-primary"><a href="/contact">Contact</a></li>
                       

                            <li className="hover:text-primary absolute md:relative right-24 md:right-0"><a href="/#" className="flex gap-5 font-bold"><span className="text-primary">$0.00</span><img src='./icons/icons8-cart-66.png' alt="cart Icon" className="w-6" /></a></li>
                            <li className="hover:text-primary hidden md:block"><a href="/#"><img src='./icons/person.svg' alt="User Icon" className="w-6" /></a></li>
                            <li><button onClick={handleNav} className=" md:hidden bg-primary rounded text-white p-1 md:relative absolute right-5"><img src="./icons/icons8-menu-24.png" alt="Menu" /></button></li>
                        </ul>

                    </div>
                    
                </div>
            </div>

            {/* Nav Menu on Mobile view */}
            {isOpen && 
            <div className="">
                <div className="fixed w-full top-0 h-[100%] bg-test absolute z-1 opacity-90"> 

                </div>
                <div className="fixed z-10 absolute border border-test bg-white w-[300px] h-[100%] top-0 right-0">
                    <div className="w-full text-right p-5">
                    <button onClick={handleNavClose} className="cursor-pointer rounded-full p-2 text-3xl right-5 abosulte text-right w-full">&times;</button>
                    </div>
                    <ul className="font-light justify-center py-5">
                            <li className="hover:text-primary py-5 shadow px-8"><span className="hover:text-primary md:block"><a href="/#"><img src='./icons/person.svg' alt="User Icon" className="w-6" /></a></span></li>
                            <li className="hover:text-primary py-5 shadow px-8"><a href="/everything">Everything</a></li>
                            <li className="hover:text-primary py-5 shadow px-8"><a href="/groceries">Groceries</a></li>
                            <li className="hover:text-primary py-5 shadow px-8"><a href="/juice">Juice</a></li>
                            <li className="hover:text-primary py-5 shadow px-8"><a href="/about">About</a></li>
                            <li className="hover:text-primary py-5 shadow px-8"><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            </div>
            }
        </div>
     );
}
 
export default Header;