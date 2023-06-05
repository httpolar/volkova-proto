import { Logo } from "~/components/logo.tsx";

import facebook from "~/assets/facebook.svg";
import twitter from "~/assets/twitter.svg";
import linkedin from "~/assets/linkedin.svg";
import pinterest from "~/assets/pinterest.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-md d-flex align-items-center">
        <div
          className="d-flex flex-column align-items-center"
          style={{ width: "fit-content" }}
        >
          <Logo altVer />
          <span className="text-white mt-2" style={{ opacity: 0.5 }}>
            Галина Волкова
          </span>
          <span className="text-white" style={{ opacity: 0.5 }}>
            {new Date().getFullYear()}
          </span>
        </div>

        <div className="socials mx-auto">
          <div className="d-flex flex-row gap-2 align-items-center">
            <img src={facebook} alt="facebook logo" />
            <span>Facebook</span>
          </div>
          <div className="d-flex flex-row gap-2 align-items-center">
            <img src={twitter} alt="twitter logo" />
            <span>Twitter</span>
          </div>
          <div className="d-flex flex-row gap-2 align-items-center">
            <img src={linkedin} alt="linkedin logo" />
            <span>Linkedin</span>
          </div>
          <div className="d-flex flex-row gap-2 align-items-center">
            <img src={pinterest} alt="pinterest logo" />
            <span>Pinterest</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
