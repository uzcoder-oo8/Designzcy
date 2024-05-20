// Images

import Icon from "../../assets/images/Icon.png";
import Icon1 from "../../assets/images/Icon1.png";
import Icon2 from "../../assets/images/Icon2.png";
import Icon3 from "../../assets/images/Icon3.png";
import Next from "../../assets/images/Next.png";
import Web from "../../assets/images/web.png";
import Nextaa from "../../assets/images/Nextaa.png";
import Boxs from "../../assets/images/boxs.png";

export default function Asida() {
  return (
    <section className="w-[100%] bg-[#f8f9fa]">
      <div className="container max-[1480px] m-auto">
        <main className="main">
          <h2 className=" text-center mt-[120px] text-[40px] font-[700]">
            We Provide the Best Web services
          </h2>
          <ul className="border-[1px] w-[1170px] h-[314px] rounded-[17px] m-auto mt-[55px] gap-[93px] flex mb-[30px]">
            <li className="w-[235px] mt-[54px] ml-[50px]">
              <img className=" text-center ml-[60px]" src={Icon} alt="" />
              <h5 className=" text-center font-[700] text-[36px] ">5200+</h5>
              <p className=" text-center opacity-[70%] font-[400] text-[24px]">
                Projects completed
              </p>
            </li>
            <div className="h-[242px] bg-[#EBEBEBCC] border-[2px] mt-[36px] rounded-[50px]"></div>
            <li className="w-[235px] mt-[54px]">
              <img className=" text-center ml-[60px]" src={Icon1} alt="" />
              <h5 className=" text-center font-[700] text-[36px] ">500+</h5>
              <p className=" text-center opacity-[70%] font-[400] text-[24px]">
                Active clients
              </p>
            </li>
            <div className="h-[242px] bg-[#EBEBEBCC] border-[2px] mt-[36px] rounded-[50px]"></div>
            <li className="w-[235px] mt-[54px]">
              <img className=" text-center ml-[60px]" src={Icon2} alt="" />
              <h5 className=" text-center font-[700] text-[36px] ">4500+</h5>
              <p className=" text-center opacity-[70%] font-[400] text-[24px]">
                Happy clients
              </p>
            </li>
          </ul>
          <h2 className=" text-center mt-[60px] mb-[45px] text-[40px] font-[700]">
            What Service We’re Offering
          </h2>
          <ul className="flex gap-[51px] mb-[120px] w-[1170px] m-auto mt-[70px]">
            <li className="w-[356px]  bg-[#ffff] rounded-[23px]">
              <div className="w-[102px] h-[102px] bg-[#ffff] rounded-[50%] pt-[25px] ml-[115px] mt-[-50px]">
                <img className="ml-[25px]" src={Icon3} alt="logo" />
              </div>
              <h4 className="text-center text-[24px] font-[700]">
                Website design
              </h4>
              <p className="text-center w-[277px] m-auto text-[#595959] mt-[10px]">
                Need something changed or is there something not quite working
                the best service
              </p>
              <img
                className="w-[42px] h-[42px] m-auto mt-[27px] mb-[39px]"
                src={Next}
                alt=""
              />
            </li>
            <li className="w-[356px]  bg-[#ffff] rounded-[23px]">
              <div className="w-[102px] h-[102px] bg-[#FF7A50] rounded-[50%] pt-[25px] ml-[115px] mt-[-50px]">
                <img className="ml-[25px]" src={Web} alt="logo" />
              </div>
              <h4 className="text-center text-[24px] font-[700]">
                Web development
              </h4>
              <p className="text-center w-[277px] m-auto text-[#595959] mt-[10px]">
                Need something changed or is there something not quite working
                the best service
              </p>
              <img
                className="w-[42px] h-[42px] m-auto mt-[27px] mb-[39px]"
                src={Nextaa}
                alt=""
              />
            </li>
            <li className="w-[356px]  bg-[#ffff] rounded-[23px]">
              <div className="w-[102px] h-[102px] bg-[#ffff] rounded-[50%] pt-[25px] ml-[115px] mt-[-50px]">
                <img className="ml-[29px]" src={Boxs} alt="logo" />
              </div>
              <h4 className="text-center text-[24px] font-[700]">
                Web application
              </h4>
              <p className="text-center w-[277px] m-auto text-[#595959] mt-[10px]">
                Need something changed or is there something not quite working
                the best service
              </p>
              <img
                className="w-[42px] h-[42px] m-auto mt-[27px] mb-[39px]"
                src={Next}
                alt=""
              />
            </li>
          </ul>
        </main>
      </div>
    </section>
  );
}
