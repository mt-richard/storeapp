const Review = () => {
    return ( 
        <div className="  bg-white shadow shadow-2xl rounded p-5 flex justify-center flex-col mb-3 ">
            <div className="flex justify-center">
                <img src="./icons/icons8-star-filled-48.png" alt="" className="w-5 h-5" />
                <img src="./icons/icons8-star-filled-48.png" alt="" className="w-5 h-5" />
                <img src="./icons/icons8-star-filled-48.png" alt="" className="w-5 h-5" />
                <img src="./icons/icons8-star-filled-48.png" alt="" className="w-5 h-5" />
                <img src="./icons/icons8-star-filled-48.png" alt="" className="w-5 h-5" />
            </div>
            <div className="">
                <p className="py-5 leading-9 font-light">Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <div className="flex justify-center items-center gap-6 py-5">
                    <div className="flex justify-center items-center bg-gray-200 rounded-full w-14 h-14">
                        <img src="./icons/person.svg" alt="" className="w-10 h-10 object-contain" />
                    </div>
                    <div>
                        <span>Mila Kunis</span>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Review;