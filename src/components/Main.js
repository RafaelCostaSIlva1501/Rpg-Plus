import React from "react";
import { useModal } from "./ModalContext";
import infos from "./dados";

const Main = () => {
    const { modalON, searchON } = useModal();

    const getRandomIndex = () => {
        const randomIndexInfo = Math.floor(Math.random() * infos.length);

        const randomIndexWallpaper = Math.floor(
            Math.random() * infos[randomIndexInfo].wallpaper.length
        );

        return {
            index: infos[randomIndexInfo].id,
            wallpaper: infos[randomIndexInfo].wallpaper[randomIndexWallpaper],
            logo: infos[randomIndexInfo].logo,
            sinopse: infos[randomIndexInfo].sinopse,
        };
    };

   
    const info = getRandomIndex();

    const index = info.index
    const wallpaper = info.wallpaper;
    const logo = info.logo;
    const sinopse = info.sinopse;

    return (
        <>
            <main style={{ backgroundImage: `url(${wallpaper})` }}>
                <div className="container-recomend">
                    <img src={logo} alt="Foto"></img>
                    <p>{sinopse}</p>
                    <div className="container-recomend-btn">
                        <button className="watch-btn" onClick={() => modalON(index)}>
                            <span className="material-symbols-outlined">
                                play_arrow
                            </span>
                            Assistir
                        </button>

                        <button className="add-list-btn">
                            <span className="material-symbols-outlined">
                                add
                            </span>
                            Adicionar a lista
                        </button>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Main;
