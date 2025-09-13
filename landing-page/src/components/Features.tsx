import { features } from "../data"

const Features = () => {
  return (
    <div className="w-full flex xl:flex-row xl:items-center justify-between xl:gap-[100px] gap-20 xl:px-[175px] px-5 xl:my-[150px] my-20">
        {features.map((feature,index) =>(
            <div key={index} className="flex flex-col gap-[35px]">
                <img src={feature.icon} alt={feature.title} className="w-[35px]" />
                <div className="flex flex-col gap-[15px]">
                    <h3 className="font-bold text-dark text-[21px]">{feature.title}</h3>
                    <p className="text-light font-[300] xl:max-w-[80%] leading-[28px]">{feature.description}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Features