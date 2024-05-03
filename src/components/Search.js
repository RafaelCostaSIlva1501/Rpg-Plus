import React from "react";
import Articles from "./Articles";
import infos from "./dados";

const Search = () => {
    return (
        <>
            <section className="search-modal">
                <section className="search-input">
                    <input></input>
                </section>
                <section className="search-content">
                    {infos.map((info, index) => (
                        <Articles
                            key={index}
                            background={info.background}
                            title={info.title}
                            ep={info.ep}
                        />
                    ))}
                </section>
            </section>
        </>
    );
};

export default Search;
