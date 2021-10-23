import React from "react";
import "./Community.css";

const All_Community = [
  {
    imageUrl:
      "https://swoc.scriptindia.org/img/logos/GDSC%20GNDU%20Center%20Logo.png",
    siteUrl: "https://gdsc.community.dev/guru-nanak-dev-university-amritsar/",
  },
  {
    imageUrl:
      "https://swoc.scriptindia.org/img/logos/GDSC%20Logo%20chapter%20lockup%20centered%20template.png",
    siteUrl:
      "https://gdsc.community.dev/lakshmi-narain-college-of-technology-bhopal/",
  },
  {
    imageUrl: "https://swoc.scriptindia.org/img/logos/DSC%20RTU.jpg",
    siteUrl: "https://gdsc.community.dev/rajasthan-technical-university-kota/",
  },
  {
    imageUrl: "https://swoc.scriptindia.org/img/logos/codedazzlers.png",
    siteUrl: "https://www.codedazzlers.xyz/",
  },
  {
    imageUrl: "https://swoc.scriptindia.org/img/logos/Techsahead_Logo.png",
    siteUrl: "https://www.linkedin.com/company/techsahead/",
  },
  {
    imageUrl: "https://swoc.scriptindia.org/img/logos/Opentek_black_Logo.png",
    siteUrl: "https://opentek.live/",
  },
  {
    imageUrl:
      "https://swoc.scriptindia.org/img/logos/msc%20new%20logo%20(BLACK)-01.png",
    siteUrl: "https://swoc.scriptindia.org/",
  },
  {
    imageUrl: "https://swoc.scriptindia.org/img/logos/BANNER_YT-05.png",
    siteUrl: "https://semikolan.co/",
  },
  {
    imageUrl: "https://swoc.scriptindia.org/img/logos/upskill_Logo.png",
    siteUrl:
      "https://www.linkedin.com/company/upskill-community/?originalSubdomain=in",
  },
  {
    imageUrl: "https://swoc.scriptindia.org/img/logos/codeflow_logo.png",
    siteUrl:
      "https://www.linkedin.com/company/codefloworg/?originalSubdomain=in",
  },
  {
    imageUrl:
      "https://swoc.scriptindia.org/img/logos/codecademy%20kolkata%20chapter%20logo.png",
    siteUrl: "https://community.codecademy.com/kolkata/",
  },
];

const Community = () => {
  return (
    <div className="community">
      <div className="community_header">
        <div className="community_header_left">
          <h1>Community Partners</h1>
          <p>
            Meet the brains behind the ideation,developemnt and execution of
            Script Winter of Code.
          </p>
        </div>

        <img
          className="community_header_right"
          src="/communitylog.png"
          alt="logo"
        />
      </div>
      <div className="community_content">
        {All_Community.map((community, index) => (
          <a href={community.siteUrl} key={index} className="content">
            <img src={community.imageUrl} alt="" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Community;
