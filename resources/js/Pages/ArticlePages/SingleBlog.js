import React from "react";
import PagePath from "../../components/SmallComps/PagePath";
import SearchInput from "../../components/SmallComps/SearchInput";
//import Calendar from "../../assets/images/icons/calendar.svg";
//import Img1 from "../../assets/images/blogs/9.png";
//import Img2 from "../../assets/images/blogs/10.png";
//import Abs1 from "../../assets/images/blogs/bg1.png";
//import Abs2 from "../../assets/images/blogs/bg2.png";
import "./ArticlePages.css";
import { SocialLinks2 } from "../../components/SmallComps/SocialLinks";
import Layout from "../../Layouts/Layout";
import { usePage } from "@inertiajs/inertia-react";

const SingleBlog = ({ seo }) => {
    const { blog } = usePage().props;
    const sharedData = usePage().props.localizations;
    //console.log(blog)
    const renderHTML = (rawHTML) =>
        React.createElement("p", {
            dangerouslySetInnerHTML: { __html: rawHTML },
        });
    return (
        <Layout seo={seo}>
            <div className="articlePages blogbox">
                <SearchInput color="#fff" />
                <div
                    className="article_showcase"
                    style={{
                        background:
                            "url('/" +
                            (blog.files[0] !== undefined
                                ? blog.files[0].path + "/" + blog.files[0].title
                                : null) +
                            "')",
                    }}
                >
                    <div className="wrapper">
                        <PagePath
                            prev={__("client.nav_home", sharedData)}
                            current={__("client.nav_blog", sharedData)}
                            color="#fff"
                        />
                    </div>
                </div>
                <div className="wrapper2 content">
                    <div className="title50">{blog.title}</div>
                    <div className="subject bpg green ">{blog.subject}</div>
                    <div className="date">
                        <img src="/assets/images/icons/calendar.svg" alt="" />
                        {blog.created_at}
                    </div>

                    {renderHTML(
                        blog.text_top !== null
                            ? blog.text_top.newLineToBr()
                            : null
                    )}

                    <div className="art_img img">
                        {blog.files[1] !== undefined ? (
                            <img
                                src={
                                    "/" +
                                    (blog.files[1] !== undefined
                                        ? blog.files[1].path +
                                          "/" +
                                          blog.files[1].title
                                        : null)
                                }
                                alt=""
                            />
                        ) : null}
                    </div>
                    {renderHTML(
                        blog.text_medium !== null
                            ? blog.text_medium.newLineToBr()
                            : null
                    )}
                    <div className="art_img img">
                        {blog.files[2] !== undefined ? (
                            <img
                                src={
                                    "/" +
                                    (blog.files[2] !== undefined
                                        ? blog.files[2].path +
                                          "/" +
                                          blog.files[2].title
                                        : null)
                                }
                                alt=""
                            />
                        ) : null}
                    </div>
                    {renderHTML(
                        blog.text_bottom !== null
                            ? blog.text_bottom.newLineToBr()
                            : null
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default SingleBlog;
