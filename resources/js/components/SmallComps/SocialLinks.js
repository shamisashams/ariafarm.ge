import React from "react";
//import { Link } from "react-router-dom";
//import fb from "../../assets/images/icons/sm/fb.svg";
//import ig from "../../assets/images/icons/sm/ig.svg";
//import yt from "../../assets/images/icons/sm/yt.svg";

//import li from "../../assets/images/icons/sm/link.svg";
//import fb2 from "../../assets/images/icons/sm/fb2.svg";
//import tw from "../../assets/images/icons/sm/twitter.svg";
//import ln from "../../assets/images/icons/sm/in.svg";
import { Link, usePage } from "@inertiajs/inertia-react";

export const SocialLinks = () => {
    const { info } = usePage().props;
    //console.log(info)
    return (
        <div className="flex centered sm">
            {info.active.facebook === 1 ? (
                <Link href={info.facebook}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14.213"
                        height="26.538"
                        viewBox="0 0 14.213 26.538"
                    >
                        <path
                            id="Icon_awesome-facebook-f"
                            data-name="Icon awesome-facebook-f"
                            d="M14.891,14.927l.737-4.8H11.02V7.008a2.4,2.4,0,0,1,2.708-2.595h2.1V.324A25.548,25.548,0,0,0,12.1,0c-3.8,0-6.276,2.3-6.276,6.464v3.66H1.609v4.8H5.828v11.61H11.02V14.927Z"
                            transform="translate(-1.609)"
                            fill="#2a2a2a"
                        />
                    </svg>
                </Link>
            ) : null}
            {info.active.instagram === 1 ? (
                <Link href={info.instagram} style={{ margin: "0 37px" }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26.544"
                        height="26.538"
                        viewBox="0 0 26.544 26.538"
                    >
                        <path
                            id="Icon_awesome-instagram"
                            data-name="Icon awesome-instagram"
                            d="M13.27,8.7a6.8,6.8,0,1,0,6.8,6.8A6.793,6.793,0,0,0,13.27,8.7Zm0,11.227a4.423,4.423,0,1,1,4.423-4.423A4.431,4.431,0,0,1,13.27,19.93ZM21.939,8.424a1.587,1.587,0,1,1-1.587-1.587A1.583,1.583,0,0,1,21.939,8.424Zm4.506,1.611A7.854,7.854,0,0,0,24.3,4.475a7.905,7.905,0,0,0-5.56-2.144c-2.191-.124-8.758-.124-10.949,0a7.894,7.894,0,0,0-5.56,2.138,7.879,7.879,0,0,0-2.144,5.56c-.124,2.191-.124,8.758,0,10.949a7.854,7.854,0,0,0,2.144,5.56,7.915,7.915,0,0,0,5.56,2.144c2.191.124,8.758.124,10.949,0a7.854,7.854,0,0,0,5.56-2.144,7.905,7.905,0,0,0,2.144-5.56c.124-2.191.124-8.752,0-10.943ZM23.615,23.329a4.478,4.478,0,0,1-2.523,2.523c-1.747.693-5.892.533-7.822.533s-6.082.154-7.822-.533a4.478,4.478,0,0,1-2.523-2.523c-.693-1.747-.533-5.892-.533-7.822s-.154-6.082.533-7.822A4.478,4.478,0,0,1,5.447,5.161c1.747-.693,5.892-.533,7.822-.533s6.082-.154,7.822.533a4.478,4.478,0,0,1,2.523,2.523c.693,1.747.533,5.892.533,7.822S24.308,21.588,23.615,23.329Z"
                            transform="translate(0.005 -2.238)"
                            fill="#2a2a2a"
                        />
                    </svg>
                </Link>
            ) : null}
            {info.active.youtube === 1 ? (
                <Link href={info.youtube}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32.34"
                        height="22.739"
                        viewBox="0 0 32.34 22.739"
                    >
                        <path
                            id="Icon_awesome-youtube"
                            data-name="Icon awesome-youtube"
                            d="M32.714,8.058A4.064,4.064,0,0,0,29.855,5.18C27.333,4.5,17.22,4.5,17.22,4.5s-10.113,0-12.635.68A4.064,4.064,0,0,0,1.726,8.058a42.628,42.628,0,0,0-.676,7.835,42.628,42.628,0,0,0,.676,7.835,4,4,0,0,0,2.859,2.832c2.522.68,12.635.68,12.635.68s10.113,0,12.635-.68a4,4,0,0,0,2.859-2.832,42.628,42.628,0,0,0,.676-7.835,42.628,42.628,0,0,0-.676-7.835ZM13.913,20.7V11.084l8.452,4.809L13.913,20.7Z"
                            transform="translate(-1.05 -4.5)"
                            fill="#2a2a2a"
                        />
                    </svg>
                </Link>
            ) : null}
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
