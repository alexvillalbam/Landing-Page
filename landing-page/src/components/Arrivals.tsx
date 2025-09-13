import { arrivals } from "../data"

const Arrivals = () => {
  return (
    <div className="w-full flex flex-col gap-[50px] xl:px-[120px] pl-5 pr-8">
        <span className="text-dark font-[300] text-[35px]">New Arrivals</span>
        <div className="w-full flex xl:flex-row flex-col items-center justify-between gap-[100px]">
            {arrivals.map((item,index) => (
                <div key={index} className="flex flex-col gap-[45px]">
                    <img src={item.image} alt={item.title} />
                    <div className="w-full flex items-center justify-between">
                        <span className="text-dark font-[300] text-[24px]">{item.title}</span>
                        <span className="text-light font-[300] text-[24px]">{item.price}</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Arrivals