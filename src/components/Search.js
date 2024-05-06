import React, { useState } from "react";
import { useModal } from "./ModalContext";
import Articles from "./Articles";
import infos from "./dados";

const Search = () => {
    const { searchState, searchOFF, modalON, index } = useModal();

    const [searchTerm, setSearchTerm] = useState("");

    const valueSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredArticles = infos.filter((info) =>
        info.tag.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            {searchState && (
                <section className="search-modal">
                    <div className="search-input">
                        <button onClick={() => searchOFF()}>
                            <span className="material-symbols-outlined">
                                arrow_back
                            </span>
                        </button>

                        <div className="container-input">
                            <span className="material-symbols-outlined">
                                search
                            </span>

                            <input
                                type="text"
                                placeholder="Pesquise o que quer assistir"
                                value={searchTerm}
                                onChange={valueSearch}
                            ></input>
                        </div>
                    </div>

                    <div className="search-content">
                        {filteredArticles.map((info, idx) => (
                            <Articles
                                key={idx}
                                background={info.background}
                                title={info.title}
                                ep={info.ep}
                                onClick={() => modalON(idx)}
                            />
                        ))}
                    </div>
                </section>
            )}
        </>
    );
};

export default Search;
