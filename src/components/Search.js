import React from "react";
import { useModal } from "./ModalContext";
import Articles from "./Articles";
import infos from "./dados";

const Search = () => {
    const { modalON, index } = useModal();

    return (
        <>
            <section className="search-modal">
                <section className="search-input">
                    <input></input>
                </section>
                <section className="search-content">
                    {infos.map((info, idx) => (
                        <Articles
                            key={index}
                            background={info.background}
                            title={info.title}
                            ep={info.ep}
                            onClick ={() => modalON(idx)}
                        />
                    ))}
                </section>
            </section>
        </>
    );
};

export default Search;
