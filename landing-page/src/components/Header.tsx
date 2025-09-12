import bg from "../assets/images/bg.png"
import logo from "../assets/images/logoHeader.svg"
import user from "../assets/images/user.svg"
import fav from "../assets/images/fav.svg"
import shop from "../assets/images/shop.svg"
import { navItems } from "../data"

const Header = () => {
  return (
    <div className="w-full h-screen bg-cover bg-top flex flex-col relative" style={{backgroundImage: `url(${bg})`}}>
        <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-[50]"></div>
        <div className="w-full h-[100px] flex items-center justify-between md:px-[64px] px-5 border-b border-white/40 z-[100]"> 
            <div className="flex items-center gap-[120px]">
                <img src={logo} alt="logo"  className="cursor-pointer w-[100px] h-[]44px"/>
                <div className="hidden md:flex items-center gap-[65px]">
                    {navItems.map((item,index) => (
                        <a key={index} href={item.link} className="font-bold text-[15px] uppercase border-b border-transparent hover:border-white">{item.title}</a>
                    ))}
                </div>
            </div>
            <div className="flex items-center md:gap-[]62px gap-5">
                <img src={user} alt="user" className="cursor-pointer" />
                <img src={fav} alt="user" className="cursor-pointer" />
                <img src={shop} alt="user" className="cursor-pointer" />
            </div>
        </div>
        <div className="w-full md:h-auto h-full flex flex-col items-center justify-center">
            <span className="uppercase font-bold md:text-[278px] text-[80px] mt-5 z-[100]">comfort</span>
            <span className="uppercase text-[21px] md:tracking-[5px] tracking-[3px] z-[100] font-[200] md:mt-[-50px]">Classi spells class & comfort</span>
            <button className="uppercase border-2 border-white rounder-[4px] cursor-poitner w-[175px] h-[56px] text-center md:mt-[80px] mt-[30px] z-[10 ]">shop now</button>
        </div>
    </div>
  )
}

export default Header