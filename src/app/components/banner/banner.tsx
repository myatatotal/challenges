import { useState, useEffect, useRef } from "react";
import "./banner.scss";
import Link from "next/link";
import { useRouter } from "next/router";

type HeaderType = {
  isErrorPage?: Boolean;
};

const Banner = ({ isErrorPage }: HeaderType) => {
  return (
    <section className="header-image">
      <div className="header-image-text"></div>
    </section>
  );
};

export default Banner;
