import { useState, useEffect, useRef } from "react";
import "./search.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import "bootstrap-icons/font/bootstrap-icons.css";
type HeaderType = {
  isErrorPage?: Boolean;
};

const Search = ({ isErrorPage }: HeaderType) => {
  return (
    <div className="container search-container">
        <div className="d-flex form-inputs">
        <i className="bi bi-search search-icon"></i>       
        <input className="form-control" type="text" placeholder="Search menu items" />

        </div>
      </div>
  );
};

export default Search;
