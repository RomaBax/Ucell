import React from "react";
import ReactDOM from "react-dom/client";

import Photo from "./Photo";
import Search from "./Search";
import Searcha from "./Searcha";
import { ChakraProvider } from "@chakra-ui/react";

import Korporatsiyalarga from "./Korpratsiyalarga"
import './style.css'
import { BrowserRouter, Link } from "react-router-dom";
import Abonent from "./Korpratsiyalarga";
import Index from "./routes";
import Navbar from "./Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ChakraProvider>
      <Navbar />
      <Index />
  </ChakraProvider>
  </BrowserRouter>
);