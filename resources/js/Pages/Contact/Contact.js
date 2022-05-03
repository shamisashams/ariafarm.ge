import React, { useState, useEffect } from "react";
//import Mail from "../../assets/images/icons/contact/mail.svg";
//import Tel from "../../assets/images/icons/contact/tel.svg";
//import Pin from "../../assets/images/icons/contact/pin.svg";
//import { Link } from "react-router-dom";
import { Link, usePage } from "@inertiajs/inertia-react";
import { SocialLinks } from "../../components/SmallComps/SocialLinks";
import { Form } from "../../components/Form/Form";
import "./Contact.css";
//import scBg from "../../assets/images/other/bg2.png";
import Layout from "../../Layouts/Layout";

const Contact = ({ seo, page, info }) => {
    const sharedData = usePage().props.localizations;
    //console.log(info)
    return (
        <Layout seo={seo}>
            <div className="contactPage">
                <div
                    className="contact_showcase"
                    style={{
                        background:
                            "url('" +
                            (page.sections[0].file !== null
                                ? "/" +
                                  page.sections[0].file.path +
                                  "/" +
                                  page.sections[0].file.title
                                : null) +
                            "')",
                        backgroundSize: "cover",
                        backgroundAttachment: "fixed",
                        backgroundPosition: "center",
                    }}
                >
                    {/* <img src="/assets/images/other/bg2.png" alt="" /> */}
                </div>
                <div className="wrapper">
                    <div className="information">
                        <div className="title35">
                            {__("client.contact", sharedData)}
                        </div>
                        <Link
                            href="/"
                            className="flex centered info"
                            data-aos="fade-up"
                        >
                            <img
                                src="/assets/images/icons/contact/tel.svg"
                                alt=""
                            />
                            <span>{info.phone}</span>
                        </Link>
                        <Link
                            href="/"
                            className="flex centered info"
                            data-aos="fade-up"
                        >
                            <img
                                src="/assets/images/icons/contact/mail.svg"
                                alt=""
                            />
                            <span>{info.email}</span>
                        </Link>
                        <Link
                            href="/"
                            className="flex centered info"
                            data-aos="fade-up"
                        >
                            <img
                                src="/assets/images/icons/contact/pin.svg"
                                alt=""
                            />
                            <span>{info.address}</span>
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
