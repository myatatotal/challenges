"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import NewProducts from "./pages/NewProducts";
import Header from "./components/header/header";
import Banner from "./components/banner/banner";
import Search from "./components/search/search";

const Page = () => {

  return (
    <>
      <Header />
      <Banner />
      <Search />
      <NewProducts />
    </>
  );
};

export default Page;
