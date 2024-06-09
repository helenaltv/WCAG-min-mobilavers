import Image from "next/image";

export default function About() {
  return (
    <div>
      <div className="about1 flex flex-col gap-16 items-center h-[300px] w-full">
        <h1 className="text-5xl sm:text-7xl mt-8 font-bold text-[#012931]">
          ABOUT
        </h1>
        <h2 className=" text-3xl sm:text-5xl text-[#012931]">
          This is how it works
        </h2>
      </div>

      <div className="flex justify-center items-center h-[1000px]">
        <div className="w-full flex justify-center items-center flex-col">
          <div className="w-[400px]"></div>
          <div className="flex flex-col sm:flex-row w-full sm:w-[850px] justify-between items-center mt-[70px]">
            <div className="flex items-start flex-col">
              <div className="flex justify-center items-center flex-col">
                <p className="w-[260px] sm:w-[260px] text-center mb-[20px] text-[#012931]">
                  1. Download the tool and open
                </p>
                <div
                  className="w-[260px] sm:w-[350px] h-[260px] sm:h-[350px] border-2 border-black bg-no-repeat"
                  style={{
                    backgroundImage: "url('/images/about1.png')",
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
              <div className="flex justify-center items-center flex-col mt-[50px] sm:mt-[100px]">
                <p className="w-[260px] sm:w-[350px] text-center mb-[20px] text-[#012931]">
                  3. Get answers to what's missing while it's easily shown to
                  you with the red markers
                </p>
                <div
                  className="w-[260px] sm:w-[350px] h-[260px] sm:h-[350px] border-2 border-black bg-no-repeat"
                  style={{
                    backgroundImage: "url('/images/about3.png')",
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
            </div>
            <div className="mt-[50px] sm:mt-[90px] flex flex-col items-center">
              <div className="flex mb-[10px] items-center justify-center sm:justify-start">
                <Image
                  src={"/images/pil 1.png"}
                  alt="arrow symbol"
                  height="50"
                  width="50"
                  className="hidden sm:block"
                />
                <p className="w-[260px] sm:w-[260px] text-center sm:text-left text-[#012931] ml-0 sm:ml-[20px]">
                  2. Choose which accessibility you want to inspect
                </p>
              </div>
              <div
                className="w-[260px] sm:w-[350px] h-[260px] sm:h-[350px] border-2 border-black bg-no-repeat"
                style={{
                  backgroundImage: "url('/images/about2.png')",
                  backgroundSize: "cover",
                }}
              ></div>
              <Image
                src={"/images/pil 2.png"}
                alt="arrow symbol"
                height="50"
                width="50"
                className="mt-[20px] hidden sm:block"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col h-[300px]">
        <button className="bg-[#012931] text-white rounded-xl hover:text-gray-500 uppercase font-bold py-3 px-7 w-[200px] h-[60px]">
          Download
        </button>
        <p className="text-center text-[#012931] mt-6">
          Download here to get started
        </p>
      </div>
      <div className="flex justify-center items-center flex-col h-auto sm:h-[700px]">
        <div className="text-center sm:text-left">
          <h1 className="text-2xl sm:text-4xl text-[#012931]">
            Disability Impacts Us All
          </h1>
          <p className="w-[300px] sm:w-[500px] text-[#012931] mt-6">
            Disability impacts us all by challenging societal norms, fostering
            empathy, and promoting inclusivity. <br /> <br /> In WCAG,
            considering disability ensures digital content is accessible to
            everyone, fostering equal opportunities and usability for all users.
          </p>
        </div>
        <div
          className="w-[300px] sm:w-[700px] h-[200px] sm:h-[400px] border-2 rounded-md border-black bg-no-repeat mt-10 sm:mt-20"
          style={{
            backgroundImage: "url('/images/diagram.png')",
            backgroundSize: "cover",
          }}
        ></div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center h-auto sm:h-[600px] gap-10 sm:gap-28 p-4 sm:p-0">
        <div className="flex justify-between items-center w-full sm:w-[460px] mb-6 sm:mb-0">
          <div className="w-[150px] sm:w-[250px] h-[240px] sm:h-[400px] border-4 border-gray-300"></div>
          <div className="w-[100px] sm:w-[175px] h-[180px] sm:h-[300px] border-4 border-gray-300"></div>
        </div>
        <div className="text-center sm:text-left">
          <h1 className="text-3xl sm:text-5xl text-[#012931]">
            Why EaseAccess?
          </h1>
          <p className="w-full sm:w-[500px] text-[#012931] mt-6">
            EaseAccess is a vital WCAG product designed to ensure digital
            content accessibility for all users, regardless of their abilities
            or disabilities. By adhering to the WCAG standards, EaseAccess
            facilitates inclusivity and equal access to websites, applications,
            and digital documents. <br />
            <br />
            Through its user-centered design and compliance with accessibility
            guidelines, EaseAccess not only meets legal requirements but also
            enhances user experience and promotes digital equity. With
            EaseAccess, companies and organizations demonstrate their commitment
            to accessibility, fostering a more inclusive digital environment for
            everyone.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center h-[70px] mt-6 sm:mt-0">
        <button className="bg-[#012931] text-white rounded-xl hover:text-gray-500 uppercase font-bold py-3 px-7 w-[200px] h-[60px]">
          Download
        </button>
      </div>
    </div>
  );
}
