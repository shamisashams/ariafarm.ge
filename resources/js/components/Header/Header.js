import React, { useState, useRef, useEffect } from "react";
//import { Link, useLocation } from "react-router-dom";
import { Link } from "@inertiajs/inertia-react";
//import Logo from "../../assets/images/logo/1.png";
import "./Header.css";

import { usePage } from "@inertiajs/inertia-react";
import { SocialLinks } from "../SmallComps/SocialLinks";

const getPathFromUrl = (url) => {
    let url_ = new URL(url);
    return url_.pathname;
};

function validURL(str) {
    var pattern = new RegExp(
        "^(https?:\\/\\/)?" + // protocol
            "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
            "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
            "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
            "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
            "(\\#[-a-z\\d_]*)?$",
        "i"
    ); // fragment locator
    return !!pattern.test(str);
}

const Header = () => {
    function useOutsideAlerter(ref) {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setMenu(false);
                }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    //const { pathname } = useLocation();

    const sharedData = usePage().props.localizations;

    const { pathname, locales, currentLocale, locale_urls } = usePage().props;
    //console.log(usePage().props);
    let pathname_ = getPathFromUrl(pathname);
    console.log(pathname_);

    const [menu, setMenu] = useState(false);
    const toggleMenu = () => {
        setMenu(!menu);
    };
    const navbar = [
        {
            href: route("client.product.index"),
            name: __("client.nav_products", sharedData),
        },
        {
            href: route("client.farm.index"),
            name: __("client.nav_farm", sharedData),
        },
        {
            href: route("client.enterprise.index"),
            name: __("client.nav_enterprise", sharedData),
        },
        {
            href: route("client.shop.index"),
            name: __("client.nav_shops", sharedData),
        },
        {
            href: route("client.gallery.index"),
            name: __("client.nav_gallery", sharedData),
        },
        {
            href: route("client.blog.index"),
            name: __("client.nav_blog", sharedData),
        },
        {
            href: route("client.contact.index"),
            name: __("client.nav_contact", sharedData),
        },
    ];
    return (
        <div className="header">
            <div className="wrapper flex centered">
                <Link
                    className="mobile_logo_text cursive"
                    href={route("client.home.index")}
                >
                    <img src="/assets/images/logo/3.png" alt="" />
                </Link>
                <button
                    onClick={() => toggleMenu()}
                    className={menu ? "menu_btn clicked" : "menu_btn"}
                >
                    <div className="span"></div>
                    <div className="span"></div>
                    <div className="span"></div>
                </button>
                <Link className="logo" href={route("client.home.index")}>
                    <img src="/assets/images/logo/1.png" alt="" />
                </Link>
                <div
                    ref={wrapperRef}
                    className={menu ? "navbar open" : "navbar"}
                >
                    <img
                        className="mobile_logo_img"
                        src="/assets/images/logo/1.png"
                        alt=""
                    />
                    {navbar.map((nav, index) => {
                        return (
                            <Link
                                className={
                                    validURL(nav.href)
                                        ? getPathFromUrl(nav.href) === pathname_
                                            ? "nav_link active"
                                            : "nav_link"
                                        : "nav_link"
                                }
                                href={nav.href}
                                key={index}
                            >
                                {nav.name}
                            </Link>
                        );
                    })}
                    <div className="languages mobile">
                        {Object.keys(locales).map((name, index) => {
                            if (locales[name] === currentLocale) {
                                return (
                                    <div className="on" key={name + "locale"}>
                                        {name}
                                    </div>
                                );
                            }
                        })}
                        <div className="drop">
                            {Object.keys(locales).map((name, index) => {
                                if (locales[name] !== currentLocale) {
                                    return (
                                        <a
                                            href={locale_urls[name]}
                                            key={name + "locale"}
                                        >
                                            {name}
                                        </a>
                                    );
                                }
                            })}
                        </div>
                    </div>
                    <SocialLinks />
                </div>
                <div className="languages">
                    {Object.keys(locales).map((name, index) => {
                        if (locales[name] === currentLocale) {
                            return (
                                <div className="on" key={name + "locale"}>
                                    {name}
                                </div>
                            );
                        }
                    })}
                    <div className="drop">
                        {Object.keys(locales).map((name, index) => {
                            if (locales[name] !== currentLocale) {
                                return (
                                    <a
                                        href={locale_urls[name]}
                                        key={name + "locale"}
                                    >
                                        {name}
                                    </a>
                                );
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
