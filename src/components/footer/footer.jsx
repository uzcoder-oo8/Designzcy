import logo from "../../assets/images/Logo.svg";
import facebook from "../../assets/images/Facebook1.png";
import instagram from "../../assets/images/Instagram.png";
import twitter1 from "../../assets/images/twitter1.png";
import youtube from "../../assets/images/Youtube.png";

export default function Footer() {
  return (
    <section className="section_7">
      <div className="container max-[1480px] m-auto">
        <footer className="">
          <ul className="flex">
            <li className="">
              <li className="ml-[140px]">
                <img src={logo} alt="" />
              </li>
              <h2 className="text-[14px] text-[#646464] ml-[138px] mt-[15px]">
                Metairie, 3689 Bassel Street, LA, Louisiana
              </h2>
              <h2 className="text-[14px] text-[#646464] ml-[138px] mt-[15px]">
                Contact us: 225-788-5489
              </h2>
              <li className="flex gap-[16px] w-[176px] ml-[138px] mt-[16px] mb-[73px]">
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={twitter1} alt="" />
                <img src={youtube} alt="" />
              </li>
            </li>
            <li className="ml-[120px]">
              <h3 className="font-[700] text-[16px]">Category</h3>
              <h5 className="font-[400] text-[14px] text-[#646464] mt-[24px] ml-[2px] cursor-pointer hover:text-[#F35F2F]">
                Home
              </h5>
              <h5 className="font-[400] text-[14px] text-[#646464] mt-[15px] ml-[2px] cursor-pointer hover:text-[#F35F2F]">
                About
              </h5>
              <h5 className="font-[400] text-[14px] text-[#646464] mt-[15px] ml-[2px] cursor-pointer hover:text-[#F35F2F]">
                About
              </h5>
              <h5 className="font-[400] text-[14px] text-[#646464] mt-[15px] ml-[2px] cursor-pointer hover:text-[#F35F2F]">
                Reviews
              </h5>
              <h5 className="font-[400] text-[14px] text-[#646464] mt-[15px] ml-[2px] cursor-pointer hover:text-[#F35F2F]">
                Article
              </h5>
            </li>
            <li className="ml-[200px]">
              <h3 className="font-[700] text-[16px]">About</h3>
              <h5 className="font-[400] text-[14px] text-[#646464] mt-[24px] ml-[2px] cursor-pointer hover:text-[#F35F2F]">
                Partners
              </h5>
              <h5 className="font-[400] text-[14px] text-[#646464] mt-[15px] ml-[2px] cursor-pointer hover:text-[#F35F2F]">
                Careers
              </h5>
              <h5 className="font-[400] text-[14px] text-[#646464] mt-[15px] ml-[2px] cursor-pointer hover:text-[#F35F2F] ">
                Press
              </h5>
              <h5 className="font-[400] text-[14px] text-[#646464] mt-[15px] ml-[2px] cursor-pointer hover:text-[#F35F2F]">
                Community
              </h5>
              <h5 className="font-[400] text-[14px] text-[#646464] mt-[15px] ml-[2px] cursor-pointer hover:text-[#F35F2F]">
                Support
              </h5>
            </li>
            <li className="ml-[165px]">
              <h3 className="font-[700] text-[16px]">Subscribe newsletter</h3>
              <h5 className="w-[277px] font-[400] text-[14px] text-[#646464] mt-[24px] ml-[2px] cursor-pointer">
                Sign up for tips, new offers, and exclusive promos.
              </h5>
              <input
                type="text"
                className="border-[1px] w-[292px] h-[40px] mt-[14px] pl-[10px] text-[16px]  text-[#757575] "
                placeholder="Enter your email"
              />
              <button className="w-[292px] h-[40px] bg-[#F35F2F] text-[#fff] rounded-[5px] mt-[14px]">
                Subcribe
              </button>
            </li>
          </ul>
        </footer>
      </div>
    </section>
  );
}
