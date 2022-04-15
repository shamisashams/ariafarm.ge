import React from "react";
//import { Link } from "react-router-dom";
import {Link, usePage} from "@inertiajs/inertia-react";
//import Logo from "../../assets/images/logo/2.png";
//import Insite from "../../assets/images/logo/insite.png";
import { SocialLinks } from "../SmallComps/SocialLinks";
import "./Footer.css";

const Footer = () => {
    const sharedData = usePage().props.localizations;

    const { pathname, currentLocale } = usePage().props;
  const links = [
    {
      link: route('client.home.index'),
      name: __('client.nav_home',sharedData),
    },
    {
      link: "/",
      name: "ფერმა",
    },
    {
      link: route('client.product.index'),
      name: __('client.nav_products',sharedData),
    },
    {
      link: "/",
      name: "საწარმო",
    },
    {
      link: "/",
      name: "სპეციალური შეთავაზება",
    },
    {
      link: "/",
      name: "მაღაზიები",
    },
    {
      link: "/",
      name: "ბლოგი",
    },
    {
      link: "/",
      name: "გალერეა",
    },
    {
      link: route('client.contact.index'),
      name: __('client.nav_contact',sharedData),
    },
    {
      link: "/",
      name: "ხშირად დასმული კითხვები",
    },
  ];
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="flex main">
          <Link href="/">
            <img src="/assets/images/logo/2.png" alt="" />
          </Link>
          <div className="grid">
            {links.map((item, index) => {
              return (
                <Link key={index} href={item.link}>
                  {item.name}
                </Link>
              );
            })}
          </div>
          <div style={{ textAlign: "right" }}>
            <div className="map">
              <iframe
                title="iframe_aria"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23822.04694302264!2d44.7838177!3d41.725786600000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sge!4v1649316675399!5m2!1sen!2sge"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <span style={{ margin: "10px 0" }}>+995 591 23 20 20</span>
            <span>ariafarm.ge@gmail.com</span>
          </div>
        </div>
        <div className="flex bottom">
          <Link href="/">
            Designed by <img src="/assets/images/logo/insite.png" alt="" />
          </Link>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default Footer;
