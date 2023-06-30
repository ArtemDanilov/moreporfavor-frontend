"use client";

import { useEffect } from "react";

import GLightbox from "glightbox";

import "./style.scss";

const Lightbox = () => {
  useEffect(() => {
    const lightbox = GLightbox({
      draggable: false,
    });
  }, []);

  return <></>;
};

export default Lightbox;
