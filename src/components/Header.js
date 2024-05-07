import React from "react";
import { useModal } from "./ModalContext";

const Header = () => {
    const { searchModalON } = useModal();
    return (
        <>
            <header className="header-home">
                <img src="./img/rpg-plus-logo-1.png" alt="Logo RPG+"></img>
                <button onClick={() => searchModalON()}>
                    <span className="material-symbols-outlined">search</span> 
                </button>
            </header>
        </>
    );
};

export default Header;
