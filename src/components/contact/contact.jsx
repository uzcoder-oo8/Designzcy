export default function Contact() {
  return (
    <section className="section_6">
      <div className="container max-[1480px] m-auto">
        <main className="main">
          <h3 className="text-[40px] text-center mt-[110px] font-[700]">
            Contact Us
          </h3>
          <div className="w-[720px] m-auto">
            <div className="flex gap-[32px]">
              <div className="flex flex-col mt-[50px]">
                <label
                  className="uppercase font-[500] text-[18px]"
                  htmlFor="fullname"
                >
                  Full Name
                </label>
                <br />
                <input
                  className="w-[343.17px] h-[52.38px] text-[18px] opacity-[40%] pl-[10px] border-[1px] rounded-[5px]"
                  placeholder="Enter your full name"
                  type="text"
                  id="fullname"
                />
              </div>
              <div className=" flex flex-col mt-[50px]">
                <label
                  className="uppercase font-[500] text-[18px]"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <br />
                <input
                  className="w-[343.17px] h-[52.38px] text-[18px] opacity-[40%] pl-[10px] border-[1px] rounded-[5px]"
                  placeholder="Enter  your mail"
                  type="text"
                  id="email"
                />
              </div>
            </div>
            <div className="flex gap-[32px]">
              <div className="flex flex-col mt-[50px]">
                <label
                  className="uppercase font-[500] text-[18px]"
                  htmlFor="Deadline"
                >
                  Deadline
                </label>
                <br />
                <input
                  className=" w-[343.17px] h-[52.38px] text-[18px] opacity-[40%] pl-[10px] border-[1px] rounded-[5px]"
                  placeholder="Projects deadline"
                  type="text"
                  id="Deadline"
                />
              </div>
              <div className="flex flex-col mt-[50px]">
                <label
                  className="uppercase font-[500] text-[18px]"
                  htmlFor="Budget"
                >
                  Budget
                </label>
                <br />
                <input
                  className="w-[343.17px] h-[52.38px] text-[18px] opacity-[40%] pl-[10px] border-[1px] rounded-[5px]"
                  placeholder="Enter  your budget"
                  type="text"
                  id="Budget"
                />
              </div>
            </div>
            <div className="mt-[50px]">
              <label
                className="font-[500] text-[18px] mt-[70px] uppercase"
                htmlFor="tex"
              >
                write us
              </label>
              <textarea
                className="resize-none	 w-[719px] h-[191px] mt-[20px] pl-[18px] pt-[19px] text-[20px]"
                placeholder="Enter message here......"
                id="tex"
              ></textarea>
              <button className="mb-[93px] uppercase w-[207px] h-[53px] bg-[#F35F2F] rounded-[5px] text-[20px] text-[#fff] mt-[51px] ml-[520px]">
                Submit project
              </button>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
