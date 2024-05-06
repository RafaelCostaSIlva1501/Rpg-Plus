import React from "react";
import { useModal } from "./ModalContext";

const Header = () => {
    const { searchON } = useModal();
    return (
        <>
            <header className="header-home">
                <img src="./img/rpg-plus-logo-1.png" alt="Logo RPG+"></img>
                <button onClick={() => searchON()}>
                    <span className="material-symbols-outlined">search</span> 
                </button>
            </header>
        </>
    );
};

export default Header;
