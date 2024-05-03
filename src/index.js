import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";

import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Section from "./components/Section.js";
import Modal from "./components/Modal.js";
import Search from "./components/Search.js";

import { ModalProvider } from './components/ModalContext';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Header />

        <ModalProvider>
            <Main />
            <Section />
            <Modal />
        </ModalProvider>

        <Search />
        
    </React.StrictMode>
);
