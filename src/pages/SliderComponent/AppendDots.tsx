import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./appendDots.scss";
import q from "../../assets/images/Frame 8619.png";
import image55 from "../../assets/images/image 55 (1).png"
import { Link } from "react-router-dom";

function AppendDots() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="relative w-full box-border ">
            <Slider {...settings}>
                <div className="flex justify-center items-center max-w-full overflow-hidden ">
                    <div className="flex w-[815px] h-[465spx] rounded-[15px] mx-auto flex-col">
                        <h1 className="text-[22px] text-[#303030] mb-[8px] font-roboto font-bold">
                            Printify Blog
                        </h1>
                        <hr className="w-full h-1 mb-[24px]" />
                        <img src={q} alt="Person 1" className="w-full h-[315px] object-cover" />
                        <Link to="/" className="underline text-[#046508]  font-roboto font-regular text-[16px] mt-[24px]">See more</Link>
                    </div>
                </div>

                <div className="flex justify-center items-center max-w-full overflow-hidden ">
                    <div className="flex w-[815px] h-[465spx] rounded-[15px] mx-auto flex-col">
                        <h1 className="text-[22px] text-[#303030] mb-[8px] font-roboto font-bold">
                            Printify Blog
                        </h1>
                        <hr className="w-full h-1 mb-[24px]" />
                        <img src={image55} alt="Person 1" className="w-full h-[315px] object-cover" />
                        <Link to="/" className="underline text-[#046508]  font-roboto font-regular text-[16px] mt-[24px]">See more</Link>
                    </div>
                </div>
                <div className="flex justify-center items-center max-w-full overflow-hidden ">
                    <div className="flex w-[815px] h-[465spx] rounded-[15px] mx-auto flex-col">
                        <h1 className="text-[22px] text-[#303030] mb-[8px] font-roboto font-bold">
                            Printify Blog
                        </h1>
                        <hr className="w-full h-1 mb-[24px]" />
                        <img src={q} alt="Person 1" className="w-full h-[315px] object-cover" />
                        <Link to="/" className="underline text-[#046508]  font-roboto font-regular text-[16px] mt-[24px]">See more</Link>
                    </div>
                </div>
                <div className="flex justify-center items-center max-w-full overflow-hidden ">
                    <div className="flex w-[815px] h-[465spx] rounded-[15px] mx-auto flex-col">
                        <h1 className="text-[22px] text-[#303030] mb-[8px] font-roboto font-bold">
                            Printify Blog
                        </h1>
                        <hr className="w-full h-1 mb-[24px]" />
                        <img src={q} alt="Person 1" className="w-full h-[315px] object-cover" />
                        <Link to="/" className="underline text-[#046508]  font-roboto font-regular text-[16px] mt-[24px]">See more</Link>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default AppendDots;
