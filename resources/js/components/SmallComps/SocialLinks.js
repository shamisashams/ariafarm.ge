import React from "react";
//import { Link } from "react-router-dom";
//import fb from "../../assets/images/icons/sm/fb.svg";
//import ig from "../../assets/images/icons/sm/ig.svg";
//import yt from "../../assets/images/icons/sm/yt.svg";

//import li from "../../assets/images/icons/sm/link.svg";
//import fb2 from "../../assets/images/icons/sm/fb2.svg";
//import tw from "../../assets/images/icons/sm/twitter.svg";
//import ln from "../../assets/images/icons/sm/in.svg";
import {Link, usePage} from "@inertiajs/inertia-react";

export const SocialLinks = () => {
    const { info } = usePage().props;
    //console.log(info)
  return (
    <div className="flex centered">
        {info.active.facebook === 1 ? <Link href={info.facebook}>
        <img src="/assets/images/icons/sm/fb.svg" alt="" />
      </Link> : null}
        {info.active.instagram === 1 ? <Link href={info.instagram} style={{ margin: "0 45px" }}>
        <img src="/assets/images/icons/sm/ig.svg" alt="" />
      </Link> : null}
        {info.active.youtube === 1 ? <Link href={info.youtube}>
        <img src="/assets/images/icons/sm/yt.svg" alt="" />
      </Link> : null}
    </div>
  );
};

export const SocialLinks2 = () => {
  const sm = [
    {
      url: "/",
      icon: "/assets/images/icons/sm/link.svg",
    },
    {
      url: "/",
      icon: "/assets/images/icons/sm/fb2.svg",
    },
    {
      url: "/",
      icon: "/assets/images/icons/sm/twitter.svg",
    },
    {
      url: "/",
      icon: "/assets/images/icons/sm/in.svg",
    },
  ];
  return (
    <div className="sm flex  social_links2">
      {sm.map((sm, index) => {
        return (
          <Link key={index} href={sm.url}>
            <img src={sm.icon} alt="" />
          </Link>
        );
      })}
    </div>
  );
};
