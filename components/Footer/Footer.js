/* eslint-disable @next/next/no-img-element */
import { Fade } from 'react-awesome-reveal';
import Button from "../Button/Button";
import FooterBg from "./FooterBg/FooterBg";
import Profiles from "../Profiles/Profiles";
import { MENULINKS } from "../../constants";

const Footer = () => {
  return (
    <footer
      className="w-full relative select-none bg-cover"
      style={{
        backgroundImage: "linear-gradient(to right, #a5b4fc, #4338ca)", // indigo-300 to indigo-800
      }}
    >
      <FooterBg />
      <Fade bottom distance={"4rem"}>
        <div className="w-full h-full pt-32">
          <div className="section-container flex flex-col h-full justify-end z-10 items-center py-12">
            <h1 className="font-medium text-3xl md:text-4xl text-center">
              Feel free to connect on social media.
            </h1>
            <div className="text-center">
              <Profiles />
            </div>
            <div className="pt-4 text-center">
              <Button
                href={`#${MENULINKS[5].ref}`}
                classes="link"
                type="secondary"
              >
                Let&apos;s Talk
              </Button>
            </div>
            <p className="text-center text-white text-sm sm:text-base font-medium tracking-wide mt-8">
              Developed with{" "}
              <span className="block animate-bounce cursor-pointer">❤️</span>{" "}
              by <span className="text-white">Nikesh S</span>
            </p>
          </div>
        </div>
      </Fade>
      <img
        src="/footer-curve.svg"
        className="w-full rotate-180"
        alt="footer curve"
        loading="eager"
        height={180}
      />
    </footer>
  );
};

export default Footer;