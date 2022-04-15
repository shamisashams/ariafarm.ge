import React, { useState, useEffect } from "react";
//import Mail from "../../assets/images/icons/contact/mail.svg";
//import Tel from "../../assets/images/icons/contact/tel.svg";
//import Pin from "../../assets/images/icons/contact/pin.svg";
//import { Link } from "react-router-dom";
import { Link } from "@inertiajs/inertia-react";
import { SocialLinks } from "../../components/SmallComps/SocialLinks";
import { Form } from "../../components/Form/Form";
import "./Contact.css";
//import scBg from "../../assets/images/other/bg2.png";
import Layout from "../../Layouts/Layout";

const Contact = ({seo}) => {
  return (
      <Layout seo={seo}>
          <div className="contactPage">
              <div className="contact_showcase">{/* <img src="/assets/images/other/bg2.png" alt="" /> */}</div>
              <div className="wrapper">
                  <div className="information">
                      <div className="title35">კონტაქტი</div>
                      <Link href="/" className="flex centered info">
                          <img src="/assets/images/icons/contact/tel.svg" alt="" />
                          <span>+995 591 23 20 20</span>
                      </Link>
                      <Link href="/" className="flex centered info">
                          <img src="/assets/images/icons/contact/mail.svg" alt="" />
                          <span>ariafarm.ge@gmail.com</span>
                      </Link>
                      <Link href="/" className="flex centered info">
                          <img src="/assets/images/icons/contact/pin.svg" alt="" />
                          <span>56 Irakli Abashidze str. 0179 Tbilisi, Georgia</span>
                      </Link>
                      <br />
                      <SocialLinks />
                  </div>

                  <Form />
              </div>
          </div>
      </Layout>
  );
};

export default Contact;
