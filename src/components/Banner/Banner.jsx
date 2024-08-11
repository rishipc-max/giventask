import React from "react";
import "./Banner.css";
import BannerBG from "../../assets/banner.png";
import BannerMobile from "../../assets/bannermobile.png";
import { useMediaQuery } from "@mui/material";

const Banner = () => {
  // different image, from resolution 575px
  const isMobile = useMediaQuery("(max-width:575px)");

  return (
    <div>
      <img
        className="bg-img"
        src={isMobile ? BannerMobile : BannerBG}
        alt="banner-bg"
      />
      <div className="banner-texts">
        <h1>
          Innovative Furniture <br /> Timeless Elegance
        </h1>
        <button className="git-button">GET IN TOUCH</button>
      </div>
    </div>
  );
};

export default Banner;
