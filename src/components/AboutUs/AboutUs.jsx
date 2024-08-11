import React from "react";
import "./AboutUs.css";
import abuLogo from "../../assets/about_us.png";

const AboutUs = () => {
  return (
    <div className="about-us-section">
      <div className="about-us-image-container">
        <img className="about-us-image" src={abuLogo} alt="/" />
      </div>

      <div className="about-us-text-container">
        <h1>About Us</h1>
        <p className="Sub-Heading">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis semper sapien.
        </p>
        <p className="Text-Heading">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis semper sapien. Integer aliquam, purus sit amet fermentum blandit, ex arcu eleifend eros, at fermentum turpis lorem a purus. Aenean vel urna a leo hendrerit ullamcorper. Donec ut orci ex.
        </p>
        <p className="Text-Heading">
        Vivamus pretium tortor ut magna fringilla, sed iaculis sapien venenatis. Suspendisse sed turpis neque. In tincidunt, augue in tincidunt consectetur, libero neque venenatis leo, vel congue turpis erat nec felis. Nullam nec dolor nec nisl cursus laoreet. Integer sit amet metus venenatis, hendrerit dolor vel, sodales ligula. Aliquam erat volutpat. Maecenas a eros nec mi aliquam euismod.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
