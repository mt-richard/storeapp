const Category = ({title, desc, image}) => {
    return (
        <div className="md:w-1/3 bg-white rounded px-10 pt-10 mb-2 md:mb-0">
            <div className="text-center">
                <h2 className="text-2xl font-black pb-2">{title}</h2>
                <p className="text-gray-600  text-[18px] font-light ">{desc}</p>
            </div>
            <div className="flex justify-between items-center">
                <div>
                  <button className="bg-primary rounded px-10 py-3 uppercase  text-white relative">shop now</button>
                </div>
                <div>
                    <img src={image} alt="" className="w-32 h-24 object-contain"/>
                </div>
            </div>
        </div>
      );
}
 
export default Category;