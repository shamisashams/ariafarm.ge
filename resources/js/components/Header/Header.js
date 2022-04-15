import React, { useState } from "react";
//import { Link, useLocation } from "react-router-dom";
import { Link } from "@inertiajs/inertia-react";
//import Logo from "../../assets/images/logo/1.png";
import "./Header.css";

import { usePage } from "@inertiajs/inertia-react";

const getPathFromUrl = (url) => {
    let url_ = new URL(url);
    return  url_.pathname;
}

function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
}

const Header = () => {
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
      href: route('client.product.index'),
      name: __('client.nav_products',sharedData),
    },
    {
      href: "/farm",
      name: "ფერმა",
    },
    {
      href: "/enterprise",
      name: "საწარმო",
    },
    {
      href: "/shops",
      name: "მაღაზიები",
    },
    {
      href: "/gallery",
      name: "გალერეა",
    },
    {
      href: "/blogs",
      name: "ბლოგი",
    },
    {
      href: route('client.contact.index'),
      name: __('client.nav_contact',sharedData),
    },
  ];
  return (
    <div className="header">
      <div className="wrapper flex centered">
        <button
          onClick={() => toggleMenu()}
          className={menu ? "menu_btn clicked" : "menu_btn"}
        >
          <div className="span"></div>
          <div className="span"></div>
        </button>
        <Link className="logo" href={route('client.home.index')}>
          <img src="/assets/images/logo/1.png" alt="" />
        </Link>
        <div className={menu ? "navbar open" : "navbar"}>
          {navbar.map((nav, index) => {
            return (
              <Link
                className={
                  validURL(nav.href) ? (getPathFromUrl(nav.href) === pathname_ ? "nav_link active" : "nav_link") : 'nav_link'
                }
                href={nav.href}
                key={index}
              >
                {nav.name}
              </Link>
            );
          })}
        </div>
        <div className="languages">
            {Object.keys(locales).map((name, index) => {
                if (locales[name] === currentLocale) {
                    return <div className="on" key={name + "locale"}>{name}</div>;
                }
            })}
          <div className="drop">
              {Object.keys(locales).map((name, index) => {
                  if (locales[name] !== currentLocale) {
                      return (
                          <a href={locale_urls[name]} key={name + "locale"}>
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
