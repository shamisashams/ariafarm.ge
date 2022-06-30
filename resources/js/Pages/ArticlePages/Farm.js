import React from "react";
import PagePath from "../../components/SmallComps/PagePath";
import SearchInput from "../../components/SmallComps/SearchInput";
//import Img1 from "../../assets/images/articles/1.png";
//import Img2 from "../../assets/images/articles/2.png";
//import Img3 from "../../assets/images/blogs/9.png";
import "./ArticlePages.css";
import { SocialLinks2 } from "../../components/SmallComps/SocialLinks";
import FermaSection from "../../components/FermaSection/FermaSection";
import Layout from "../../Layouts/Layout";
import { usePage } from "@inertiajs/inertia-react";

const Farm = ({ seo, page }) => {
    //console.log(page)
    const renderHTML = (rawHTML) =>
        React.createElement("p", {
            dangerouslySetInnerHTML: { __html: rawHTML },
        });
    const sharedData = usePage().props.localizations;
    return (
        <Layout seo={seo}>
            <div className="articlePages blogbox">
                <SearchInput color="#fff" />
                <div
                    className="article_showcase"
                    style={{
                        background:
                            `url('` +
                            (page.sections[0].file !== null
                                ? "/" +
                                  page.sections[0].file.path +
                                  "/" +
                                  page.sections[0].file.title
                                : null) +
                            `')`,
                    }}
                >
                    <div className="wrapper">
                        <PagePath
                            prev={__("client.nav_home", sharedData)}
                            current={__("client.nav_farm", sharedData)}
                            color="#fff"
                        />
                    </div>
                </div>
                <div className="wrapper2 content">
                    <div className="title50">{page.title}</div>

                    {/* embedded video */}

                    {/* <iframe
                        src="https://www.youtube.com/embed/1a7f9wzOfWk"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe> */}

                    {/* <section className="articleSections">
                        <div className="sectionTitle">Title</div>
                        <p></p>
                        <p></p>
                        <p></p>
                        <div className="sectionImages">
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                        </div>
                        <p></p>
                        <p></p>
                    </section> */}

                    {renderHTML(
                        page.text_top !== null
                            ? page.text_top.newLineToBr()
                            : null
                    )}
                    <div className="art_img img">
                        <img
                            src={
                                page.sections[1].file !== null
                                    ? "/" +
                                      page.sections[1].file.path +
                                      "/" +
                                      page.sections[1].file.title
                                    : null
                            }
                            alt=""
                        />
                    </div>
                    {renderHTML(
                        page.text_medium !== null
                            ? page.text_medium.newLineToBr()
                            : null
                    )}
                </div>
                <FermaSection
                    imgSrc={
                        page.sections[2].file !== null
                            ? "/" +
                              page.sections[2].file.path +
                              "/" +
                              page.sections[2].file.title
                            : null
                    }
                    link={route("client.enterprise.index")}
                    title={__("client.farm_section_title", sharedData)}
                    paragraph={__("client.farm_section_text", sharedData)}
                />
                <div className="wrapper2">
                    <div className="art_img img">
                        <img
                            src={
                                page.sections[3].file !== null
                                    ? "/" +
                                      page.sections[3].file.path +
                                      "/" +
                                      page.sections[3].file.title
                                    : null
                            }
                            alt=""
                        />
                    </div>
                    {renderHTML(
                        page.text_bottom !== null
                            ? page.text_bottom.newLineToBr()
                            : null
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default Farm;
