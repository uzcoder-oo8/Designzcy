import Wrapperimg from "../../assets/images/wrapperimages1.png";
import images from "../../assets/images/wrapperimages.png";
import wrapperw from "../../assets/images/wrapperimages2.png";
import images1 from "../../assets/images/wrapperimages3.png";
import images2 from "../../assets/images/wrapperimages4.png";
import images3 from "../../assets/images/wrapperimages5.png";
import Mask from "../../assets/images/Mask.png";
import alix from "../../assets/images//alix.png";
import antony from "../../assets/images/antony.png";
import khalid from "../../assets/images/khalid.png";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/Twitter.png";
import linkiding from "../../assets/images/Linkiding.png";

export default function Wrapper() {
  return (
    <section className="section_4">
      <div className="container max-[1480px] m-auto">
        <main className="main ">
          <h4 className="text-center text-[40px] font-[700]">
            Our Creative Latest Projects
          </h4>
          <ul className=" flex gap-[28px] w-[1232px] m-auto mb-[50px] mt-[55px]">
            <li className="bg-[#fff]">
              <img className="rounded-t-lg" src={Wrapperimg} alt="" />
              <h4 className="text-center mt-[20px] mb-[25px] text-[20px] text-[#3D3D3F] font-[500]">
                Business Consultant Landing Page
              </h4>
            </li>
            <li className="bg-[#fff]">
              <img className="rounded-t-lg" src={images} alt="" />
              <h4 className="text-center mt-[20px] mb-[25px] text-[20px] text-[#3D3D3F] font-[500]">
                BFood delivery Web Design
              </h4>
            </li>
            <li className="bg-[#fff]">
              <img className="rounded-t-lg" src={wrapperw} alt="" />
              <h4 className="text-center mt-[20px] mb-[25px] text-[20px] text-[#3D3D3F] font-[500]">
                Messenger landing Page
              </h4>
            </li>
          </ul>
          <ul className=" flex gap-[28px] w-[1232px] m-auto mb-[50px] mt-[55px]">
            <li className="bg-[#fff]">
              <img className="rounded-t-lg" src={images1} alt="" />
              <h4 className="text-center mt-[20px] mb-[25px] text-[20px] text-[#3D3D3F] font-[500]">
                Doctor’s Consultant Landing Page
              </h4>
            </li>
            <li className="bg-[#fff]">
              <img className="rounded-t-lg" src={images2} alt="" />
              <h4 className="text-center mt-[20px] mb-[25px] text-[20px] text-[#3D3D3F] font-[500]">
                e-Leraning Web Design
              </h4>
            </li>
            <li className="bg-[#fff]">
              <img className="rounded-t-lg" src={images3} alt="" />
              <h4 className="text-center mt-[20px] mb-[25px] text-[20px] text-[#3D3D3F] font-[500]">
                Job Finder landing Page
              </h4>
            </li>
          </ul>
          <button className="w-[242px] h-[53px] bg-[#F35F2F] ml-[650px] font-[300] rounded-[5px] text-[20px] text-[#fff]">
            View all Projects
          </button>
          <h4 className="text-center font-[700] text-[40px] mt-[120px] text-[#3D3D3F]">
            Meet Our Team
          </h4>
          <ul className="flex gap-[36px] w-[1176px] m-auto mt-[44px] mb-[50px]">
            <li className="w-[267px] h-[400px] bg-[#FEFEFE] rounded-[10px]">
              <img
                className="ml-[8px] w-[241px] h-[33  0px]"
                src={Mask}
                alt=""
              />
              <h4 className="text-center text-[18px] mt-[-90px] font-[500]">
                Amanda Linda
              </h4>
              <p className="text-[#999999] text-center">Executive officer</p>
              <div className="flex w-[132px] gap-[11px] ml-[68px] mt-[17px]">
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={linkiding} alt="" />
              </div>
            </li>
            <li className="w-[267px] h-[400px] bg-[#FEFEFE] rounded-[10px]">
              <img
                className="ml-[8px] w-[241px] h-[33  0px]"
                src={alix}
                alt=""
              />
              <h4 className="text-center text-[18px] mt-[-90px] font-[500]">
                Alex Smith
              </h4>
              <p className="text-[#999999] text-center">UX/UI DESIGNER</p>
              <div className="flex w-[132px] gap-[11px] ml-[68px] mt-[17px]">
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={linkiding} alt="" />
              </div>
            </li>
            <li className="w-[267px] h-[400px] bg-[#FEFEFE] rounded-[10px]">
              <img
                className="ml-[8px] w-[241px] h-[33  0px]"
                src={antony}
                alt=""
              />
              <h4 className="text-center text-[18px] mt-[-90px] font-[500]">
                Anthony Fauci
              </h4>
              <p className="text-[#999999] text-center">Web Developer</p>
              <div className="flex w-[132px] gap-[11px] ml-[68px] mt-[17px]">
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={linkiding} alt="" />
              </div>
            </li>
            <li className="w-[267px] h-[400px] bg-[#FEFEFE] rounded-[10px]">
              <img
                className="ml-[8px] w-[241px] h-[33  0px]"
                src={khalid}
                alt=""
              />
              <h4 className="text-center text-[18px] mt-[-90px] font-[500]">
                Khalid Abbed
              </h4>
              <p className="text-[#999999] text-center">Head of Markter</p>
              <div className="flex w-[132px] gap-[11px] ml-[68px] mt-[17px]">
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={linkiding} alt="" />
              </div>
            </li>
          </ul>
        </main>
      </div>
    </section>
  );
}
