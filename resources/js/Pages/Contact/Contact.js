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
                        <a
                            href={`tel:${info.phone}`}
                            className="flex centered info"
                        >
                            <img
                                src="/assets/images/icons/contact/tel.svg"
                                alt=""
                            />
                            <span>{info.phone}</span>
                        </a>
                        <a
                            href={`tel:${info.phone2}`}
                            className="flex centered info"
                        >
                            <img
                                src="/assets/images/icons/contact/tel.svg"
                                alt=""
                            />
                            <span>{info.phone2}</span>
                        </a>
                        <a
                            href={`mailto:${info.email}`}
                            className="flex centered info"
                        >
                            <img
                                src="/assets/images/icons/contact/mail.svg"
                                alt=""
                            />
                            <span>{info.email}</span>
                        </a>
                        <a
                            target={"_blank"}
                            href="https://www.google.com/maps/place/56+Irakli+Abashidze+Street,+T'bilisi/@41.7080589,44.7572368,17z/data=!3m1!4b1!4m5!3m4!1s0x40447335d6708c39:0x6c04da1db81c719a!8m2!3d41.7080549!4d44.7594255"
                            className="flex centered info"
                        >
                            <img
                                src="/assets/images/icons/contact/pin.svg"
                                alt=""
                            />
                            <span>{info.address}</span>
                        </a>
                        <a
                            target={"_blank"}
                            href="#"
                            className="flex centered info"
                        >
                            <img
                                src="/assets/images/icons/contact/pin.svg"
                                alt=""
                            />
                            <span>{info.address2}</span>
                        </a>
                        <br />
                        {/* <SocialLinks /> */}
                    </div>

                    <Form />
                </div>
            </div>
        </Layout>
    );
};

export default Contact;
