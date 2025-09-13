import logo from "../assets/images/logoFooter.svg";
import { footerLinks } from "../data";
import fb from "../assets/images/fb.svg"
import tw from "../assets/images/tw.svg"
import pt from "../assets/images/pt.svg"
import ig from "../assets/images/ig.svg"
import yt from "../assets/images/yt.svg"

const Footer = () => {
    return (
        <div className="w-full bg-footer flex flex-col mt-[270px]">
            <div className="w-full xl:mt-[150px] mt-16 flex xl:flex-row flex-col xl:gap-0 gap-10 items-center justify-between xl:px-[310px] xl:pb-[200px] pl-5 pr-8 pb-10">
                <div className="flex flex-col gap-[10px]">
                    <span className="font-[200] text-[48px] max-w-[515px] text-justify uppercase">Get 20% discount on your first purchase</span>
                    <span className="text-link font-[200]">Just Sign Up / Register it now to become special member of our company</span>
                </div>
                <div className="flex flex-col gap-[14px] xl:w-[524px] w-full">
                    <input
                        type="text"
                        placeholder="Your email address"
                        className="w-full outline-none px-5 placeholder:text-placeholder placeholder:font-[200] text-dark bg-white rounded-[10px] h-[66px]"
                    />
                    <button
                        className="w-full uppercase bg-primary rounded-[10px] h-[66px] text-center cursor-pointer">
                        Register it now
                    </button>
                </div>
            </div>
            <div className="w-full xl:px-[160px] pl-5 pr-8 xl:pb-[70px] pb-10">
                <div className="w-full bg-line h-[1px]"></div>
            </div>
            <div className="w-full xl:px-[160px] pl-5 pr-8 flex xl:flex-row flex-col xl:gap-0 gap-16 items-start justify-between mb-[40px]">
                <div className="flex flex-col gap-[35px]">
                    <img src={logo} alt="logo" className="w-[258px] h-[114px]" />
                    <div className="flex items-center justify-between w-[258px]">
                        <img src={fb} alt="fb" className="w-[8px]" />
                        <img src={tw} alt="tw" className="w-[15px]" />
                        <img src={pt} alt="pt" className="w-[15px]" />
                        <img src={ig} alt="ig" className="w-[15px]" />
                        <img src={yt} alt="yt" className="w-[15px]" />
                    </div>
                </div>
                {footerLinks.map((link, index) => (
                    <div key={index} className="flex flex-col gap-[36px]">
                        <span>{link.title}</span>
                        <div className="flex flex-col gap-[5px]">
                            {link.items.map((item, idx) => (
                                <a key={idx} href={item.link} className="text-link">{item.title}</a>
                            ))}
                        </div>
                    </div>
                ))}
                <div className="flex flex-col gap-[36px]">
                    <span>Our newsletter</span>
                    <p className="text-link max-w-[340px]">
                        Subscribe to our newsletter to get updates about our grand offers.
                    </p>
                </div>
            </div>
            <div className="w-full bg-white/10 h-[1px]" />
            <div className="w-full flex xl:flex-row flex-col xl:gap-0 gap-3 items-center justify-between my-[45px] xl:px-[150px] pl-5 pr-8">
                <span className="text-link">© 2025 Classi Furnitures. All rights reserved.</span>
            </div>
        </div>
    )
}

export default Footer