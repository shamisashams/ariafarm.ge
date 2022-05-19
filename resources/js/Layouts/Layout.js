import React, { useEffect, useState } from "react";
import "./App.css";

import "aos/dist/aos.css";
import Header from "../components/Header/Header";

import Footer from "../components/Footer/Footer";

import setSeoData from "./SetSeoData";
// import {Fragment} from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Aos from "aos";
import { usePage } from "@inertiajs/inertia-react";

import PropagateLoader from "react-spinners/PropagateLoader";

export default function Layout({ children, seo = null }) {
    // preloader
    const [loading, setLoading] = useState();

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 7000);
    }, []);

    if (seo) {
        setSeoData(seo);
    }
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    console.log(usePage().props);
    const { currentLocale } = usePage().props;

    if (currentLocale == "en") {
        import("./AppEng.css");
    }

    return (
        <>
            {loading ? (
                <div className="preloader flex centered">
                    <img src="/assets/images/logo/3.png" alt="" />
                    <PropagateLoader color="#fff" loading={loading} size={25} />
                </div>
            ) : (
                <>
                    {/*<Router>*/}
                    {/*<Fragment>*/}
                    <Header />
                    {children}
                    <Footer />
                    {/*</Fragment>*/}
                    {/*</Router>*/}
                </>
            )}
        </>
    );
}
