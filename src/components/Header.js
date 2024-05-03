import React from "react";
import { useModal } from "./ModalContext";

const Header = () => {
    const { searchON } = useModal();
    return (
        <>
            <header className="header-home">
                <h1>RPG+</h1>
                <button onClick={() => searchON()}>
                    <span className="material-symbols-outlined">search</span> 
                </button>
            </header>
        </>
    );
};

export default Header;
