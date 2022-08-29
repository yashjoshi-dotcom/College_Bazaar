import FooterSection from "./FooterSection";
import FooterHeading from "./FooterHeading";
import FooterItem from "./FooterItem";
import Instagram from "../../SVG/Instagram";
import Facebook from "../../SVG/Facebook";
import Twitter from "../../SVG/Twitter";

function Footer() {
  return (
    <div className="bg-gray-900 items-center h-full w-full bg-footerbgcolor md:flex-row flex   justify-evenly flex-col-reverse">
      <FooterSection extraClass="mt-12 hidden md:block">
        <FooterItem name="Privacy Policy" />
        <FooterItem name="Terms & Conditions" />
        <FooterItem name="About" link="/About" />
      </FooterSection>

      <FooterSection extraClass="flex md:flex-col justify-between before:invisible">
        <FooterHeading heading="College-Bazaar" />

        <div className="flex flex-row justify-evenly items-center">
          <Instagram
            size="50"
            color="fill-highlight hover:fill-highlight_dark"
          />
          <Facebook
            size="50"
            color="fill-highlight hover:fill-highlight_dark"
          />
          <Twitter size="50" color="fill-highlight hover:fill-highlight_dark" />
        </div>

        <p className="text-white text-l mb-0">Weekly Newsletter</p>
        <div className="h-10 flex flex-row md:w-full md:px-0 sm:px-20 items-center ">
          <input
            className="text-black w-2/3 h-full bg-input_bg p-4 border-2 border-highlight border-r-0 rounded rounded-br-none rounded-tr-none "
            type="text"
            placeholder="Name@Email.Com"
          ></input>
          <button
            onClick={() => {
              alert("Subscribed");
            }}
            className="flex items-center justify-center w-1/3 h-full bg-highlight border-2 bg-blue-700 border-highlight rounded rounded-bl-none rounded-tl-non text-white hover:bg-blue-800"
          >
            Subscribe
          </button>
        </div>
        <p className="text-textcolor1 text-l text-white">
          2022 Copyright | Designed by Forbidden-403
        </p>
      </FooterSection>

      <FooterSection extraClass="mt-12 hidden md:block">
        <FooterItem name="Become Partner" />
        <FooterItem name="Refund Policy" />
        <FooterItem name="Contact" link="/Contact" />
      </FooterSection>
    </div>
  );
}

export default Footer;
