import Link from "next/link";

function Footer() {
  return (
    <div>
      <div className="footer h-[200px] flex justify-between items-center">
        <div className="F1 flex justify-center items-center w-[250px] mx-[100px] text-[#001F25]">
          Copyright © 2024 Corporate name All Rights Reserved <br /> <br />
          Corporate name. Streetname 1410 City County 19801 Country
        </div>

        <div className="F2 flex justify-between items-center w-[300px]">
          <img
            src="./images/Läs mer/Läs mer/Frame 44.png"
            alt="Facebookslogo"
          />
          <img src="./images/Läs mer/Frame 45.png" />
          <img src="./images/Läs mer/Frame 46.png" alt="Facebookslogo" />
        </div>

        <div className="F3 w-[200px] mx-[100px]">
          <h1 className="font-bold text-[#001F25]">LINKS</h1>
          <ul className="flex flex-row gap-8 text-[#001F25] my-5">
            <li>
              <Link
                className="hover:text-gray-500 font-bold text-[#001F25] text-lg"
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-gray-500 font-bold text-[#001F25] text-lg"
                href="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-gray-500 font-bold text-[#001F25] text-lg"
                href="/nav"
              >
                Nav
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer2">
        <div className="footerdel1">
          <div className="F12">
            <p>
              Copyright © 2024
              <br />
              Corporate name
              <br />
              All Rights Reserved
              <br />
              <br />
              Corporate name.
              <br />
              Streetname 1410
              <br />
              City County 19801 Country
            </p>
          </div>

          <div className="F32 flex flex-col">
            <h1 className="text-2xl font-bold text-[#001F25]">LINKS</h1>

            <Link className="hover:text-gray-500 text-[#001F25]" href="/">
              Home
            </Link>

            <Link className="hover:text-gray-500 text-[#001F25]" href="/about">
              About
            </Link>
            <Link className="hover:text-gray-500 text-[#001F25]" href="/nav">
              Nav
            </Link>
          </div>
        </div>
        <div className="F22">
          <img
            src="./images/Läs mer/Läs mer/Frame 44.png"
            alt="Facebookslogo"
          />
          <img src="./images/Läs mer/Frame 45.png" />
          <img src="./images/Läs mer/Frame 46.png" alt="Facebookslogo" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
