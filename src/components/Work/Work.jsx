import React from "react";
import "./Work.css";
import workimg1 from "../../assets/our-work/1.png";
import workimg2 from "../../assets/our-work/2.png";
import { Stack, useMediaQuery } from "@mui/material";

const Work = () => {
  const isMobile = useMediaQuery("(max-width:875px)");

  return (
    <div className="work-section">
      <div className="title">
        <h1 className="heading">Our Awesome Work</h1>
      </div>
      <div className="work-img-container">
        <div className="work-img">
          <img className="act-img" src={workimg1} alt="wd" />
          <Stack
            direction={isMobile ? "column" : "row"}
            sx={{
              justifyContent: isMobile ? "flex-start" : "space-between",
            }}
          >
            <Stack>
              <h3>Home Furniture at Surat</h3>
            </Stack>
            <Stack>
              <p>15/04/2021</p>
            </Stack>
          </Stack>
        </div>
        <div className="work-img">
          <img className="act-img" src={workimg2} alt="wd" />
          <Stack
            direction={isMobile ? "column" : "row"}
            className="b"
            sx={{
              justifyContent: isMobile ? "flex-start" : "space-between",
            }}
          >
            <Stack>
              <h3>Office Furniture at Vadodara</h3>
            </Stack>
            <Stack>
              <p>17/06/2021</p>
            </Stack>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Work;
