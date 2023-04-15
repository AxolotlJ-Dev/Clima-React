import React from "react";
import NavBar from "../components/NavBar";
import ContactElement from "../components/ContactElement";
import Galaxy from "../components/Galaxy";
import {
  faFacebook,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";



const Contact = () => {
  return (
    <div>
      <NavBar text="Contacto" />
      <div className=" container">
        <div className="row">
          <div className="col-md-4">
            <ContactElement
              icon={faFacebook}
              link="https://www.facebook.com/profile.php?id=100008858807221"
              color="face"
            />
          </div>
          <div className="col-md-4">
            <ContactElement
              icon={faGithub}
              link="https://github.com/AxolotlJ-Dev"
            />
          </div>
          <div className="col-md-4">
            <ContactElement
              icon={faInstagram}
              link="https://www.instagram.com/_suzuki_lee_/"
            />
          </div>
        </div>
        {/* <ContactElement icon={ faLinkedin } link="" /> */}

        <Galaxy />
      </div>
    </div>
  );
};

export default Contact;
