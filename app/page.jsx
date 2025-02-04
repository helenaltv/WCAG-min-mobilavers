"use client";

import DownloadButton from "./components/downloadButton";
import Image from "next/image";
import InputComponent from "./components/InputComponent";

export default function Home() {
  return (
    <div>
      <div className="hero flex justify-between items-center flex-col h-[300px] w-full">
        <h1 className="text-7xl mt-8 text-[#012931]">EaseAccess</h1>
        <button className="bg-[#012931] text-white rounded-xl hover:text-gray-500 uppercase font-bold py-3 px-7 w-[200px] h-[60px]">
          Download
        </button>
      </div>
      <div className="h-[500px] w-full flex justify-center items-center">
        <div className="glasses mx-[100px]">
          <Image
            src={"/images/glasses.jpeg"}
            alt="image of a pair of glasses on a laptop"
            height="500"
            width="500"
          />
        </div>
        <div className="texten mx-[100px]">
          <h1 className="text-5xl my-4">What is EaseAccess?</h1>
          <p className="w-[500px] text-[#001F25]">
            EaseAccess is your go-to solution for ensuring web accessibility
            compliance effortlessly. Designed for developers and accessibility
            specialists, this innovative tool simplifies the process of creating
            inclusive websites that adhere to accessibility guidelines. With its
            suite of features, EaseAccess empowers users to conduct
            comprehensive accessibility audits, receive real-time feedback, and
            implement actionable insights seamlessly. Whether you're a seasoned
            accessibility expert or new to the field, EaseAccess provides
            intuitive solutions tailored to your needs. By prioritizing
            inclusivity and user-friendliness, EaseAccess enables you to
            navigate the complexities of web accessibility with confidence,
            delivering exceptional digital experiences for all users. Join the
            movement towards a more accessible web today with EaseAccess.
          </p>
        </div>
        <div className="texten-mobil">
          <h1 className="text-4xl flex items-center">What is EaseAccess?</h1>
          <p>
            EaseAccess is your go-to solution for ensuring web accessibility
            compliance effortlessly. Designed for developers and accessibility
            specialists, this innovative tool simplifies the process of creating
            inclusive websites that adhere to accessibility guidelines.
          </p>
          <img className="vector" src="/Vector.png" alt="" />
          <h1>Want to try it out?</h1>
          Awesome! Hit share below and we’ll send you a link to the desktop
          demo.
          <div className="mail">
            <img src="/gmail-light.png" alt="gmails icon" />
            <img src="/outlook.png" alt="outlooks icon" />
            <img src="/tabler_copy.png" alt="tablers icon" />
          </div>
        </div>
      </div>

      <InputComponent />

      <div className="why-section flex justify-center align-center h-[700px]">
        <div className="flex justify-center align-center flex-col mx-[100px]">
          <h1 className=" my-3">Why do we do this?</h1>
          <p className="w-[500px] italic text-xl text-[#001F25]">
            “I want to make the world more inclusive, ensuring the web is
            accessible to all is one step towards that!”
          </p>
          <p className="italic text-lg text-[#001F25] my-6">
            Hedi, frontend developer
          </p>
          <DownloadButton
            className="mt-10"
            children={"Download"}
          ></DownloadButton>
        </div>
        <div className="bilder-trio1 flex justify-center items-center w-[550px]">
          <div>
            <Image
              className="bild1 mr-5"
              src={"/images/glad-tjej.jpeg"}
              alt="image of a happy girl"
              height="350"
              width="350"
            />
          </div>
          <div className="flex justify-center items-center flex-col">
            <Image
              className="bild2 ml-3 my-3"
              src={"/images/utvecklare.jpeg"}
              alt="image of a software developer"
              height="150"
              width="150"
            />
            <Image
              className="bild3 ml-3 my-3"
              src={"/images/laptop.png"}
              alt="image of a laptop"
              height="150"
              width="150"
            />
          </div>
        </div>
      </div>

      <div className="bilder-trio2 flex flex-row">
        <div>
          <Image
            className="leftVector"
            src={"/leftVector.png"}
            alt="image of a software developer"
            height="250"
            width="250"
          />
        </div>
        <div>
          <Image
            className="bild1-2 "
            src={"/images/utvecklare.jpeg"}
            alt="image of a software developer"
            height="250"
            width="250"
          />
        </div>

        <div>
          <Image
            className="bild2-2 "
            src={"/images/glad-tjej.jpeg"}
            alt="image of a happy girl"
            height="350"
            width="350"
          />
        </div>

        <div>
          <Image
            className="bild1-2 "
            src={"/images/utvecklare.jpeg"}
            alt="image of a software developer"
            height="250"
            width="250"
          />
        </div>
        <div>
          <Image
            className="rightVector "
            src={"/rightVector.png"}
            alt="image of a software developer"
            height="250"
            width="250"
          />
        </div>
      </div>
    </div>
  );
}
