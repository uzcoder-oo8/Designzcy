// Images

import Logo from "../../assets/images/Logo.svg";
import Hero from "../hero/hero";

export default function Header() {
  return (
    <>
      <section className="section_1 w-[100%] bg-[#f8f9fa]">
        <div className="container max-[1480px] m-auto">
          <header className="flex">
            <li className="list-none mt-[51px] ml-[135px]">
              <img src={Logo} alt="" />
            </li>
            <ul className="flex gap-[60px] mt-[60px] ml-[253px]">
              <li>
                <a
                  className="text-[20px] font-[500] font-[DM Sans] hover:text-[#F35F2F]"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-[20px] font-[500] font-[DM Sans] hover:text-[#F35F2F]"
                  href="#"
                >
                  Service
                </a>
              </li>
              <li>
                <a
                  className="text-[20px] font-[500] font-[DM Sans] hover:text-[#F35F2F]"
                  href="#"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  className="text-[20px] font-[500] font-[DM Sans] hover:text-[#F35F2F]"
                  href="#"
                >
                  Blog
                </a>
              </li>
            </ul>
            <button className="w-[118px] h-[42px] bg-[#F35F2F] text-[#ffff] rounded-[5px] ml-[250px] mt-[50px]">
              Contact us
            </button>
          </header>
        </div>
      </section>
    </>
  );
}
