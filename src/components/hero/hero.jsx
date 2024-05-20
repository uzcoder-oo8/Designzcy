// Images

import heroimages from "../../assets/images/heroimages.png";

export default function Hero() {
  return (
    <section className="section_2 w-[100%] bg-[#f8f9fa]">
      <div className="container max-[1480px] m-auto">
        <div className="flex">
          <li className="list-none">
            <h1 className="w-[540px] text-[72px] font-[500] ml-[137px] mt-[134px]">
              Smart Web Design Agency
            </h1>
            <p className="w-[536px] font-[400] text-[20px] ml-[137px] mt-[42px]">
              We will provide best web design and business devlopment service
              clients expectation and satisfaction guarantee.
            </p>
            <button className="w-[220px] h-[53px] bg-[#F35F2F] rounded-[5px] text-[20px] text-[#fff] mt-[50px] ml-[135px]">
              Free consultation
            </button>
          </li>
          <li className="list-none w-[600px] h-[400px] bg-[url('../src/assets/images/heroimages.png')] mt-[120px] ml-[100px]"></li>
        </div>
      </div>
    </section>
  );
}
