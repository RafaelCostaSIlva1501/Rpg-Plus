import React from "react";
import { useModal } from "./ModalContext";
import Articles from "./Articles";
import infos from "./dados";

const Search = () => {
    const { modalON, index } = useModal();

    return (
        <>
            <section className="search-modal">
                <div className="search-input">
                    <span className="material-symbols-outlined">arrow_back</span>
                    <div className="container-input">
                        <input></input>
                        <span className="material-symbols-outlined"> search </span>
                    </div>
                </div>

                <div className="search-content">
                    {infos.map((info, idx) => (
                        <Articles
                            key={index}
                            background={info.background}
                            title={info.title}
                            ep={info.ep}
                            onClick={() => modalON(idx)}
                        />
                    ))}
                </div>
            </section>
        </>
    );
};

export default Search;
