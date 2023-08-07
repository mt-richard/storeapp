const Product = ({title, category, price, image, open}) => {
    return (  
        <div className="relative z-0 sm:w-full md:w-1/3 xl:w-1/4 rounded py-2 px-2">
                        <div className="w-full">
                            <img src={image} alt="" className="w-full" />
                        </div>
                        <div className="w-full text-center py-2 flex justify-center flex-col">
                            <span className="text-gray1 font-light py-1">{category}</span>
                            <h4 className="font-semibold">{title}</h4>
                            <div className="flex gap-1 justify-center p-2">
                                <img src="./icons/icons8-star-50.png" alt="" className="w-3"/>
                                <img src="./icons/icons8-star-50.png" alt="" className="w-3"/>
                                <img src="./icons/icons8-star-50.png" alt="" className="w-3"/>
                                <img src="./icons/icons8-star-50.png" alt="" className="w-3"/>
                                <img src="./icons/icons8-star-50.png" alt="" className="w-3"/>
                            </div>
                            <span className="font-bold">{price}</span>
                        </div>

                        {open && <div className="absolute top-0 right-[0] rounded-full w-10 h-10 bg-primary flex justify-center items-center">
                            <span className="text-[13px] font-[500]">Sale</span>
                        </div>}
                        
                    </div>
    );
}
 
export default Product;