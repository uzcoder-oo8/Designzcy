import Images from "../../assets/images/Image.png";

export default function Box() {
  return (
    <section className="section_5">
      <div className="container max-[1480px] m-auto">
        <main className="main">
          <h3 className="text-center text-[40px] font-[700]">Testimonials</h3>
          <img
            className="w-[743px] h-[547px] list-none m-auto"
            src={Images}
            alt=""
          />
          <div className="w-[320px] bg-[#fff] ml-[800px] mt-[-50px] rounded-[10px] pt-[24px] mb-[20px]">
            <p className="w-[280px] text-center ml-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leoa.
            </p>
            <p className="text-[#F35F2F] text-center text-[20px] ">
              Alina Jesia
            </p>
            <p className="text-center text-[#515155] pb-[10px]">
              DBL Company LTD
            </p>
          </div>
        </main>
      </div>
    </section>
  );
}
