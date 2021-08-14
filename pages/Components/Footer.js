import React, { useState } from "react";
// import InstagramIcon from "@material-ui/icons/Instagram";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import TwitterIcon from "@material-ui/icons/Twitter";
// import MailIcon from "@material-ui/icons/Mail";
// import { MdLocationOn } from "react-icons/md";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import Image from "next/image";
const Footer = () => {
  const [address, setAddress] = useState("address1");

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5 gap-y-10 px-32 py-14 bg-black text-red border-t border-t-3 shadow-md p-10 mt-2">
      <div className="space-y-6 text-xs text-white font-semibold">
        <p>
          <p>Luxury Tour</p>
        </p>
        <p>
          <p>Honeymoon Tour</p>
        </p>
        <p>
          <p>Planned Tour</p>
        </p>
        <p>
          <p>Surprise Tour</p>
        </p>
        <p>
          <p>Wildlife Tour</p>
        </p>
        <p>
          <p>Road Trip</p>
        </p>
      </div>

      <div className="space-y-4 text-xs text-white font-semibold">
        <p>Terms & Condition</p>
        <p>Privacy Policy</p>
        <p>Blog</p>
      </div>

      <div className="space-y-4 text-xs text-white font-semibold">
        <div className="magazine">
          <div className="magContent">
            <p>Featured on</p>
          </div>
          <div className="magLink">
            <a
              href="https://startup.siliconindia.com/vendor/tour-on-the-best-vacation-planners-cid-15137.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative w-[150px] h-20">
                <Image
                  src="/startupcity-logo.jpg"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="text-xs text-white">
        <p>See us in action here!</p>
        <div className="magLink">
          <a
            href="https://startup.siliconindia.com/vendor/tour-on-the-best-vacation-planners-cid-15137.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative w-[150px] h-20">
              <Image src="/playStore.png" layout="fill" objectFit="contain" />
            </div>
          </a>
        </div>
        <div className="magLink">
          <a
            href="https://startup.siliconindia.com/vendor/tour-on-the-best-vacation-planners-cid-15137.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative w-[150px] h-20">
              <Image src="/appStore.png" layout="fill" objectFit="contain" />
            </div>
          </a>
        </div>
      </div>

      <div className="text-xs text-white font-semibold">
        <div className="text-xs text-white">Contact us</div>
        <div className="flex justify-between pt-4">
          <div
            className="relative flex bg-[#Ff7f00] rounded-lg p-1 space-x-2 items-center cursor-pointer"
            onClick={() => {
              setAddress("address1");
            }}
          >
            <LocationMarkerIcon className="text-black h-15 w-5 " />
            Sholinganallur
          </div>
          <div
            className="relative flex bg-[#Ff7f00] rounded-lg p-1 space-x-2 items-center cursor-pointer"
            onClick={() => {
              setAddress("address2");
            }}
          >
            <LocationMarkerIcon className="text-black h-15 w-5  " />
            Anna Nagar
          </div>
        </div>
        <div className="text-white text-xs pt-4 font-semibold ">
          {address === "address1" ? (
            <>
              <p>
                <span>Address:</span>
                <span> </span>
                tour On
              </p>
              <p>Workafella, Rathha Towers,</p>
              <p>Tek Meadows - A Block, 4th Floor,</p>
              <p>Opposite to Accenture, Sholinganallur,</p>
              <p>OMR, Chennai-119</p>
              <p>
                <span>Phone:</span>
                <span> </span> +91 97510 09400
              </p>
            </>
          ) : (
            <>
              <p>
                <span>Address:</span>
                <span> </span>
                tour On
              </p>
              <p>The Hive,</p>
              <p>Level 3 VR Mall,</p>
              <p> Next to Madras House(Landmark),</p>
              <p>Thirumangalam,Chennai-40</p>
              <p>
                <span>Phone:</span>
                <span> </span>
                +91 97510 09500
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
