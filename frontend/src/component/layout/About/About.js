import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
//import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from '@material-ui/icons/Twitter';
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/panku_chavan/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dqpmynhx7/image/upload/c_limit,f_jpg,fl_lossy.any_format.preserve_transparency.progressive,h_1600,pg_1,q_auto,w_1600/v1/avatars/dzphmz8kldlvc6mtpmf6"
              alt="Founder"
            />
            <Typography>Pankaj Chavan</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample wesbite made by @panku-chavan. Only with the
              purpose to Learn MERN Stack on the refrence of another project.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://twitter.com/panku_chavan"
              target="blank"
            >
              <TwitterIcon className="TwitterIcon" />
            </a>

            <a href="https://www.instagram.com/panku_chavan/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
