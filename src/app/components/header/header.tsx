import { useState, useEffect, useRef } from "react";
import "./header.scss";
import Link from "next/link";
import { useRouter } from "next/router";

type HeaderType = {
  isErrorPage?: Boolean;
};

const Header = ({ isErrorPage }: HeaderType) => {
  return (
    <>
      {" "}
      <nav className="navbar  navbar-light  bg-light navbar-expand-sm">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul>
            <li>
              <Link href={""}>Menu</Link>
            </li>
            <li>
              <Link href={""}>Entrar</Link>
            </li>
            <li>
              <Link href={""}>Contato</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
