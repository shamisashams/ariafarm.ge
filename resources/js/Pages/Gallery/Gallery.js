import React, { useState } from "react";
import SearchInput from "../../components/SmallComps/SearchInput";
import PagePath from "../../components/SmallComps/PagePath";
import "./Gallery.css";
//import Img1 from "../../assets/images/blogs/1.png";
//import Img2 from "../../assets/images/blogs/2.png";
//import Img3 from "../../assets/images/blogs/3.png";
//import Img4 from "../../assets/images/blogs/4.png";
//import Img5 from "../../assets/images/blogs/9.png";
//import Img6 from "../../assets/images/blogs/10.png";
//import Img7 from "../../assets/images/blogs/11.png";
//import Img8 from "../../assets/images/blogs/12.png";
import Layout from "../../Layouts/Layout";
import {usePage} from "@inertiajs/inertia-react";

const Gallery = ({seo}) => {
  const [showModal, setShowModal] = useState(0);
    const { gallery } = usePage().props;
    const sharedData = usePage().props.localizations;
    console.log(gallery);
  const galleryImgs = [
    {
      img: "/assets/images/blogs/1.png",
      video: false,
    },
    {
      img: "/assets/images/blogs/2.png",
      video: "JNqCYPYvRgY",
    },
    {
      img: "/assets/images/blogs/3.png",
      video: false,
    },
    {
      img: "/assets/images/blogs/4.png",
      video: false,
    },
    {
      img: "/assets/images/blogs/9.png",
      video: false,
    },
    {
      img: "/assets/images/blogs/10.png",
      video: false,
    },
    {
      img: "/assets/images/blogs/11.png",
      video: false,
    },
    {
      img: "/assets/images/blogs/2.png",
      video: false,
    },
    {
      img: "/assets/images/blogs/3.png",
      video: false,
    },
    {
      img: "/assets/images/blogs/4.png",
      video: false,
    },
    {
      img: "/assets/images/blogs/9.png",
      video: false,
    },
    {
      img: "/assets/images/blogs/10.png",
      video: "s6TXDFp1EcM",
    },
    {
      img: "/assets/images/blogs/11.png",
      video: false,
    },
    {
      img: "/assets/images/blogs/12.png",
      video: false,
    },
    {
      img: "/assets/images/blogs/10.png",
      video: "gO8N3L_aERg",
    },
    {
      img: "/assets/images/blogs/12.png",
      video: false,
    },
  ];
  return (
      <Layout seo={seo}>
          <div className="galleryPage">
              <SearchInput color="#ACD3C1" />
              <div className="wrapper">
                  <PagePath prev="მთავარი" current="პროდუქცია" color="#949494" />
                  <div className="title50">{__('client.gallery_header',sharedData)}</div>
                  <div className="grid">
                      {gallery.map((img, index) => {
                          let vid = img.video === null ? false : true;
                          return (
                              <div
                                  key={index}
                                  className={vid ? "grid_item video" : "grid_item image"}
                              >
                                  <div
                                      onClick={() => setShowModal(index + 1)}
                                      key={index}
                                      className="img"
                                  >
                                      <img src={'/' + img.img} alt="" />
                                  </div>
                                  <div
                                      className={
                                          showModal === index + 1
                                              ? "gallery_modal show"
                                              : "gallery_modal"
                                      }
                                  >
                                      <div className="modal_content">
                                          <img src={'/' + img.img} alt="" />
                                          <iframe
                                              src={`https://www.youtube.com/embed/${img.video}`}
                                              title="YouTube video player"
                                              frameBorder="0"
                                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                              allowSullScreen
                                          ></iframe>
                                      </div>
                                  </div>
                              </div>
                          );
                      })}
                  </div>
                  <div
                      onClick={() => setShowModal(0)}
                      className={showModal === 0 ? "modal_bg " : "modal_bg show"}
                  >
                      <span>×</span>
                  </div>
              </div>
          </div>
      </Layout>
  );
};

export default Gallery;
