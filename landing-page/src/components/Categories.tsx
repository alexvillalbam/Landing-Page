import { categories } from "../data"

const Categories = () => {
  return (
    <div className="w-full flex flex-col xl:px-[120px] pl-5 pr-8 xl:gap-[80px] gap-10">
        {[0,2].map((startIndex) => (
            <div key={startIndex} className="w-full flex xl:flex-row flex-col items-center xl:gap-[80px] gap-10">
                {categories.slice(startIndex, startIndex + 2).map(({image,label,width},index) => <div key={index} className={`relative ${width} w-full xl:h-[760px]`}>
                    <img src={image} alt={label} className="w-full h-full" />
                    <div className="absolute xl:bottom-[93px] bottom-10 xl:left-[110px]left-5 font-bold text-[32px] uppercase">
                        {label}
                    </div>
                </div> )}
                </div>
        ))}
    </div>
  )
}

export default Categories